import React from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, Icon, Text, Flex, Heading, Input, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

interface AddContentProps {
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddContent: React.FC<AddContentProps> = (props) => {
    const [loginMethod, setLoginMethod] = React.useState<string | null>(null);

    return (
        <>
            <Button variant="unstyled" onClick={() => props.setTrigger(true)}>
                <Icon as={AddIcon} color="#FF8700" boxSize="1.8em" />
            </Button>
            <Modal isOpen={props.trigger} onClose={() => props.setTrigger(false)}>
                <ModalOverlay />
                <ModalContent backgroundColor="black" border="1px solid #FF8700">
                    <ModalCloseButton />
                    <Flex direction="column" p={4} textAlign="center" justifyContent="center">
                        <Heading mb={4}>Sign In or Up</Heading>
                        <VStack spacing={2} mb={4}>
                            <Button colorScheme="teal" onClick={() => setLoginMethod('lnurl')}>Login with LNURL</Button>
                            <Button colorScheme="teal" onClick={() => setLoginMethod('email')}>Login with Email</Button>
                            <Button colorScheme="teal" onClick={() => setLoginMethod('signup')}>Sign Up</Button>
                        </VStack>
                        {loginMethod === 'email' && (
                            <>
                                <Input placeholder="Email" mb={2} />
                                <Input placeholder="Password" />
                            </>
                        )}
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddContent;