// ระบบการถอนรายวิชา 
    // - สามารถเลือกรายวิชาที่ต้องการถอนได้ (ปุ่ม Component: DropButton) 



import type { CourseInterface } from '../../store/CourseStore';
import { useCourseStore } from '../../store/CourseStore';

interface DropButtonProps {
    courseCode: string;
}

export const DropButton: React.FC<DropButtonProps> = ({ courseCode }) => {
    const removeCourse = useCourseStore((state: CourseInterface) => state.removeCourse);

    return (
        <button onClick={() => removeCourse(courseCode)}>
            ถอนรายวิชา
        </button>
    );
};  