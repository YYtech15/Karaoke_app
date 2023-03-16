import { useState } from "react";
import SongsByLevel from "../../components/music_list/SongsByLevel";
import SelectedSongInfo from "../../components/music_list/SelectedSongInfo";

interface MusicSearchData {
    title: string;
    singer: string;
}

interface MusicByLevelData {
    id: number;
    title: string;
    singer: string;
    level: string;
}

interface TabContentProps {
    tab: string;
    search: string;
    level_data: MusicByLevelData[];
    search_data: MusicSearchData[];
    setSearch: (value: string) => void;
}

const MusicListTab: React.FC<TabContentProps> = ({
    tab,
    search,
    level_data,
    search_data,
    setSearch,
}) => {
    const [selectedSong, setSelectedSong] = useState<MusicSearchData | null>(null);

    if (tab === "level") {
        return (
            <>
                <div className="flex flex-wrap justify-center">
                    {level_data
                        .filter(
                            (item) =>
                            (item.title.toLowerCase().includes(search.toLowerCase()) ||
                                item.singer.toLowerCase().includes(search.toLowerCase()))
                        )
                        .map((item, index) => (
                            <SongsByLevel key={item.id} item={item} index={index} />
                        ))}
                </div>
            </>
        );
    } else if (tab === "search") {
        {
            return (
                <>
                    <SelectedSongInfo song={selectedSong} />
                    <ul className="relative mt-2 w-full bg-white border border-gray-300 rounded shadow max-h-[650px] overflow-y-auto z-10">
                        {search_data.slice(0, 100).map((result, index) => (
                            <li
                                key={index}
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    setSearch(result.title + " - " + result.singer);
                                    setSelectedSong(result);
                                }}
                            >
                                {result.title} - {result.singer}
                            </li>
                        ))}
                    </ul>
                </>
            );
        }
    };
    return null;
}

export default MusicListTab
