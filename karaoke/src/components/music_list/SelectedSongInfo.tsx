import { useEffect, useState } from "react";
import { MusicBySearchData, fetchLyrics } from "../../utils/apiClient";

interface SelectedSongProps {
    song: MusicBySearchData | undefined;
}

const SelectedSongInfo: React.FC<SelectedSongProps> = ({ song }) => {
    const [lyrics, setLyrics] = useState<string | null>(null);
    const [showFullLyrics, setShowFullLyrics] = useState<boolean>(false);

    useEffect(() => {
        if (song) {
            fetchLyrics(song.title, song.singer)
                .then((lyrics) => setLyrics(lyrics))
                .catch((error) => console.error("Error fetching lyrics:", error));
        } else {
            setLyrics(null);
        }
    }, [song]);

    const toggleLyricsDisplay = () => {
        setShowFullLyrics(!showFullLyrics);
    };

    const displayLyrics = () => {
        if (!lyrics) {
            return "歌詞が見つかりませんでした";
        }

        if (showFullLyrics) {
            return lyrics;
        }

        return lyrics.length > 100 ? lyrics.slice(0, 100) + "..." : lyrics;
    };

    if (!song) {
        return <p className="text-center mt-4">選択された曲がありません</p>;
    }

    return (
        <div className="mt-4">
            <h2 className="text-center text-2xl font-bold mb-2">選択された曲</h2>
            <p className="text-center text-xl">{song.title} - {song.singer}</p>
            <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">歌詞</h3>
                <pre className="whitespace-pre-wrap">{displayLyrics()}</pre>
                <button
                    onClick={toggleLyricsDisplay}
                    className="bg-blue-400 text-white px-4 py-2 rounded mt-2"
                >
                    {showFullLyrics ? "歌詞を省略" : "歌詞を全表示"}
                </button>
            </div>
        </div>
    );
};

export default SelectedSongInfo;