import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, isStandalone }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const modalContent = (
    <div
      className={`relative w-[463px] rounded-lg overflow-hidden transition-all duration-300 ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      onClick={(e) => e.stopPropagation()}
      style={{ height: showLogin ? "420px" : "506px" }}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#969696] to-[#343434] rounded-lg" />

      {/* Content */}
      <div className="relative bg-[#1E1F24] m-[2px] p-6 rounded-lg overflow-hidden h-full flex flex-col">
        {!isStandalone && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>
        )}
        <div className="relative w-[399px] overflow-hidden flex-grow">
          <div
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(${showLogin ? "0%" : "-100%"})` }}
          >
            <div className="w-full flex-shrink-0">
              <LoginForm toggleForm={toggleForm} />
            </div>
            <div className="w-full flex-shrink-0">
              <RegisterForm toggleForm={toggleForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isStandalone) {
    return modalContent;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-300 ${
        isOpen
          ? "bg-black bg-opacity-50 backdrop-blur-sm"
          : "bg-opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {modalContent}
    </div>
  );
};

export default Modal;
