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
                          <a
                           href="#"
                           className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                           aria-current="page"
                          >
                            Home
                         </a>
                          <a
                           href="#"
                           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                         >
                           About Me
                          </a>
                         <a
                            href="#"
                           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                         >
                           Academic Background
                          </a>
                         <a
                            href="#"
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                                        Projects
                        </a>
                         <a
                           href="#"
                           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                         >
                           Extra Curricular Activities
                         </a>
                         <a
                           href="#"
                           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                           Contact Me
                         </a>
                       </div>
                      </div>
                   </div>
                  </div>
               </div>

               {/* Mobile menu */}
               <div className="sm:hidden" id="mobile-menu">
                 <div className="space-y-1 px-2 pb-3 pt-2">
                   <a
                      href="#"
                      className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                      aria-current="page"
                   >
                     Home
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      About Me
                   </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Academic Background
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Extra Curricular Activities
                   </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                 >
                     Contact Me
                    </a>
                  </div>
               </div>
             </nav>

        </>
    )
}
