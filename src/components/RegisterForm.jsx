import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="w-full p-6 bg-[#1E1F24] rounded-lg">
      <h2 className="text-center text-[#6B6C70] text-xs font-semibold tracking-wide mb-1">
        SIGN UP
      </h2>
      <h1
        className="text-center text-white mb-6"
        style={{
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        Create an account to continue
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-[#C5C7CA] text-sm font-medium mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-[#27282D] text-white rounded-lg px-4 py-3 border border-[#35373B] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            style={{
              fontSize: "15px",
              color: "#7F8084",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-[#C5C7CA] text-sm font-medium mb-1.5"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full bg-[#27282D] text-white rounded-lg px-4 py-3 border border-[#35373B] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Choose a preferred username"
            style={{
              fontSize: "15px",
              color: "#7F8084",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-[#C5C7CA] text-sm font-medium mb-1.5"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full bg-[#27282D] text-white rounded-lg px-4 py-3 pr-10 border border-[#35373B] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Choose a strong password"
              style={{
                fontSize: "15px",
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
          className="w-full bg-[#4A96FF] text-white rounded-lg py-3 font-semibold hover:bg-blue-600 transition-colors text-base mt-2"
        >
          Continue
        </button>
      </form>
      <p className="text-[#C5C7CA] text-sm mt-4 text-left">
        Already have an account?{" "}
        <button className="text-white hover:underline" onClick={toggleForm}>
          ← Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
