import React from "react";
import FormWrap from "../components/Form";
import { render, fireEvent, getAllByLabelText } from "@testing-library/react";

describe("SignIn", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByRole } = render(
        <FormWrap onSubmit={mockOnSubmit} />
      );

      await (async () => {
        fireEvent.change(getAllByLabelText("First Name *"), {
          target: { value: "Nina" },
        });
        fireEvent.change(getAllByLabelText("Last Name *"), {
          target: { value: "Melkova" },
        });
        fireEvent.change(getAllByLabelText("Email Address *"), {
          target: { value: "email@test.com" },
        });
        fireEvent.change(getAllByLabelText("Password *"), {
          target: { value: "121212" },
        });
      });
      await (async () => {
        fireEvent.click(getByRole("button"));
      });

      expect(mockOnSubmit).toHaveBeenCalled();

      describe("with invalid firstName", () => {
        it.todo("renders firstName validation error", async () => {
          const { getByLabelText, container } = render(<FormWrap />);

          await (async () => {
            const firstNameInput = getByLabelText("First Name *");
            fireEvent.change(firstNameInput, {
              target: { value: "invalid firstName" },
            });
            fireEvent.blur(firstNameInput);
          });
          expect(container.innerHTML).toMatch("Enter firstname");
        });
      });

      describe("with invalid lastName", () => {
        it.todo("renders lastName validation error", async () => {
          const { getByLabelText, container } = render(<FormWrap />);

          await (async () => {
            const lastNamelInput = getByLabelText("Last Name *");
            fireEvent.change(lastNameInput, {
              target: { value: "invalid lastName" },
            });
            fireEvent.blur(lastNameInput);
          });
          expect(container.innerHTML).toMatch("Enter a last name");
        });
      });
    });

    describe("with invalid email", () => {
      it.todo("renders email validation error", async () => {
        const { getByLabelText, container } = render(<FormWrap />);

        await (async () => {
          const emailInput = getByLabelText("Email Address *");
          fireEvent.change(emailInput, {
            target: { value: "invalid email" },
          });
          fireEvent.blur(emailInput);
        });
        expect(container.innerHTML).toMatch("Enter a valid Email");
      });
    });
  });

  describe("with invalid password", () => {
    it.todo("renders password validation error", async () => {
      const { getByLabelText, container } = render(<FormWrap />);

      await (async () => {
        const passwordInput = getByLabelText("Password *");
        fireEvent.change(passwordInput, {
          target: { value: "invalid password" },
        });
        fireEvent.blur(passwordInput);
      });
      expect(container.innerHTML).toMatch("Enter a valid Password");
    });
  });
});
