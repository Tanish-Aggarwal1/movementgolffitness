import { Client, Databases, ID } from 'appwrite';
import conf from "../conf/conf";

class DatabaseService {
    constructor() {
        this.databaseId = conf.appwriteDatabaseId;
        this.collectionId = conf.appwriteCollectionId;
    
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createCollection(name) {
        try {
            const response = await this.databases.createCollection(this.databaseId, this.collectionId, name);
            console.log('Collection created successfully:', response);
        } catch (error) {
            console.error('Error creating collection:', error);
        }
    }

    async addDocument(data) {
        try {
            
            const response = await this.databases.createDocument(this.databaseId, this.collectionId, ID.unique(), data);
            console.log('Document added successfully:', response);
        } catch (error) {
            console.error('Error adding document:', error);
        }
    }
}

// Example usage
const databaseService = new DatabaseService();
const databaseId = conf.appwriteDatabaseId;
const collectionId = conf.appwriteCollectionId;
// const documentId = 'YOUR_DOCUMENT_ID';
// const data = {
//     key: 'value'
// };

// databaseService.createCollection(databaseId, collectionId, 'My Collection');
// databaseService.addDocument(databaseId, collectionId, documentId, data);

export default databaseService;