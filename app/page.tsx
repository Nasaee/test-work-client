'use client';

import AddUserButton from '@/components/AddUserButton';
import Container from '@/components/global/Container';
import UsersTable from '@/components/UserTable';
import { useAppContext } from '@/store/store';
import { useEffect } from 'react';

function Home() {
  const { fetchUsers, fetchGenders } = useAppContext();
  useEffect(() => {
    fetchUsers();
    fetchGenders();
  }, []);
  return (
    <Container className='p-12'>
      <section className='flex flex-col gap-3 bg-gray-100 px-8 py-12'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-3 text-gray-900'>
          CRUD USERS
        </h1>
        <AddUserButton />
        <UsersTable />
      </section>
    </Container>
  );
}
export default Home;
