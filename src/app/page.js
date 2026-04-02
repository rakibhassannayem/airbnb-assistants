import ClientsReview from "@/components/landingPage/ClientsReview";
import Faq from "@/components/landingPage/Faq";
import Industries from "@/components/landingPage/Industries";
import Newsletter from "@/components/landingPage/Newsletter";

export default function Home() {
  return (
    <div className="space-y-10 my-10">
      <Industries />
      <ClientsReview />
      <Faq />
      <Newsletter />
    </div>
  );
}
