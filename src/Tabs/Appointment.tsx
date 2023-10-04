import {Divider, ScrollView} from "native-base";
import {AppointmentCard} from "../components/AppointmentCard";
import {Title} from "../components/Title";
import {VButton} from "../components/VButton";

export default function Appointment() {
    return (
        <ScrollView p={5}>
            <Title color="blue.500">Minhas consultas</Title>
            <VButton mt={5} mb={5}>Agendar nova consulta</VButton>
            <Title color="blue.500" fontSize={"lg"} alignSelf="flex-start" mb={2}>Próximas consultas</Title>
            <AppointmentCard
                nome="Dr André"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/53875554?v=4"
                data="15/05/2021"
            />
            <Divider mt={5}/>
            <Title color="blue.500" fontSize={"lg"} alignSelf="flex-start" mb={2}>Consultas passadas</Title>
            <AppointmentCard
                nome="Dr André"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/53875554?v=4"
                data="15/05/2021"
                atendido
            />
            <AppointmentCard
                nome="Dr André"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/53875554?v=4"
                data="15/05/2021"
                atendido
            />
        </ScrollView>
    )
}