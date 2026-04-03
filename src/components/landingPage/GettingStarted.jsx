import Container from "../shared/Container";
import Headings from "../shared/Headings";
import Image from "next/image";
import add from "@/assets/icons/add.png";
import connect from "@/assets/icons/connect.png";
import assist from "@/assets/icons/assist.png";

const GettingStarted = () => {
  return (
    <Container>
      <Headings
        title1={"Getting Started is"}
        title2={"Easy"}
        shortDesc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
      />

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-7 px-5">
        <div className="relative">
          <div className="absolute -top-6 -left-5 w-15 h-15 rounded-full border-4 border-primary flex items-center justify-center font-medium text-2xl bg-white">
            01
          </div>
          <div className="border border-base-300 rounded py-15.5 flex justify-center">
            <Image src={add} alt="icon" width={60} height={60} />
          </div>
          <p className="text-center text-xl font-medium mt-5">
            Add requirements & sign up today
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-5 w-15 h-15 rounded-full border-4 border-primary flex items-center justify-center font-medium text-2xl bg-white">
            02
          </div>
          <div className="border border-base-300 rounded py-11.5 flex justify-center">
            <div className="">
              <Image src={connect} alt="icon" width={70} height={70} />
            </div>
          </div>
          <p className="text-center text-xl font-medium mt-5">
            Connect with your CSM & onboarding team
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-5 w-15 h-15 rounded-full border-4 border-primary flex items-center justify-center font-medium text-2xl bg-white">
            03
          </div>
          <div className="border border-base-300 rounded py-15 flex justify-center">
            <div className="">
              <Image src={assist} alt="icon" width={60} height={60} />
            </div>
          </div>
          <p className="text-center text-xl font-medium mt-5">
            Meet your STR Assistant next week
          </p>
        </div>
      </div>
    </Container>
  );
};

export default GettingStarted;
