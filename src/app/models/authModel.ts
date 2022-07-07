export interface AuthMainModel {
  user: AuthUserModel;
}

export interface AuthUserModel {
  email: string;
  username: string;
  bio: null;
  image: null;
  token: string;
}
