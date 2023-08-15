import {FormControl, IInputProps, Input} from "native-base";
import {THEMES} from "../styles/themes";
import {ReactNode} from "react";

interface InputProps {
    label?: string;
    placeHolder?: string;
    secureTextEntry?: boolean;
    leftIcon?: ReactNode;
}

export function InputText({
    label,
    placeholder,
    secureTextEntry = false
}: InputProps): JSX.Element {
    return (
        <FormControl mt={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input
                placeholder={placeholder}
                size="lg"
                w="100%"
                borderRadius="lg"
                bgColor="gray.100"
                secureTextEntry={secureTextEntry}
                shadow={3}
            />
        </FormControl>
    );
}