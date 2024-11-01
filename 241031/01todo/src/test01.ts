enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

export const user1 = {
  name: "David",
  role: Role.ADMIN,
};
export const user2 = {
  name: "Peter",
  role: Role.USER,
};
export const user3 = {
  name: "Romeo",
  role: Role.GUEST,
};
