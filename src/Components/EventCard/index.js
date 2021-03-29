import React from 'react';


function EventCard(event){
    return(
        <div>
            <h1>{event.name}</h1>
            <p>{event.time}</p>
            
        </div>    
    )

};

export default EventCard;