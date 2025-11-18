import "./AccountsPage.css"
import { useState } from "react"

function LoginForm({ toggle }) {
    return (
        <form className="DetailsBox">
            <h1 className="DetailsTitle"> Sign in!</h1>
            <div className="InputBoxs">
                <input className="InputBox" type="email" minLength={12} placeholder="Email" required />
                <input className="InputBox" type="text" minLength={8} placeholder="Password" required />
            </div>
            <div className="ButtonsArea">
                <button className="ProceedingBTN"> LOGIN </button>
                <div className="OtherOptions">
                    <p> Don't have an account? </p>
                    <button onClick={toggle} className="ChangingBTN"> Register </button>
                </div>
            </div>
        </form>
    )
}

function RegisterForm({ toggle }) {
    return (
        <form className="DetailsBox">
            <h1 className="DetailsTitle"> Sign up!</h1>
            <div className="InputBoxs">
                <input className="InputBox" type="email" minLength={12} placeholder="Email" required />
                <input className="InputBox" type="text" minLength={8} placeholder="Password" required />
                <input className="InputBox" type="text" minLength={3} placeholder="Display Name!" required />
            </div>
            <div className="ButtonsArea">
                <button className="ProceedingBTN"> Register </button>
                <div className="OtherOptions">
                    <p> Already have an account? </p>
                    <button onClick={toggle} className="ChangingBTN"> Login </button>
                </div>
            </div>
        </form>
    )
}

export default function AccountsPage() {
    const [showRegisterForm, setShowRegisterForm] = useState(true)

    function toggleForm() {
        setShowRegisterForm(!showRegisterForm)
    }

    return (
        <div className="AccountPageLayout">
            <img src="src\assets\MoviesBigBar.jpg"/>
            <div className="AccountsPageColumn">
                {showRegisterForm 
                    ? <RegisterForm toggle={toggleForm} /> 
                    : <LoginForm toggle={toggleForm} /> }
            </div>
        </div>
    )
}
