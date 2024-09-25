import { useEffect, useState } from "react";
import { useCourse } from "../../hooks/useCourse";
import { CourseEntity } from "../../interfaces/course.interface";
import CardForm from "./CardForm";

import { CircleCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const product_initial = {
    name: "",
    description: "",
    amount: 0,
    image: "",
    id: ""
};

interface CheckoutProps {
    id_course: string;
    handleCancel: ()=>void;
}
export const Checkout = ({ id_course, handleCancel }:CheckoutProps) => {
    
    const [ course, setCourse ] = useState<CourseEntity>(product_initial);
    const [buyed, setBuyed] = useState<boolean>(false);
    const { getById } = useCourse();

    const getCourse = async() => {
        const response = await getById(id_course);
        setCourse(response.payload);
    };

    useEffect(()=>{
        getCourse();
    },[]);

    return (
        <section className="w-full h-full flex justify-center">

            <div className="w-[90%] h-[600px] bg-white m-auto flex justify-around">
                
                <div className="w-[40%] flex items-center">

                    <div className="w-[100%] h-[300px]">
                        <img className="w-[200px] rounded block m-auto" src={course.image} />
                        <p className="m-5 text-justify">{course.description}</p>
                        <p className="text-center text-lg font-semibold">${course.amount} USD</p>
                        <button
                            className='block mx-auto my-5 w-[30%] bg-red-500 text-white hover:bg-red-400 hover:text-white rounded p-1'
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>

                </div>
                <div className="w-[40%] flex items-center">
                    <div className="w-full h-[300px] bg-blue-50 p-5 rounded border-[1px]">
                        
                        {
                            buyed ? (
                                <div>
                                    <CircleCheck className="w-20 h-20 mx-auto mt-5 text-green-600"/>
                                    <p className="mt-5 text-lg text-center">Transaction done successfully!!</p>
                                    <NavLink to="/mycourses">
                                        <button
                                            className='block mx-auto my-5 w-[150px] bg-blue-500 text-white hover:bg-blue-400 hover:text-white rounded p-[8px]'
                                        >
                                            Got to my courses
                                        </button>   

                                    </NavLink>
                                </div>
                            ) : (
                                <CardForm
                                    amount={course.amount}
                                    description={`Buy ${course.name}`}
                                    currency="USD"
                                    course_id={course.id}
                                    handleSuccess={()=>{setBuyed(true)}}
                                />
                            )
                        }
                    </div>
                </div>
            
            </div>

        </section>
    );
};