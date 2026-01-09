<template>
<footer class="text-gray-600 bg-[#f2f2f2] py-3 px-3 md:px-5">
    <div class="bg-[#f8f4f4] px-3 py-5 md:px-14 md:py-10 rounded-2xl shadow-md">
        <div class="md:grid md:grid-cols-6 md:gap-4 md:pb-32 mb-5 border-b-1 border-gray-300">
            <div class="col-span-3 mb-10">
            <div class="flex justify-center md:justify-start mb-4">
                <img src="/KRACK-ROBOTICS-LOGO.png" alt="KRACK ROBOTICS" class="h-28 w-auto mr-4 select-none logo">
            </div>
            <p class="py-10 md:max-w-xl text-center md:text-left">
                Krack Robotics is a leading provider of innovative robotic solutions, dedicated to enhancing efficiency and productivity across various industries. Our cutting-edge technology and expert team are committed to delivering exceptional results for our clients.
            </p>
            <ul class="flex justify-center md:justify-start space-x-4 mt-2">
                <li class="bg-[#565656] rounded-full p-2 hover:bg-[#dc2223] transition-colors shadow-md mb-2">
                <NuxtLink to="" class="flex items-center justify-center cursor-pointer">
                    <Icon name="uil:instagram" class="text-2xl text-white block" />
                </NuxtLink>
                </li>
                <li class="bg-[#565656] rounded-full p-2 hover:bg-[#dc2223] transition-colors shadow-md mb-2">
                <NuxtLink to="" class="flex items-center justify-center cursor-pointer">
                    <Icon name="uil:facebook" class="text-2xl text-white block" />
                </NuxtLink>
                </li>
                <li class="bg-[#565656] rounded-full p-2 hover:bg-[#dc2223] transition-colors shadow-md mb-2">
                <NuxtLink to="" class="flex items-center justify-center cursor-pointer">
                    <Icon name="uil:youtube" class="text-2xl text-white block" />
                </NuxtLink>
                </li> 

                <li class="bg-[#565656] rounded-full p-2 hover:bg-[#dc2223] transition-colors shadow-md mb-2">
                <NuxtLink to="" class="flex items-center justify-center cursor-pointer">
                    <Icon name="uil:linkedin" class="text-2xl text-white block" />
                </NuxtLink>
                </li>
            </ul>
            </div>

            <div class="mb-10 flex flex-col items-center text-center md:text-left md:block">
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
                <li>
                <NuxtLink to="/" class="hover:text-[#dc2223] transition-colors">Home</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/products" class="hover:text-[#dc2223] transition-colors">Products</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/about" class="hover:text-[#dc2223] transition-colors">About Us</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/contact" class="hover:text-[#dc2223] transition-colors">Contact Us</NuxtLink>
                </li>
            </ul>
            </div>

            <div class="mb-10 flex flex-col items-center text-center md:text-left md:block">
            <h3 class="text-lg font-semibold mb-4">Products</h3>
            <ul class="space-y-2">
                <li>
                <NuxtLink to="/" class="hover:text-[#dc2223] transition-colors">Home</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/products" class="hover:text-[#dc2223] transition-colors">Products</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/about" class="hover:text-[#dc2223] transition-colors">About Us</NuxtLink>
                </li>
                <li>
                <NuxtLink to="/contact" class="hover:text-[#dc2223] transition-colors">Contact Us</NuxtLink>
                </li>
            </ul>
            </div>

            <div class="mb-10 flex flex-col items-center text-center md:text-left md:block">
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-2">
                <li class="mb-2">
                <div class=" flex items-center"><spam class="mr-2 bg-[#565656] shadow-md rounded-full p-2"><Icon name="mdi:email" class="text-xl text-white block" /></spam> <p class="text-gray-600"><NuxtLink to="mailto:info@kreckrobotics.com" class="hover:text-[#dc2223] transition-colors">info@kreckrobotics.com</NuxtLink></p></div>
                </li>
                <li class="mb-2">
                <div class=" flex items-center"><spam class="mr-2 bg-[#565656] shadow-md rounded-full p-2"><Icon name="mdi:phone" class="text-xl text-white block" /></spam> <p class="text-gray-600"><NuxtLink to="tel:75187 57518" class="hover:text-[#dc2223] transition-colors">+91 75187 57518</NuxtLink></p></div>
                </li>
                <li class="mb-2">
                <div class=" flex items-start"><spam class="mr-2 bg-[#565656] shadow-md rounded-full p-2 inline-block"><Icon name="mdi:map-marker" class="text-xl text-white block" /></spam> <p class="text-gray-600">410 RK world tower 
Near shital park chowk
150ft ring road rajkot
360006</p></div>
                </li>
            </ul>
            </div>
        </div>

        <div class="md:grid md:grid-cols-2 md:gap-4 text-sm pt-5">
            <div class="">
            <p class="text-center md:text-left">&copy; 2023 – {{ new Date().getFullYear() }} KRECK ROBOTICS. ALL RIGHTS RESERVED.</p>
            </div>
            <div class="">
            <ul class="flex justify-center md:justify-end space-x-4">
                <li class="text-gray-600 hover:text-[#dc2223] transition-colors">
                <NuxtLink to="/privacy-policy" class="text-center md:text-right  underline underline-offset-1">Privacy Policy</NuxtLink>
                </li>
                <li class="text-gray-600 hover:text-[#dc2223] transition-colors">
                <NuxtLink to="/terms-of-service" class="text-center md:text-right underline underline-offset-1">Terms of Service</NuxtLink>
                </li>
                <!-- <li>
                <NuxtLink to="/cookie-policy">Cookie Policy</a>
                </li> -->
            </ul>
            </div>
        </div>
    </div>
</footer>
</template>