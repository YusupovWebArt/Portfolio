import { describe, it, expect } from "vitest";
import { en } from "./en";
import { ua } from "./ua";
import { es } from "./es";

describe("i18n Trilingual Key Parity Specification", () => {
  function getKeysDeep(obj: Record<string, unknown>, prefix = ""): string[] {
    let keys: string[] = [];
    for (const key of Object.keys(obj)) {
      const fullPath = prefix ? `${prefix}.${key}` : key;
      const val = obj[key];
      if (val !== null && typeof val === "object" && !Array.isArray(val)) {
        keys = keys.concat(getKeysDeep(val as Record<string, unknown>, fullPath));
      } else {
        keys.push(fullPath);
      }
    }
    return keys.sort();
  }

  const enKeys = getKeysDeep(en as unknown as Record<string, unknown>);
  const uaKeys = getKeysDeep(ua as unknown as Record<string, unknown>);
  const esKeys = getKeysDeep(es as unknown as Record<string, unknown>);

  it("should have identical key counts across all 3 locales", () => {
    expect(uaKeys.length).toBe(enKeys.length);
    expect(esKeys.length).toBe(enKeys.length);
  });

  it("should ensure Ukrainian (ua) has every single key from English (en)", () => {
    const missingInUa = enKeys.filter((k) => !uaKeys.includes(k));
    expect(missingInUa).toEqual([]);
  });

  it("should ensure Spanish (es) has every single key from English (en)", () => {
    const missingInEs = enKeys.filter((k) => !esKeys.includes(k));
    expect(missingInEs).toEqual([]);
  });

  it("should contain non-empty string values for all leaf keys", () => {
    function assertNonEmpty(obj: Record<string, unknown>, lang: string, path = "") {
      for (const [k, v] of Object.entries(obj)) {
        const currentPath = path ? `${path}.${k}` : k;
        if (typeof v === "string") {
          expect(v.trim().length, `Empty string at ${lang}:${currentPath}`).toBeGreaterThan(0);
        } else if (Array.isArray(v)) {
          expect(v.length, `Empty array at ${lang}:${currentPath}`).toBeGreaterThan(0);
        } else if (typeof v === "object" && v !== null) {
          assertNonEmpty(v as Record<string, unknown>, lang, currentPath);
        }
      }
    }

    assertNonEmpty(en as unknown as Record<string, unknown>, "en");
    assertNonEmpty(ua as unknown as Record<string, unknown>, "ua");
    assertNonEmpty(es as unknown as Record<string, unknown>, "es");
  });
});
