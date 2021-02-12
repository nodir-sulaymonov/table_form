import {useEffect, useState} from 'react';

type UserState = unknown[];

function useGetUsers(url: string) : [boolean, UserState] {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setData(data)
                    setLoading(false)
                }, 2000)
            })
            .catch((error) => console.log(error.message))
    }, [url])
    return [isLoading, data];
}

export default useGetUsers;
