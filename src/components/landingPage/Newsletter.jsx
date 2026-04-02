import Container from "../shared/Container";
import left from "@/assets/avatars/left.png";
import center from "@/assets/avatars/center.png";
import right from "@/assets/avatars/right.png";
import Image from "next/image";

const Newsletter = () => {
  return (
    <Container
      className={
        "flex flex-col justify-center items-center bg-base-200 py-10 rounded-sm"
      }
    >
      <div className="flex justify-center items-center mb-5">
        {/* Left Avatar */}
        <div className="avatar z-0 -mr-6">
          <div className="w-14 md:w-18 rounded-full border-4 border-white bg-[#ABB677]">
            <Image src={left} alt="left" />
          </div>
        </div>

        {/* Center Avatar */}
        <div className="avatar z-10">
          <div className="w-18 md:w-20 rounded-full border-4 border-white shadow-sm bg-[#C7B9DA]">
            <Image src={center} alt="center" />
          </div>
        </div>

        {/* Right Avatar */}
        <div className="avatar z-0 -ml-6">
          <div className="w-14 md:w-18 rounded-full border-4 border-white bg-[#D9B9BB]">
            <Image src={right} alt="right" />
          </div>
        </div>
      </div>
      <h3 className="text-gray-900 text-xl font-bold">Still have Questions?</h3>
      <p className="text-gray-400 text-lg mt-1">
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>
      <button className="btn btn-primary rounded-lg text-white mt-5 text-base">Get in touch</button>
    </Container>
  );
};

export default Newsletter;
