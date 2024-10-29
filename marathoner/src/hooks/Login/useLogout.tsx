import {useResetAtom} from 'jotai/utils';
import authAtom from '~/store/jotai/authAtom';
import memberAtom from '~/store/jotai/memberAtom';

const useLogout = () => {
    const authReset = useResetAtom(authAtom);
    const memberReset = useResetAtom(memberAtom);

    const logout = () => {
        authReset();
        memberReset();
    };

    return logout;
};

export default useLogout;
