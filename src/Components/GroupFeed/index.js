import React, {useEffect,useState} from 'react';
import EventCard from '../EventCard/index';


function GroupFeed() {

const[exampleEvent,setExampleEvent]=useState([{
  id: 1,
  name: "Park run",
  description: "Come join us to run in the park!",
  exerciseType: "running",
  longitude: 52.4862,
  latitude: 1.8904,
  time: "2021-04-09T19:10:25",
  intensity: "easy",
  groupId: 1,
},
{
  id: 2,
  name: "roadride",
  description:
    "Come join us to ride 50k: On Saturday morning early,before breakfast!",
  exerciseType: "running",
  longitude: 52.4862,
  latitude: 1.8904,
  time: "2021-04-10T19:10:25",
  intensity: "easy",
  groupId: 1,
},
{
  id: 3,
  name: "Learning Swimming",
  description: "Come join at the lido",
  exerciseType: "swimming",
  longitude: 52.4862,
  latitude: 1.8904,
  time: "2021-04-11T19:10:25",
  intensity: "easy",
  groupId: 1,
},
]);


  return (
    <div>
      <h2>Group Feed</h2>

      {exampleEvent.map((eve)=><EventCard event={eve}/>)}
    
    </div>
  
  )
}

export default GroupFeed;
