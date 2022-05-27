import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
             <Text style={styles.style}> Welcome Home Hoe</Text>
             <Button title="MyCars ;)" onPress={() => navigation.navigate("CarList")}/>
             <Button title="CarImage" onPress={() => navigation.navigate("CarImage")}/>
        </View>
       
    )
}

const styles = StyleSheet.create({
    style: {
        fontSize: 20,
        flex: 1,
        left: 110,
        color: 'blue'
    }

})

export default HomeScreen 