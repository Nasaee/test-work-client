'use server';

import { revalidatePath } from 'next/cache';
import { api } from './api';
import { AxiosError } from 'axios';
import { Gender } from './types';

export const getGenders = async (): Promise<Gender[]> => {
  try {
    const { data } = await api.get('/gender');
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createUser = async (state: any, formData: FormData) => {
  const name = formData.get('name') as string;
  const lastName = formData.get('lastName') as string;
  const nickName = formData.get('nickName') as string;
  const birthDay = formData.get('birthDay') as string;
  const genderId = formData.get('genderId') as string;

  if (!name || !lastName || !nickName || !birthDay || !genderId) {
    return { message: 'All fields are required' };
  }

  try {
    await api.post('/user', {
      name,
      lastName,
      nickName,
      birthDay: new Date(birthDay).toISOString(),
      genderId: genderId,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.response?.data?.message || 'Something went wrong',
      };
    }
    return { message: 'An unexpected error occurred' };
  }
  revalidatePath('/');
  return { message: 'User Created' };
};
