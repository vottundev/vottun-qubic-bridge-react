import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BridgeSelectorHeader } from "./BridgeSelectorHeader";

describe("BridgeSelectorHeader Component", () => {
   it("renders the header with the correct text and icon", () => {
      render(<BridgeSelectorHeader />);

      // Check for the main heading
      const mainHeading = screen.getByText(
         "Which type of swap do you want to do?"
      );
      expect(mainHeading.getAttribute("class")).toContain(
         "text-3xl xl:text-4xl"
      );
      expect(mainHeading).toBeInTheDocument();

      // Check for the secondary text
      const secondaryText = screen.getByText(
         "Select the type of swap that you want to do"
      );
      expect(secondaryText.getAttribute("class")).toContain(
         "text-lg xl:text-xl"
      );
      expect(secondaryText).toBeInTheDocument();

      // Check if the icon is rendered
      const icon = screen.getByTitle("Swap icon");
      expect(icon).toBeInTheDocument();
   });
});
