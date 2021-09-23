import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import Home from "./Home"
import accoutInfo from "./accountInfo";
import Relatorio from "./Relatorio";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Relatorio" component={Relatorio}  />
      <Tab.Screen name="Informações da conta" component={accoutInfo}   />
    </Tab.Navigator>
  );
}

export default function App(){
    return (
      <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
    )
  }