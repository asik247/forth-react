import React, { useEffect, useState } from 'react';

const App = () => {
  const [users,setUsers] = useState([]);
  // console.log(users);
  useEffect(()=>{
      console.log("Effect running");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data))
    .catch(error=>{
      console.log(error);
    })
  },[])
  return (
    <div>
      {
        users.map(user=>(
          <p key={user.id}>{user.name}</p>
        ))
        // console.log(users)

      }
      <h1>Hi</h1>
    </div>
  );
};

export default App;