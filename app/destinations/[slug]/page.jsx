import { australianIcons } from "@/lib/data/australianIcons";
import Image from "next/image";
import Link from "next/link";

// This function tells Next.js which slugs to generate statically
export async function generateStaticParams() {
  return australianIcons.map((item) => ({
    slug: item.slug,
  }));
}

export default function DestinationPage({ params }) {
  const destination = australianIcons.find((item) => item.slug === params.slug);

  if (!destination) {
    return (
      <div className="p-10 text-center text-xl">Destination not found.</div>
    );
  }

  return (
    <section className="p-10 max-w-5xl mx-auto">
      <Link href="/" className="text-blue-600 underline mb-5 block">
        ← Go back
      </Link>

      <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>

      <Image
        src={destination.imageSrc}
        alt={destination.name}
        width={800}
        height={500}
        className="rounded-xl shadow-lg"
      />

      <p className="mt-5 text-lg text-gray-600">
        {destination.description || "A beautiful place in Australia."}
      </p>
    </section>
  );
}
