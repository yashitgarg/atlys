import React from "react";
import Modal from "../components/Modal";
import loginLogo from "../assets/login_logo.svg";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#131517] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <img src={loginLogo} alt="Logo" className="w-10 h-10 mb-12" />
        <Modal isOpen={true} isStandalone={true} />
      </div>
    </div>
  );
};

export default Login;
