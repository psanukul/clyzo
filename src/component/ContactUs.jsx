import businessmanImage from "../assets/businessman.png"

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen mb-20  ">
      <div className="  min-h-72 max-h-[550px] bg-[#F4F4ED] ">
        {/* Header */}
        {/* <div className="mb-8"> -[#f9f9f4]
          <h1 className="text-3xl font-bold flex items-center">
            <span className="text-green-500 mr-2">•</span> Contact Us
          </h1>
          <p className="text-gray-600 mt-1">
            Partner with us for top-quality recipients and expert customer support. Contact now!
          </p>
        </div> */}
        <div className="py-14 px-32">
        <div  className="flex items-center gap-3 mb-2">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            <div className="flex flex-col ml-1">
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full mb-1"></div>
              <div className="h-2 w-2 bg-[#3AC29A] rounded-full"></div>
            </div>
            
          </div>
          <h1 className="text-3xl font-bold">
            Contact <span className="text-[#22604A]">Us</span>
          </h1>
          
        </div>
        <p className="text-gray-600 mx-8 my-4">
            Partner with us for top-quality recipients and expert customer support. Contact now!
          </p>

        {/* Main Content */}
        <div className="flex flex-col my-16 md:flex-row gap-24">
          {/* Left Section - Contact Info & Request Sample */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Contact Info */}
            <div className="pl-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#238160] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-100"
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
                <div className="w-8 h-8 rounded-full bg-[#238160] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-100"
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
            <div className=" rounded-lg shadow-lg flex py-28 px-6 items-center relative bg-white max-h-40">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">
                  Request <span className="text-[#22604A]">Sample</span>
                </h2>
                <p className="text-sm text-gray-500 mb-14">Order sample like to evaluate</p>
                <button className="border border-green-500 text-green-500 px-6 py-1.5 rounded-md text-sm hover:bg-green-50 transition-colors">
                  Know More
                </button>
              </div>
              <div className="">
                <img
                  src={businessmanImage || "/placeholder.svg"}
                  alt="Businessman pointing up"
                  className="absolute bottom-0 right-0  min-h-80 max-h-80"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-1">
              Get in <span className="text-green-700">Touch</span>
            </h2>
            <p className="text-sm text-gray-500 mb-4">We'd love to hear from you. Please fill out this form.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
                  className="bg-[#22604A] text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

