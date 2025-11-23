import "./SettingsPage.css"
import { useState } from "react"
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch"

function Account() {
    return (
        <>
            <p> whfhfaaaa</p>
            <ToggleSwitch />
        </>
    )

}
function Privacy() {
    return (
        <p> whfhfh</p>
    )
}
function Notifiations() {
    return (
        <p> whfhfaaaa</p>
    )
}
function Display() {
    return (
        <p> whfhf</p>
    )
}



export default function SettingsPage() {

    const [activeTab, setActiveTab] = useState("accounts");

    return (
        <>
            <div className="SettingsPageContainer">
                <div className="NavigationBox">
                    <h1> Settings</h1>
                    <h2 onClick={() => setActiveTab("accounts")}> Accounts</h2>
                    <h2 onClick={() => setActiveTab("privacy")}> Privacy </h2>
                    <h2 onClick={() => setActiveTab("notifications")}> Notifications</h2>
                    <h2 onClick={() => setActiveTab("display")}> Display</h2>
                </div>
                <div className="SettingsBox">
                    <h1> SETTINGS </h1>
                    {activeTab === "accounts" && <Account />}
                    {activeTab === "privacy" && <Privacy />}
                    {activeTab === "notifications" && <Notifiations />}
                    {activeTab === "display" && <Display />}

                </div>
            </div>
        </>
    )
}