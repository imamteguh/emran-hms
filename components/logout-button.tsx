"use client";

import { LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { useClerk } from '@clerk/nextjs';

export const LogoutButton = () => {

  const { signOut } = useClerk();

  return (
    <Button
      variant={`outline`}
      className='w-fit bottom-0 gap-2 px-0 md:px-4'
      onClick={() => signOut({ redirectUrl: "/sign-in" })}
    >
      <LogOut />
      <span className='hidden lg:block'>LogOut</span>
    </Button>
  )
}
