
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button, buttonVariants } from "./Button";
import { cn } from "@/lib/utils";

describe("Button Component", () => {
  it("renders the button with default variant and size", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeDefined();
    expect(button).toHaveClass(cn(buttonVariants({ variant: "default", size: "default" })));
  });

  it("applies custom class names", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });

    expect(button).toHaveClass("custom-class");
  });

  it("renders with the correct variant and size", () => {
    render(<Button size="lg" variant="outline">Outline Button</Button>);
    const button = screen.getByRole("button", { name: /outline button/i });

    expect(button).toHaveClass(cn(buttonVariants({ variant: "outline", size: "lg" })));
  });

  it("renders as a child component when `asChild` is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: /link button/i });

    expect(link).toBeDefined();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("applies `disabled` correctly", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: /disabled button/i });

    expect(button).toBeDisabled();
  });

  it("handles click events",  () => {
     
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    button.click();

    expect(handleClick).toHaveBeenCalledOnce();
  });
});