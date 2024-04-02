import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID } from "appwrite";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount)
      console.log("APPWRITE :: API.TS :: CREATEUSER :: NO NEW ACCOUNT CREATED");

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log("APPWRITE :: API.TS :: CREATEUSER :: ", error);
  }
}

type User = {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  username?: string;
};

export async function saveUserToDB(user: User) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.log("APPWRITE :: API.TS :: SAVEUSERTODB", error);
  }
}

export async function signInAccount(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );

    return session;
  } catch (error) {
    console.log("APPWRITE :: API.TS :: SIGNINACCOUNT :: ", error);
  }
}

export async function getAccount() {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount)
      console.log("APPWRITE :: API.TS :: FAILED TO GET USER");

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId
    );

    if (!currentUser) console.log("APPWRITE :: API.TS :: NO CURRENT USER");

    return currentUser.documents[0];
  } catch (error) {
    console.log("APPWRITE :: API.TS :: GETCURRENTUSER :: ", error);
  }
}

export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.log("APPWRITE :: API.TS :: SIGNOUTACCOUNT :: ", error);
  }
}
