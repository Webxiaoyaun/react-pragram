
const get= function(url){
  return  fetch(`http://localhost:3000${url}`,{
      headers: {
          "Accept": "application/json",
          "Content-Type":"application/json"
      },
      method:'get',
  }).then(res => res.json())
      .catch(err=>{
          console.log(err)
      })
};

const post= function(url,body){
    return   fetch(`http://localhost:3000${url}`,{
        headers: {
            "Accept": "application/json",
            "Content-Type":"application/json"
        },
        method:'post',
        body:JSON.stringify(body)
    }).then(res => res.json())
        .catch(err=>{
            console.log(err)
        })
};

export {
    get,
    post
}