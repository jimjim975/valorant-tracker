import React, { useState } from 'react';

function Home() {
  const [info, setInfo] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info);
    setInfo({});
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
