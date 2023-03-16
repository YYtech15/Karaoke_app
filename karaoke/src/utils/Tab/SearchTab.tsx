import GradientButton from "../Button/GradientButton";

interface TabContentProps {
    tab: string;
    search: string;
    setSearch: (value: string) => void;
    targetLevel: string;
    setTargetLevel: (value: string) => void;
}

const SearchTab: React.FC<TabContentProps> = ({
    tab,
    search,
    setSearch,
    targetLevel,
    setTargetLevel,
}) => {
    if (tab === "level") {
        return (
            <>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by title or singer"
                    className="w-full h-12 mb-4 px-4 bg-white border-2 border-gray-300 rounded-md"
                />
                <div className="grid grid-cols-10 gap-x-3 gap-y-1">
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
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title or singer"
                className="w-full h-12 mb-4 px-4 bg-white border-2 border-gray-300 rounded-md"
            />
        );
    }

    return null;
};

export default SearchTab;