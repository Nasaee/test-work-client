'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <Button className='mt-5 text-base tracking-wider' disabled={pending}>
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
