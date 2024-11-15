import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
////////////////////////////////////////////////////////////
import { Input } from "./Input";

describe("Input Component", () => {
   it("renders correctly with default props", () => {
      render(<Input placeholder="Enter text..." />);
      const input = screen.getByPlaceholderText("Enter text...");
      expect(input).toBeInTheDocument();
   });

   it("accepts custom className", () => {
      render(<Input className="custom-class" role="textbox" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("custom-class");
   });

   it("handles input value change", async () => {
      render(<Input />);
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "Hello, world!");
      expect(input).toHaveValue("Hello, world!");
   });

   it("renders as disabled when disabled prop is passed", () => {
      render(<Input disabled role="textbox" />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
   });

   it("supports different input types", () => {
      render(<Input role="textbox" type="password" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "password");
   });
});
