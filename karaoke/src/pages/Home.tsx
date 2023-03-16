import { useEffect, useState } from "react";
import HomeAppBar from "../utils/AppBar/HomeAppBar";
import "tailwindcss/tailwind.css";
import SearchTab from "../utils/Tab/SearchTab";
import MusicListTab from "../utils/Tab/MusicListTab";
import { searchSongs } from "../utils/apiClient";


interface MusicByLevelData {
    title: string;
    singer: string;
    level: string;
    id: number;
    created_at: string;
    updated_at: string;
}

const Home = () => {
    const [tab, setTab] = useState("level");
    const [songLevelDatas, setSongLevelDatas] = useState<MusicByLevelData[]>([]);
    const [search, setSearch] = useState<string>("");
    const [targetLevel, setTargetLevel] = useState<string>("");
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);

    const URL = "http://localhost:8000/musics";

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(URL);
            const jsonData = await response.json();
            setSongLevelDatas(jsonData);
        };
        fetchData();
        setLoading(false);
    }, []);

    useEffect(() => {
        if (search.length > 0) {
            setLoading(true);
            searchSongs(search)
                .then((response) => {
                    setSearchData(response);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching search data:', error);
                    setLoading(false);
                });
        } else {
            setSearchData([]);
        }
    }, [search]);

    return (
        <div>
            <HomeAppBar />
            <div className="container mx-auto px-4">
                <div className="flex justify-between mb-4">
                    <button
                        className={`w-1/2 h-12 ${tab === "level" ? "bg-blue-400" : "bg-white"} text-black font-bold rounded-r-md`}
                        onClick={() => setTab("level")}
                    >
                        難易度別
                    </button>
                    <button
                        className={`w-1/2 h-12 ${tab === "search" ? "bg-blue-400" : "bg-white"} text-black font-bold rounded-l-md`}
                        onClick={() => setTab("search")}
                    >
                        通常検索
                    </button>
                </div>
                <SearchTab
                    tab={tab}
                    search={search}
                    setSearch={setSearch}
                    targetLevel={targetLevel}
                    setTargetLevel={setTargetLevel}
                />
                <MusicListTab
                    tab={tab}
                    input={search}
                    level_data={songLevelDatas}
                    search_data={searchData}
                    setSearch={setSearch}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default Home;