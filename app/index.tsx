import { router } from 'expo-router';
import { useEffect, useState } from 'react';


export default function LogIn() {
    const [isRouterMounted, setIsRouterMounted] = useState(false);

    useEffect(() => {
        setIsRouterMounted(true);
    }, []);

    useEffect(() => {
        if (isRouterMounted) {
            router.navigate("/login");
        }
    }, [isRouterMounted]);

  return null;
}
