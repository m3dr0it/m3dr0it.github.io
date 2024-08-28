"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const List = () => {
  const [posts, setPosts] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const data = localStorage.getItem("whoami");
    if (!data) {
      if(data != "iamnoone"){
        router.push("/");
      }
    }

    fetch("http://localhost:3000/api/post")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setPosts(data)
    })

  }, []);

  return (
    <div className="p-10">
      <h1> List Post </h1>
      {
        
      }
    </div>
  );
};



export default List;
