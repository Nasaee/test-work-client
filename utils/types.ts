export interface Gender {
  id: string;
  gender: string;
}

export interface CrateUserState {
  message: string;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  nickName: string;
  birthDay: Date;
  genderId: string;
  gender: Gender;
}
