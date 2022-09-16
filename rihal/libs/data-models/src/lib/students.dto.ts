export interface studentClassesDto {
  id: number;
  name: string;
  dateOfBirth: string;
  age: number;
  countriesId: number
  countryName: string;
  classesId: number
  classesName: string;
}

export interface SearchStudentClassesDto {
  studentClasses:studentClassesDto[],
  count:number
}

