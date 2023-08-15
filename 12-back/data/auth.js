let users = [
  {
    id: "1",
    createdAt: "2021-05-09T04:20:57.000Z",
    username: "bob",
    password: "1234",
    name: "Bob",
    email: "bob@example.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export async function login(username, password) {
  return users.find(
    (user) => user.username === username && user.password === password
  );
}

export async function create(username, password, name, email, url) {
  let user = {
    id: users.length + 1,
    createdAt: new Date(),
    username,
    password,
    name,
    email,
    url,
  };
  users = [...users, user];

  return users;
}
