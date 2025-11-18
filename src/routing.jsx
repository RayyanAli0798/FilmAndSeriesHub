import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AccountsPage from "./pages/AccountsPage/AccountsPage";

export default function Pages() {

    return (
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/accounts" element={<AccountsPage />} />
        </Routes>
    )

}