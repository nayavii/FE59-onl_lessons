// const users = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     avatar: "https://reqres.in/img/faces/7-image.jpg",
//     age: 23,
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     avatar: "https://reqres.in/img/faces/8-image.jpg",
//     age: 20,
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     avatar: "https://reqres.in/img/faces/9-image.jpg",
//     age: 40,
//   },
//   {
//     id: 10,
//     email: "byron.fields@reqres.in",
//     first_name: "Byron",
//     last_name: "Fields",
//     avatar: "https://reqres.in/img/faces/10-image.jpg",
//     age: 36,
//   },
//   {
//     id: 11,
//     email: "george.edwards@reqres.in",
//     first_name: "George",
//     last_name: "Edwards",
//     avatar: "https://reqres.in/img/faces/11-image.jpg",
//     age: 70,
//   },
//   {
//     id: 12,
//     email: "rachel.howell@reqres.in",
//     first_name: "Rachel",
//     last_name: "Howell",
//     avatar: "https://reqres.in/img/faces/12-image.jpg",
//     age: 45,
//   },
// ];

export const getUserNameAndSurname = (users) => {
  return users
    .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
    .join(", ");
};



export const getSortedEmails = (users) => {
  return users.map(({ email }) => email).sort();
};

// console.log(getSortedEmails(users));

export const getUpdatedUsers = (users) => {
  return users.map(({ id, first_name, last_name }) => ({
    id,
    username: `${first_name} ${last_name}`,
  }));
};

// console.log(getUpdatedUsers(users));

export const getUsersUnderForty = (users) => {
  return users.filter(({ age }) => age < 40).sort((a, b) => a.age - b.age);
};

// console.log(getUsersUnderForty(users));

export const getInfo = (users) => {
  return users.reduce(
    (result, {age}, index, currentArray) => {
      

      result.averageAge += age;

      if (index === currentArray.length - 1) {
        result.averageAge /= currentArray.length;
      }

      if (age > 30) {
        result.older30++;
      }

      if (age > 40) {
        result.older40++;
      }

      if (age > 18) {
        result.older18++;
      }

      return result;
    },
    { averageAge: 0, older30: 0, older40: 0, older18: 0 }
  );
};

// console.log(getInfo(users));

export const getUsersSurname = (users) => {
  return users.reduce((result, { last_name }) => {
    const firstLetter = last_name[0].toLowerCase();
    if (!result[firstLetter]) {
      result[firstLetter] = [];
    }

    result[firstLetter].push(last_name);

    return result;
  }, {});
};

// console.log(getUsersSurname(users));


