import React from 'react';
import Logo from '../assets/logo.png';
import { Link} from "react-router-dom";

export const Footer = () => {
  return (
        
<footer class="bg-white  shadow dark:bg-black">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Link to="/" class="flex items-center mb-4 sm:mb-0">
                <img src={Logo} class="h-8 mr-3" alt="Papachio's Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Papachristos Ioannis</span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://github.com/JohnPapachristos" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/john-papachristos/" class="mr-4 hover:underline md:mr-6">Linkedin</a>
                </li>
                <li>
                    <a href="https://portofolio-john-papachristos.netlify.app/" class="mr-4 hover:underline md:mr-6 ">Portofolio</a>
                </li>
                <li>
                    <a href="https://task-management-papachristos.netlify.app/" class="hover:underline">Also check</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/JohnPapachristos" class="hover:underline">Papachristos Ioannis</a>. All Rights Reserved.</span>
    </div>
</footer>

  )


}

export default Footer;