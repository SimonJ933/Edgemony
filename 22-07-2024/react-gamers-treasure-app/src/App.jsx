import { useEffect, useState } from "react";
import { labels } from "./data/labels";
import { getGamesList } from "./API/GamesClient.js";
import { GamesTable } from "./components/GamesTable.jsx";

function App() {
  const [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getBooks = async () => {
    try {
      const data = await getGamesList();
      setGamesList(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    console.log(gamesList);
  }, [gamesList]);

  if (isLoading) return <p>IS LOADING....</p>;

  return (
    <>
      <div className="font-barlow flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
        <main className="w-full bg-white shadow-xl rounded-lg my-8">
          <div className="p-6">
            <h1 className="text-4xl font-extrabold text-gray-900 text-center">{labels.gameList}</h1>
          </div>

          <div className="overflow-x-auto p-6">
            <table className="min-w-full max-w-5xl mx-auto divide-y-4 divide-pink-300 bg-white text-sm">
              <thead className="bg-yellow-200">
                <tr>
                  <th className="whitespace-nowrap px-4 py-3 font-bold text-purple-900 text-left">{labels.gameTableTitle}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-bold text-purple-900 text-left">{labels.gameTablePlatform}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-bold text-purple-900 text-left">{labels.gameTableGenre}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-bold text-purple-900 text-left">{labels.gameTablePrice}</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <GamesTable />
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
