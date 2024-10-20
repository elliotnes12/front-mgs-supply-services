import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';
import { ItemText } from './ItemText';
import { ItemImage } from './ItemImage';
import { styles } from '../styles/ListMessages.styles';
import { useEffect } from 'react';

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
    <View style={styles.list}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        ref={flatListRef}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}
