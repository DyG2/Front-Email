import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { routes } from "../helpers/routes";
import Home from "./pages/home/Home";
import PageNotFound from "./errors/PageNotFound";
import '../assets/css/index/index.css'

function Router()
{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    {
                        routes.map(
                            (data, key) => (
                                <Route path={data.uri} element={<data.component/>} key={key}/>
                            )
                        )
                    }
                </Route>
                <Route path="*"
                       element={ <PageNotFound />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router