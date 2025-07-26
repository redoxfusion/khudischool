import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Parse the JSON data from the request
    const formData = await request.json()
    
    // Extract form fields
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message
    } = formData

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Setup Google Auth for Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare data for Google Sheet
    const rowData = [
      `${firstName} ${lastName}`, // Full Name
      email,
      phone || 'Not provided',
      subject,
      message,
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi' }), // Timestamp
      'Pending' // Status
    ]

    // Add data to Google Sheet
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_CONTACT_ID, // New environment variable
        range: 'A1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [rowData],
        },
      })
    } catch (sheetsError) {
      console.error('Google Sheets error:', sheetsError)
      return NextResponse.json(
        { success: false, message: 'Failed to save contact message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Your message has been sent successfully! We will get back to you soon.'
    })

  } catch (error) {
    console.error('Contact API route error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}