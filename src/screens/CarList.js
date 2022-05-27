import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'


const CarList = () => {
    const cars = [
        {name: 'Car 1', make: 'Toyota', model: 'Supra', year: '2022' },
        {name: 'Car 2', make: 'Nissan', model: 'R35', year: '2019' },
        {name: 'Car 3', make: 'Nissan', model: '350z', year: '2008' },
        {name: 'Car 4', make: 'Pagani', model: 'Zonda', year: '2022' }
    ]
    return (
        <View>
            <FlatList 
            keyExtractor={car => car.make - car.model}
            data={cars}
            renderItem={({ item }) => {
                return (
                    <Text>{item.make} - {item.model}</Text>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CarList