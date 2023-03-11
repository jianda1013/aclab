import { Knex } from "knex";

declare module "knex/types/tables" {
  interface Tables {
    file: Files;
    course: Courses;
    slide: Slides;
    paper: Papers;
    student: Students;
    student_paper: Researchs;
    project: Projects;
    project_student: Scholarships;
    // course: Knex.CompositeTableType<
    //   _Course,
    //   Pick<_Course, "name"> & Omit<Partial<_Course>, "course_id">,
    //   Partial<Omit<_Course, "course_id">>
    // >;
    // slide: _Slide;
    // paper: _Paper;
    // student: _Student;
    // student_paper: _Research;
    // project: _Project;
    // project_student: _Scholarship;
  }
}
