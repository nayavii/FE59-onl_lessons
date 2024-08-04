import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Modal } from "../components/modal";

describe("Modal test", () => {
  it("Test render modal", () => {
    const { getByText, getByLabelText } = render(<Modal />);

    expect(getByText("Sing in")).toBeInTheDocument();
    expect(getByLabelText("Your email")).toBeInTheDocument();
    expect(getByLabelText("Your password")).toBeInTheDocument();
    expect(getByText("Cancel")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();

    const emailInput = getByLabelText("Your email");
    const passwordInput = getByLabelText("Your password");

    fireEvent.input(emailInput, { target: { value: "anya@gmail.com" } });
    expect(emailInput.value).toBe("anya@gmail.com");

    fireEvent.input(emailInput, { target: { value: "masha@gmail.com" } });
    expect(emailInput.value).toBe("masha@gmail.com");

    fireEvent.input(passwordInput, { target: { value: "password" } });
    expect(passwordInput.value).toBe("password");

    fireEvent.input(passwordInput, { target: { value: "khidfhdashkf" } });
    expect(passwordInput.value).toBe("khidfhdashkf");
  });
});
