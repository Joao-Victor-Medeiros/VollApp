import {NativeBaseProvider, StatusBar} from "native-base";

import {THEMES} from "./src/styles/themes";
import SignUp from "./src/SignUp";
import Login from "./src/Login";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    return (
        <NativeBaseProvider theme={THEMES}>
            <StatusBar backgroundColor={THEMES.colors.blue[800]}/>
            <Login/>
            {/*<SignUp/>*/}
        </NativeBaseProvider>
    );
}