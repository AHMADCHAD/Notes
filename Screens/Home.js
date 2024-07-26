import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        content: 'here is the content of the first object'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        content: 'here is the content of the first object'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        content: 'here is the content of the first object'
    },
];



const Item = ({ title, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};



const Home = () => {

    
    const navigation = useNavigation();

    const handlePress = (item) => {
        
        navigation.navigate('Content', { content: item.content });

    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <Item title={item.title} onPress={() => handlePress(item)} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'black'

    },
    text: {
        fontSize: 20,
        color: 'black',
    },

    // #EDD1E0, #F0DEDE, #F1EFF0, #F8ECD7, #F8D5C1
    item: {
        backgroundColor: 'white',
        width: '90%',
        height: 100,
        alignSelf: 'center',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        marginVertical: 5,
        justifyContent: 'center',
        paddingHorizontal: 10

    },
});

export default Home;
