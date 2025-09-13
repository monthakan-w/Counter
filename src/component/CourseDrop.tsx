// ระบบการถอนรายวิชา 
    // - นำรายวิชาที่ถอน แยกไปแสดงผลอีกส่วนหนึ่งของหน้าจอ 	(Component: CourseDrop ) 

import { useCourseStore } from '../../store/CourseStore';

export const CourseDrop: React.FC = () => { 
    const droppedCourses = useCourseStore((state) => state.droppedCourses);

    return (
        <div>
            <h2>รายวิชาที่ถอน</h2> 
            <ul>
                {droppedCourses.map((course, idx) => (
                    <li key={idx}>
                        {course.code} - {course.nameTh} ({course.credit} หน่วยกิต)
                    </li>
                ))}
            </ul>
        </div>
    );
}
