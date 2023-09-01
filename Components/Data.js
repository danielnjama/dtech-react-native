import React,{ useState } from 'react';


const ProcessData = () => {
  
  const [currentData,SetCurrentData] = useState([]);
  fetch('https://api.dtechnologys.com/hispecs/')
    .then((response) => response.json())
    .then((apiData) => {
      SetCurrentData(apiData);

     
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });


  return (
   currentData
  );
};



export default ProcessData;