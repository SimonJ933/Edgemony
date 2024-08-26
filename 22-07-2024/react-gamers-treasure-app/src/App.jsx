import { useEffect, useState } from "react";
import { labels } from "./data/labels";
import { getGamesList } from "./API/GamesClient.js";
import { GamesTable } from "./components/GamesTable.jsx";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const getGames = async () => {
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
    getGames();
  }, []);

  useEffect(() => {
    console.log(gamesList);
  }, [gamesList]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-2xl font-bold text-white">IS LOADING....</p>
        </div>
      </div>
    );

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className="font-barlow flex justify-center bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 min-h-screen">
        <main className="w-full bg-white shadow-xl rounded-lg my-8">
          <div className="p-6">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-center mb-4 ">
              {labels.gameList}
            </h1>
          </div>

          <div className="flex gap-2 align-center px-6">
            <input
              type="text"
              className="p-2 border-2 border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              onChange={handleChange}
              value={filter}
              placeholder={labels.insertGameTitle}
            />
          </div>

          <div className="overflow-x-auto p-6">
            <table className="min-w-full max-w-5xl mx-auto divide-y-4 divide-pink-300 bg-white text-sm bg-yellow-200">
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-4 py-3 font-bold text-purple-900 text-left">{labels.gameTableTitle}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-bold text-purple-900 text-left">{labels.gameTablePlatform}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-bold text-purple-900 text-left">{labels.gameTableGenre}</th>
                  <th className="whitespace-nowrap px-4 py-3 font-bold text-purple-900 text-left">{labels.gameTablePrice}</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <GamesTable filter={filter} />
            </table>
          </div>
          <ToastContainer />
        </main>
      </div>
    </>
  );
}

export default App;
