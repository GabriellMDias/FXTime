import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';


export default function AppInitializer() {
    const [isRouterMounted, setIsRouterMounted] = useState(false);

    useEffect(() => {
        setIsRouterMounted(true);
    }, []);

    useEffect(() => {
        if (isRouterMounted) {
            const checkToken = async () => {
                const token = await AsyncStorage.getItem('authToken');
                if (token) {
                    router.replace('/(tabs)');
                } else {
                    router.navigate('/login');
                }
            };
            checkToken();
        }
    }, [isRouterMounted]);

  return null;
}
