import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Route } from '@react-navigation/native';



const Content = ({ route }) => {

    const { content } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{content}</Text>
        </View>
    )
};

export default Content;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
        // justifyContent: 'center'
    },
    text:{
        fontSize:20,
        color:'black'
    }
})

