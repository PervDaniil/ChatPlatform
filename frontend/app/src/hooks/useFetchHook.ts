import { useEffect, useState } from "react";


interface Params {
    url: string,
    body?: object,
    headers?: object,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
}

interface FetchResult {
    loading: boolean,
    error: string | null,
    data: JSON | null,
}

export default function useFetchRequest({ url, body, headers, method }: Params): FetchResult {
    const [error, setError] = useState(null);
    const [data, setData] = useState<JSON | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers,
                    },
                    body: JSON.stringify(body) || undefined
                });
            
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                }   
                throw new Error(`Failed to fetch! Response code : ${response.status}`)
        
            } catch (error) {
                setError(error.message);
        
            } finally {
                setLoading(false);
            } 
        }

        fetchData();
    }, [url, body, headers, method]);

    return { loading, error, data };
}