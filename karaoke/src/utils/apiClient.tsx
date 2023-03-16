const API_BASE_URL = 'http://localhost:8000';

export interface MusicBySearchData {
    title: string;
    singer: string;
}

export interface MusicByLevelData {
    id: number;
    title: string;
    singer: string;
    level: string;
}

export interface SongSearchData {
    title: string;
    singer: string;
    id: number;
    thumbnail: string;
}

export interface Score {
    id: number;
    title: string;
    artist: string
    machine: string;
    score: number;
}

export interface DetailSong {
    id: number;
    title: string;
    artist: string
    score: number;
    scoreHistory: [];
    lyrics: string;
}

export const fetchScores = async (): Promise<Score[]> => {
    const response = await fetch(`${API_BASE_URL}/scores/`);
    const data = await response.json();
    return data;
};

export const createScore = async (score: Omit<Score, "id">): Promise<Score> => {
    const response = await fetch(`${API_BASE_URL}/scores/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(score),
    });
    const data = await response.json();
    return data;
};

export const deleteScore = async (scoreId: number): Promise<void> => {
    await fetch(`${API_BASE_URL}/scores/${scoreId}`, {
        method: "DELETE",
    });
};

export const searchSongs = async (query: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/search_songs/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        const data = await response.json();
        return data.songs;
    } catch (error) {
        console.error("Error searchSongs:", error);
        return null;
    }
}

export const fetchLyrics = async (title: string, artist: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/get_lyrics/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, artist }),
        });

        const data = await response.json();
        return data.lyrics;
    } catch (error) {
        console.error("Error fetching lyrics:", error);
        return null;
    }
};