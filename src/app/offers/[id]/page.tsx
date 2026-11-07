import { redirect } from "next/navigation";
import { fetchTourByIdOrSlug } from "@/services/tourService";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function OfferDetailsPage({ params }: PageProps) {
  const { id } = await params;
  
  // Mapping offer IDs to tour packages
  const offerToTourMap: Record<string, string> = {
    "1": "1", // Kashmir
    "2": "2", // Darjeeling
    "3": "4", // Meghalaya
  };

  const targetId = offerToTourMap[id] || id;
  const tour = await fetchTourByIdOrSlug(targetId);

  if (tour) {
    redirect(`/packages/${tour.id}`);
  }

  redirect("/packages");
}
