import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
function Content() {

  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get("/users/getUsers")
      .then((res) => {
        console.log({ res });
        const jsonData = res.data;
        setContent(jsonData);
        console.log(jsonData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(content, "ccccccccccccccccccccccccccccccccc")

  return (
    <div>
      <h1>This is content</h1>
      {content.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Content
