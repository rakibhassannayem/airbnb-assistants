import Headings from "../shared/Headings";
import service1 from "@/assets/services/service1.png";
import service2 from "@/assets/services/service2.png";
import service3 from "@/assets/services/service3.png";
import service4 from "@/assets/services/service4.png";
import service5 from "@/assets/services/service5.png";
import service6 from "@/assets/services/service6.png";
import Image from "next/image";
import Container from "../shared/Container";

const services = [
  {
    id: 1,
    title: "Manage Property Listings",
    image: service1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Manage Custome Bookings",
    image: service2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Schedule House Cleaning",
    image: service3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Monitor Guest Reviews",
    image: service4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "Track & Report Expenses",
    image: service5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Guest Inquiry & Support",
    image: service6,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Services = () => {
  return (
    <div>
      <Headings
        title1={"Our"}
        title2={"Service"}
        shortDesc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
      />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-lg border border-base-300 hover:shadow-md">
            <Image src={service.image} alt={service.title} height={70} />
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="font-medium mt-2">{service.description}</p>
            <button className="btn btn-primary btn-outline rounded-full hover:text-white mt-6">Read More</button>
          </div>
        ))}
      </Container>

    </div>
  );
};

export default Services;
