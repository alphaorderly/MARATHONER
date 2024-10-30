/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import useKy from '../KyInstance/useKy';
import useLogout from '../Login/useLogout';
import {HTTPError} from 'ky';

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
    const logout = useLogout();

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
                if (error instanceof HTTPError) {
                    // If the error is 401, then the token is invalid
                    // After refresh token bug is fixed, this will be removed and move to the kyInstance hook
                    if (error.response.status === 401) {
                        logout();
                    }
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [refreshing]);

    return {data, loading, refresh};
};

export default useGetBungieApi;
