import GradientButton from "../Button/GradientButton";
import { MusicBySearchData } from "../apiClient";

interface TabContentProps {
    tab: string;
    search: string;
    setSearch: (value: string) => void;
    targetLevel: string;
    setTargetLevel: (value: string) => void;
    setSelectedSong: (value: MusicBySearchData | undefined) => void;
}

const SearchTab: React.FC<TabContentProps> = ({
    tab,
    search,
    setSearch,
    targetLevel,
    setTargetLevel,
    setSelectedSong
}) => {

    const clearInput = () => {
        setSearch("");
        setSelectedSong(undefined)
    };

    if (tab === "level") {
        return (
            <>
                <div className="flex flex-col sm:flex-row items-center w-full">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by title or singer"
                        className="w-full sm:w-auto h-12 px-4 mb-2 sm:mb-0 bg-white border-2 border-gray-300 rounded-md"
                    />
                    <button onClick={clearInput} className="w-full sm:w-auto text-white bg-red-500 px-3 py-1 rounded-md sm:ml-2">
                        Clear
                    </button>
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-x-3 gap-y-1">
                    {[...Array(10)].map((_, idx) => (
                        <GradientButton
                            key={idx + 1}
                            onClick={() => setTargetLevel((idx + 1).toString())}
                            level={(idx + 1).toString()}
                            targetLevel={targetLevel}
                            className="w-full"
                        >
                            Level {idx + 1}
                        </GradientButton>
                    ))}
                </div>
            </>
        );
    } else if (tab === "search") {
        return (
            <div className="flex items-center w-full">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title or singer"
                    className="w-full h-12 px-4 bg-white border-2 border-gray-300 rounded-md"
                />
                <button onClick={clearInput} className="ml-2 text-white bg-red-500 px-3 py-1 rounded-md">
                    Clear
                </button>
            </div>
        );
    }

    return null;
};

export default SearchTab;