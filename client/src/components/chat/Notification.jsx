import { useContext, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotifications";
import moment from "moment";

const Notification = () => {
    const [isOpen, setIsOpen] = useState(null);
    const { user } = useContext(AuthContext);
    const {notifications,userChats,allUsers,markAllAsRead,markNotificationAsRead} = useContext(ChatContext);

    const unreadNotifications = unreadNotificationsFunc(notifications);
    const modifiedNotifications = notifications.map((n) => {
        const sender = allUsers.find((user) => user._id === n.senderId);
        return {
            ...n,
            senderName: sender?.name,
        };
    });
    console.log(modifiedNotifications);
    console.log(unreadNotifications);
    return ( 
    <div className="notifications">
        <div className="notifications-icon align-self-center" onClick={()=> setIsOpen(!isOpen)}> 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-left-text-fill align-self-center" viewBox="0 0 16 16" style={{padding:"0.01rem 0.01rem 0.01rem 0.01rem",margin:"0.01rem 0.01rem 0.01rem 0.01rem",alignItems:"center"}}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
</svg>
        {unreadNotifications?.length === 0 ? null : (<span className="notification-count">
            <span>{unreadNotifications?.length}</span>
            </span>)}
        </div>
        {isOpen ? 
        
        <div className="notifications-box">
            <div className="notifications-header">
                <h3>Notifications</h3>
                <div className="mark-as-read" onClick={()=>markAllAsRead(notifications)}>
                    Mark All As Read
                </div>
            </div>
            {modifiedNotifications?.length === 0 ? <span style={{padding:"0.5rem 0.5rem 0.5rem 0.5rem",justifyContent:"center",alignItems:"center",display:"flex"}}>No Notifications</span> : null}
            {modifiedNotifications && modifiedNotifications?.map((n,index) => {
                return <div key={index} className={n.isRead ? "notification" : "notification not-read"} onClick={()=>{
                    markNotificationAsRead(n,userChats,user,notifications);
                    setIsOpen(false);
                }}>
                    <span>{`${n?.senderName} sent you a new message`}</span>
                    <span className="notification-time">{ moment(n.date).calendar(null, {sameDay: 'dddd DD/MM/YYYY h:mm a',nextDay: 'dddd DD/MM/YYYY h:mm a',nextWeek: 'dddd DD/MM/YYYY h:mm a',lastDay: 'dddd DD/MM/YYYY h:mm a',lastWeek: 'dddd DD/MM/YYYY h:mm a',sameElse: 'dddd DD/MM/YYYY h:mm a'} ) }</span>
                </div>;
            })}
        </div>
        : null}
    </div> 
    );
};
 
export default Notification;