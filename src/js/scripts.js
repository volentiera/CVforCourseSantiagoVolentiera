

const getData = async () =>{
    try {
        const response = await $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json'
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
}
const useData = async()=>{
    const userData = await getData()

    //use data to get diferent elements
    document.getElementById("profilePictureBackground").style.backgroundImage = `url(${userData.results[0].picture.large})`
    
    document.getElementById("fullName").innerText = `${userData.results[0].name.first} ${userData.results[0].name.last}`

    document.getElementById("location").innerText = `Pais: ${userData.results[0].location.country} \r\nCiudad: ${userData.results[0].location.city} \r\nCalle: ${userData.results[0].location.street.name} ${userData.results[0].location.street.number} `

    document.getElementById("email").innerText = `${userData.results[0].email}`

    document.getElementById("phoneNumber").innerText = `${userData.results[0].phone}`
}

useData()


