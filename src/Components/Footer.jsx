import React from 'react'
import { MdSlowMotionVideo } from "react-icons/md";

const Footer = () => {
  return (
   

<footer class="bg-white rounded-lg shadow dark:bg-gray-600 m-4">
<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
    <a href="#" className="flex items-start tracking-wide no-underline 
    hover:no-underline bg-gradient-to-tr from-pink-200 to-sky-200 text-2xl font-secondary">
    <MdSlowMotionVideo className="h-8 w-8 mt-0" />
    DCloud
    </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-100 sm:mx-auto dark:border-gray-100 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">DCloud™</a>. All Rights Reserved.</span>
</div>
</footer>


  )
}

export default Footer