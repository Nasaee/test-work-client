import { fetchUsers } from '@/utils/actions';
import { User } from '@/utils/types';
import { create } from 'zustand';

interface AppContext {
  users: User[];
  fetchUsers: () => Promise<void>;
}

export const useAppContext = create<AppContext>((set) => ({
  users: [],
  fetchUsers: async () => {
    const users = await fetchUsers();
    set({ users });
  },
}));
