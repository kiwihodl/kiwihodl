import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../../GraphQL/Mutations/authMutations'; 
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, Icon, Text, Flex, Heading, Input, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

interface AddContentProps {
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddContent: React.FC<AddContentProps> = (props) => {
    const [loginMethod, setLoginMethod] = React.useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
        onCompleted: (data) => {
            console.log('Login Successful', data);
        },
        onError: (error) => {
            console.error('Login Error', error.message);
        },
    });

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({
                variables: { email, password },
            });
        } catch (error) {
            if (error instanceof Error) {
                console.error('Login Mutation Error', error.message);
            } else {
                console.error('Login Mutation Error', error);
            }
        }
    };

    return (
        <>
            <Button variant="unstyled" onClick={() => props.setTrigger(true)}>
                <Icon as={AddIcon} color="#FF8700" boxSize="1.8em" />
            </Button>
            <Modal isOpen={props.trigger} onClose={() => props.setTrigger(false)}>
                <ModalOverlay />
                <ModalContent backgroundColor="black" border="1px solid #FF8700" p={4}>
                    <ModalCloseButton />
                    <Flex as="form" direction="column" p={4} textAlign="center" justifyContent="center" onSubmit={handleLogin}>
                        <Heading mb={4}>Sign In or Up</Heading>
                        <VStack spacing={2} mb={4} mt={4}>
                            <Button colorScheme="teal" color="black" onClick={() => setLoginMethod('lnurl')}>Login with LNURL</Button>
                            <Button colorScheme="teal" color="black" onClick={() => setLoginMethod('email')}>Login with Email</Button>
                            <Button colorScheme="teal" color="black" onClick={() => setLoginMethod('signup')}>Sign Up</Button>
                        </VStack>
                        {loginMethod === 'email' && (
                            <Box pt={4} pb={4}>
                                <Input 
                                    placeholder="Email" 
                                    mb={2} 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    _hover={{ borderColor: "#FF8700" }}
                                    _focus={{ borderColor: "#FF8700" }}
                                    color="#FF8700"
                                    _placeholder={{ color: "#FF8700" }}
                                />
                                <Input 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    _hover={{ borderColor: "#FF8700" }}
                                    _focus={{ borderColor: "#FF8700" }}
                                    color="#FF8700"
                                    _placeholder={{ color: "#FF8700" }}
                                />
                                <Button type="submit" colorScheme="teal" color="black" mt={2}>Submit</Button>
                            </Box>
                        )}
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error.message}</p>}
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddContent;