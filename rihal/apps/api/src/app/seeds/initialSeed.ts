import { Countries } from '../domains/student/entities/countries.entity';
import { Student } from '../domains/student/entities/student.entity';
import { faker } from '@faker-js/faker';
//import { User, Post } from "../../entities";

export function InitialCountrySeed(entity: string) {
  return fakerCountry();
}
export function InitialClassesSeed(entity: string) {
  return fakerClasses();
}
export function InitialStudentSeed(entity: string) {
  return fakerStudent();
}
const fakerCountry = (): any => ({
  countryName: faker.address.country(),
});

const fakerClasses = (): any => ({
  className: faker.helpers.arrayElement(['arts', 'science', 'front end developing','full stack developer',"yuga","spanish","cooking","meditation","negotiation","life tricks"])
});

const fakerStudent = (): any => ({
  name: faker.name.firstName() +" "+ faker.name.lastName(),
  dateOfBirth: faker.date.between('1970-01-01', '2019-01-05'),
  classesId :faker.datatype.number({'min': 41,'max': 50}),
  //countriesId:faker.datatype.number({'min': 51,'max': 60}),
  classes:fakerClasses(),
  countries:fakerCountry(),
  //email: faker.internet.email(),
  //password: faker.internet.password(),

});
