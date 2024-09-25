import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute } from "../routes/PublicRoute";
import Login from "../pages/Login";
import { PrivateRoute } from "../routes/PrivateRoute";
import { routes } from "../routes/routes";
import MainLayout from "./MainLayout";


export const Navigation = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<Login />} />
                        </Routes>
                    </PublicRoute>
                }
                />


                <Route path="/*" element={
                    <PrivateRoute>
                        <Routes>
                        {
                            routes.map( ({path, Component})=> (
                                <Route
                                    key={path}
                                    path={path}
                                    element={
                                        <MainLayout>
                                            <Component />
                                        </MainLayout>
                                    }
                                >
                                </Route>
                            ) )
                        }
                            <Route path='/profile' element={
                                <MainLayout>
                                    {/* <ProfilePage /> */}
                                </MainLayout>
                            } />
                            <Route path='/*' element={<Navigate to={routes[0].to} />} />
                        </Routes>
                    </PrivateRoute>
                } />
                
            </Routes>

        </BrowserRouter>
    );
}