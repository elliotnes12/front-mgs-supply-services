import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { ItemService } from "../../components/core/items/ItemService";
import { Header } from "../../components/core/Header";

export function ServicesScreen() {
  const data = [
    {
      id: "1",
      title: "Office Cleaning",
      subTitle: "Cleaning the lobby area",
      date: "May 12, 2024",
      raiting: "4.8",
    },
    {
      id: "2",
      title: "Office Cleaning 2",
      subTitle: "Cleaning the lobby area",
      date: "May 12, 2024",
      raiting: "4.8",
    },
    {
      id: "3",
      title: "Office Cleaning 3",
      subTitle: "Cleaning the lobby area",
      date: "May 12, 2024",
      raiting: "4.8",
    },
    {
      id: "4",
      title: "Office Cleaning 4",
      subTitle: "Cleaning the lobby area",
      date: "May 12, 2024",
      raiting: "4.8",
    },
    {
      id: "5",
      title: "Office Cleaning 5",
      subTitle: "Cleaning the lobby area",
      date: "May 12, 2024",
      raiting: "4.8",
    },
    {
      id: "6",
      title: "Office Cleaning 6",
      subTitle: "Cleaning the lobby area",
      date: "May 12, 2024",
      raiting: "4.8",
    },
    {
      id: "7",
      title: "Office Cleaning 7",
      subTitle: "Cleaning the lobby area",
      date: "May 12, 2024",
      raiting: "4.8",
    },
  ];

  const search = (search) => {};

  return (
    <View style={styles.container}>
      <Header
        title={"Services"}
        goBack={true}
        subtitle={"Available services"}
        search={search}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ItemService item={item} />
          </View>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
  },
  flatListContainer: {
    paddingHorizontal: 24,
    marginTop: 40,
    paddingBottom: 180,
  },
});
