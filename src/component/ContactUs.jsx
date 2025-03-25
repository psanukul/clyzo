
// import businessmanImage from "../assets/businessman.png"

// const ContactUs = () => {
//   return (
//     <div className="bg-white mb-8">
//       <div className="bg-[#F4F4ED]">
//         <div className="py-8 sm:py-10 md:py-14 px-4 sm:px-8 md:px-16 lg:px-32">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="flex items-center">
//               <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
//               <div className="flex flex-col ml-1">
//                 <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
//                 <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
//                 <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
//               </div>
//             </div>
//             <h1 className="text-2xl sm:text-3xl font-bold">
//               Contact <span className="text-[#22604A]">Us</span>
//             </h1>
//           </div>
//           <p className="text-gray-600 mx-0 sm:mx-8 my-4">
//             Partner with us for top-quality recipients and expert customer support. Contact now!
//           </p>

//           {/* Main Content */}
//           <div className="flex flex-col my-6 md:my-8 lg:my-10 md:flex-row gap-6 md:gap-12 lg:gap-16">
//             {/* Left Section - Contact Info & Request Sample */}
//             <div className="flex-1 flex flex-col justify-between gap-8 md:gap-0">
//               {/* Contact Info */}
//               <div className="pl-0 sm:pl-8">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-8 h-8 rounded-full bg-[#238160] flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-green-100"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-gray-800 font-medium">+91 8899 139 139</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-[#238160] flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-green-100"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-gray-800 font-medium">connect@clyzo.com</span>
//                 </div>
//               </div>

//               {/* Request Sample Card */}
//               <div className="rounded-lg shadow-lg bg-white p-4 sm:p-6 relative overflow-hidden">
//                 <div className="flex flex-row items-start">
//                   <div className="flex-1">
//                     <h2 className="text-xl font-bold mb-1">
//                       Request <span className="text-[#22604A]">Sample</span>
//                     </h2>
//                     <p className="text-sm text-gray-500 mb-4 sm:mb-6">Order sample like to evaluate</p>
//                     <button className="border border-green-500 text-green-500 px-6 py-1.5 rounded-md text-sm hover:bg-green-50 transition-colors">
//                       Know More
//                     </button>
//                   </div>
//                   <div className="w-[50%] flex justify-end">
//                     <img
//                       src={businessmanImage || "/placeholder.svg"}
//                       alt="Businessman pointing up"
//                       className="h-auto max-h-[120px] sm:max-h-[160px] object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section - Contact Form */}
//             <div className="flex-1 bg-white rounded-lg shadow-lg p-4 sm:p-6">
//               <h2 className="text-xl font-bold mb-1">
//                 Get in <span className="text-green-700">Touch</span>
//               </h2>
//               <p className="text-sm text-gray-500 mb-4">We'd love to hear from you. Please fill out this form.</p>

//               <form className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="First Name*"
//                     className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last Name*"
//                     className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                   />
//                 </div>

//                 <input
//                   type="email"
//                   placeholder="Email Address*"
//                   className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number*"
//                   className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                 />

//                 <textarea
//                   placeholder="Message"
//                   rows={3}
//                   className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                 ></textarea>

//                 <div className="text-right">
//                   <button
//                     type="submit"
//                     className="bg-[#22604A] text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors w-full sm:w-auto"
//                   >
//                     Send message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactUs



// import businessmanImage from "../assets/businessman.png"

// const ContactUs = () => {
//   return (
//     <div className="bg-white min-h-screen mb-20">
//       <div className="min-h-72 max-h-[550px] bg-[#F4F4ED]">
        
//         <div className="py-8 sm:py-10 md:py-14 px-4 sm:px-8 md:px-16 lg:px-32">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="flex items-center">
//               <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
//               <div className="flex flex-col ml-1">
//                 <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
//                 <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
//                 <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
//               </div>
//             </div>
//             <h1 className="text-2xl sm:text-3xl font-bold">
//               Contact <span className="text-[#22604A]">Us</span>
//             </h1>
//           </div>
//           <p className="text-gray-600 mx-0 sm:mx-8 my-4">
//             Partner with us for top-quality recipients and expert customer support. Contact now!
//           </p>

//           {/* Main Content */}
//           <div className="flex flex-col my-8 md:my-12 lg:my-16 md:flex-row gap-8 md:gap-16 lg:gap-24">
//             {/* Left Section - Contact Info & Request Sample */}
//             <div className="flex-1 flex flex-col justify-between gap-8 md:gap-0">
//               {/* Contact Info */}
//               <div className="pl-0 sm:pl-8">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-8 h-8 rounded-full bg-[#238160] flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-green-100"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-gray-800 font-medium">+91 8899 139 139</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-[#238160] flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-green-100"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-gray-800 font-medium">connect@clyzo.com</span>
//                 </div>
//               </div>

//               {/* Request Sample Card */}
//               <div className="rounded-lg shadow-lg bg-white p-6 relative overflow-hidden">
//                 <div className="flex flex-row items-start">
//                   <div className="flex-1">
//                     <h2 className="text-xl font-bold mb-1">
//                       Request <span className="text-[#22604A]">Sample</span>
//                     </h2>
//                     <p className="text-sm text-gray-500 mb-6">Order sample like to evaluate</p>
//                     <button className="border border-green-500 text-green-500 px-6 py-1.5 rounded-md text-sm hover:bg-green-50 transition-colors">
//                       Know More
//                     </button>
//                   </div>
//                   <div className="w-[50%] flex justify-end">
//                     <img
//                       src={businessmanImage || "/placeholder.svg"}
//                       alt="Businessman pointing up"
//                       className="h-auto max-h-[160px] object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section - Contact Form */}
//             <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
//               <h2 className="text-xl font-bold mb-1">
//                 Get in <span className="text-green-700">Touch</span>
//               </h2>
//               <p className="text-sm text-gray-500 mb-4">We'd love to hear from you. Please fill out this form.</p>

//               <form className="space-y-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="First Name*"
//                     className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last Name*"
//                     className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                   />
//                 </div>

//                 <input
//                   type="email"
//                   placeholder="Email Address*"
//                   className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number*"
//                   className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                 />

//                 <textarea
//                   placeholder="Message"
//                   rows={4}
//                   className="border border-gray-300 rounded-md p-2 text-sm w-full"
//                 ></textarea>

//                 <div className="text-right">
//                   <button
//                     type="submit"
//                     className="bg-[#22604A] text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors"
//                   >
//                     Send message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactUs

"use client"
import businessmanImage from "../assets/businessman.png"

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen relative">
      {/* Light background section */}
      <div className="bg-[#F4F4ED] h-[400px] w-full absolute top-0 left-0"></div>

      {/* Main content container - positioned relative to the page */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-14">
        {/* Header section */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            <div className="flex flex-col ml-1">
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Contact <span className="text-[#22604A]">Us</span>
          </h1>
        </div>

        <p className="text-gray-600 max-w-2xl my-4">
          Partner with us for top-quality recipients and expert customer support. Contact now!
        </p>

        {/* Main content cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 mt-8 md:mt-12 mb-20">
          {/* Left Section - Contact Info & Request Sample */}
          <div className="flex-1 flex flex-col justify-between gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#238160] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">+91 8899 139 139</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#238160] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">connect@clyzo.com</span>
              </div>
            </div>

            {/* Request Sample Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
              <div className="flex flex-row items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-1">
                    Request <span className="text-[#22604A]">Sample</span>
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">Order sample like to evaluate</p>
                  <button className="border border-[#3AC29A] text-[#3AC29A] px-6 py-1.5 rounded-md text-sm hover:bg-green-50 transition-colors">
                    Know More
                  </button>
                </div>
                <div className="w-[40%] flex justify-end">
                  {businessmanImage ? (
                    <img
                      src={businessmanImage || "/placeholder.svg"}
                      alt="Businessman pointing up"
                      className="h-auto max-h-[160px] object-contain"
                    />
                  ) : (
                    <div className="h-[160px] w-full bg-gray-200 rounded-md"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-1">
              Get in <span className="text-[#22604A]">Touch</span>
            </h2>
            <p className="text-sm text-gray-500 mb-4">We'd love to hear from you. Please fill out this form.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="border border-gray-300 rounded-md p-2 text-sm w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="border border-gray-300 rounded-md p-2 text-sm w-full"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address*"
                className="border border-gray-300 rounded-md p-2 text-sm w-full"
              />

              <input
                type="tel"
                placeholder="Phone Number*"
                className="border border-gray-300 rounded-md p-2 text-sm w-full"
              />

              <textarea
                placeholder="Message"
                rows={4}
                className="border border-gray-300 rounded-md p-2 text-sm w-full"
              ></textarea>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#22604A] text-white px-6 py-2 rounded-md text-sm hover:bg-green-700 transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

