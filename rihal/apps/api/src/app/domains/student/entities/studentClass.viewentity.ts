import { ViewEntity, ViewColumn, DataSource } from "typeorm"


@ViewEntity({
 expression: `
 select "t2"."id" "id" ,"t2"."name", "t2"."date_of_birth" "dateOfBirth", "t2"."countriesId", "t3"."name" "countryName" ,"t2"."classesId","t4"."class_name" "classesName"
 from "student" "t2"
 inner join "countries" "t3" on "t2"."countriesId"="t3"."id"
 inner join "classes" "t4" on "t2"."classesId"="t4"."id";
 `
})
export class StudentClass {
    @ViewColumn()
    id: number

    @ViewColumn()
    name: string

    @ViewColumn()
    dateOfBirth: Date

    @ViewColumn()
    countriesId: number

    @ViewColumn()
    countryName: string

    @ViewColumn()
    classesId: number

    @ViewColumn()
    classesName: string

}
