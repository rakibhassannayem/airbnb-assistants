import ClientsReview from "@/components/landingPage/ClientsReview";
import Faq from "@/components/landingPage/Faq";
import Industries from "@/components/landingPage/Industries";
import Newsletter from "@/components/landingPage/Newsletter";
import Services from "@/components/landingPage/Services";
import Tools from "@/components/landingPage/Tools";

export default function Home() {
  return (
    <div className="space-y-10 my-10">
      <Industries />
      <Services />
      <Tools />
      <ClientsReview />
      <Faq />
      <Newsletter />
    </div>
  );
}
