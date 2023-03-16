import { useEffect, useState } from "react";
import HomeAppBar from "../utils/AppBar/HomeAppBar";
import "tailwindcss/tailwind.css";
import SearchTab from "../utils/Tab/SearchTab";
import { searchSongs } from '../utils/apiClient';
import MusicListTab from "../utils/Tab/MusicListTab";


interface MusicByLevelData {
    title: string;
    singer: string;
    level: string;
    id: number;
    created_at: string;
    updated_at: string;
}

interface MusicSearchData {
    title: string;
    singer: string;
}

const Home = () => {
    const [tab, setTab] = useState("search");
    const [songLevelDatas, setsongLevelDatas] = useState<MusicByLevelData[]>([]);
    const [search, setSearch] = useState<string>("");
    const [targetLevel, setTargetLevel] = useState<string>("");
    const [songSearchDatas, setSongSearchDatas] = useState<MusicSearchData[]>([]);

    const URL = "http://localhost:8000/musics";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData = await response.json();
            setsongLevelDatas(jsonData);
        };
        fetchData();
    }, []);

    const dezzerSongs = async (query: string) => {
        const results = await searchSongs(query);
        const formattedResults: MusicSearchData[] = results.map((result: any) => ({
            title: result.title,
            singer: result.artist.name,
        }));
        return formattedResults;
    };

    useEffect(() => {
        let isMounted = true;
        if (search) {
            dezzerSongs(search).then((results) => {
                if (isMounted) setSongSearchDatas(results);
            });
        } else {
            setSongSearchDatas([]);
        }
        return () => {
            isMounted = false;
        };
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
                    search={search}
                    level_data={songLevelDatas}
                    search_data={songSearchDatas}
                    setSearch={setSearch}
                />
            </div>
        </div>
    );
};

export default Home;