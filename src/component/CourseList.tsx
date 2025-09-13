// ระบบการถอนรายวิชา 
    // - แสดงรายวิชาที่เพิ่มทั้งหมด 	(Component: CourseList) 

import { useCourseStore } from '../../store/CourseStore'; 
import { DropButton } from './DropButton';

type Course = {
    code: string;
    nameTh: string;
    credit: number;
};

export const CourseList: React.FC = () => {
    const courses = useCourseStore((state: { courses: Course[] }) => state.courses);
    return (
        <div>
            <h2>รายวิชาที่ลงทะเบียน</h2>
            <ul>
                {courses.map((course: Course, idx: number) => (
                    <li key={idx}>
                        {course.code} - {course.nameTh} ({course.credit} หน่วยกิต)
                        <DropButton courseCode={course.code} />
                    </li>
                ))}
            </ul>
        </div>
    );  
}