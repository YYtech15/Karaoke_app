import SongsByLevel from "../../components/music_list/SongsByLevel";
import SelectedSongInfo from "../../components/music_list/SelectedSongInfo";
import { MusicByLevelData, MusicBySearchData, SongSearchData } from "../apiClient";

interface TabContentProps {
    tab: string;
    input: string;
    level_data: MusicByLevelData[];
    search_data: SongSearchData[];
    setSearch: (value: string) => void;
    loading: boolean;
    selectedSong: MusicBySearchData | undefined
    setSelectedSong: (value: MusicBySearchData | undefined) => void;
}

const MusicListTab: React.FC<TabContentProps> = ({
    tab,
    input,
    level_data,
    search_data,
    setSearch,
    loading,
    selectedSong,
    setSelectedSong
}) => {

    if (tab === "level") {
        return (
            <>
                <div className="flex flex-wrap justify-center">
                    {level_data
                        .filter(
                            (item) =>
                            (item.title.toLowerCase().includes(input.toLowerCase()) ||
                                item.singer.toLowerCase().includes(input.toLowerCase()))
                        )
                        .map((item, index) => (
                            <SongsByLevel key={item.id} item={item} index={index} />
                        ))}
                </div>
            </>
        );
    } else if (tab === "search") {
        {
            const excludeStrings = ['(Romanized)', '(Instrumental)'];
            return (
                <>

                    {loading ? (
                        <div className="flex justify-center items-center">
                            <span>Loading...</span>
                        </div>
                    ) : (
                        <>
                            <SelectedSongInfo song={selectedSong} />
                            <ul className="relative mt-2 w-full bg-white border border-gray-300 rounded shadow max-h-[650px] overflow-y-auto z-10">
                                {search_data.slice(0, 100)
                                    .filter((result) => {
                                        return !excludeStrings.some((excludeString) => {
                                            return result.title.includes(excludeString) || result.singer.includes(excludeString);
                                        });
                                    })
                                    .map((result, index) => {

                                        return (
                                            <li
                                                key={result.id}
                                                className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
                                                onClick={() => {
                                                    setSearch(result.title + " - " + result.singer);
                                                    setSelectedSong(result);
                                                }}
                                            >
                                                <img
                                                    src={result.thumbnail}
                                                    alt={`${result.title} thumbnail`}
                                                    className="w-10 h-10 mr-2 rounded"
                                                />
                                                {result.title} - {result.singer}
                                            </li>
                                        );
                                    })}
                            </ul>
                        </>
                    )}
                </>
            );
        }
    };
    return null;
}

export default MusicListTab
