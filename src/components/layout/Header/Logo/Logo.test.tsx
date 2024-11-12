import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Logo } from "./Logo";

describe("Button Component", () => {
    it("renders the logo", () => {
        render(<Logo />);
    });
});
