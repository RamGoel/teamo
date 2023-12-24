import Navbar from '../components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/strings'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='mt-20'>
        <p className='text-center text-sm font-semibold shadow-md bg-white border-[1px] border-gray-200 w-fit mx-auto p-2 px-5 rounded-full'>{APP_NAME} is now public!</p>
        <h1 className='text-7xl text-center font-bold mb-10 w-2/3 mx-auto'>Read your docs <span className='text-violet-700'>quickly</span> in seconds.</h1>
        <p className='text-lg text-center w-1/2 mx-auto mt-5 mb-5'>Dochat helps you chat with your PDF files easily. Just upload a PDF file and get started in less than 1 minute. </p>
        <div className='flex items-center justify-center'>
          <Button asChild={true} className='' size={'lg'}>
            <div>
              <Link href={'/dashboard'}>Get Started</Link> <ArrowRight size={18} className='ml-3' />
            </div>
          </Button>
          <Button variant={'outline'} className='ml-3' size={'lg'}>
            Read More
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}
