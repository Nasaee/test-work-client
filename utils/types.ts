export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export interface Gender {
  id: string;
  gender: string;
}

export interface UserState {
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
