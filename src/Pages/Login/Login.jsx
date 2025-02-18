import emailicon from "../../assets/email.svg";
import Eyesicon from "../../assets/eye-closed.svg";
import passwordicon from "../../assets/Group 12.svg";
import loginphoto from "../../assets/loginFormphoto.svg";
import bgimage from "../../assets/background logo in login.svg";
import logo from "../../assets/logo in login.svg";

const Login = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 h-screen">
      <div className="md:col-span-5 relative flex items-center justify-center">
        <img
          src={bgimage}
          alt="Background Image"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute inset-0 opacity-50"
          style={{ backgroundColor: "#212D5D" }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <img src={logo} alt="Logo" style={{ width: "50%", height: "50%" }} />
        </div>
      </div>

      <div className="md:col-span-3 flex flex-col items-center justify-center mt-10 md:mt-0 h-full">
        <form
          className="max-w-sm mx-auto h-full mt-40 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <div className="mb-5">
            <p className="mt-5 text-4xl mb-3" style={{ color: "#1A4F83" }}>
              تسجيل الدخول
            </p>
            <div className="relative mb-4">
              <img
                src={emailicon}
                alt="Email Icon"
                className="absolute left-3 top-3 w-5 h-5"
              />
              <input
                type="email"
                placeholder="Type Email..."
                className="w-96 pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>
          </div>
          <div className="mb-5">
            <div className="relative mb-6">
              <img
                src={passwordicon}
                alt="Password Icon"
                className="absolute left-3 top-3 w-5 h-5"
              />
              <input
                type="password"
                placeholder="Type password..."
                className="w-96 pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="button" className="absolute right-3 top-3 w-6 h-6">
                <img src={Eyesicon} alt="Toggle Password" />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="text-white font-bold w-full h-10"
            style={{ backgroundColor: "#212D5D", borderRadius: "5px" }}
          >
            تسجيل الدخول
          </button>
          <p className="text-end text-xl mt-5" style={{ color: "#212D5D" }}>
            نسيت كلمة المرور؟
          </p>
          <div className="w-full bg-blue-100 text-center py-3 mt-60">
            <p className="text-blue-900 font-medium">@minasagency.net</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
