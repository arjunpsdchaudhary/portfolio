import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

    <nav className='w-full bg-red-500 h-10  flex justify-around '>

        <div className='flex justify-center gap-20'>
            <Link href={"/home"}>home</Link>
            <Link href={"/home"}>About</Link>
            <Link href={"/home"}>Contacts</Link>
            

        </div>
       

    </nav>
    </>
  )
}

export default page