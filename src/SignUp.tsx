import {Box, Checkbox, Image, ScrollView, Text} from "native-base";
import Logo from './assets/Logo.png'
import {Title} from "./components/Title";
import {InputText} from "./components/InputText";
import {useState} from "react";
import {VButton} from "./components/VButton";
import {sections} from "../utils/SignUpEntryText";

export default function SignUp() {
    const [sectionNum, setNum] = useState(0);

    function nextSection() {
        if (sectionNum < sections.length - 1) {
            setNum(sectionNum + 1)
        }
    }

    function previousSection() {
        if (sectionNum > 0) {
            setNum(sectionNum - 1)
        }
    }

    return (
        <ScrollView flex={1} p={5}>
            <Image source={Logo} alt="Logo Voll" alignSelf="center"/>

            <Title>
                {sections[sectionNum].title}
            </Title>
            <Box>
                {
                    sections[sectionNum]?.inputs?.map(input => {
                    return <InputText label={input.label} placeholder={input.placeholder} key={input.id}/>
                    })
                }
            </Box>
            <Box>
                {sectionNum > 1 && <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
                    Selecione o plano:
                </Text>
                }
                {
                    sections[sectionNum].checkbox.map(checkbox => {
                        return <Checkbox key={checkbox.id} value={checkbox.value}>
                            {checkbox.value}
                        </Checkbox>
                    })
                }
            </Box>
            {sectionNum > 0 && <VButton onPress={() => previousSection()} bgColor="gray.400">Voltar</VButton>}
            <VButton onPress={() => nextSection()} mt={4} mb={20}>Avançar</VButton>
        </ScrollView>
    )
}