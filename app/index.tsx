import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

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
