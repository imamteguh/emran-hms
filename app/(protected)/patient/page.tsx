import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const PetientDashboard = async () => {

  const user = await currentUser();

  const data = null;

  if (user && !data) {
    redirect("/patient/registration");
  }

  return (
    <div className="py-6 px-3 flex flex-col rounded-xl xl:flex-row gap-6">
      Patient Dashboard
      <UserButton/>
    </div>
  )
}

export default PetientDashboard