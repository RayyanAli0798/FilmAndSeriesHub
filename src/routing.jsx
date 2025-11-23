import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AccountsPage from "./pages/AccountsPage/AccountsPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";

export default function Pages() {

    return (
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/accounts" element={<AccountsPage />} />
            <Route path="/Settings" element={<SettingsPage/>} />
        </Routes>
    )

}