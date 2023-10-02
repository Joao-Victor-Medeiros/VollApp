import {Box, Center, Divider, Heading, HStack, Icon, Image, Input, ScrollView, Stack, Text, VStack} from "native-base";
import Logo from "../assets/Logo.png";
import {Title} from "../components/Title";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Main() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} ml={5}>
                <Image source={Logo} alt="Logo Voll" mt={5}/>
                <Title color="blue.500" textAlign="left">Boas vindas</Title>
            </VStack>


            <VStack space={5} w="100%" maxW="300px" divider={<Box px="2">
                <Divider/>
            </Box>}>
                <VStack w="100%" space={5} alignSelf="center">
                    <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2"
                           InputLeftElement={<Icon ml="2" size="4" color="gray.400"
                                                   as={<Ionicons name="ios-search"/>}/>}/>
                </VStack>
            </VStack>
        </ScrollView>
)
}