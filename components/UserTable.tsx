'use client';

import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { calculateAge, formatDate } from '@/utils/date';
import { Button } from './ui/button';
import { Pencil } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/store/store';
import { User } from '@/utils/types';
import { ButtonDelete } from './CustomButton';
import UpdateUserForm from './form/UpdateUserForm';

function UsersTable() {
  const { users, fetchUsers } = useAppContext();
  const [selecteUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUsers() {
      await fetchUsers();
    }
    getUsers();
  }, []);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='pl-5'>#</TableHead>
            <TableHead className='font-medium'>Name</TableHead>
            <TableHead className='font-medium'>Last name</TableHead>
            <TableHead className='font-medium'>Nick name</TableHead>
            <TableHead className='font-medium'>Date of birth</TableHead>
            <TableHead className='font-medium'>Age (years)</TableHead>
            <TableHead className='font-medium'>Gender</TableHead>
            <TableHead className='font-medium'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={user.id}
              className={cn(
                'text-gray-900 hover:bg-gray-300 hover:text-gray-950',
                index % 2 === 0 && 'bg-gray-200'
              )}
            >
              <TableCell className='font-medium pl-5'>{index + 1}</TableCell>
              <TableCell className='font-medium'>{user.name}</TableCell>
              <TableCell className='font-medium'>{user.lastName}</TableCell>
              <TableCell className='font-medium'>{user.nickName}</TableCell>
              <TableCell className='font-medium'>
                {formatDate(user.birthDay)}
              </TableCell>
              <TableCell className='font-medium'>
                {calculateAge(user.birthDay)}
              </TableCell>
              <TableCell className='font-medium'>
                {user.gender.gender}
              </TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <Button
                    className='bg-green-500 hover:bg-green-600'
                    onClick={() => setSelectedUser(user)}
                  >
                    <Pencil />
                  </Button>

                  <ButtonDelete id={user.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selecteUser && (
        <UpdateUserForm
          user={selecteUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}
export default UsersTable;
