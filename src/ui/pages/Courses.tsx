import { useEffect, useState } from 'react';
import { useCourse } from "../../hooks/useCourse";
import { CourseEntity } from '../../interfaces/course.interface';

import "../styles/courses.css";
import { Checkout } from '../components/checkout';

export const Courses = () => {

    const [ courses, setCourses ] = useState<CourseEntity[]>([]);
    const [ buy, setBuy ] = useState<string|null>(null);

    const { getAllCourse } = useCourse();

    const getAllcourses = async() => {
        const courses = await getAllCourse();
        if("success" in courses){
            setCourses(courses.payload);
        }
    };

    const handleBuy = (id:string) => {
        setBuy(id);
    };

    useEffect(()=>{
        getAllcourses();
    }, []);

    return (
        <section className='course-section'>

            {
                buy ? (
                    <Checkout
                        id_course={buy}
                        handleCancel={()=>{setBuy(null)}}
                    />
                ):(
                    <div className='courses-content'>
                        <p className='text-center text-3xl mt-5 p-2'>Courses</p>
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
                                        <p className='w-[40%] font-bold'>${c.amount} USD</p>
                                        <button
                                            className='w-[30%] bg-blue-500 text-white hover:bg-blue-400 hover:text-white rounded p-1'
                                            onClick={()=>{handleBuy(c.id)}}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                        </div>
                    </div>
                )
            }

        </section>
    );
};