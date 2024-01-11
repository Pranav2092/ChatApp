import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap";
import moment from "moment";
import InputEmoji from "react-input-emoji";


const ChatBox = () => {
    const { user } = useContext(AuthContext);
    const { currentChat , messages , isMessagesLoading, sendTextMessage, newMessage } = useContext(ChatContext);
    const { recipientUser, isRecipientUserLoading } = useFetchRecipientUser(currentChat, user);
    const [textMessage, setTextMessage] = useState("");
    const scroll = useRef();
    //console.log("text", textMessage);

    useEffect(() => {
        scroll?.current?.scrollIntoView({ behavior: "smooth" });
    },[messages]);

    if(!recipientUser) 
        return (
        <p style={{textAlign: "center", width:"100%", height:"100vh", paddingTop:"20vh"}}>
            No conversation selected yet
        </p>
        );
    if(!messages && isMessagesLoading) 
        return (
        <p style={{textAlign: "center", width:"100%", height:"100vh", paddingTop:"20vh"}}>
            Loading messages
        </p>
        );
    return (
        <Stack style={{paddingTop:"1rem"}}>
        <Stack gap={4} className="chat-box">
            <div className="chat-header">
                <strong>{recipientUser?.name}</strong>
            </div>
            <Stack gap={3} className="messages">
                {messages && messages.map((messages ,index) => <Stack key={index} className={`${messages?.senderId === user?._id ? "message self align-self-end flex-grow-0" : "message align-self-start flex-grow-0"}`} ref={scroll}>
                    <span>{messages.text}</span>
                    <span className="message-footer">{moment(messages.createdAt).calendar(null, {sameDay: 'dddd DD/MM/YYYY h:mm a',nextDay: 'dddd DD/MM/YYYY h:mm a',nextWeek: 'dddd DD/MM/YYYY h:mm a',lastDay: 'dddd DD/MM/YYYY h:mm a',lastWeek: 'dddd DD/MM/YYYY h:mm a',sameElse: 'dddd DD/MM/YYYY h:mm a'})}</span>
                </Stack>)}
            </Stack>
            <Stack direction="horizontal" gap={3} className="chat-input flex-grow-0">
                <InputEmoji value={textMessage} onChange={setTextMessage} fontFamily="Oswald" borderColor="rgba(10, 200, 10, 0.5)" />
                <button className="send-btn" onClick={() => sendTextMessage(textMessage,user,currentChat._id,setTextMessage)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>
                </button>
            </Stack>
        </Stack>
        </Stack>
    );
};
 
export default ChatBox;