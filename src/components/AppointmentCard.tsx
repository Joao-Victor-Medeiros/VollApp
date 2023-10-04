import {Avatar, Text, VStack} from "native-base";
import {VButton} from "./VButton";

interface CardProps {
    nome: string,
    foto: string,
    especialidade: string,
    data?: string,
    atendido?: boolean
    agendado?: boolean
}
export function AppointmentCard({
    nome,
    foto,
    data,
    especialidade,
    atendido,
    agendado

}: CardProps) {
    return(
        <VStack w="100%" bg={atendido ? 'blue.100' : 'white'} p={5} borderRadius="lg" shadow="2" mb={2}>
            <VStack flexDir={"row"}>
                <Avatar size="lg" source={{uri: foto}}/>
                <VStack pl={4} >
                    <Text fontSize="md" bold>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>

            <VButton mt={4}>{atendido ? 'Cancelar' : 'Agendar consulta'}</VButton>
        </VStack>
    )
}