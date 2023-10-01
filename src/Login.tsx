import {Box, Image, Link, Text, VStack} from "native-base";
import Logo from './assets/Logo.png'
import {TouchableOpacity} from "react-native";
import {Title} from "./components/Title";
import {VButton} from "./components/VButton";
import {InputText} from "./components/InputText";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function Login() {
    return (
        <VStack flex={1} alignItems="center" p={1} justifyContent={"center"}>
            <Image mb={4} source={Logo} alt="Logo Voll"/>

            <Title>Faça login em sua conta</Title>
            <Box>
                <InputText
                    label="Email"
                    placeholder="Insira seu endereço de e-mail"
                />
                <InputText
                    label="Senha"
                    placeholder="Insira sua senha"
                />
            </Box>
            <VButton mt={8}>Entrar</VButton>
            <Link href='https://www.alura.com.br' mt={2}>Esqueceu sua senha?</Link>

            <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                <Text>Ainda não tem cadastro?</Text>
                <TouchableOpacity>
                    <Text color={"blue.500"}>faça seu cadastro</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}

