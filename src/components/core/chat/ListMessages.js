import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import { ItemText } from './ItemText';
import { ItemImage } from './ItemImage';
import { styles } from '../styles/ListMessages.styles';

export function ListMessages({ messages }) {
  const flatListRef = useRef();

  const renderItem = ({ item }) => {
    if (item.type === 'TEXT') {
      return <ItemText message={item} />;
    }
    if (item.type === 'IMAGE') {
      return <ItemImage message={item} />;
    }
    return null;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <FlatList
        data={messages}
        keyboardShouldPersistTaps="always"
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}

        ref={flatListRef}
      />
    </View>
  );
}
