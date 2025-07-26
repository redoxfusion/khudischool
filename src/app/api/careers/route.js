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

    // Setup Google Auth for Sheets only
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Get file info for the sheet
    let resumeInfo = 'No file uploaded'
    if (resumeFile && resumeFile.size > 0) {
      resumeInfo = `File: ${resumeFile.name} (${(resumeFile.size / 1024 / 1024).toFixed(2)} MB) - Please request via email`
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
      message: `${type === 'job' ? 'Job' : 'Volunteer'} application submitted successfully! ${resumeFile ? 'Please email your resume to info@khudiinstitute.com for processing.' : ''}`
    })

  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}