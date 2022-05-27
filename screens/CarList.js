import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'


const CarList = () => {
    const cars = [
        {name: 'Car 1', make: 'Toyota', model: 'Supra', year: '2022' },
        {name: 'Car 2', make: 'Toyota', model: 'Supra', year: '2022' },
        {name: 'Car 3', make: 'Toyota', model: 'Supra', year: '2022' },
        {name: 'Car 4', make: 'Toyota', model: 'Supra', year: '2022' }
    ]
    return (
        <View>
            <FlatList 
            keyExtractor={car => car.make - car.model}
            data={cars}
            renderItem={({ item }) => {
                return (
                    <Text>{item.name}</Text>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CarList