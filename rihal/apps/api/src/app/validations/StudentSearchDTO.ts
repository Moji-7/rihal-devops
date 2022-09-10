import { StudentSearchDto } from '@rihal/data-models';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class StudentSearchDTO  {
  @IsNotEmpty()
  name: string;
  className: string;
  @IsNotEmpty()
  countryName: string;
  // dateOfBirthFrom: Date;
  // dateOfBirthTo: Date;
  // registerDateFrom: Date;
  // registerDateTo: Date;
}
