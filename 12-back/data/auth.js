let users = [
  {
    id: "1",
    createdAt: "2021-05-09T04:20:57.000Z",
    username: "bob",
    password: "$2b$12$8ymswXgNkdlA52TYpjDnb.iIVUr1DvE3Z2zsMC1veVeaw5Sx.TAay",
    name: "Bob",
    email: "bob@example.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export async function createUser(user) {
  const created = { ...user, id: new Date().toString() };
  users.push(created);
  return created.id;
}

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(userId) {
  return users.find((user) => user.id === userId);
}
