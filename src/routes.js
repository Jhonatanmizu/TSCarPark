import { createAppContainer, createSwitchNavigator } from "react-navigation";
import login from "./pages/login"
import createAccount from "./pages/createAccount";
import accountInfo from "./pages/accountInfo"
const Routes = createAppContainer(
    createSwitchNavigator({
        login,
        createAccount,
        accountInfo
    })
)
export default Routes;