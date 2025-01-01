'use client';

import { useState } from 'react';
import { PAGE_BASE_URL } from '@/app/lib/contants';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-gray-800 fixed top-0 w-full z-50 md:rounded-b-full opacity-40 hover:opacity-100">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-32 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:justify-center">
  <div className="hidden sm:ml-6 sm:block">
    <div className="flex space-x-4">
      <Link
        href={PAGE_BASE_URL + 'home'}
        className="rounded-md bg-gray-900 px-3 py-2 text-xl font-medium text-white"
        aria-current="page"
      >
        Home
      </Link>
      <Link
        href={PAGE_BASE_URL + 'about_me'}
        className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        About Me
      </Link>
      <Link
        href={PAGE_BASE_URL + 'projects'}
        className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Projects
      </Link>
      <Link
        href={PAGE_BASE_URL + 'achievements'}
        className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Achievements
      </Link>
      <Link
        href={PAGE_BASE_URL + 'contact_me'}
        className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Contact Me
      </Link>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Mobile menu with animation */}
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out sm:hidden`}
          style={{
            maxHeight: isMenuOpen ? '300px' : '0',
          }}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href={PAGE_BASE_URL + 'home'}
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href={PAGE_BASE_URL + 'about_me'}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About Me
            </Link>
            <Link
              href={PAGE_BASE_URL + 'projects'}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href={PAGE_BASE_URL + 'achievements'}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Achievements
            </Link>
            <Link
              href={PAGE_BASE_URL + 'contact_me'}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
