import { Box } from "@chakra-ui/layout";
import { useState } from "react";
//import Chatbox from "../components/Chatbox";
//import MyChats from "../components/MyChats";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Facility = () => {
  //const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      { <SideDrawer />}
      {/* <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box> */}
    </div>
  );
};

export default Facility;