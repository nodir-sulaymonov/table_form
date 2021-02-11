import {useEffect, useState} from 'react';

function useGetUsers(url: string) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => console.log(error.message))
    }, [url])
    return [isLoading, data];
}

export default useGetUsers;
