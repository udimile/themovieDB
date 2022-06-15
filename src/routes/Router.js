import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "../pages/DetailPage/DetailPage";




export default function Router(){
    return(
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path={"/details/:id"} element={<DetailPage />}/>
              <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    )
}