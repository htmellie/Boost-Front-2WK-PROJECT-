export async function getUserByUsername(URL, username, onSuccess) {
  const res = await fetch(`${URL}/users?username=${username}`);
  const data = await res.json();
  onSuccess(data);
}

export async function getGroupById(URL, groupId, onSuccess) {
  const res = await fetch(`${URL}/groups/${groupId}`);
  const data = await res.json();
  onSuccess(data);
}

export async function getGroupByName(URL, groupName, onSuccess) {
  const res = await fetch(`${URL}/groups?name=${groupName}`);
  const data = await res.json();
  onSuccess(data[0]);
}

export async function getEventById(URL, eventId) {
  const res = await fetch(`${URL}/events/${eventId}`);
  const data = await res.json();
  return data;
}

export async function getManyEventsByIds(URL, ids = [], onSuccess) {
  onSuccess(await Promise.all(ids.map((id) => getEventById(URL, id))));
}

export async function postUser(URL, user, onSuccess) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  const response = await fetch(`${URL}/users`, requestOptions);
  const data = await response.json();
  onSuccess(data);
}

export async function postGroup(URL, group, onSuccess) {
  console.log(group);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(group),
  };
  const response = await fetch(`${URL}/groups`, requestOptions);
  const data = await response.json();
  onSuccess(data);
}

export async function postEvent(URL, event, onSuccess) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  };
  const response = await fetch(`${URL}/events`, requestOptions);
  const data = await response.json();
  onSuccess(data);
}

export async function getEventsByGroupId(URL, groupId, onSuccess) {
  const res = await fetch(`${URL}/events?groupid=${groupId}`);
  const data = await res.json();
  onSuccess(data);
}

export async function updateUser(URL, id, user, onSuccess) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
  const response = await fetch(`${URL}/users/${id}`, requestOptions);
  const data = await response.json();
  onSuccess(data);
}

