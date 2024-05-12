import React from "react";
import Accordion from "../Accordian/Accordion";

const FAQSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <Accordion
        title="What subjects do you offer?"
        content="We offer a wide range of subjects including mathematics, science, history, and more."
      />
      <Accordion
        title="How do I enroll in a course?"
        content="You can enroll in a course by visiting the course page and clicking on the 'Enroll' button."
      />
    </div>
  );
};

export default FAQSection;
