export async function getUserByUsername(URL, username, onSuccess) {
  const res = await fetch(`${URL}/users?username=${username}`);
  const data = await res.json();
  onSuccess(data[0]);
}

export async function getGroupById(URL, groupId, onSuccess) {
  const res = await fetch(`${URL}/groups/${groupId}`);
  const data = await res.json();
  onSuccess(data[0]);
}

//get user with username✅
//get group with group id
//get events that user will attend with id
