import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const RegisterForm = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full p-8 bg-[#1E1F24] rounded-lg">
      <h2 className="text-center text-[#6B6C70] text-sm font-medium tracking-wide mb-2">
        SIGN UP
      </h2>
      <h1 className="text-center text-white text-[18px] font-semibold mb-4">
        Create an account to continue
      </h1>
      <form className="space-y-2">
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-[#C5C7CA] text-sm font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-[#2C2D32] text-white rounded-lg px-4 py-2 border border-[#35373B] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.36px",
              color: "#7F8084",
            }}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="username"
            className="block text-[#C5C7CA] text-sm font-medium mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full bg-[#2C2D32] text-white rounded-lg px-4 py-2 border border-[#35373B] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Choose a preferred username"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "19.36px",
              color: "#7F8084",
            }}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-[#C5C7CA] text-sm font-medium mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full bg-[#2C2D32] text-white rounded-lg px-4 py-2 pr-10 border border-[#35373B] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a strong password"
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
          Continue
        </button>
      </form>
      <p className="text-[#C5C7CA] text-sm mt-2 text-left">
        Already have an account?{" "}
        <button className="text-white hover:underline" onClick={toggleForm}>
          ← Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
