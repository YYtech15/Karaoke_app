import React, { useEffect, useState } from "react";
import { MusicBySearchData, fetchLyrics } from "../../utils/apiClient";


interface SelectedSongProps {
    song: MusicBySearchData | null;
}

const SelectedSongInfo: React.FC<SelectedSongProps> = ({ song }) => {
    const [lyrics, setLyrics] = useState<string | null>(null);

    useEffect(() => {
        if (song) {
            fetchLyrics(song.title, song.singer)
                .then((lyrics) => setLyrics(lyrics))
                .catch((error) => console.error("Error fetching lyrics:", error));
        } else {
            setLyrics(null);
        }
    }, [song]);

    if (!song) {
        return <p className="text-center mt-4">選択された曲がありません</p>;
    }

    return (
        <div className="mt-4">
            <h2 className="text-center text-2xl font-bold mb-2">選択された曲</h2>
            <p className="text-center text-xl">{song.title} - {song.singer}</p>
            <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">歌詞</h3>
                <pre className="whitespace-pre-wrap">{lyrics || "歌詞が見つかりませんでした"}</pre>
            </div>
        </div>
    );
};

export default SelectedSongInfo;