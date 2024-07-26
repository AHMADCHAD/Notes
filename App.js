import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Content from './Screens/Content';
import Tabs from './navigation/Tabs';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
      <NavigationContainer>
        
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Tabs}  />
          <Stack.Screen name="Content" component={Content} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

