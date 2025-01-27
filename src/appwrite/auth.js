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
      await this.account.createOAuth2Session(     //TODO: does not return anything, only redirection and creating session + storing in appwrite
        OAuthProvider.Google,
        "http://localhost:5173/success",
        "http://localhost:5173/failed"
      );

      return await this.getSession();   //TODO: this is not needed here, ideally this getSession should be called from Home page
    } catch (error) {
      console.error("Appwrite Error :: createSession", error);
      return null;
    }
  }

  async getSession() {
    try {
      const session = await this.account.get();   //TODO: gets the session from appwrite, should be called in useEffect in Home page
      this.session = session;
      return session;
    } catch (error) {
      console.error("Appwrite Error :: getSession", error);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSession("current");  //TODO: deleteSessions() if all sessions to be deleted
      console.log("Logout successful");
    } catch (error) {
      console.error("Appwrite Error :: logout", error);
    }
  }
}

const authService = new AuthService();
export default authService;
