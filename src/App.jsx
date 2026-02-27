import React, { Suspense, useEffect, useState } from 'react';
import Users from './Components/Users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  useEffect(() => {
    console.log("Effect running");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => {
        console.log(error);
      })
  }, [])
  // Users code here;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const datas = await res.json()
        setUsers2(datas)
      }catch(error){
        console.log(error);
      }
    }
    fetchUsers()
  },[])
  return (
    <div>
      {
        users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))
      }
      <h1>Hi</h1>
      <br />
      {/* Users code start here */}
      <Suspense>
        <Users users2={users2}></Users>
      </Suspense>
    </div>
  );
};

export default App;