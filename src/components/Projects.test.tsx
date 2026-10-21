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

    const viewDetailButtons = screen.getAllByRole("link", { name: /view details/i });
    expect(viewDetailButtons.length).toBeGreaterThan(0);

    await user.click(viewDetailButtons[0]);
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });

  it("should filter projects by search query and show empty state when no match is found", async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    render(
      <LanguageProvider>
        <Projects onProjectSelect={handleSelect} />
      </LanguageProvider>
    );

    const searchInput = screen.getByRole("textbox", { name: /search/i });
    await user.type(searchInput, "Unitrition");

    expect(screen.getByText("Unitrition")).toBeInTheDocument();

    // Type a nonexistent query to trigger empty state
    await user.clear(searchInput);
    await user.type(searchInput, "NonexistentProjectXYZ123");

    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();

    // Click reset button
    const resetBtn = screen.getByRole("button", { name: /reset all filters/i });
    await user.click(resetBtn);

    expect(screen.queryByText(/no projects found/i)).not.toBeInTheDocument();
  });

  it("should filter personal projects and render personal badge", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Projects onProjectSelect={vi.fn()} />
      </LanguageProvider>
    );

    const personalButton = screen.getByRole("button", { name: /personal projects/i });
    expect(personalButton).toBeInTheDocument();

    await user.click(personalButton);

    expect(screen.getByText("Unitrition")).toBeInTheDocument();
    expect(screen.getByText("Next.js 16 & Hybrid RAG Portfolio Platform")).toBeInTheDocument();
    expect(screen.getByText("My React Portfolio Website")).toBeInTheDocument();

    const badges = screen.getAllByText(/personal project/i);
    expect(badges.length).toBeGreaterThanOrEqual(3);
  });
});
