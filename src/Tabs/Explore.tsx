import {AspectRatio, Box, Center, Heading, HStack, Stack, Text} from "native-base";
import {InputText} from "../components/InputText";
import {VButton} from "../components/VButton";

export default function Explore() {
    return (
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
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <InputText placeholder="Digite a especialidade"></InputText>
                        <InputText placeholder="Digite a Localização"></InputText>
                    </Stack>
                    <VButton>Buscar</VButton>
                </Stack>
            </Box>
        </Box>
    )
}