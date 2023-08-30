import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from './users.json';
import one from './Users/1.svg'
import two from './Users/2.svg'
import three from './Users/3.svg'
import four from './Users/4.svg'
import five from './Users/5.svg'
import avatar from './Images/Avatar.png'


function UserTable() {
  const [userData, setUserData] = useState([]);

  console.log(data);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://0fymhlmcph.execute-api.us-east-1.amazonaws.com/Prod/api/v1/newusers/?limit=15');
  //     setUserData(response.data.data);
  //     console.log(response.data);

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <div>

      <table className='table'>
        <thead>
        <tr style={{backgroundColor:"#D9D9DC", color:"#595A6C"}}>
          <th></th>
          <th></th>
          <th></th>
          <th>Designation</th>
          <th>Skills</th>
          <th>Team</th>
          <th>Availability</th>
        </tr>
        </thead>
        <tbody>
          {data?.map((user) => {
            
            return(
              
              <tr>
              <td><input type="checkbox" name="" id="" /></td>
              <td><img src={one} alt="" /></td>
              {/* <td><img style={{width:"32px"}} src={user.avatar_url} alt="" /></td> */}
              <td>{user.resource_name}</td>
              <td>{user.designation}</td>
              <td className='jsondata'>
              <div className='skillnum'>{user.skills.length}</div>
                {user.skills.map((item,index)=>{
                {if (index<3){
                  return( 
                    <div className='skillsdata'>{item.skill}</div>
                    )
                }}
              })}</td>
              <td>{user.team}</td>
              <td><progress className="progress" value="69" max="100" style={{backgroundColor:"#5BAF76", borderRadius:"40px", height:"4px", width:"80px"}} ></progress>
              </td>
              </tr>
              
            )
       
          })}
              
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
