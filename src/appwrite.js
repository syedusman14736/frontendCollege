import { Client, Databases, TablesDB } from "appwrite";

const client = new Client();

client
    .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
    .setProject("68db793b00275f844526"); // Replace with your Project ID

// Services
export const tablesDB = new TablesDB(client);
export const databases = new Databases(client);
export const ID = new TablesDB(client);

export default client;