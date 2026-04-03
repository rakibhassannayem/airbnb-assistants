import Container from "../shared/Container";
import Headings from "../shared/Headings";
import tool1 from "@/assets/tools/pricelabs.png";
import tool2 from "@/assets/tools/wheelhouse.png";
import tool3 from "@/assets/tools/beyondpricing.png";
import tool4 from "@/assets/tools/hostfully.png";
import tool5 from "@/assets/tools/guesty.png";
import tool6 from "@/assets/tools/lodgify.png";
import tool7 from "@/assets/tools/hostfully.png";
import tool8 from "@/assets/tools/guesty.png";
import tool9 from "@/assets/tools/lodgify.png";
import Image from "next/image";

const toolsLogos = [
  tool1,
  tool2,
  tool3,
  tool4,
  tool5,
  tool6,
  tool7,
  tool8,
  tool9,
];

const Tools = () => {
  return (
    <div>
      <Headings
        title1={"Our"}
        title2={"Tools"}
        shortDesc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
      />

      <div className="bg-base-300 py-12 mt-12">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
          {toolsLogos.map((tool, i) => (
            <div key={i} className="bg-white py-10 rounded-lg flex items-center justify-center hover:shadow shadow-primary">
              <Image src={tool} alt="tool" width={120} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
