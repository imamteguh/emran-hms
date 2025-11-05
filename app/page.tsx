import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl text-center font-bold">
            Welcome to <br/>
            <span className="text-blue-400 text-5xl md:text-6xl">Emran HMS</span>
          </h1>
        </div>

        <div className="text-center max-w-xl flex flex-col items-center justify-center">
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quis distinctio 
            dignissimos expedita molestias laudantium asperiores! Necessitatibus fugiat laborum voluptas
          </p>

          <div className="flex gap-4">
            {
              userId 
              ? <></> 
              : <>
                <Link href="/sign-up">
                  <Button className="md:text-base font-light">New Patient</Button>
                </Link>

                <Link href="/sign-in">
                  <Button 
                    variant="outline"
                    className="md:text-base hover:text-blue-600 underline">Login to account</Button>
                </Link>
              </>
            }
          </div>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-center text-sm">
          &copy; 2025 Emran Hospital Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
