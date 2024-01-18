import React from 'react';
import { Box, Button } from '@chakra-ui/react';

interface AddContentProps {
    trigger: boolean;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const AddContent: React.FC<AddContentProps> = (props) => {
    return props.trigger ? (
        <Box className='popup'>
            <Box className="popup-inner">
                <Button className='close-btn' onClick={() => props.setTrigger(false)}></Button>
                {props.children}
            </Box>
        </Box>
    ) : null;
}

export default AddContent;
