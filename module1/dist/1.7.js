"use strict";
// learn spread operator
const bros1 = ["Mir", "swan", "john"];
const bros2 = ["pak", "tuhin", "kabir"];
bros1.push(...bros2);
const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
};
const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
};
const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
// learn rest operator
const greetFriends = (...friends) => {
    friends.forEach((friends) => console.log(`Hi ${friends}`));
};
greetFriends("John", "Jane", "Tom");
// learn destructuring
const users = {
    id: 123,
    name: {
        firstName: "John",
        lastName: "Doe",
    },
    contactNum: "0123456789",
    address: "Uganda",
};
const { name: { lastName }, contactNum, } = users;
// array destructuring
const friends = ["John", "doe", "tom", "ross", "michel"];
const [, , bestFriend, ...rest] = friends;
