"use client";
import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const userData = useSelector((data) => data.userData.users);
  console.log(userData);
  return (
    <div className="display-users">
      <h3>Display List</h3>
      {userData.map((i) => {
       return  <div>{i.name}</div>
})}
    </div>
  );
};

export default DisplayUsers;
