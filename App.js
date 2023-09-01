import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import ShopScreen from './Screens/ShopScreen';
import ShopDetailScreen from './Screens/ShopDetailScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={() => ({ title: 'Dynamic Technologies' })} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} options={() => ({ title: 'Dtech Shop' })}/>
        <Stack.Screen name="ShopDetailScreen" component={ShopDetailScreen} options={({ route }) => ({ title: route.params?.item.name || 'Shop Details' })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
