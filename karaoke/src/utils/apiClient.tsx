const API_BASE_URL = 'http://localhost:8000';

export interface Score {
    song: string;
    score: number;
    machine: string;
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
    const response = await fetch(`${API_BASE_URL}/search_songs?query=${query}`);
    const data = await response.json();
    return data;
};