import ClientsReview from "@/components/landingPage/ClientsReview";
import Industries from "@/components/landingPage/Industries";

export default function Home() {
  return (
    <div className="space-y-10 my-10">
      <Industries />
      <ClientsReview />
    </div>
  );
}
