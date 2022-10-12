import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="text-white bg-black  body-font">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex items-center md:justify-start justify-center ">
                            <Image src="/dfdfd 2.png" width="250px" height="90px" layout="fixed" alt="hero" />
                        </a>
                        <p class="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac a tempor a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac a tempor a.</p>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="font-bold tracking-widest text-sm mb-3">NETWORK</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="">Smart Link</a>
                                </li>
                                <li>
                                    <a class="">CPA Offers</a>
                                </li>
                              
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="font-bold tracking-widest text-sm mb-3">ADVERTISER</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="">Advertisers</a>
                                </li>
                                <li>
                                    <a class="">Agencies</a>
                                </li>
                                <li>
                                    <a class="">Product</a>
                                </li>
                              
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="font-bold  tracking-widest text-sm mb-3">PUBLISHERS</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="">Services</a>
                                </li>
                                <li>
                                    <a class="">Contest</a>
                                </li>
                                <li>
                                    <a class="">Leadgen</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="font-bold tracking-widest text-sm mb-3">NEWSFEED</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="">Blog</a>
                                </li>
                                <li>
                                    <a class="">Offers</a>
                                </li>
                                <li>
                                    <a class="">Affiliate Tips</a>
                                </li>
                                <li>
                                    <a class="">FAQ</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="font-bold tracking-widest text-sm mb-3">COMPANY</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="">About us</a>
                                </li>
                                <li>
                                    <a class="">Our partners</a>
                                </li>
                                <li>
                                    <a class="">Contact us</a>
                                </li>
                                <li>
                                    <a class="">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                    </div>

                </div>

                {/* <div class="bg-black text-white">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-sm text-center sm:text-left">
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class=" ml-1" target="_blank">@knyttneve</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a class="">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 ">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-3 ">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>

                    </div>

                </div> */}


                <div className='border border-solid text-base-300 lg:max-w-64'></div>
                {/* <div class="bg-black text-white">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-sm text-center sm:text-left">©2022 www.topclientoffer.com. All rights reserved.
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a class="">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 ">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-3 ">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                        
                    </div>
                    
                </div> */}
                <div className='flex py-8 justify-center items-center  sm:flex-col gap-4'>
                    <div className='flex items-start gap-4'>
                        <h2>©2022 www.topclientoffer.com. All rights reserved.</h2>
                    </div>
                    <div className='flex sm:flex-col justify-between items-center  gap-4'>
                        <Link href={`/home`}>Terms and Conditions (Affiliates) </Link>
                        <Link href={`/home`}>Advertiser Terms & Conditions</Link>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer