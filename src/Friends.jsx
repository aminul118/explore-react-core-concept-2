import Friend from './Friend';
import './Friends.css'
import { useEffect, useState } from "react";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className='box'>
      <h3>Friends : {friends.length}</h3>
      {
        friends.map(friend=> <Friend friend={friend}></Friend>)
      }
    </div>
  );
}

/***
 * ডাটা লোড করতে কয়েকতা জিনিস করতে হয়
 * 1. Declare a state to hold data
 * 2. 
 */