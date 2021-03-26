export const events = [
  {
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
];

export const groups = [
  {
    id: 1,
    name: "Weekend Warriors",
  },
  {
    id: 2,
    name: "Young Mums",
  },
  {
    id: 3,
    name: "Beat the Bulge",
  },
];

export const users = [
  {
    id: 1,
    firstName: "Luca",
    surname: "Xue",
    username: "lucaxue",
    hours: 1,
    partOfGroupId: 3,
    adminOfGroupId: 3,
    eventsIds: [1, 2],
  },
  {
    id: 2,
    firstName: "Jim",
    surname: "Bob",
    username: "jimbob",
    hours: 20,
    partOfGroupId: 1,
    adminOfGroupId: 1,
    eventsIds: [1, 2],
  },
  {
    id: 3,
    firstName: "JJ",
    surname: "Hodgins",
    username: "jj86",
    hours: 5,
    partOfGroupId: 2,
    adminOfGroupId: 2,
    eventsIds: [1, 2],
  },
  {
    id: 4,
    firstName: "Eleanor",
    surname: "Redmayne",
    username: "116",
    hours: 5,
    partOfGroupId: 2,
    adminOfGroupId: 0,
    eventsIds: [1, 2],
  },
];
