import React from "react";
import Routes from "./src/routes";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from "@react-navigation/native";

// import Home from "./src/pages/Home"
// import accoutInfo from "./src/pages/accountInfo";
// import Relatorio from "./src/pages/Relatorio";

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home}  />
//       <Tab.Screen name="Relatorio" component={Relatorio}  />
//       <Tab.Screen name="Informações da conta" component={accoutInfo}   />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return <Routes />;
}

// export default function App(){
//   return (
//     <NavigationContainer>
//     <MyTabs/>
//   </NavigationContainer>
//   )
// }