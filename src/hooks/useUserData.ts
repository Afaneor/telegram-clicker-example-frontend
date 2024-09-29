// src/hooks/useUserData.ts
import { useQuery } from 'react-query';
import api from '../api';

interface UserData {
    balance: number;
    income_per_hour: number;
}

export const useUserData = () => {
    return useQuery<UserData>('user-data', () =>
        api.get('/user/users/get-info/').then((res) => res.data),
    );
};
