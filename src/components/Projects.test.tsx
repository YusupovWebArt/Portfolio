import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Projects from "./Projects";
import { LanguageProvider } from "../contexts/LanguageContext";

describe("Projects Component Specification (TDD)", () => {
  it("should render projects section headline and category filter buttons", () => {
    const handleSelect = vi.fn();
    render(
      <LanguageProvider>
        <Projects onProjectSelect={handleSelect} />
      </LanguageProvider>
    );

    expect(screen.getByRole("heading", { level: 2, name: /featured projects/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /all projects/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^react$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^wordpress$/i })).toBeInTheDocument();
  });

  it("should filter projects when clicking a category filter button", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    render(
      <LanguageProvider>
        <Projects onProjectSelect={handleSelect} />
      </LanguageProvider>
    );

    const reactButton = screen.getByRole("button", { name: /^react$/i });
    await user.click(reactButton);

    // Verify filter is active
    expect(reactButton).toHaveClass("bg-purple-600");
  });

  it("should trigger onProjectSelect when clicking a project details button", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    render(
      <LanguageProvider>
        <Projects onProjectSelect={handleSelect} />
      </LanguageProvider>
    );

    const viewDetailButtons = screen.getAllByRole("button", { name: /view details/i });
    expect(viewDetailButtons.length).toBeGreaterThan(0);

    await user.click(viewDetailButtons[0]);
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});
