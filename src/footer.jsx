import emailjs from '@emailjs/browser';

function Footer() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_slfcyib', 'template_1y7yi9m', e.target, '2WORZNoluJeTp53Yg')
            .then((result) => {
                alert("Message sent!");
            }, (error) => {
                alert("Failed to send message.");
            });

        e.target.reset();
    };
    return (
        <div href="#contact" id="contact" className="h-145 mt-10 md:h-160 xl:h-185
         bg-gradient-to-b from-[#1A4D4F] to-[#1ABC9C] justify-center items-center block">
            {/* footer navigation */}
            <div className="
            w-screen
            pb-2.5
            justify-center
            md:pt-3

            ">
                <ul className="
            relative
            top-4
            flex justify-center
            gap-1 sm:gap-6 md:gap-2 lg:gap-5 xl:gap-12 2xl:gap-20
            text-lg sm:text-lg md:text-xl lg:text-1xl xl:text-2xl 2xl:text-3xl
            font-montserrat
            ">
                    <li>
                        <a
                            className="
            text-[#1ABC9C]
            hover:bg-[#1ABC9C]
            hover:text-black
            hover:w-10
            px-2 py-1
            rounded-full
            transition-all duration-300
            "
                            href="#summary"

                        >
                            Summary
                        </a>
                    </li>
                    <li><a className="
                text-[#1ABC9C] 
                hover:bg-[#1ABC9C]
            hover:text-black
                hover:w-10
                px-2 py-1
                rounded-full
                transition-all duration-300" href="#skills">Skills</a></li>
                    <li><a className="
                text-[#1ABC9C] 
                hover:bg-[#1ABC9C]
            hover:text-black
                hover:w-10
                px-2 py-1
                rounded-full
                transition-all duration-300" href="#projects">Projects</a></li>
                </ul>
            </div>
            <div className="justify-center items-center text-center pt-10 
            text-xl xl:text-2xl
            text-[rgb(26,188,156)]">
                <h1 id="contact me" >CONTACT ME</h1>
            </div>
            {/* contact info list */}
            <div className="relative h-25 mt-5 xl:text-xl text-black">
                <ul style={{ fontFamily: 'Roboto, sans-serif' }} className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-3">
                    <li id="contact number" className="flex gap-3"><svg className="w-6 h-6" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.914412 0.711352L1.31813 0.611015C1.69644 0.516997 2.10062 0.66894 2.26265 0.966073L2.58504 1.55738C2.72555 1.81506 2.64759 2.11807 2.39229 2.30652L1.68193 2.83094C1.72576 3.14461 1.86133 3.45349 2.08862 3.75758C2.31594 4.06164 2.59982 4.31388 2.94028 4.51428L3.79348 4.29299C4.11688 4.20911 4.46908 4.3055 4.66745 4.53219L5.12957 5.06025C5.36019 5.32374 5.31872 5.68728 5.03255 5.91069L4.72592 6.15012C4.4207 6.38844 3.98477 6.47489 3.58149 6.37707C2.6294 6.14607 1.75404 5.4603 0.955373 4.31977C0.155547 3.17754 -0.126734 2.20845 0.108529 1.41249C0.207529 1.07756 0.514096 0.810839 0.914412 0.711352Z" fill="#1ABC9C" />
                    </svg>
                        <h2>09606892682</h2>
                    </li>
                    <li id="address" className="flex gap-3">
                        <svg className="w-6 h-6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.26777 4.46313L3.92697 4.81561C3.67577 5.07341 3.34986 5.40489 2.94908 5.81009C2.69866 6.06333 2.30135 6.0633 2.05095 5.81003L1.0486 4.79038C0.922621 4.66103 0.817172 4.55195 0.732232 4.46313C-0.244077 3.44213 -0.244077 1.78675 0.732232 0.765751C1.70854 -0.25525 3.29146 -0.25525 4.26777 0.765751C5.24408 1.78675 5.24408 3.44213 4.26777 4.46313ZM3.21785 2.69692C3.21785 2.28231 2.89645 1.94621 2.5 1.94621C2.10355 1.94621 1.78215 2.28231 1.78215 2.69692C1.78215 3.11152 2.10355 3.44763 2.5 3.44763C2.89645 3.44763 3.21785 3.11152 3.21785 2.69692Z" fill="#1ABC9C" />
                        </svg>
                        <h2>Tunasan Muntinlupa City</h2>
                    </li>
                    <li id="email" className="flex gap-3">
                        <svg className="w-6 h-6" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1.44V3.98438C5 4.52594 4.66088 4.9685 4.2336 4.99841L4.1875 5H0.8125C0.379243 5 0.0251875 4.57609 0.00128502 4.042L0 3.98438V1.44L2.413 3.02013C2.4675 3.05578 2.5325 3.05578 2.587 3.02013L5 1.44ZM0.8125 0H4.1875C4.60868 0 4.95503 0.400597 4.99595 0.913609L2.5 2.54791L0.00404751 0.913609C0.043465 0.419597 0.36608 0.0298281 0.766022 0.00163436L0.8125 0Z" fill="#1ABC9C" />
                        </svg>
                        <h2>johnrollycedillo15@gmail.com</h2>
                    </li>
                </ul>
            </div>
            {/* Contact Form and Social Media Icons*/}
            <div id="text area message" className="justify-items-center">
                {/* The contact form */}
                <form
                    className="block mx-auto pt-8 text-center"
                    onSubmit={sendEmail}
                >
                    <textarea
                        name="message"
                        placeholder="Type your message here to email directly..."
                        required
                        className="border p-3 w-80 
                        h-40 md:h-50 xl:h-70
                        md:w-100 lg:w-150 xl:w-200
                        rounded mb-4 resize-none bg-white text-black border-none outline-none focus:ring-2 focus:ring-[#1ABC9C] transition"
                    ></textarea>

                    <br />

                    <button id="send"
                        type="submit"
                        className="bg-[#1ABC9C] text-white px-4 py-2 rounded-full mt-0 hover:bg-[#149982] transition"
                    >
                        Send
                    </button>
                </form>
                {/* this is the social media icon section */}
                <div id="social media icon" className="flex w-25 justify-center items-center gap-2 justify-items-center
                                                        pt-4 sm:pt-3 md:pt-4 lg:pt-5">
                    <a href="https://www.instagram.com/jo_0.0_hn/">
                        <svg className="duration-300 text-black
                                        cursor-pointer hover:text-white hover:fill-amber-50"
                            width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.9434 10.6563H16.0566C13.0797 10.6563 10.6563 13.0797 10.6563 16.0566V27.9434C10.6563 30.9203 13.0797 33.3438 16.0566 33.3438H27.9434C30.9203 33.3438 33.3438 30.9203 33.3438 27.9434V16.0566C33.3438 13.0797 30.9203 10.6563 27.9434 10.6563ZM22 29.0641C18.1053 29.0641 14.9359 25.8947 14.9359 22C14.9359 18.1053 18.1053 14.9359 22 14.9359C25.8947 14.9359 29.0641 18.1053 29.0641 22C29.0641 25.8947 25.8947 29.0641 22 29.0641ZM29.2566 16.3797C28.3456 16.3797 27.6066 15.6406 27.6066 14.728C27.6066 13.817 28.3456 13.078 29.2566 13.078C30.1692 13.078 30.9083 13.817 30.9083 14.728C30.9083 15.6406 30.1692 16.3797 29.2566 16.3797ZM22 17.3422C19.4322 17.3422 17.3422 19.4322 17.3422 22C17.3422 24.5678 19.4322 26.6578 22 26.6578C24.5678 26.6578 26.6578 24.5678 26.6578 22C26.6578 19.4322 24.5678 17.3422 22 17.3422ZM22 0C9.85016 0 0 9.85016 0 22C0 34.1498 9.85016 44 22 44C34.1498 44 44 34.1498 44 22C44 9.85016 34.1498 0 22 0ZM35.75 27.9434C35.75 32.2472 32.2472 35.75 27.9434 35.75H16.0566C11.7528 35.75 8.25 32.2472 8.25 27.9434V16.0566C8.25 11.7528 11.7528 8.25 16.0566 8.25H27.9434C32.2472 8.25 35.75 11.7528 35.75 16.0566V27.9434Z" fill="currentColor" />
                        </svg>
                    </a>

                    <a href="https://www.facebook.com/John00Rolly">
                        <svg className="duration-300 text-black
                                        cursor-pointer hover:text-white hover:fill-amber-50" width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 0C9.89999 0 0 9.91766 0 22.1326C0 33.1767 8.05199 42.3434 18.568 44V28.5382H12.98V22.1326H18.568V17.251C18.568 11.7068 21.846 8.65863 26.884 8.65863C29.282 8.65863 31.79 9.0783 31.79 9.0783V14.5341H29.018C26.29 14.5341 25.432 16.2349 25.432 17.9799V22.1326H31.548L30.558 28.5382H25.432V44C30.616 43.1779 35.3368 40.5222 38.7417 36.5121C42.1467 32.5021 44.0118 27.4019 43.9999 22.1326C43.9999 9.91766 34.1 0 22 0Z" fill="currentColor" />
                        </svg>
                    </a>
                    <a href="https://github.com/Hot00Sauce">
                        <svg className="text-black hover:text-white duration-300 cursor-pointer" width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_2129_213)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 0C34.1506 0 44 10.0978 44 22.5564C44 32.5202 37.7036 40.9727 28.9674 43.9581C27.852 44.1803 27.456 43.4759 27.456 42.8753C27.456 42.1317 27.4824 39.703 27.4824 36.6846C27.4824 34.5814 26.7784 33.2087 25.9886 32.5091C30.888 31.9503 36.036 30.0427 36.036 21.3791C36.036 18.9151 35.1824 16.9044 33.77 15.3248C33.9988 14.755 34.7534 12.4607 33.5544 9.3543C33.5544 9.3543 31.7108 8.74989 27.511 11.6671C25.7532 11.1677 23.87 10.9164 22 10.9076C20.13 10.9164 18.249 11.1677 16.4934 11.6671C12.2892 8.74989 10.4412 9.3543 10.4412 9.3543C9.24661 12.4607 10.0012 14.755 10.2278 15.3248C8.822 16.9044 7.96181 18.9151 7.96181 21.3791C7.96181 30.0207 13.0988 31.9575 17.985 32.5273C17.3558 33.0905 16.786 34.0841 16.588 35.5427C15.334 36.1191 12.1484 37.1166 10.186 33.6692C10.186 33.6692 9.0222 31.502 6.8134 31.3436C6.8134 31.3436 4.6684 31.3151 6.6638 32.7143C6.6638 32.7143 8.1048 33.4073 9.1058 36.0143C9.1058 36.0143 10.3972 40.0402 16.5176 38.6762C16.5286 40.5616 16.5484 42.3385 16.5484 42.8753C16.5484 43.4715 16.1436 44.1693 15.0458 43.9603C6.30299 40.9793 0 32.5224 0 22.5564C0 10.0978 9.8516 0 22 0Z" fill="currentColor" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2129_213">
                                    <rect width="44" height="44" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/john00rolly/">
                        <svg
                            className="text-black hover:text-white duration-300 cursor-pointer" width="44" height="44" viewBox="0 0 44 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 0C9.84844 0 0 9.84844 0 22C0 34.1516 9.84844 44 22 44C34.1516 44 44 34.1516 44 22C44 9.84844 34.1516 0 22 0ZM15.8469 31.2039H11.5586V17.4797H15.8469V31.2039ZM13.5867 15.7609H13.5523C11.9969 15.7609 10.9914 14.7125 10.9914 13.3805C10.9914 12.0227 12.0312 11 13.6125 11C15.1937 11 16.1648 12.0227 16.1992 13.3805C16.2078 14.7039 15.2023 15.7609 13.5867 15.7609ZM33 31.2039H28.1359V24.1055C28.1359 22.2492 27.3797 20.9773 25.7039 20.9773C24.4234 20.9773 23.7102 21.8367 23.3836 22.6617C23.2633 22.9539 23.2805 23.3664 23.2805 23.7875V31.2039H18.4594C18.4594 31.2039 18.5195 18.6227 18.4594 17.4797H23.2805V19.6367C23.5641 18.6914 25.1023 17.3508 27.5602 17.3508C30.6109 17.3508 33 19.3273 33 23.5727V31.2039Z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
            </div>

            <footer id="footer" className="w-full text-center py-2 bg-[#1A4D4F] text-sm text-[#1ABC9C] mt-9">
                © {new Date().getFullYear()} John Rolly Cedillo. All rights reserved.
            </footer>
        </div>
    );
}
export default Footer;