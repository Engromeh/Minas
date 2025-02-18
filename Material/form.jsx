import React from 'react'

const form = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center flex flex-col">
          <img src={photo} alt="Login" className="mx-auto mb-6" style={{ width: "90%" }} />
      
          <div className="relative mb-4">
            <img src={emailicon} alt="Email Icon" className="absolute left-3 top-3 w-5 h-5" />
            <input
              type="email"
              placeholder="Type Email..."
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
      
          <div className="relative mb-6">
            <img src={ passwordicon} alt="Password Icon" className="absolute left-3 top-3 w-5 h-5" />
            <input
              type="password"
              placeholder="Type password..."
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-3 top-3 w-6 h-6"
            >
              <img src={Eyesicon} alt="Toggle Password" />
            </button>
          </div>
      
          <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            تسجيل الدخول
          </button>
      
      
      
        </div>
        <p className=" text-xl  text-center" style={{marginTop:"15px" , color:"#1A4F83"}}>@minasagency.net</p>
      </div>
      
    </div>
  )
}

export default form
