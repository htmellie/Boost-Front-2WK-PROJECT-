import React from 'react';


function EventCard(event){
    console.log(event.event.name);
    return(
        <div>
            <h1>{event.event.name}</h1>
            <p>{event.event.time}</p>

        </div>    
    )

};

export default EventCard;