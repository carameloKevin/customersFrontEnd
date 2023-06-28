import {Routes, Route} from 'react-router-dom';

import Home from "../Pages/Home";
import Customers from "../Pages/Customers";

function Public(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customers" element={<Customers/>} />
            </Routes>
        </>
    );
}


export default Public;