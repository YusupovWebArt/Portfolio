import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeConsumer() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme-status">{isDark ? "dark-active" : "light-active"}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

describe("ThemeContext Specification", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("should default to dark theme when localStorage is empty", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-status")).toHaveTextContent("dark-active");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("should toggle between dark and light themes on button click", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });

    // Click to switch to light theme
    await user.click(toggleButton);
    expect(screen.getByTestId("theme-status")).toHaveTextContent("light-active");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");

    // Click again to return to dark theme
    await user.click(toggleButton);
    expect(screen.getByTestId("theme-status")).toHaveTextContent("dark-active");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("should honor stored preference from localStorage", () => {
    localStorage.setItem("theme", "light");
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-status")).toHaveTextContent("light-active");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
