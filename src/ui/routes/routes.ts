import { Courses } from "../pages/Courses";
import { MyCourses } from "../pages/MyCourses";
type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent;
    name: string;
    icon: string;
}

export const routes: Route[] = [
    {
        to: "/courses",
        path: "courses",
        Component: Courses,
        name: "Courses",
        icon: ""
    },
    {
        to: "/mycourses",
        path: "mycourses",
        Component: MyCourses,
        name: "My Courses",
        icon: ""
    }
    
];