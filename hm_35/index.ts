interface IUser {
  name: string;
  phone: string;
  email: string;
  animals?: ("cat" | "dog" | "horse")[];
  cars?: ("bmw" | "audi" | "mercedes")[];
  hasChildren?: boolean;
  hasEducation?: boolean;
}

const users: IUser[] = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

// 1

const getStringOfUserNames = (users: IUser[]): string => {
  return users.map(({ name }) => name).join(", ");
};

const namesOfUsers = getStringOfUserNames(users);
console.log(namesOfUsers);

//2

const getNumberOfUsersCars = (users: IUser[]): number => {
  return users.reduce((result, { cars }) => {
    const numberOfCars = cars?.length ? cars.length : 0;
    return result + numberOfCars;
  }, 0);
};

const numberOfUsersCars = getNumberOfUsersCars(users);
console.log(numberOfUsersCars);

//3

const filterUsersWithEducation = (users: IUser[]): IUser[] => {
  return users.filter(({ hasEducation }) => hasEducation);
};

const usersWithEducation = filterUsersWithEducation(users);
console.log(usersWithEducation);

//4

const filterUsersWithAnimals = (users: IUser[]): IUser[] => {
  return users.filter((user) => "animals" in user);
};

const usersWithAnimals = filterUsersWithAnimals(users);
console.log(usersWithAnimals);

//5

const getStringOfCarsNames = (users: IUser[]): string => {
  return users
    .reduce((result, { cars }) => {
      if (cars) {
        result.push(...cars);
      }
      return result;
    }, [] as string[])
    .join(", ");
};

const carsNames = getStringOfCarsNames(users);
console.log(carsNames);



class UserData {
  users: IUser[];

  constructor(users: IUser[]) {
    this.users = users;
  }

  getStringOfUserNames(): string {
    return this.users.map(({ name }) => name).join(", ");
  }

  getNumberOfUsersCars(): number {
    return this.users.reduce((result, { cars }) => {
      const numberOfCars = cars?.length ? cars.length : 0;
      return result + numberOfCars;
    }, 0);
  };

  filterUsersWithEducation(): IUser[] {
    return this.users.filter(({ hasEducation }) => hasEducation);
  };

  filterUsersWithAnimals(): IUser[] {
    return this.users.filter((user) => "animals" in user);
  };

  getStringOfCarsNames(): string {
    return this.users
      .reduce((result, { cars }) => {
        if (cars) {
          result.push(...cars);
        }
        return result;
      }, [] as string[])
      .join(", ");
  };
}

const usersData = new UserData(users);
console.log(usersData);

const namesOfUsers1 = usersData.getStringOfUserNames();
console.log(namesOfUsers1); 

const numberOfUsersCars1 = usersData.getNumberOfUsersCars();
console.log(numberOfUsersCars1); 

const usersWithEducation1 = usersData.filterUsersWithEducation();
console.log(usersWithEducation1); 

const usersWithAnimals1 = usersData.filterUsersWithAnimals();
console.log(usersWithAnimals1); 

const carsNames1 = usersData.getStringOfCarsNames();
console.log(carsNames1); 