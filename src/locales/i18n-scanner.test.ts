import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { en } from './en';
import { ua } from './ua';
import { es } from './es';

describe('Trilingual i18n Completeness & Hardcoded Strings Specification (TDD)', () => {
  const localesDir = __dirname;
  const componentsDir = path.resolve(__dirname, '../components');
  const appFile = path.resolve(__dirname, '../App.tsx');

  it('should define required UI keys in all 3 language dictionaries', () => {
    const dictionaries = [
      { code: 'en', dict: en },
      { code: 'ua', dict: ua },
      { code: 'es', dict: es },
    ];

    for (const { code, dict } of dictionaries) {
      // Skills navigation keys
      expect(
        (dict.skills as unknown as Record<string, unknown>).chooseSpecialization,
        `Missing skills.chooseSpecialization in ${code}`
      ).toBeDefined();

      expect(
        (dict.skills as unknown as Record<string, unknown>).swipe,
        `Missing skills.swipe in ${code}`
      ).toBeDefined();

      // About keys
      expect(
        (dict.about as unknown as Record<string, unknown>).availableForProjects,
        `Missing about.availableForProjects in ${code}`
      ).toBeDefined();

      expect(
        (dict.about as unknown as Record<string, unknown>).myJourney,
        `Missing about.myJourney in ${code}`
      ).toBeDefined();

      // App loading key
      expect(
        (dict as unknown as Record<string, unknown>).app,
        `Missing app section in ${code}`
      ).toBeDefined();

      // Footer tech stack key
      expect(
        dict.footer.madeWith,
        `Missing footer.madeWith in ${code}`
      ).toBeDefined();

      // AiWorkflow categories
      const workflow = dict.aiWorkflow as unknown as Record<string, unknown>;
      expect(workflow.categories, `Missing aiWorkflow.categories in ${code}`).toBeDefined();
      expect(Array.isArray(workflow.categories), `aiWorkflow.categories is not an array in ${code}`).toBe(true);
      expect((workflow.categories as unknown[]).length, `aiWorkflow.categories length in ${code}`).toBe(4);
    }
  });

  it('should not contain hardcoded strings in Skills.tsx', () => {
    const skillsContent = fs.readFileSync(path.join(componentsDir, 'Skills.tsx'), 'utf-8');
    expect(skillsContent).not.toContain('Choose Specialization:');
    expect(skillsContent).not.toMatch(/>\s*Swipe\s*</);
  });

  it('should not contain hardcoded strings in About.tsx', () => {
    const aboutContent = fs.readFileSync(path.join(componentsDir, 'About.tsx'), 'utf-8');
    expect(aboutContent).not.toContain('Available for Projects');
    expect(aboutContent).not.toMatch(/>\s*My Journey\s*</);
  });

  it('should not contain hardcoded loading string in App.tsx', () => {
    const appContent = fs.readFileSync(appFile, 'utf-8');
    expect(appContent).not.toContain('Loading project details...');
  });

  it('should contain zero em dashes across all locale dictionary files', () => {
    const files = ['en.ts', 'ua.ts', 'es.ts', 'types.ts'];
    for (const file of files) {
      const content = fs.readFileSync(path.join(localesDir, file), 'utf-8');
      const emDashMatches = content.match(/—/g);
      expect(
        emDashMatches,
        `Em dash found in locales/${file} (count: ${emDashMatches?.length || 0})`
      ).toBeNull();
    }
  });
});
