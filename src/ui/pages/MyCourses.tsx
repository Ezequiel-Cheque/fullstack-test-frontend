import { useContext, useEffect, useState } from "react";
import { useCourse } from "../../hooks/useCourse";

import { AuthContext } from '../context/AuthContext';
import { CourseEntity } from "../../interfaces/course.interface";

import "../styles/courses.css";

export const MyCourses = () => {

    const [courses, setCourses] = useState<CourseEntity[]>([]);

    const { user } = useContext(AuthContext);
    const { getByUser } = useCourse();

    const getCourses = async() => {
        if (user?.id) {
            const courses = await getByUser(user.id);
            if ("success" in courses) {
                setCourses(courses.payload);
            }
        }
    };

    useEffect(()=>{
        getCourses();
    },[]);

    return (
        <section className="course-section">
            
            <div className='courses-content'>
                <p className='text-center text-3xl mt-5 p-2'>My Courses</p>
                <div className='flex flex-wrap justify-around p-2'>
                {
                courses.map((c)=>(
                    <div key={c.id} className='w-[300px] h-[370px] border-[1px] border-solid rounded-md m-5'>
                        <div className='w-full h-[160px]'><img src={c.image} alt="course-img" className='w-full h-full rounded-t-md' /></div>
                        <div className=''>
                            <p className='text-center text-lg font-semibold p-[2px] bg-slate-200 border-b-[1px]'>{c.name}</p>
                            <p
                                className='text-sm p-2 text-justify h-[135px] overflow-hidden'
                            >
                                {c.description}
                            </p>
                            <div className='flex items-center justify-center border-t-[1px] p-1'>
                                <button
                                    className='w-full bg-blue-500 text-white hover:bg-blue-400 hover:text-white rounded p-1'
                                    onClick={()=>{}}
                                >
                                    Start course
                                </button>
                            </div>
                        </div>
                    </div>
                ))
                }
                </div>
            </div>

        </section>
    );

};