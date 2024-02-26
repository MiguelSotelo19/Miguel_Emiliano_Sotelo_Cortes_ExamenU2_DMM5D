import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Home from './screens/home';
import Perfil from './screens/perfil';
import Search from './screens/search';
//screens, 2 package, assets, App

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Inicio" component={Home} options={{
          headerShown: false,
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: {fontSize: 20},
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" size={25} color="black" />
          )
        }} />
        
        <Tab.Screen name="Buscar" component={Search} options={{
          headerShown: false,
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: {fontSize: 20},
          tabBarIcon: ({color, size}) => (
            <Feather name="search" size={25} color="black" />
          )
        }} />

        <Tab.Screen name="Perfil" component={Perfil} options={{
          headerShown: false,
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: {fontSize: 20},
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={25} color="black" />
          )
        }} /> 

      </Tab.Navigator>
    </NavigationContainer>
  );
}
