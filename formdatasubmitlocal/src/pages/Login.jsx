import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";

let arr = JSON.parse(localStorage.getItem("emaildata")) || [];
const loginDetails = {
    name: "",
    link: "",
    date: "",
};
const SimpleCard = () => {
    const [details, setDetails] = useState(loginDetails);

    const handlelogin = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleloginsubmit = () => {
        arr.push(details);
        localStorage.setItem("emaildata", JSON.stringify(arr));
        console.log(details);
        setDetails(loginDetails);
        alert("success");
    };

    const deleteData = (index) => {
        arr.splice(index, 1);
        localStorage.setItem("emaildata", JSON.stringify(arr));
    };

    return (
        <>
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}>
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"}>
                            Sign in to your account
                        </Heading>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="password">
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    onChange={handlelogin}
                                    name="name"
                                    value={details.name}
                                />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    onChange={handlelogin}
                                    name="link"
                                    value={details.link}
                                />
                            </FormControl>

                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="date"
                                    onChange={handlelogin}
                                    name="date"
                                    value={details.date}
                                />
                            </FormControl>

                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Text color={"blue.400"}>
                                        Forgot password?
                                    </Text>
                                </Stack>
                                <Button
                                    onClick={handleloginsubmit}
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
            <TableContainer>
                <Table variant="striped" colorScheme="teal">
                    <TableCaption>
                        Imperial to metric conversion factors
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Sr.No</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th isNumeric>Password</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {arr.map((ele, index) => {
                            return (
                                <Tr>
                                    <Td>{index + 1}</Td>
                                    <Td>{ele.name}</Td>
                                    <Td>
                                        <a href="">{ele.link} </a>
                                    </Td>
                                    <Td isNumeric>{ele.date}</Td>
                                    <Td isNumeric>
                                        <button
                                            onClick={() => deleteData(index)}>
                                            Delete
                                        </button>
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
            ;
        </>
    );
};

export default SimpleCard;
