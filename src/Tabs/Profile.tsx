import {Avatar, Divider, Image, ScrollView, Text, VStack} from "native-base";
import {Title} from "../components/Title";
import Logo from "../assets/Logo.png";

export default function Profile() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Avatar size="xl" source={{uri: "https://avatars.githubusercontent.com/u/53875554?v=4"}} mt={5}/>

                <Title color="blue.500">Informações pessoais</Title>
                <Title fontSize="lg" mb={1}>João Victor</Title>
                <Text>15/05/2002</Text>
                <Text>15/05/2002</Text>

                <Divider mt={5}/>

                <Title color="blue.500" mb={1}>Historico médico</Title>
                <Text>bronquite</Text>
                <Text>sinosite</Text>
            </VStack>
        </ScrollView>
    )
}