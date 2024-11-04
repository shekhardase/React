const GetRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api/',
        { Method: "GsET" }
    )
    return await response.json();
}

export default GetRandomUser