import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


function App() {

  const [videos, setVideos] = useState([]);

  const apiUrl = "https://api.gar.ovh"  

  const fullUrl = (shortUrl) => {
    return `${apiUrl}${shortUrl}`
  }
  useEffect(()=>[
    axios.get('https://api.gar.ovh/videos')
  .then(function (response) {
    setVideos(response.data)
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  })
  ], [])

  const style = {
    width: "150px",
  };


  return (
    <div className="App">
      {videos.map((x)=>{
        return (<p>
          {fullUrl(x.photo.url)}
          <img src={fullUrl(x.photo.url)}/>
          </p>)
      })}
    </div>
  );
}

export default App;
