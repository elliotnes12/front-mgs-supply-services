import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../components/core/Header';
import { ItemWorkFlow } from '../../components/core/items/ItemWorkFlow';
import { useFocusEffect } from '@react-navigation/native';

export function WorkFlowScreen() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false)
    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            setData([
                {
                  id: '1',
                  title: "Office Cleaning",
                  subTitle: "Cleaning the lobby area",
                  date: "May 12, 2024",
                  supervisor: "Juan Pantoja",
                  employees: [
                    { name: "Alice" }, 
                    { name: "Bob" }
                  ]
                },
                {
                  id: '2',
                  title: "Office Cleaning 2",
                  subTitle: "Cleaning the lobby area",
                  date: "May 12, 2024",
                  supervisor: "Richard Ruiz",
                  employees: [
                    { name: "Charlie" }
                  ]
                },
                {
                  id: '3',
                  title: "Office Cleaning 3",
                  subTitle: "Cleaning the lobby area",
                  date: "May 12, 2024",
                  supervisor: "Maria Gomez",
                  employees: [
                    { name: "Dave" },
                    { name: "Eve" }
                  ]
                },
                {
                  id: '4',
                  title: "Office Cleaning 4",
                  subTitle: "Cleaning the lobby area",
                  date: "May 12, 2024",
                  supervisor: "Carlos Perez",
                  employees: [
                    { name: "Frank" }
                  ]
                },
                {
                  id: '5',
                  title: "Office Cleaning 5",
                  subTitle: "Cleaning the lobby area",
                  date: "May 12, 2024",
                  supervisor: "Ana Martinez",
                  employees: [
                    { name: "Grace" },
                    { name: "Heidi" }
                  ]
                },
                {
                  id: '6',
                  title: "Office Cleaning 6",
                  subTitle: "Cleaning the lobby area",
                  date: "May 12, 2024",
                  supervisor: "Luis Fernandez",
                  employees: [
                    { name: "Ivan" }
                  ]
                },
                {
                  id: '7',
                  title: "Office Cleaning 7",
                  subTitle: "Cleaning the lobby area",
                  date: "May 12, 2024",
                  supervisor: "Sofia Lopez",
                  employees: [
                    { name: "Judy" },
                    { name: "Mallory" }
                  ]
                }
              ]);
              setLoading(false)
        }, [])
    );

    return (
        <>
            <Header title={"WorkFlow"} />
            <FlatList
                data={data}
                style={{ flex: 1 }}
                renderItem={({ item }) => <ItemWorkFlow item={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingHorizontal:24,paddingVertical:20}}
            />
        </>
    );
}