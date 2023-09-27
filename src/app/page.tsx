import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export default async function Home() {
  const {userId} = await auth();
  const isAuth = !!userId;

  return (
    <main className='w-screen min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900'>
      <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <header className='flex items-center'>
            <h1 className='mr-3 text-5xl font-semibold'>Chat with PDFInsight</h1>
            <UserButton afterSignOutUrl='/'/>
          </header>

          <div className="flex mt-2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>

          <p className='max-w-xl mt-1 text-lg text-slate-600'>
            Experience PDFs in a new light with the power of AI.
          </p>
          <div className='w-full mt-4'>
            {isAuth ? (<h1>File Upload</h1>) : 
            (<Link href='/sign-in'>
              <Button>Log in to get started
                <LogIn className='w-4 h-4 ml-2'/>
              </Button>
            </Link>)}
          </div>

        </div>
      </section>
    </main>
  )
}
