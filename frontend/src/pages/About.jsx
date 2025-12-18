import React, { useEffect, useState } from 'react'


const About = () => {
  const [users,setUsers]=useState([])
   useEffect(()=>{
    const fetchUsers=async()=>{
      const res=await fetch('https://jsonplaceholder.typicode.com/users')
      const data=await res.json();
      setUsers(data);
    }
    fetchUsers()
   },[])
  return (
    <div>
      <h3>useEffect example</h3>
      <ol>
        {users.map((user)=>(
          <li>{user.name}</li>
        ))}
      </ol>

    </div>
  )
}

export default About