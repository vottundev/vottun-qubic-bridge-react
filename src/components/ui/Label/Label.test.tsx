import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./Label";

describe("Label Component", () => {
   it("renders correctly with default props", () => {
      render(<Label>Test Label</Label>);
      const label = screen.getByText("Test Label");
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass("text-sm font-medium leading-none");
   });

   it("applies custom class names", () => {
      render(<Label className="custom-class">Test Label</Label>);
      const label = screen.getByText("Test Label");
      expect(label).toHaveClass("custom-class");
   });

   it("supports peer-disabled styles", () => {
      render(
         <Label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Disabled Label
         </Label>
      );
      const label = screen.getByText("Disabled Label");
      // This test confirms that className has been applied, but
      // functional peer-disabled behavior would be tested in integration or end-to-end tests.
      expect(label).toHaveClass("peer-disabled:cursor-not-allowed");
      expect(label).toHaveClass("peer-disabled:opacity-70");
   });
});
