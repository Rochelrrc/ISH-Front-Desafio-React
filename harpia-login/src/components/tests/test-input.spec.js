import { render, screen } from "@testing-library/react";
import Login from '../../pages/login';
import ForgotPass from "../../pages/forgotPass";
import Logo from '../logo'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Login", () => {
    it("Should render correctly", () => {

        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )

        expect(screen.getByText("Email *")).toBeInTheDocument();
        expect(screen.getByText("Password *")).toBeInTheDocument();
        expect(screen.getByText("Sing in")).toBeInTheDocument();
    })
})


describe("Forgot Pass", () => {
    it("Should render correctly", () => {

        render(
            <BrowserRouter>
                <ForgotPass />
            </BrowserRouter>
        )

        expect(screen.getByText("Email *")).toBeInTheDocument();
        expect(screen.getByText("Request")).toBeInTheDocument();
    })
})

describe("Logotipo Harpia", () => {
    it("Should render correctly", () => {

        render(
            <BrowserRouter>
                <Logo />
            </BrowserRouter>
        )

        expect(screen.getByText("Harpia")).toBeInTheDocument();

    })
})