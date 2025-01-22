import { google } from "googleapis";
import { config } from "../conf/conf";

const SCOPES = config.googleScopes;
const SHEET_ID = config.googleSheetId;
const SHEET_RANGE = config.googleSheetRange;

export const getGoogleSheetData = async () => {

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: config.serviceAccountPath,
            scopes: [SCOPES]
        });
    
        const client = await auth.getClient();
        const sheets = google.sheets({
            version: 'v4',
            auth: client
        })
        try {
            const result = await sheets.spreadsheets.values.get({
                spreadsheetId: SHEET_ID,
                range: SHEET_RANGE 
            })
    
            const numRows = result.data.values ? result.data.values.length : 0;
            console.log(`${numRows} rows retrieved.`);
    
            return result.data.values;
    
        } catch (error) {
            console.log("Error fetching data :: getGoogleSheetData :: internal try", error);
            throw error;
        }
    } catch (error) {
        console.log("Error fetching data :: getGoogleSheetData :: outer try", error);
        throw error;
    }

}