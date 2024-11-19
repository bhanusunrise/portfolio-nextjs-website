import { PAGE_BASE_URL } from '@/app/lib/contants'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return(
        <>
            <nav className="bg-gray-800">
              <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                          <Link
                           href={PAGE_BASE_URL + "home"} 
                           className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                           aria-current="page"
                          >
                            Home
                         </Link>
                          <Link
                           href={PAGE_BASE_URL + "about_me"} 
                           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                         >
                           About Me
                          </Link>
                         <Link
                            href={PAGE_BASE_URL + "projects"} 
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                                        Projects
                        </Link>
                         <Link
                           href={PAGE_BASE_URL + "achievements"} 
                           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                         >Achievements
                         </Link>
                         <Link
                           href={PAGE_BASE_URL + "contact_me"} 
                           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                           Contact Me
                         </Link>
                       </div>
                      </div>
                   </div>
                  </div>
               </div>

               {/* Mobile menu */}
               <div className="sm:hidden" id="mobile-menu">
                 <div className="space-y-1 px-2 pb-3 pt-2">
                   <Link
                      href="#"
                      className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                      aria-current="page"
                   >
                     Home
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      About Me
                   </Link>
                    <Link
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Projects
                    </Link>
                    <Link
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Achievements
                   </Link>
                    <Link
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                 >
                     Contact Me
                    </Link>
                  </div>
               </div>
             </nav>

        </>
    )
}
