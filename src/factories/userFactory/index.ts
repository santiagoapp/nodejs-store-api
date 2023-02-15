
import { faker } from "@faker-js/faker";
import { User } from "../../types";

const generateUsers = (amount: number): User[] => {
  const Users: User[] = [];
  Array.from({ length: amount }).forEach(() => {
    Users.push(createRandomUser());
  });
  return Users;
};
const createRandomUser = (): User => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

export default { generateUsers, createRandomUser };
