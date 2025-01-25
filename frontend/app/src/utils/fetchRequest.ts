export interface Params {
    url: string,
    body?: object,
    headers?: object,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
}

export default async function fetchRequest({ url, body, headers, method }: Params) {
    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: body ? JSON.stringify(body) : undefined,
            });

            if (response.ok) {
                const data = await response.json();
                return data;                    
            } else {
                const responseInfo = await response.json();
                throw new Error(responseInfo.info);
            }
        } catch (error) {
            return error.message;
        }
    };

    return fetchData();
}
