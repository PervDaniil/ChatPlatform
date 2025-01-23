import useFetchRequest from './useFetchHook.ts';
import { FetchResult } from './useFetchHook.ts';


export default function useFetchUsers(): FetchResult {
    const { loading, error, data } = useFetchRequest({
        url: 'http://127.0.0.1:8000/api/v2/users/',
        method: 'GET',
    });

    return { loading, error, data };
}