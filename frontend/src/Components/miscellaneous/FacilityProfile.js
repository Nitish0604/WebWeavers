import { Menu, MenuButton } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Avatar } from "@chakra-ui/avatar";

import UserProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";

const FacilityProfile = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div>
      <Menu>
        <MenuButton p={1}>
          <BellIcon fontSize="2xl" m={1}></BellIcon>
        </MenuButton>
        <MenuList pl={2}>
          <MenuItem key={notif._id} onClick={() => {}}></MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
        </MenuButton>
        <MenuList>
          <FacilityProfileModal user={user}>
            <MenuItem>My Profile</MenuItem>
          </FacilityProfileModal>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default FacilityProfile;
