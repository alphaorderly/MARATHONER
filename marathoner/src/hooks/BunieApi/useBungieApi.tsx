import {ApiException} from 'bungie-marathon-api';

const useBungieApi = () => {
    const handler = async (call: () => Promise<void>) => {
        try {
            await call();
        } catch (error) {
            if (error instanceof ApiException) {
                if (error.httpStatusCode === 401) {
                    // Refresh token or logout
                    // recall handler after refresh token
                    // or redirect to login page
                    // await call();
                }
            }
        }
    };

    return handler;
};

export default useBungieApi;
