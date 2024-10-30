import {API_KEY} from '@env';
import {useAtomValue} from 'jotai';
import ky from 'ky';
import authAtom from '~/store/jotai/authAtom';

const useKy = () => {
    const auth = useAtomValue(authAtom);

    const kyInstance = ky.create({
        prefixUrl: 'https://www.bungie.net/Platform',
        headers: {
            'X-API-Key': API_KEY,
            Authorization: `Bearer ${auth.accessToken}`,
        },
        hooks: {
            beforeRetry: [
                // add some refresh token logic here
            ],
        },
        retry: 2,
    });

    return kyInstance;
};

export default useKy;
