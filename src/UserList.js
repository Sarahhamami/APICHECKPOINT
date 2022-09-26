import React, { useState, useEffect } from "react";
import axios from "axios";
export default function UserList() {
    const [users, setUsers] = useState([]);
    const fetchPost = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data);
        console.log(response)
    }
    useEffect(() => {
      fetchPost();
     }, []);
     return (
      <div> <div className="users">
          <h2>List of users</h2>
     
       <table className= "table"><tr><th>id</th><th>name</th><th>username</th><th>email</th><th>phone</th><th>website</th><th>address</th><th>Company</th></tr> {users.map((u) => (<tr><td>{u.id}</td><td>{u.name}</td><td>{u.username}</td><td> {u.email}</td><td>{u.phone}</td><td>{u.website}</td><td><table><tr><th>street</th><th>suite</th><th>city</th><th>zipcode</th><th>geo</th></tr><td>{u.address.street}</td><td>{u.address.suite}</td><td>{u.address.city}</td><td>{u.address.zipcode}</td><td><table><tr><th>Lat</th><th>Lang</th></tr><tr><td>{u.address.geo.lat}</td><td>{u.address.geo.lng}</td></tr></table></td></table></td><td><table><tr><th>name</th><th>catchPhrase</th><th>bs</th></tr><tr><td>{u.company.name}</td><td>{u.company.catchPhrase}</td><td>{u.company.bs}</td></tr></table></td></tr>   ))}</table>
       
   
    </div>
      </div>
    );
}