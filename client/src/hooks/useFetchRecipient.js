import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) => {
    const [recipientUser, setRecipientUser] = useState(null);
    const [isRecipientUserLoading, setIsRecipientUserLoading] = useState(false);
    const [error, setError] = useState(null);

    const recipientId = chat?.members?.find((id) => id !== user?._id);//finding the other user

    useEffect(() => {
        const getUser = async () => {
            setError(null);
            if(!recipientId) return null;

            setIsRecipientUserLoading(true);
            const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

            setIsRecipientUserLoading(false);
            if(response.error){
                //console.log("Error fetching user", response);
                return setError(response);
            }

            setRecipientUser(response);
        };
        getUser();
    }, [recipientId]);
    return ({recipientUser, error, isRecipientUserLoading});
};