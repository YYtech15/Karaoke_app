interface MusicData {
  id: number;
  title: string;
  singer: string;
  level: string;
}

interface SongCardProps {
  item: MusicData;
  index: number;
}

const SongsByLevel: React.FC<SongCardProps> = ({ item, index }) => {
  return (
    <div
      key={item.id}
      className="min-w-[400px] m-2 p-4 rounded-lg border-2 border-dashed border-blue-700 bg-blue-50 relative"
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
        {index + 1}
      </div>
      <div className="ml-16">
        <h5 className="text-indigo-900 font-semibold text-2xl mb-1">{item.title}</h5>
        <p className="text-red-600 text-xl mb-2 italic">{item.singer}</p>
        <p className="text-gray-600">Level: {item.level}</p>
      </div>
    </div>
  );
};

export default SongsByLevel
