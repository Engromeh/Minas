import emailicon from "../../assets/email.svg";
import Eyesicon from "../../assets/eye-closed.svg";
import passwordicon from "../../assets/Group 12.svg";
import loginphoto from "../../assets/loginFormphoto.svg";
import bgimage from "../../assets/background logo in login.svg";
import logo from "../../assets/logo in login.svg";

const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 h-screen relative">
      <div className="absolute inset-0 md:hidden">
        <img
          src={bgimage}
          alt="Background Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#212D5D] opacity-50"></div>
      </div>

      <div className="hidden md:flex md:col-span-5 relative items-center justify-center">
        <img
          src={bgimage}
          alt="Background Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-50 bg-[#212D5D]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-1/2 h-1/2" />
        </div>
      </div>

      <div className="md:col-span-3 flex flex-col items-center justify-center h-full relative z-10 w-full">
        <img src={logo} alt="Logo" className="w-1/2 h-1/2 mb-5 md:hidden" />

        <form className="max-w-sm mx-auto bg-white p-8 rounded-lg  w-[90%] md:w-auto" style={{width:"100%"}}>
          <div className="text-center">
            <p className="style-font text-4xl mb-3" style={{ color: "#1A4F83" }}>
              تسجيل الدخول
            </p>
            <img src={loginphoto} alt="Login Illustration" className="mx-auto" />
          </div>

          <div className="relative mt-5">
            <img
              src={emailicon}
              alt="Email Icon"
              className="absolute left-3 top-3 w-5 h-5"
            />
            <input
              type="email"
              placeholder="Type Email..."
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative mt-5">
            <img
              src={passwordicon}
              alt="Password Icon"
              className="absolute left-3 top-3 w-5 h-5"
            />
            <input
              type="password"
              placeholder="Type password..."
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" className="absolute right-3 top-3 w-6 h-6">
              <img src={Eyesicon} alt="Toggle Password" />
            </button>
          </div>

          <button
            type="submit"
            className="style-font text-white font-bold w-full h-10 mt-5"
            style={{ backgroundColor: "#212D5D", borderRadius: "5px" }}
          >
            تسجيل الدخول
          </button>

          <p className="style-font text-end text-xl mt-3" style={{ color: "#212D5D" }}>
            نسيت كلمة المرور؟
          </p>

          <div className="text-center text-blue-900 font-medium mt-5">
            <p>@minasagency.net</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

