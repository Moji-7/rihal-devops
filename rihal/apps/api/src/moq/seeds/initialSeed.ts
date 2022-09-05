import { Countries } from '../../app/domains/student/entities/countries.entity';
import { Student } from '../../app/domains/student/entities/student.entity';
import { faker } from '@faker-js/faker';
//import { User, Post } from "../../entities";

export function InitialCountrySeed(entity: string) {
  return fakerCountry();
}
export function InitialClassesSeed(entity: string) {
  return fakerClasses();
}
export function InitialStudentSeed(entity: string) {
  return fakerCountry();
}
const fakerCountry = (): any => ({
  countryName: faker.address.country(),
});

const fakerClasses = (): any => ({
  className: faker.address.country(),
});

const fakerUser = (): any => ({
  name: faker.name.firstName() + faker.name.lastName(),
  date_of_birth: new Date(1995, 11, 17),
  //email: faker.internet.email(),
  //password: faker.internet.password(),
});
