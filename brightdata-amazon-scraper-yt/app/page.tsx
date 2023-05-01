import React from 'react';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';


function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <div>
                <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20 " />
            </div>
            <h1 className='text-3xl mt-2 text-center text-black font-bold mb-5'>Welcome to the Amazon Web Scraper</h1>
            <h2 className='text-lg italic text-center text-black/50'>Here you can get all you want</h2>
            <h3 className='text-lg text-center italic text-black/50'>
                https://amazon.com
            </h3>
        </div>
    </div>
  )
}

export default HomePage;