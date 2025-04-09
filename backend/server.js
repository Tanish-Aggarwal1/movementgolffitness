import dotenv from "dotenv";
dotenv.config()
import express from "express";
import { google } from "googleapis";
import cors from "cors";
// import something from './movementgolffitness-f40e0596ee82.json'

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json());

const SCOPES = process.env.SCOPES;
const SHEET_ID = process.env.SHEET_ID;
const SHEET_RANGE = 'Golf - monthly measures!A1:R23';

const auth = new google.auth.GoogleAuth({
 keyFile: './movementgolffitness-f40e0596ee82.json',
  scopes: [SCOPES],
});

app.get("/api/sheet-data", async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
    });

    res.json(response.data.values);
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
