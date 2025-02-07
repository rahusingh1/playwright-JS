const fetchUserInfo = async ()=>{
    try
    {
        const response = await fetch('https://reqres.in/api/users?page=2');

        if(!response.ok){
            throw new Error("Data not found");
        }

        // parse the json response
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error: ", error);
    }
}

// call the function
fetchUserInfo();