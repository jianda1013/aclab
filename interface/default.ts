interface Files {
  file_id: number;
  name: string;
  path: string;
  bucket: "paper" | "course";
}

interface Courses {
  course_id: number;
  name: string;
  year: number | null;
  semester: "fall" | "spring" | null;
}

interface Slides {
  slide_id: number;
  course_id: number;
  file_id: number;
}

interface Papers {
  paper_id: number;
  year: number | null;
  file_id: number;
}

interface Students {
  student_id: number;
  name: string;
  student_uid: string;
  research: string;
}

interface Researchs {
  student_id: number;
  paper_id: number;
  graduation: boolean;
}

interface Projects {
  project_id: number;
  name: string;
  NCCU_id: string;
  MOST_id: string;
  exec_time_start: Date;
  exec_time_end: Date;
  active_time_start: Date;
  active_time_end: Date;
}

interface Scholarships {
  student_id: number;
  project_id: number;
  scholarship: number;
}
