import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CustomInput from './InputCustom';
import { SubmitButton } from '../CustomButton';
import { useAppContext } from '@/store/store';
import SelectInput from './SelectInput';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';
import { User, UserState } from '@/utils/types';
import { useFormState } from 'react-dom';
import { updateUser } from '@/utils/actions';
import { useEffect, useState } from 'react';
import { formatDate } from '@/utils/date';

const initialState: UserState = {
  message: '',
};

function UpdateUserForm({
  user,
  onClose,
}: {
  user: User;
  onClose: () => void;
}) {
  const [state, formAction] = useFormState(updateUser, initialState);
  const { genders, fetchUsers } = useAppContext();
  const [defaultUserValue, setDefaultUserValue] = useState<User>(user);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'User already exists') {
      toast({ description: state.message });
      onClose();
      fetchUsers();
    }

    if (state.message === 'User already exists') {
      toast({ description: state.message, variant: 'destructive' });
    }
  }, [state]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDefaultUserValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={!!user} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className='flex flex-col gap-4'>
            <input
              type='text'
              name='id'
              className='hidden'
              value={defaultUserValue.id}
            />
            <CustomInput
              label='Your name'
              name='name'
              type='text'
              value={defaultUserValue.name}
              onChange={onInputChange}
              capitalize={true}
            />
            <CustomInput
              label='Your last name'
              name='lastName'
              type='text'
              value={defaultUserValue.lastName}
              onChange={onInputChange}
              capitalize={true}
            />
            <CustomInput
              label='Your nick name'
              name='nickName'
              type='text'
              value={defaultUserValue.nickName}
              onChange={onInputChange}
              capitalize={true}
            />
            <div className='flex items-center gap-4'>
              <CustomInput
                label='Birthday'
                name='birthDay'
                type='date'
                value={formatDate(defaultUserValue.birthDay, 'YYYY-MM-DD')}
                onChange={onInputChange}
              />
              <SelectInput
                name='genderId'
                label='Gender'
                options={genders}
                defaultValue={defaultUserValue.genderId}
              />
            </div>
            <div className='flex justify-center mt-4 gap-4 items-center'>
              <SubmitButton text='Update' className='text-sm tracking-wider' />
              <Button
                type='button'
                onClick={onClose}
                className='text-sm tracking-wider bg-red-400 hover:bg-red-500'
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export default UpdateUserForm;
