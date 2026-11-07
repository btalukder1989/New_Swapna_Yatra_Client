"use client";

import { useEffect, use } from "react";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function OfferDetailsPage({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);

  useEffect(() => {
    // Mapping offer IDs to tour packages
    const offerToTourMap: Record<string, string> = {
      "1": "1", // Kashmir
      "2": "2", // Darjeeling
      "3": "4", // Meghalaya
    };

    const targetId = offerToTourMap[id] || id;
    router.replace(`/packages/${targetId}`);
  }, [id, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
      <div className="h-8 w-8 rounded-full border-2 border-[#F5820B] border-t-transparent animate-spin" />
    </div>
  );
}
