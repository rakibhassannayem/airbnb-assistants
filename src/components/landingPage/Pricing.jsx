"use client";
import Image from "next/image";
import Headings from "../shared/Headings";
import { LuCheck } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import arrow from "@/assets/arrow.png";

const Pricing = () => {
  const features = [
    "20,000+ of PNG & SVG graphics",
    "Access to 100 million stock images",
    "Upload custom icons and fonts",
    "Unlimited Sharing",
    "Upload graphics & video in up to 4k",
    "Unlimited Projects",
    "Instant Access to our design system",
    "Create teams to collaborate on designs",
  ];

  const plans = [
    {
      name: "Freebie",
      price: "$0",
      description:
        "Ideal for individuals who need quick access to basic features.",
      features: [true, true, false, false, false, false, false, false],
      button: "Get Started Now",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$25",
      description:
        "Ideal for individuals who need advanced features and tools for client work.",
      features: [true, true, true, true, true, true, false, false],
      button: "Get Started Now",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$100",
      description:
        "Ideal for businesses who need personalized services and security for large teams.",
      features: [true, true, true, true, true, true, true, true],
      button: "Get Started Now",
      highlighted: false,
    },
  ];

  return (
    <div>
      <Headings
        title1={"Airbnb Assistant"}
        title2={"pricing"}
        shortDesc={"Choose a plan that's right for you"}
        className={"mb-6!"}
      />

      <div className="relative w-max mx-auto mb-12">
        <div className="flex justify-center items-center gap-5">
          <span className="text-lg font-medium">Pay Monthly</span>
          <input
            type="checkbox"
            className="toggle toggle-lg border-0 bg-gray-400 text-white rounded-2xl checked:bg-primary"
          />
          <p className="text-lg">Pay Yearly
            <span className="md:hidden absolute top-full right-0 mt-2 text-primary font-medium text-sm whitespace-nowrap">Save 25%</span>
          </p>
        </div>
        
        <div className="hidden md:flex absolute left-full -translate-y-1/2 -bottom-10 ml-4 items-center gap-2">
          <div className="w-15">
            <Image src={arrow} alt="arrow" width={60} height={60} className="object-contain w-full" />
          </div>
          <span className="absolute -right-20 bottom-1 text-primary font-medium text-lg whitespace-nowrap">Save 25%</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg p-8 ${
              plan.highlighted
                ? "bg-primary text-white"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p
              className={`mb-6 ${plan.highlighted ? "text-pink-100" : "text-neutral-500"}`}
            >
              {plan.description}
            </p>

            <div className="mb-6">
              <span className="text-5xl font-semibold">{plan.price}</span>
              <span
                className={plan.highlighted ? "text-pink-100" : "text-gray-600"}
              >
                {" "}
                / Month
              </span>
            </div>

            <button
              className={`w-full py-3 px-4 rounded font-semibold mb-8 transition ${
                plan.highlighted
                  ? "bg-white text-primary hover:bg-gray-100"
                  : "border-2 border-pink-500 text-primary hover:bg-pink-50"
              }`}
            >
              {plan.button}
            </button>

            <div className="space-y-4">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  {plan.features[featureIndex] ? (
                    <LuCheck className="w-6 h-6 shrink-0 mt-0.5 rounded-full p-1 text-primary bg-rose-200" />
                  ) : (
                    <LuX
                      className={`w-6 h-6 shrink-0 mt-0.5 rounded-full p-1 bg-neutral-100 ${
                        plan.highlighted && "bg-white text-black"
                      }`}
                    />
                  )}
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
