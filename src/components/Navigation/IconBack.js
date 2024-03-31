import { View, Text } from 'react-native';
import React from 'react';
import { NativeBaseConfigProvider, IconButton } from "native-base";
import { ChevronLeftIcon } from 'native-base';

import { useNavigation } from "@react-navigation/native";

export default function IconBack() {
  const navigation = useNavigation();

  return (
  
      <IconButton
        icon={<ChevronLeftIcon />}
        padding={0}
        onPress={navigation.goBack}
      />
  );
}
