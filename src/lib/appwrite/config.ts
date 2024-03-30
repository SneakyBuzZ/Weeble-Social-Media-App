import { Account, Avatars, Client, Databases, Storage } from "appwrite"

 export const appwriteConfig = {
    projectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteUrl  : String(import.meta.env.VITE_APPWRITE_URL)
 }

 export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.appwriteUrl);

 export const account = new Account(client);
 export const databases = new Databases(client);
 export const storage = new Storage(client);
 export const avatars = new Avatars(client);