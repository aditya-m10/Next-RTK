"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/slice'

const AddUsers = () => {
  const [name,setName]=useState()
  const dispatch=useDispatch()
  const handleClick=()=>{
    console.log(name)
    dispatch(addUser(name))
  }
  return (
    <div className='add-users'>
      <h3>User List</h3>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Add Newuser"/>
      <button onClick={()=>handleClick()}>Add user</button>
    </div>
  )
}

export default AddUsers
