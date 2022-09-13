import { StudentClass } from "../studentClass.viewentity";

export interface SearchStudentClassesDto {
  studentClasses:StudentClass[],
  count:number
}

