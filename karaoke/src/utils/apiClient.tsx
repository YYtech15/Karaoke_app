const API_BASE_URL = 'http://localhost:8000';

export interface Score {
    song: string;
    score: number;
    machine: string;
}

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


export async function createScore(score: Score): Promise<Score> {
    const response = await fetch(`${API_BASE_URL}/scores/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(score),
    });

    if (!response.ok) {
        throw new Error('Failed to create score');
    }

    return response.json();
}

export async function fetchScores(): Promise<Score[]> {
    const response = await fetch(`${API_BASE_URL}/scores/`);

    if (!response.ok) {
        throw new Error('Failed to fetch scores');
    }

    return response.json();
}

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