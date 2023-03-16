interface MusicSearchData {
    title: string;
    singer: string;
}

interface SelectedSongProps {
    song: MusicSearchData | null;
}

const SelectedSongInfo: React.FC<SelectedSongProps> = ({ song }) => {
    if (!song) {
        return <p className="text-center mt-4">選択された曲がありません</p>;
    }

    return (
        <div className="mt-1">
            <p className="text-center text-blue-400 text-xl font-bold mb-2">選択された曲</p>
            <p className="text-center text-xl">{song.title} - {song.singer}</p>
            {/* ここに歌詞などの曲情報を追加 */}
        </div>
    );
};
export default SelectedSongInfo