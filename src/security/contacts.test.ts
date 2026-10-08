import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Security & Privacy: Contact Obfuscation Specification', () => {
  const rootDir = path.resolve(__dirname, '../../');
  const indexHtmlPath = path.resolve(rootDir, 'index.html');
  const srcDir = path.resolve(rootDir, 'src');

  // Forbidden plaintext phone and email patterns
  const rawPhonePattern = /\+34\s*642\s*413\s*967|34642413967/;
  const rawPersonalEmailPattern = /web\.sunline@gmail\.com|yusupovwebart@gmail\.com/;

  it('should not expose raw telephone or personal email in index.html outside Base64', () => {
    expect(fs.existsSync(indexHtmlPath)).toBe(true);
    const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

    const phoneMatch = htmlContent.match(rawPhonePattern);
    const emailMatch = htmlContent.match(rawPersonalEmailPattern);

    expect(
      phoneMatch,
      `Raw phone number found in index.html: ${phoneMatch ? phoneMatch[0] : ''}`
    ).toBeNull();

    expect(
      emailMatch,
      `Raw personal email found in index.html: ${emailMatch ? emailMatch[0] : ''}`
    ).toBeNull();
  });

  it('should not contain un-obfuscated raw personal phone in production source components', () => {
    const scanDir = (dir: string) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(fullPath);
        } else if (
          entry.isFile() &&
          /\.(tsx|ts)$/.test(entry.name) &&
          !/\.(test|spec)\.(ts|tsx)$/.test(entry.name) &&
          !fullPath.includes(path.join('src', 'test'))
        ) {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const phoneMatch = content.match(rawPhonePattern);
          expect(
            phoneMatch,
            `Raw phone number found in production file ${fullPath}: ${phoneMatch ? phoneMatch[0] : ''}`
          ).toBeNull();
        }
      }
    };

    scanDir(srcDir);
  });
});
