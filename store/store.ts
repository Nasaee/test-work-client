import { fetchUsers, getGenders } from '@/utils/actions';
import { Gender, User } from '@/utils/types';
import { create } from 'zustand';

interface AppContext {
  users: User[];
  fetchUsers: () => Promise<void>;
  genders: Gender[];
  fetchGenders: () => Promise<void>;
}

export const useAppContext = create<AppContext>((set) => ({
  users: [],
  fetchUsers: async () => {
    const users = await fetchUsers();
    set({ users });
  },
  genders: [],
  fetchGenders: async () => {
    const genders = await getGenders();
    set({ genders });
  },
}));
