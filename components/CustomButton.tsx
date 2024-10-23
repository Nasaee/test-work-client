'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';
import { useAppContext } from '@/store/store';
import { cn } from '@/lib/utils';

export function SubmitButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn('text-base tracking-wider', className)}
      type='submit'
      disabled={pending}
    >
      {pending ? (
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export function ButtonDelete({ id }: { id: string }) {
  const [pending, setPending] = useState(false);
  const { toast } = useToast();
  const { deleteUser, fetchUsers } = useAppContext();

  const onClick = async () => {
    setPending(true);
    try {
      await deleteUser(id);
      await fetchUsers();
      setPending(false);
      toast({ description: 'User Deleted' });
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          message: error.response?.data?.message || 'Something went wrong',
        };
      }
      return { message: 'An unexpected error occurred' };
    }
  };

  return (
    <Button className='bg-red-400 hover:bg-red-500' onClick={onClick}>
      {pending ? (
        <>
          <ReloadIcon className='animate-spin' />
        </>
      ) : (
        <Trash />
      )}
    </Button>
  );
}
