import { useContext } from "react";
import { envs } from "../plugins/envs.plugin";
import { HttpService } from "../plugins/http.plugin";
import { AuthContext } from "../ui/context/AuthContext";
import { CourseResponse, ErrorResponseCourse, GetCourseResponse } from "../interfaces/course.interface";

export const useCourse = () => {
    
    const http = new HttpService();
    const { user } = useContext(AuthContext);
    const token = user ? user.token : "";

    const getAllCourse = async (): Promise<CourseResponse|ErrorResponseCourse> => {
        const url = `${envs.API_URL}/course/getall`;
        const headers = {
            "Authorization": `Bearer ${token}`,
            "accept": "application/json",
        };
        const response = await http.get(url, headers);
        return response;
    };

    const getById = async (id:string):Promise<GetCourseResponse> => {
        const url = `${envs.API_URL}/course/get-by-id/${id}`;
        const headers = {
            "Authorization": `Bearer ${token}`,
            "accept": "application/json",
        };
        const response = await http.get(url, headers);
        return response;
    };

    const getByUser = async (user_id: string):Promise<CourseResponse|ErrorResponseCourse> => {
        const url = `${envs.API_URL}/course/get-by/user/${user_id}`;
        const headers = {
            "Authorization": `Bearer ${token}`,
            "accept": "application/json",
        };
        const response = await http.get(url, headers);
        return response;
    };

    return {
        getAllCourse,
        getById,
        getByUser
    }

};