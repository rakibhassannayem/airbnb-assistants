"use client";

import React, { useState } from "react";
import Headings from "../shared/Headings";
import Container from "../shared/Container";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: "Can I change my plan later?",
    answer: "You can upgrade or downgrade your plan at any time from your account settings."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription anytime. Your cancellation will take effect at the end of the current paid term."
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add your company name, VAT number, and other billing information from your account settings."
  },
  {
    question: "How does billing work?",
    answer: "We offer monthly and annual billing options. Payments are processed securely via Stripe."
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your email address in your profile settings panel."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container className={"bg-base-200 rounded-sm py-10"}>
      <Headings
        title1={"Frequently Asked"}
        title2={"Questions"}
        shortDesc={"Everything you need to know about the product and billing."}
      />
      <div className="max-w-4xl mx-auto mt-12 mb-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`py-6 ${index !== faqs.length - 1 && "border-b-2 border-rose-200"}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="flex items-center justify-between w-full text-left font-bold cursor-pointer text-gray-900 group"
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-primary ml-4 transition-transform duration-300">
                {openIndex === index ? (
                  <BiMinusCircle size={22} />
                ) : (
                  <BiPlusCircle size={22} />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-gray-500 text-base pr-10 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;

