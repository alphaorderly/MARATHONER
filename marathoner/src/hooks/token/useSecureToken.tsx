import {useEffect, useState} from 'react';
import SecureToken from '../../store/SecureStorage/SecureToken ';

// Hook 구현
const useSecureToken = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [membershipId, setMembershipId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadCredentials = async () => {
            try {
                const storedAccessToken = await SecureToken.getAccessToken();
                const storedMembershipId = await SecureToken.getMembershipId();
                setAccessToken(storedAccessToken);
                setMembershipId(storedMembershipId);
            } catch (error) {
                console.error('Error loading credentials:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadCredentials();
    }, []);

    const saveCredentials = async (
        newAccessToken: string,
        newMembershipId: string,
    ) => {
        try {
            await SecureToken.saveCredentials(newAccessToken, newMembershipId);
            setAccessToken(newAccessToken);
            setMembershipId(newMembershipId);
        } catch (error) {
            console.error('Error saving credentials:', error);
        }
    };

    const clearCredentials = async () => {
        try {
            await SecureToken.clearCredentials();
            setAccessToken(null);
            setMembershipId(null);
        } catch (error) {
            console.error('Error clearing credentials:', error);
        }
    };

    return {
        accessToken,
        membershipId,
        isLoading,
        saveCredentials,
        clearCredentials,
    };
};

export default useSecureToken;
