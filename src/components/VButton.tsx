import {Button} from "native-base";

export function VButton({children, ...props}) {
    return (
        <Button w="100%" bg="blue.800" borderRadius="lg" mt={10}{...props}>
            {children}
        </Button>
    );
}