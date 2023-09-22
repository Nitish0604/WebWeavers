import React from 'react'
import { Tooltip } from "@chakra-ui/tooltip";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
} from "@chakra-ui/modal";
import { Spinner } from "@chakra-ui/spinner";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Box, Input, Text, useToast } from "@chakra-ui/react";
import UserLoading from './UserLoading';
import { Search2Icon } from "@chakra-ui/icons";
import UserListItem from './UserListItem';
import { useDisclosure } from '@chakra-ui/react';
import axios from "axios";
import { ChatState } from "../../Context/ChatProvider";



const SearchBar = () => {
  
  const {
    //setSelectedChat,
    user,
    //notification,
    //setNotification,
    chats,
    setChats,
    user_id,
    setuser_id,
  } = ChatState();
    const toast = useToast();
    const [loading, setLoading] = useState("false");
    const [LoadingResult, setLoadingResult] = useState("");
    const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();



        const handleSearch = async () => {
    if (!search) {
        toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        });
        return;
    }
  try {
    //we need to send jwt token so we need the header

    setLoading(true);

    const config = {
      headers: {
        //Authorization: `Bearer ${user.token}`,
      },
    };

    //storing the data on the basis of the search query

    const { data } = await axios.get(
      `http://localhost:5000/api/user/allusers?search=${search}`,
      config
    );
    console.log(data);

    setLoading(false);
    setSearchResult(data);
  } catch (error) {
    toast({
      title: "Error Occured!",
      description: "Failed to Load the Search Results",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  }
};
const accessChat = async (userId) => {
  console.log(userId);
  setuser_id(userId);
   onClose();

  // try {
  //   setLoadingChat(true);
  //   const config = {
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   };
  //   const { data } = await axios.post(`/api/chat`, { userId }, config);

  //   if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
  //   setSelectedChat(data);
  //   setLoadingChat(false);
  //   onClose();
  // } catch (error) {
  //   toast({
  //     title: "Error fetching the chat",
  //     description: error.message,
  //     status: "error",
  //     duration: 5000,
  //     isClosable: true,
  //     position: "bottom-left",
  //   });
  // }
};



  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="right"
        bg="[#edfbfd]"
        p="5px 10px 5px 10px"
        _hover="[#edfbfd]"
      >
        <Tooltip label="search users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost " onClick={onOpen}>
            <Search2Icon m={2} />

            <Text display={{ base: "none", md: "flex" }} px="4px">
              Search User{" "}
            </Text>
          </Button>
        </Tooltip>
      </Box>
      <Drawer placement="left"  isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="search by name or email"
                //mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <UserLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                     handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {LoadingResult && <Spinner mr="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default SearchBar
