// Accordion.tsx

import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b rounded border-gray-200 shadow-md">
      <div
        className="flex justify-between items-center p-4 cursor-pointer transition-all duration-300"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      <div
        className={`p-4  ${
          isOpen
            ? "transition-all duration-3200 ease-in-out block"
            : "transition-all duration-3200 ease-in-out hidden"
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
