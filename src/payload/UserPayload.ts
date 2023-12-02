export interface UserPayload {
  users: User[];
}

interface User {
  email: string;
  password: string;
  username: string;
}
