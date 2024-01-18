import React, { useState } from 'react';
import { Box, Button, Input, Select, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddContent from '../addcontent/AddContent';
import Carousel from '../carousel/Carousel';

const Education: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClickOutside = (e: MouseEvent) => {
        if (!(e.target as HTMLElement).matches('.dropbtn')) {
            const myDropdown = document.getElementById("myDropdown");
            if (myDropdown && myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <Box className='EducationMain'>
            <Box className='DropAndSearch'>
                <Box className='SearchBarDiv'>
                    <Select placeholder="Select option" id="alphalist">
                        <option value="a">Author</option>
                        <option value="b">Title</option>
                        <option value="c">Topic</option>
                    </Select>

                    <Input placeholder="Search..." />

                    <Button leftIcon={<AddIcon />} onClick={onOpen}>
                        Add
                    </Button>

                    <AddContent isOpen={isOpen} onClose={onClose}>
                        <a href='' className='SignUp'>
                            <h3>
                                Sign Up
                            </h3>
                        </a>
                        <div>
                            <Button>
                                ⚡ Login With LNURL
                            </Button>
                        </div>
                        <div>
                            <label>
                                <h3>
                                    Username
                                </h3>
                                <Input type="text" />
                            </label>
                        </div>
                        <div>
                            <label>
                                <h3>
                                    Password
                                </h3>
                                <Input type="password" />
                            </label>
                        </div>
                        <div>
                            <Button type="submit">
                                Login via Email
                            </Button>
                        </div>
                    </AddContent>
                </Box>
            </Box>
            <Carousel />
        </Box>
    );
};

export default Education;