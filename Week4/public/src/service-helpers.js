const _get = async (url)=> {
    const res = await fetch(url,{
        method: 'GET',
        headers:{
            Authorization: token,
            'Content-Type': 'application/json',
        }
    })
}
returnRes.json();

const_post = async (url, data)
