// ระบบการถอนรายวิชา 
    // - แบบฟอร์มการเพิ่มรายวิชา		(Component: CourseForm) 

import { useState } from 'react';
import { useCourseStore } from '../../store/CourseStore'; 
  
export const CourseForm: React.FC = () => {
    const [courseCode, setCourseCode] = useState('');
    const [courseNameTh, setCourseNameTh] = useState('');
    const [courseCredit, setCourseCredit] = useState(0);    
    const addCourse = useCourseStore((state) => state.addCourse);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (courseCode && courseNameTh && courseCredit > 0) {   
            addCourse({
                code: courseCode,
                nameTh: courseNameTh,   
                nameEn: '',
                credit: courseCredit,
                instructor: '',
                grade: '',      
            });
            setCourseCode('');
            setCourseNameTh('');
            setCourseCredit(0);            
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>ระบบการถอนรายวิชา</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input  
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)} 
                    placeholder="รหัสวิชา"
                    required
                />
                <input  
                    type="text" 
                    value={courseNameTh}
                    onChange={(e) => setCourseNameTh(e.target.value)} 
                    placeholder="ชื่อวิชา(ไทย)"    
                    required
                /> 
                <input  
                    type="number"
                    value={courseCredit}
                    onChange={(e) => setCourseCredit(Number(e.target.value))} 
                    placeholder="หน่วยกิต"
                    required
                    min={1}
                />            
                <button type="submit">เพิ่มรายวิชา</button>
            </div>
        </form>
    );
}       