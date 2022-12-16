
export interface QuestionDto {
  id?: number;
  title: string;
  description: string;
  groupId: number;
  askDate: Date;
  studentId: number;
  teacherId?: number;
  responseDate?: Date ;
  likes: number;
}
