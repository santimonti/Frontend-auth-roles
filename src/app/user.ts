export interface role {
  _id: string;
  name: string;
}

export interface User {
  createdAt: string;
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  roles: role[];
}
