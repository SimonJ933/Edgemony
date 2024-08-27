import Card, { ICard } from "@/components/card";
import React from "react";

const cardDetail: ICard[] = [
  {
    id: 1,
    title: "Noteworthy Technology Acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    readMore: "Read More",
    image: "OIP.jpeg",
  },
  {
    id: 2,
    title: "Top Cloud Acquisitions 2021",
    description: "Discover the most significant cloud technology acquisitions of 2021, highlighting major players and strategic moves.",
    readMore: "Read More",
    image: "cloud spend.jpeg",
  },
  {
    id: 3,
    title: "AI Industry Shakeups 2021",
    description: "Explore the biggest artificial intelligence company acquisitions of 2021, focusing on how these deals are reshaping the industry.",
    readMore: "Read More",
    image: "AI.png",
  },
  {
    id: 4,
    title: "Cybersecurity Mergers 2021",
    description: "A look at the most impactful cybersecurity mergers and acquisitions in 2021, and what they mean for the future of digital security.",
    readMore: "Read More",
    image: "OIP 2.jpeg",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardDetail.map((card) => (
          <Card key={card.id} post={card} />
        ))}
      </div>
    </main>
  );
}
