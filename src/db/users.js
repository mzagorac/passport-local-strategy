const users = [
  {
    id: 1,
    username: "jack",
    password: "1234567",
    emails: [{ value: "jack@test.com" }],
  },
  {
    id: 2,
    username: "bonny",
    password: "1234567",
    emails: [{ value: "bonny@test.com" }],
  },
];

exports.fndById = function (id, cb) {
  process.nextTick(function () {
    const user = users.find((usr) => usr.id === id);
    if (user) return cb(null, user);
    return cb(new Error(`Can not find user with id ${id}`));
  });
};

exports.findByUsername = function (username, cb) {
  process.nextTick(function () {
    const user = users.find((usr) => usr.username === username);
    if (user) return cb(null, user);
    return cb(null, null);
  });
};
