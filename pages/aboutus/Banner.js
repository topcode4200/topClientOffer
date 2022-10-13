import React from 'react'
import Image from 'next/image'

const banner = () => {
    return (
        <div>
            {/* main banner */}
            <header style={{backgroundImage: "url('/about banner top client offer.png')",width:"full",height:"500px"}} class=" text-white font-bold bg-no-repeat bg-cover">
            {/* <Image src="/png-sere 2.png" width="200px" height="50px" layout="fixed" alt="hero" /> */}
                <div class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex items-center justify-center mb-4 md:mb-0">
                    <Image src="/png-sere 2.png" width="200px" height="50px" layout="fixed" alt="hero" />
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-black-900 uppercase">Home</a>
                        <a class="mr-5 hover:text-black-900 uppercase">About Us </a>
                        <a class="mr-5 hover:text-black-900 uppercase">Affiliate</a>
                        <a class="mr-5 hover:text-black-900 uppercase">ADVERTISER</a>
                        <a class="mr-5 hover:text-black-900 uppercase">NEWS FEED</a>
                    </nav>
                    <div className='flex gap-3'>
                        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0">Login  </button>
                        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0">Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* hero sections  */}
            <section class="text-black-300 body-font">
                <div class="mx-auto flex py-24 md:flex-row flex-col justify-center items-center px-24">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
                        {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-900">Before they sold out
                            <br class="hidden lg:inline-block" />readymade gluten
                        </h1> */}
                        <p class="mb-8 text-2xl leading-9 px-2">
                            Welcome to the world of TopClientOffer. We are one of the leading CPA affiliate networks in the world. Our affiliate managers are well experienced and have wide knowledge on business as well as affiliate marketers. Through our various channels, we will help your business grow and connect you with the highest quality of traffic delivered. Topclientoffer is always ready to share with you our last exclusive offers. In fact, we are here for your business needs. We ensure your constant profit growth with us and help you to become a supper affiliate.We are glad to provide free training for affiliates and payouts weekly, bi- weekly or monthly and it depends on offer. We always prefer to introduce modern and innovative business ideas to fulfill the needs and requirements of our honorable partners. We ensure our partners unique service that will express our creativity,
                            integrity, sincerity and professional attitude.So, if you are looking for an open business we will be an ideal platform for you.
                        </p>

                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        {/* <img class="object-cover object-center rounded" alt="hero" src="../../assets/png-sere 3.png"/> */}
                        <Image src="/png-sere 3.png" width="500px" height="500px" layout="fixed" alt="hero" />
                    </div>
                </div>
            </section>

            {/* <!-- Join Us Section section End  --> */}
            <section class="join-section bg-black text-white py-24">
                <h2 class="text-center lg:text-3xl text-xl  font-extrabold my-10">JOIN US!</h2>
                <div class="flex justify-center items-center text-center gap-20">
                    <div class=" lg:max-w-sm my-10 ">
                        <h2 className='lg:text-5xl text-3xl  font-extrabold '>AFFILIATE</h2>
                        <p className='my-4'>Join Us to get exclusive direct offers & make most out of your traffics.Most converting and
                            highest payout
                            offer in the market.So,Join us today</p>
                        <button className='rounded-md border-0 border-solid px-8 py-3 bg-white text-black text-2xl mt-6 font-bold'>JOIN NOW!</button>

                    </div>
                    <div class="lg:max-w-sm text-center">
                        <h2 className='lg:text-5xl text-3xl font-extrabold text-uppercase'>ADVERTISER</h2>
                        <p className='my-4'>A performance based network of top affiliates which understands your product and deliver it to
                            perfect
                            target audience.</p>
                        <button className='rounded-md border-0 border-solid px-8 py-3 bg-red-500 text-white text-2xl mt-6  font-bold'>SIGN UP!</button>
                    </div>
                </div>
            </section>
            {/* <!-- Join Section section End  --> */}


            {/* newsletter start */}

            <section class="text-white body-fon">
                <div class="container px-12 py-24 mx-auto flex flex-wrap ">
                    <div class="lg:w-2/3 mx-auto ">
                        <div class="flex flex-wrap w-full py-24 px-24  relative mb-4 bg-red-500 rounded-md ">
                            <div class="text-center relative z-10 w-full">
                                <h2 class=" font-bold mb-2 text-4xl text-white">Newsletter</h2>
                                <p class="leading-relaxed font-bold">Stay up to date with our latest news and products.</p>
                                <div className='flex justify-center items-center gap-4'>
                                    <input type="text" class="form-control bg-gray-300 w-full lg:max-w-sm px-12 py-4 border-0 rounded-md my-6" placeholder="Enter your Email...." />
                                    <button type="submit" class=" px-4 py-4 bg-black text-white rounded-md font-bold"  >Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* newsletter end */}




        </div>
    )
}

export default banner