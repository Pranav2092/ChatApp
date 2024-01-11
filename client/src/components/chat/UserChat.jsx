import { Stack } from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import avatar from "../../assets/avatar.svg";
import { ChatContext } from "../../context/ChatContext";
import { useContext } from "react";
const UserChat = ({ chat , user }) => {
    const { recipientUser } = useFetchRecipientUser(chat,user);
    const { onlineUsers } = useContext(ChatContext);

    const isOnline = onlineUsers?.some((user)=>user?.userId === recipientUser?._id); 

    //console.log(recipientUser);
    return (
    <Stack direction="horizontal" gap={3} className="user-card aligin-items-center p-2 justify-content-between" role="button" style={{cursor:"pointer",borderRadius:"0.5rem"}}>  
        <div className="d-flex">
            <div className="me-2">
                <img src={avatar} height="35px"/>
            </div>
            <div className="text-content">
                <div className="name">{recipientUser?.name}</div>
                <div className="text">Text Message</div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-end">
            <div className="date">12/12/2022</div>
            <div className="this-user-notifications">2</div>
            <span className={isOnline?"user-online":""}></span>
        </div>
    </Stack>
    );
};
 
export default UserChat;