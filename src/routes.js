import { createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import login from "./pages/login"
import createAccount from "./pages/createAccount";
import accountInfo from "./pages/accountInfo"
import Home from "./pages/Home"
import MonthPlans from "./pages/MonthPlans"
import Relatorio from "./pages/Relatorio";
const Routes = createAppContainer(
    createSwitchNavigator({
        login,
        createAccount,
        accountInfo,
        Home,
        MonthPlans,
        Relatorio
    })
    
)
export default Routes;