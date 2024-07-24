import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full p-3 bg-[#1E1F24] rounded-lg">
      <h2 className="text-center text-[#6B6C70] text-sm font-medium tracking-wide mb-2">
        WELCOME BACK
      </h2>
      <h1 className="text-center text-white text-[18px] font-semibold mb-4">
        Log into your account
      </h1>
      <form className="space-y-2">
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-[#C5C7CA] text-sm font-medium mb-1"
          >
            Email or Username
          </label>
          <input
            type="text"
            id="email"
            className="w-full bg-[#2C2D32] text-white rounded-lg px-4 py-2 border border-[#35373B] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email or username"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.36px",
              color: "#7F8084",
            }}
          />
        </div>
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor="password"
              className="text-[#C5C7CA] text-sm font-medium"
            >
              Password
            </label>
            <a
              href="#"
              className="text-[#C5C7CA] text-sm hover:text-white transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full bg-[#2C2D32] text-white rounded-lg px-4 py-2 pr-10 border border-[#35373B] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "19.36px",
                color: "#7F8084",
              }}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C5C7CA]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#4A96FF] text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition-colors"
        >
          Login now
        </button>
      </form>
      <p className="text-[#C5C7CA] text-sm mt-2 text-left">
        Not registered yet?{" "}
        <button className="text-white hover:underline" onClick={toggleForm}>
          Register →
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
