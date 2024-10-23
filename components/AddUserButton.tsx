'use client';

import { createUser, getGenders } from '@/utils/actions';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { SubmitButton } from './CustomButton';
import { useFormState } from 'react-dom';
import CustomInput from './InputCustom';
import SelectInput from './SelectInput';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { PlusIcon } from '@radix-ui/react-icons';
import { CrateUserState } from '@/utils/types';
import { useAppContext } from '@/store/store';

const initialState: CrateUserState = {
  message: '',
};

export default function AddUserButton() {
  const [state, formAction] = useFormState(createUser, initialState);
  const [openDialog, setOpenDialog] = useState(false);
  const { toast } = useToast();
  const { genders, fetchUsers } = useAppContext();

  useEffect(() => {
    if (state.message && state.message !== 'User already exists') {
      toast({ description: state.message });
      setOpenDialog(false);
      fetchUsers();
    }

    if (state.message === 'User already exists') {
      toast({ description: state.message, variant: 'destructive' });
    }
  }, [state]);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger className='flex items-center gap-2 justify-center w-full bg-primary p-2 rounded-md text-white text-lg font-semibold tracking-wider'>
        <span>Add New User</span>
        <PlusIcon className='w-5 h-5' />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className='flex flex-col gap-4'>
            <CustomInput
              label='Your name'
              name='name'
              type='text'
              capitalize={true}
            />
            <CustomInput
              label='Your last name'
              name='lastName'
              type='text'
              capitalize={true}
            />
            <CustomInput
              label='Your nick name'
              name='nickName'
              type='text'
              capitalize={true}
            />
            <div className='flex items-center gap-4'>
              <CustomInput label='Birthday' name='birthDay' type='date' />
              <SelectInput name='genderId' label='Gender' options={genders} />
            </div>
            <SubmitButton text='Submit' />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
