import React, { useState } from 'react';
import { getMmrData } from '../api/controller';

function Home() {
  const [info, setInfo] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo(values => ({...values, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const matches = await getMmrData(info.username, info.tag);
    setInfo({});
    console.log(matches);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='username' name="username" onChange={handleChange} value={info.username || ''} />
      <input type="text" placeholder='tag' name="tag" onChange={handleChange} value={info.tag || ''} />
      <input type="submit" />
    </form>
  )
}

export default Home;
