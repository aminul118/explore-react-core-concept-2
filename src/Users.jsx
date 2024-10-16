import { useEffect, useState } from "react";


export default function Users() {
  const [users, setUsers] = useState([]);
  /***
   *    useState() এর ভেতরে empty array নেয়ার কারন ইনিশিয়াল পর্যায়ে আমরা যে ডাটা রাখবো ওইটা array এর মধ্যে আছে।
   *   এবং প্রথমে আমরা এইটাকে খালি দেখাবো। যদি ডাটা না আসে API থেকে তাহলে যেনো এইটা খালি দেখায়।
   */

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>User : {users.length}</h3>
    </div>
  );
}


/***
 * 1. Declare a state to hold data
 * 2. useEffect with callback function, dependency
 * 3. Data load using fetch or async await
 * 4.
 *
 */
