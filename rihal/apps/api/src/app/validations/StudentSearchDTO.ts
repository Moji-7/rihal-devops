import { StudentSearchDto } from '@rihal/data-models';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class StudentSearchDTO  {
  @IsNotEmpty()
  name: string;
  classesId: number;
  //@IsNotEmpty()
  countriesId: number;
  // dateOfBirthFrom: Date;
  // dateOfBirthTo: Date;
  // registerDateFrom: Date;
  // registerDateTo: Date;
}
