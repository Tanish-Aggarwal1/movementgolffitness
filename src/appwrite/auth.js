import { Client, Account, OAuthProvider } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;
  session;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createSession() {
    try {
       
      await this.account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:5174/success",
        "http://localhost:3000/failed"
      );

      return await this.getSession();

    } catch (error) {
      console.error("Appwrite Error :: createSession", error);
      return null;
    }
  }

  async getSession() {
    try {
      const session = await this.account.get();
      this.session = session;
      return session;
    } catch (error) {
      console.error("Appwrite Error :: getSession", error);
      return null;
    }
  }
}

const authService = new AuthService();
export default authService;