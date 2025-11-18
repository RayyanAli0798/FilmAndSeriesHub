import {Routes, Route} from "react-router";
import Home from "./Pages/HomePage/HomePage";

export default function Pages(){

return(
<Routes>
<Route index element={<Home/>} />
</Routes>
)

}