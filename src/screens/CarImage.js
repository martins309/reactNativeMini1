import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import CarImageDetails from './Components/CarImageDetails'

const CarImage = () => {
    return (
    <ScrollView>
        <ScrollView horizontal={true}>
            <View>
               <CarImageDetails 
               title="supra"
               source={require('../screens/Images/supra.jpg')}
               year={2022}
               />
               <CarImageDetails 
               title="350z"
               source={require('../screens/Images/350z.jpg')}
               year={2008}
               />
               <CarImageDetails 
               title="r35"
               source={require('../screens/Images/r35.jpg')}
               year={2018}
               />
               <CarImageDetails 
               title="zonda"
               source={require('../screens/Images/zonda.png')}
               year={2022}
               />
            </View>
        </ScrollView>
    </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default CarImage