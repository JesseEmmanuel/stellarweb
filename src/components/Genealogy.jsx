import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartupSavings from '../pages/geneaolgy/StartupSavings';
import GreatSavings from '../pages/geneaolgy/GreatSavings';

const Settings = () => {

    return (
        <Routes>
            <Route path='/App/genealogy/startup-savings' element={<StartupSavings />}></Route>
            <Route path='/App/genealogy/great-savings' element={<GreatSavings />}></Route>
        </Routes>
    )

}