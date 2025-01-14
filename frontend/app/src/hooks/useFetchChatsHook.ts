import useFetchRequest from './useFetchHook.ts';
import { FetchResult } from './useFetchHook.ts';


export default function useFetchChats(): FetchResult {
    const { loading, error, data } = useFetchRequest({
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/v3/chats/',
        // headers: {
        //     'Authorization': `Bearer ${accessToken}`,
        // },
    });

    return { loading, error, data };
}
