import { daisyUIThemeList, errorList } from '@root/types/model';
import { z } from 'zod';

export const daisyUIThemeEnumSchema = z.enum(daisyUIThemeList).catch('fantasy');
export type DaisyUIThemeEnum = z.infer<typeof daisyUIThemeEnumSchema>;

export const errorEnumSchema = z.enum(errorList).catch('INTERNAL_SERVER_ERROR');
export type ErrorEnum = z.infer<typeof errorEnumSchema>;

export const githubFileResponseSchema = z.object({ content: z.string() });
export type GithubFileResponse = z.infer<typeof githubFileResponseSchema>;

export const packageDotJSONSchema = z.object({ version: z.string() });
export type PackageDotJSON = z.infer<typeof packageDotJSONSchema>;
