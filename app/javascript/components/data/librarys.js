function allLibrarys(){
    return fetch("/libraries")
    .then((response)=>{
      if(response.status === 200){
        return response.json()
      } else {
        throw "Bad response"
      }
    })
  }
  
  export { allLibrarys }