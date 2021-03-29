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

export async function getEventById(URL, eventId) {
  const res = await fetch(`${URL}/events/${eventId}`);
  const data = await res.json();
  return data;
}

export async function getManyEventsByIds(URL, ids, onSuccess) {
  onSuccess(await Promise.all(ids.map((id) => getEventById(URL, id))));
}

export async function postUser(URL, user) {
  console.log(user);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  const response = await fetch(`${URL}/users`, requestOptions);
  const data = await response.json();
  // onSuccess(data);
}

export async function postEvent(URL, event) {
  console.log(event);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  };
  const response = await fetch(`${URL}/events`, requestOptions);
  const data = await response.json();
  // onSuccess(data);
}

//get user with username✅
//get group with group id✅
//get events that user will attend with id✅

//NOT WORKING:
//sort by time, access earliest
//get events user will attend (eventsWillAttend array)
//use a reduce function to get earliest timec closest to current time

//post user if they don't exist
