import React from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, Icon } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

interface AddContentProps {
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const AddContent: React.FC<AddContentProps> = (props) => {
    return (
        <>
            <Button variant="unstyled" onClick={() => props.setTrigger(true)}>
                <Icon as={AddIcon} color="#FF8700" boxSize="1.8em" />
            </Button>
            <Modal isOpen={props.trigger} onClose={() => props.setTrigger(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    {props.children}
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddContent;