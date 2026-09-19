import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider, useLanguage } from "./LanguageContext";

function LanguageConsumer() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div>
      <span data-testid="current-lang">{lang}</span>
      <h1 data-testid="nav-projects">{t.header.nav.projects}</h1>
      <button onClick={() => setLang("en")}>Set English</button>
      <button onClick={() => setLang("ua")}>Set Ukrainian</button>
      <button onClick={() => setLang("es")}>Set Spanish</button>
    </div>
  );
}

describe("LanguageContext Specification", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should default to English when localStorage is empty", () => {
    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId("current-lang")).toHaveTextContent("en");
    expect(screen.getByTestId("nav-projects")).toHaveTextContent("Projects");
  });

  it("should switch to Ukrainian and update translated strings and localStorage", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>
    );

    await user.click(screen.getByRole("button", { name: /set ukrainian/i }));
    expect(screen.getByTestId("current-lang")).toHaveTextContent("ua");
    expect(screen.getByTestId("nav-projects")).toHaveTextContent("Проєкти");
    expect(localStorage.getItem("portfolio_lang")).toBe("ua");
  });

  it("should switch to Spanish and update translated strings and localStorage", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>
    );

    await user.click(screen.getByRole("button", { name: /set spanish/i }));
    expect(screen.getByTestId("current-lang")).toHaveTextContent("es");
    expect(screen.getByTestId("nav-projects")).toHaveTextContent("Proyectos");
    expect(localStorage.getItem("portfolio_lang")).toBe("es");
  });

  it("should restore saved language preference from localStorage", () => {
    localStorage.setItem("portfolio_lang", "ua");
    render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId("current-lang")).toHaveTextContent("ua");
    expect(screen.getByTestId("nav-projects")).toHaveTextContent("Проєкти");
  });
});
