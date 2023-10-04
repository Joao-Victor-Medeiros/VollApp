import {Box, Divider, FlatList, Icon, Image, Input, ScrollView, Stack, Text, TextArea, VStack} from "native-base";
import Logo from "../assets/Logo.png";
import {Title} from "../components/Title";
import Ionicons from "react-native-vector-icons/Ionicons";
import {VButton} from "../components/VButton";
import { testimonies } from "../../utils/TestimoniesMock";

const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
}, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
}, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
}, {
    id: "58694a0f-3da1-471f-bd96-145341e29d72",
    title: "Third Item"
}, {
    id: "58694a0f-3da1-471f-bd96-145571e459d72",
    title: "Third Item"
}
];
export default function Main() {
    return (
        <ScrollView flex={1}>
            <VStack ml={5}>
                <Image source={Logo} alt="Logo Voll" mt={5}/>
                <Title color="blue.500" textAlign="left">Boas vindas</Title>
            </VStack>

            <Box alignItems="center" mt={5} w="100%">
                <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" shadow={3}
                     _light={{
                         backgroundColor: "gray.50"
                     }}>
                    <Stack p="4" w={80}>
                        <Stack space={2}>
                            <Input placeholder="Digite a localização" size="lg" width="100%" borderRadius="lg" py="2"
                                   px="2"
                                   InputLeftElement={<Icon ml="2" size="6" color="gray.400"
                                                           as={<Ionicons name="ios-search"/>}/>}/>
                            <Input placeholder="Digite a localização" size="lg" width="100%" borderRadius="lg" py="2"
                                   px="2"
                                   InputLeftElement={<Icon ml="2" size="6" color="gray.400"
                                                           as={<Ionicons name="location"/>}/>}/>
                        </Stack>
                        <VButton mt={5}>Buscar</VButton>
                    </Stack>
                </Box>
            </Box>

            <Title m={6} color="blue.800">Depoimentos</Title>
            <VStack space={3} divider={<Divider />} w="100%">
                {
                    testimonies.map(testimony => (
                        <Box key={testimony.id} w="90%" borderRadius="lg" p={2} ml={4}>
                            <Text color="gray.300" fontSize="md" textAlign="justify">
                                {testimony.text}
                            </Text>
                            <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{testimony.titulo}</Text>
                        </Box>
                    ))
                }
            </VStack>
        </ScrollView>
    )
}