import {Box, Icon, Input, ScrollView, Stack, VStack} from "native-base";
import {VButton} from "../components/VButton";
import {Title} from "../components/Title";
import Ionicons from "react-native-vector-icons/Ionicons";
import {AppointmentCard} from "../components/AppointmentCard";


const datas = [
    {
        id: 1,
        nome: 'Dr John Bacon',
        especialidade: 'cardiologista',
        foto: 'https://avatars.githubusercontent.com/u/53875554?v=4',
        data: '15/05/2021',
    },
    {
        id: 2,
        nome: 'Dr John Bacon',
        especialidade: 'cardiologista',
        foto: 'https://avatars.githubusercontent.com/u/53875554?v=4',
        data: '15/05/2021',
    },
    {
        id: 3,
        nome: 'Dr John Bacon',
        especialidade: 'cardiologista',
        foto: 'https://avatars.githubusercontent.com/u/53875554?v=4',
        data: '15/05/2021',
    },
]
export default function Explore() {
    return (
        <ScrollView>
            <Box alignItems="center" mt={10} w="100%">
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
            <Title color="blue.500" alignContent="center">Resultado da busca</Title>

            <VStack p={5} alignItems="center">
                {
                    datas.map(data => (
                        <AppointmentCard key={data.id} nome={data.nome} foto={data.foto} data={data.data} especialidade={data.especialidade} />
                    ))
                }
            </VStack>
        </ScrollView>
    )
}