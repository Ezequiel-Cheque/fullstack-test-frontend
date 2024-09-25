
export interface CourseEntity {
    name: string;
    description: string;
    amount: number;
    image: string;
    id: string;
}

export interface ErrorResponseCourse {
    detail: {
        success: boolean,
        message: string,
        errors: string[]
    }
}

export interface CourseResponse {
    success: boolean;
    message: string;
    payload: CourseEntity[]
}

export interface GetCourseResponse {
    success: boolean;
    message: string;
    payload: CourseEntity;
}