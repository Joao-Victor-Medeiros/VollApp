import {Box, Divider, Icon, Image, Input, ScrollView, Stack, VStack} from "native-base";
import Logo from "../assets/Logo.png";
import {Title} from "../components/Title";
import Ionicons from "react-native-vector-icons/Ionicons";
import {InputText} from "../components/InputText";
import {VButton} from "../components/VButton";

export default function Main() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} ml={5}>
                <Image source={Logo} alt="Logo Voll" mt={5}/>
                <Title color="blue.500" textAlign="left">Boas vindas</Title>
            </VStack>

            <Box alignItems="center" mt={5} w="100%">
                <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Stack p="12" space={3}>
                        <Stack space={2}>
                            <Input placeholder="Digite a especialidade" variant="filled" width="100%" borderRadius="10" py="1" px="2"
                                   InputLeftElement={<Icon ml="2" size="4" color="gray.400"
                                                           as={<Ionicons name="ios-search"/>}/>}/>
                            <Input placeholder="Digite a localização" variant="filled" width="100%" borderRadius="10" py="1" px="2"
                                   InputLeftElement={<Icon ml="2" size="4" color="gray.400"
                                                           as={<Ionicons name="location"/>}/>}/>
                        </Stack>
                        <VButton>Buscar</VButton>
                    </Stack>
                </Box>
            </Box>

        </ScrollView>
)
}