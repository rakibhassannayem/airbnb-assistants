import ClientsReview from "@/components/landingPage/ClientsReview";
import Faq from "@/components/landingPage/Faq";
import GettingStarted from "@/components/landingPage/GettingStarted";
import Industries from "@/components/landingPage/Industries";
import Newsletter from "@/components/landingPage/Newsletter";
import Pricing from "@/components/landingPage/Pricing";
import Services from "@/components/landingPage/Services";
import Tools from "@/components/landingPage/Tools";
import WhyChooseUs from "@/components/landingPage/WhyChooseUs";

export default function Home() {
  return (
    <div className="space-y-20 my-10">
      <Industries />
      <Services />
      <Pricing />
      <Tools />
      <GettingStarted />
      <ClientsReview />
      <WhyChooseUs />
      <Faq />
      <Newsletter />
    </div>
  );
}
