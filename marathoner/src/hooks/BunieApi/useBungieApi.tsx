const useBungieApi = () => {
    const handler = async (call: () => Promise<void>) => {
        try {
            await call();
        } catch (error) {
            console.error(error);
        }
    };

    return handler;
};

export default useBungieApi;
