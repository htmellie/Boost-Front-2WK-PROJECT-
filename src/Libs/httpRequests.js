export async function getUserByUsername(URL, username, onSuccess) {
  const res = await fetch(`${URL}/users?username=${username}`);
  const data = await res.json();
  onSuccess(data[0]);
}

export async function getGroupById(URL, groupId, onSuccess) {
  const res = await fetch(`${URL}/groups/${groupId}`);
  const data = await res.json();
  onSuccess(data.name);
}

export async function getEventById(URL, eventId, onSuccess) {
  const res = await fetch(`${URL}/events/${eventId}`);
  const data = await res.json();
  onSuccess(data);
}

//get user with username✅
//get group with group id✅
//get events that user will attend with id✅
//sort by time, access earliest
//get events user will attend (eventsWillAttend array)
//use a reduce function to get earliest timec closest to current time

//post user if they don't exist
