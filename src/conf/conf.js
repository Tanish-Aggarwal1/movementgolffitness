const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    googleScopes: String(import.meta.env.VITE_GOOGLE_SCOPES),
    googleSheetId: String(import.meta.env.VITE_GOOGLE_SHEET_ID),
    googleSheetRange: String(import.meta.env.VITE_GOOGLE_SHEET_RANGE),
    serviceAccountPath: String(import.meta.env.VITE_GOOGLE_APPLICATION_CREDENTIALS),
}

export default conf