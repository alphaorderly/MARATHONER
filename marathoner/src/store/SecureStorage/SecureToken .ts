import SecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

class SecureToken {
    private static accessTokenKey = 'accessToken';
    private static membershipIdKey = 'membership_id';

    // 토큰과 멤버십 ID 저장
    static async saveCredentials(
        accessToken: string,
        membershipId: string,
    ): Promise<void> {
        try {
            await SecureStorage.setItem(
                SecureToken.accessTokenKey,
                accessToken,
                {
                    accessible: ACCESSIBLE.WHEN_UNLOCKED,
                },
            );
            await SecureStorage.setItem(
                SecureToken.membershipIdKey,
                membershipId,
                {
                    accessible: ACCESSIBLE.WHEN_UNLOCKED,
                },
            );
        } catch (error) {
            console.error('Error saving credentials:', error);
        }
    }

    // 토큰 가져오기
    static async getAccessToken(): Promise<string | null> {
        try {
            return await SecureStorage.getItem(SecureToken.accessTokenKey);
        } catch (error) {
            console.error('Error getting access token:', error);
            return null;
        }
    }

    // 멤버십 ID 가져오기
    static async getMembershipId(): Promise<string | null> {
        try {
            return await SecureStorage.getItem(SecureToken.membershipIdKey);
        } catch (error) {
            console.error('Error getting membership ID:', error);
            return null;
        }
    }

    // 토큰과 멤버십 ID 삭제
    static async clearCredentials(): Promise<void> {
        try {
            await SecureStorage.removeItem(SecureToken.accessTokenKey);
            await SecureStorage.removeItem(SecureToken.membershipIdKey);
        } catch (error) {
            console.error('Error clearing credentials:', error);
        }
    }
}

export default SecureToken;
