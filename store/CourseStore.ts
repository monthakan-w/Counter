// ระบบการถอนรายวิชา 
    // - ข้อมูลรายวิชาที่ลงทะเบียนในภาคเรียนปัจจุบัน ได้แก่ รหัสวิชา, ชื่อวิชา(ไทย), 
    // ชื่อวิชา(อังกฤษ), หน่วยกิต, ชื่ออาจารย์ผู้สอน, เกรด (CourseStore) 
    // - คำนวณ GPA รวม 

import { create } from "zustand";

export interface CourseInterface {
  courses: {
    code: string;
    nameTh: string;
    nameEn: string;
    credit: number;
    instructor: string;
    grade: string;
  }[];
  droppedCourses: {
    code: string;
    nameTh: string;
    nameEn: string;
    credit: number;
    instructor: string;
    grade: string;
  }[];
  addCourse: (course: CourseInterface["courses"][0]) => void;
  removeCourse: (code: string) => void;
  calculateGPA: () => number;
}


export const useCourseStore = create<CourseInterface>((set, get) => ({
  courses: [],
  droppedCourses: [],

  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),

  removeCourse: (code) =>
    set((state) => {
      const courseToRemove = state.courses.find((c) => c.code === code);
      return {
        courses: state.courses.filter((c) => c.code !== code),
        droppedCourses: courseToRemove
          ? [...state.droppedCourses, courseToRemove]
          : state.droppedCourses,
      };
    }),

  calculateGPA: () => {
    const gradePoints: { [key: string]: number } = {
      A: 4.0,
      "B+": 3.5,
      B: 3.0,
      "C+": 2.5,
      C: 2.0,
      "D+": 1.5,
      D: 1.0,
      F: 0.0,
    };
    const courses = get().courses;
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const points = gradePoints[course.grade] || 0;
      totalPoints += points * course.credit;
      totalCredits += course.credit;
    });

    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  },
}));



