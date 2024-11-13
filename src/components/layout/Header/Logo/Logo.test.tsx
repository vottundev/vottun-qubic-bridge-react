import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Logo } from "./Logo";
import LogoImage from "@/assets/images/main-logo.svg";

describe("Logo Component", () => {
   it("renders the logo with the correct alt text and source", () => {
      render(<Logo />);
      const logo = screen.getByAltText("Qubic Bridge");
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute("src", LogoImage);
   });
});
