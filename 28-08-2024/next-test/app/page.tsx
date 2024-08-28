import { getUsers } from "@/action/getUsers";
import Card from "@/components/Card";

export default async function Home() {
  const cardDetail = await getUsers();

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
