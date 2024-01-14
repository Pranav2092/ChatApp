import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/UserChat";
import { AuthContext } from "../context/AuthContext";
import PotentialChats from "../components/chat/PotentialChat";
import ChatBox from "../components/chat/ChatBox";


const Chat = () => {
    const { user } = useContext(AuthContext);
    const { userChats, isUserChatsLoading, updateCurrentChat } = useContext(ChatContext);
    //console.log("UserChats",userChats);
    return (
        <Container gap={3} >
            <Stack direction="horizontal" style={{width:"100%", height:"4rem",paddingTop:"1rem", alignItems:"center", paddingLeft:"1rem", borderRadius:"0.5rem", borderBottom:"1px solid rgb(100, 100, 100)",borderTop:"1px solid rgb(100, 100, 100)", borderRight:"1px solid rgb(100, 100, 100)", borderLeft:"1px solid rgb(100, 100, 100)"}}><p>Users</p><div><PotentialChats/></div></Stack>
        {(userChats?.length < 1)? null :
            (
                <Stack direction="horizontal" gap={4} className="align-items-start">
                    <Stack className="messages-box flex-grow-0 pe-3" gap={4} style={{paddingTop:"1rem"}}>
                        {isUserChatsLoading && <p>Loading Chats...</p>}
                        {userChats?.map((chat,index)=>{
                            return (
                                <div key={index} onClick={()=>{updateCurrentChat(chat)}} style={{cursor:"pointer",borderRadius:"0.5rem",border:"1px solid rgb(100, 100, 100)"}}>
                                    <UserChat chat={ chat } user={ user } />
                                </div>
                            );
                        })}
                    </Stack>
                    <ChatBox />
                </Stack>
            )
        }
        </Container>
    );
};
 
export default Chat;