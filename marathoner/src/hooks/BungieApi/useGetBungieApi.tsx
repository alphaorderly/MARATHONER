/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import useKy from '../KyInstance/useKy';

type ResponseType<T> = {
    data: T;
    loading: boolean;
    refresh: () => void;
};

const useGetBungieApi = <T,>(
    endPoint: string,
    callback?: (data: T) => void,
): ResponseType<T | undefined> => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const ky = useKy();

    const refresh = () => {
        setRefreshing((prev) => !prev);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response: T = await ky(endPoint).json();

                setData(response);

                if (callback) {
                    callback(response);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [refreshing]);

    return {data, loading, refresh};
};

export default useGetBungieApi;
