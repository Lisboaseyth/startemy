import { User } from "./User";

export interface Refresh {
  message: string;
  user: User;
  tokens: {
    access: string;
    refresh: string;
  }
}