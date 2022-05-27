import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CarList from './src/screens/CarList';
import CarImage from './src/screens/CarImage';

const App = () => {

const Stack = createNativeStackNavigator()

return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CarList" component={CarList} />
      <Stack.Screen name="CarImage" component={CarImage} />
    </Stack.Navigator>
  </NavigationContainer>
)



}



export default App