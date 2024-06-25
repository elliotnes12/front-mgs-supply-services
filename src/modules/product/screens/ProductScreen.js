import React from 'react';
import { useAuth } from '../../Auth/hooks';
import { Text } from 'react-native';

export function ProductScreen() {
    const { userInfo, isCustomer } = useAuth();
    const { name } = userInfo;

    return (
        <>
          <Text>dadsasdsa</Text>
        </>
    )
};