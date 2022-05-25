import { Redirect, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-toastify/dist/ReactToastify.css";
import bgImg from "../bg-img.png";
import { useState } from "react";
import "../App.scss";

function Home() {
    const navigate = useNavigate()
    const [inputField, setInputField] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
    });

    const [errField, setErrField] = useState({
        nameErr: "",
        emailErr: "",
        phoneErr: "",
        passwordErr: "",
        cpasswordErr: "",
    });
    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validForm()) {
            navigate('chart')
        } else {
            toast.error("From Invalid");
        }
    };

    const validForm = () => {
        let formIsValid = true;
        // const validEmailRegex = RegExp(
        //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // );
        const validEmailRegex = RegExp(
            /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        );
        const validPhoneRegex = RegExp(
            /^[0-9\b]+$/,
        );
        setErrField({
            nameErr: "",
            emailErr: "",
            phoneErr: "",
            passwordErr: "",
            cpasswordErr: "",
        });
        if (inputField.name === "") {
            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                nameErr: "Please Enter Name",
            }));
        }
        if (inputField.email === "") {
            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                emailErr: "Please Enter Email",
            }));
        }

        if (
            inputField.email !== "" &&
            !validEmailRegex.test(inputField.email)
        ) {
            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                emailErr: "Please Enter valid Email",
            }));
        }
        if (inputField.phone === "") {
            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                phoneErr: "Please Enter Phone Number",
            }));
        }
        if (
            inputField.phone !== "" &&
            !validPhoneRegex.test(inputField.phone)
        ) {
            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                phoneErr: "Please Enter valid Number",
            }));
        }
        if (inputField.phone.length !== 10) {
            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                phoneErr: " Please put 10  digit mobile number",
            }));
        }

        if (inputField.password === "") {
            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                passwordErr: "Please Enter Password",
            }));
        }
        if (inputField.cpassword === "") {
            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                cpasswordErr: "Please Enter Confirm Password",
            }));
        }

        if (inputField.cpassword !== inputField.password) {

            formIsValid = false;
            setErrField((prevState) => ({
                ...prevState,
                cpasswordErr: "Confirm Password do not match",
            }));
        }

        console.log(formIsValid);

        return formIsValid;
    };
    return (
        <div className="register-page">
            <div className="left">
                <img  className="bg-img" src={bgImg} />
                <div className="bg-text">
                    <h2>Choose a data range</h2>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                   </div>
            </div>
            <div className="right">
                <div className="heading">
                    <h2>Create a account</h2>
                </div>
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" >Your email address</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            className="input-field"
                            value={inputField.email}
                            onChange={inputHandler}
                            required
                        />
                        {errField.emailErr.length > 0 && (
                            <span className="err">
                                {errField.emailErr}
                                <br />
                            </span>
                        )}
                        <label htmlFor="password" >Your password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="input-field"
                            value={inputField.password}
                            onChange={inputHandler}
                            required
                        />
                        {errField.passwordErr.length > 0 && (
                            <span className="err">
                                {errField.passwordErr}
                                <br />
                            </span>
                        )}
                        <label htmlFor="cpassword"> Confirm your password</label>
                        <input
                            required
                            id="cpassword"
                            type="password"
                            name="cpassword"
                            className="input-field"
                            onChange={inputHandler}
                            value={inputField.cpassword}
                        />
                        {errField.cpasswordErr.length > 0 && (
                            <span className="err">
                                {errField.cpasswordErr}
                                <br />
                            </span>
                        )}
                        <label for="fname">Your full Name</label>
                        <input
                            type="text"
                            className="input-field"
                            name="name"
                            value={inputField.name}
                            onChange={inputHandler}
                            required
                        />
                        {errField.nameErr.length > 0 && (
                            <span className="err">
                                {errField.nameErr}
                                <br />
                            </span>
                        )}
                        <label for="phone">Your phone number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="input-field"
                            style={{ width: 300 }}
                            value={inputField.phone}
                            onChange={inputHandler}
                            required
                        />
                        {errField.phoneErr.length > 0 && (
                            <span className="err">
                                {errField.phoneErr}
                                <br />
                            </span>
                        )}
                        <label className="checkbox-input">
                            I read and agree Terms and Conditions
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <button className="btn" type="submit">
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
