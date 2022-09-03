import { Countries } from '../../app/domains/student/countries.entity';
import { Student } from '../../app/domains/student/student.entity';
import { faker } from '@faker-js/faker';
//import { User, Post } from "../../entities";

export function InitialDatabaseSeed(entity: string) {
  return fakerCountry();
}
const fakerCountry = (): any => ({
  name: faker.address.country(),
});
const fakerUser = (): any => ({
  name: faker.name.firstName() + faker.name.lastName(),
  date_of_birth: new Date(1995, 11, 17),
  //email: faker.internet.email(),
  //password: faker.internet.password(),
});
