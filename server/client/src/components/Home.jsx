import React, {useEffect} from 'react'
const Home = () => {
  const callHomePage= async()=>{
    try{
        const res = await fetch('/',{
          method:"GET",
          headers:{
        "Content-type":"application/json"
    },
        }
    );
    if(res.status!==200){
      throw new Error(res.error);
    }
}
    catch(err){
     console.log(err);
    }

}
useEffect(() => {
callHomePage();
}, [])
  return (
    <div className="home-page">
      <div className="home-div">
      <h1 >Welcome to the To Do List </h1>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Home
