import { getUsers } from "@/action/getUsers";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const cardDetail = await getUsers();

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2 ml-20 mt-5">
        {cardDetail.map((card) => (
          <Card key={card.id} post={card} />
        ))}
      </div>
    </main>
  );
}
