import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: SCOPES,
});

export async function POST(req) {
  const body = await req.json();

  const {
    formType,
    learnerName,
    parentName,
    email,
    contact,
    gender,
    age,
    level,
    facilities,
  } = body;

  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });

  // Select appropriate Sheet ID based on form type
  const SHEET_ID =
    formType === "homeschool"
      ? process.env.HOMESCHOOL_SHEET_ID
      : process.env.REGULAR_SHEET_ID;

  try {
    let values = [];
    let range = "Sheet1!A1";

    if (formType === "regular") {
      values = [
        [learnerName, parentName, email, contact, gender, age, level, new Date().toISOString()],
      ];
    } else if (formType === "homeschool") {
      values = [
        [learnerName, email, contact, facilities, new Date().toISOString()],
      ];
    } else {
      return new Response("Invalid form type", { status: 400 });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return Response.json({ success: true, message: "Application submitted" });
  } catch (error) {
    console.error("Google Sheets API Error:", error);
    return new Response("Error submitting application", { status: 500 });
  }
}
