import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Userlist() {
    const [users, setusers] = useState([]);
    useEffect(() => {
      try {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> {
        setusers(res.data);
      });
      } catch (error) {
        console.log(error); 
      }
    }, []);
    console.log(users);
  return (
<div>
    {users.map((el)=>(
    <div className='blom'>
 <Card style={{ width: '20rem' ,height:"10rem" }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
         {el.username}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>))}
</div>
  );
}

export default Userlist