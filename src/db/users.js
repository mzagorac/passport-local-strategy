const users = [
  {
    id: 1,
    username: "jack",
    password: "1234567",
    fullName: "Jack Dean",
    emails: [{ value: "jack@test.com" }, { value: "jack333@test.com" }],
  },
  {
    id: 2,
    username: "bonny",
    password: "1234567",
    fullName: "Bonny Murphy",
    emails: [{ value: "bonny@test.com" }],
  },
];

exports.findById = function (id, cb) {
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
