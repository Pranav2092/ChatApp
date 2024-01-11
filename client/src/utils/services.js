export const baseUrl = "http://localHost:5000/api";//server url where we send request to server from client 

export const postRequest = async(url, body) => {//posting request to server from client 
    console.log("body", body);
    const response = await fetch(url,{//fetching data from server 
        method:"POST",
        headers:{ "Content-Type": "application/json" }, //sending data in json format 
        body,
    });

    const data = await response.json();//fetching data from server as json format 
//checked from codes like 200(ok),(error)400,500
    if(!response.ok){
        let message;
        if(data?.message){
            message = data.message;//messages from server where we dont have controller,like error 500
        }
        else{
            message = data;//messages sent from server, like invalid email,etc.
        }

        return {error:true, message};//we return error and message
    }

    return data;
};

export const getRequest = async(url)=>{
    const response = await fetch(url,{method:"GET"});

    const data = await response.json();

    if(!response.ok){
        let message = "An error occured";
        if(data?.message){
            message = data.message;
        }
        return {error:true, message};
    }
    return data;
};