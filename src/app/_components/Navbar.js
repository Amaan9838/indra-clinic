'use client';
import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 bg-slate-50">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto">
        {/* Logo */}
        <div className="md:col-span-3">
          <Link 
            href="/" 
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" 
            aria-label="Preline"
          >
           Indra Hospital
          </Link>
        </div>

        {/* Button Group */}
        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          {/* <button 
            type="button" 
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
          >
            Sign in
          </button> */}
          <button 
            type="button" 
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
          >
            Book an Appointment
          </button>

          <div className="md:hidden">
            <button 
              type="button" 
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
              aria-expanded={isNavOpen}
              // aria-label="Toggle navigation"
            >
              {isNavOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div 
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <Link 
              href="#" 
              className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 "
            >
              Home
            </Link>
            <Link 
              href="#" 
              className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 "
            >
              Services
            </Link>
            <Link 
              href="#" 
              className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 "
            >
              Doctors
            </Link>
            <Link 
              href="#" 
              className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 "
            >
              Careers
            </Link>
            <Link 
              href="#" 
              className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}