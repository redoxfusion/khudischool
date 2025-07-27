import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Parse the FormData from the request
    const formData = await request.formData()
    
    // Extract form fields
    const type = formData.get('type') // "job" or "volunteer"
    const fullName = formData.get('fullName')
    const contact = formData.get('contact')
    const email = formData.get('email')
    const education = formData.get('education')
    const experience = formData.get('experience') || ''
    const whyJoin = formData.get('whyJoin')
    
    // Volunteer-specific fields
    const skills = formData.get('skills') || ''
    const availability = formData.get('availability') || ''
    
    // File upload
    const resumeFile = formData.get('resume')

    // Validate required fields
    if (!type || !fullName || !contact || !email || !education || !whyJoin) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Additional validation for job applications
    if (type === 'job' && (!experience || !resumeFile)) {
      return NextResponse.json(
        { success: false, message: 'Experience and resume are required for job applications' },
        { status: 400 }
      )
    }

    // Additional validation for volunteer applications
    if (type === 'volunteer' && (!skills || !availability)) {
      return NextResponse.json(
        { success: false, message: 'Skills and availability are required for volunteer applications' },
        { status: 400 }
      )
    }

    // Setup Google Auth for both Sheets and Drive
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file'
      ],
    })

    // Setup OAuth2 client for Drive (using your OAuth credentials)
    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const drive = google.drive({ version: 'v3', auth: oauth2Client })

    // Handle file upload to Google Drive
    let resumeInfo = 'No file uploaded'
    let driveFileId = null

    if (resumeFile && resumeFile.size > 0) {
      try {
        // Convert File to Buffer
        const arrayBuffer = await resumeFile.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        
        // Create a readable stream from buffer
        const { Readable } = require('stream')
        const stream = new Readable()
        stream.push(buffer)
        stream.push(null)

        // Generate filename with timestamp and applicant name
        const timestamp = new Date().toISOString().split('T')[0]
        const sanitizedName = fullName.replace(/[^a-zA-Z0-9]/g, '_')
        const fileName = `${type}_${sanitizedName}_${timestamp}_${resumeFile.name}`

        // Upload to Google Drive
        const driveResponse = await drive.files.create({
          requestBody: {
            name: fileName,
            parents: [process.env.GOOGLE_DRIVE_FOLDER_ID], // Optional: specify folder ID
          },
          media: {
            mimeType: resumeFile.type,
            body: stream,
          },
        })

        driveFileId = driveResponse.data.id
        
        // Make file accessible (optional - you might want to keep it private)
        await drive.permissions.create({
          fileId: driveFileId,
          requestBody: {
            role: 'reader',
            type: 'anyone',
          },
        })

        resumeInfo = `Resume uploaded: ${fileName} (Drive ID: ${driveFileId})`
        
      } catch (driveError) {
        console.error('Google Drive upload error:', driveError)
        return NextResponse.json(
          { success: false, message: 'Failed to upload resume to Google Drive' },
          { status: 500 }
        )
      }
    }

    // Prepare data for Google Sheet
    const sheetId = type === 'job'
      ? process.env.GOOGLE_SHEET_JOB_ID
      : process.env.GOOGLE_SHEET_VOLUNTEER_ID

    // Create row data based on application type
    let rowData
    if (type === 'job') {
      rowData = [
        fullName,
        contact,
        email,
        education,
        experience,
        whyJoin,
        resumeInfo,
        driveFileId ? `https://drive.google.com/file/d/${driveFileId}/view` : 'No file',
        new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }),
      ]
    } else {
      // volunteer
      rowData = [
        fullName,
        contact,
        email,
        education,
        experience || 'N/A',
        skills,
        availability,
        whyJoin,
        resumeInfo,
        driveFileId ? `https://drive.google.com/file/d/${driveFileId}/view` : 'No file',
        new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }),
      ]
    }

    // Add data to Google Sheet
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'A1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [rowData],
        },
      })
    } catch (sheetsError) {
      console.error('Google Sheets error:', sheetsError)
      return NextResponse.json(
        { success: false, message: 'Failed to save application data' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `${type === 'job' ? 'Job' : 'Volunteer'} application submitted successfully! ${resumeFile ? 'Resume has been uploaded to our secure storage.' : ''}`,
      driveFileId: driveFileId
    })

  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}