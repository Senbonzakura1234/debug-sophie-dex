import { daisyUIThemeList, errorList } from "@root/types/model";
import { z } from "zod";

export const daisyUIThemeEnumSchema = z.enum(daisyUIThemeList).catch("fantasy");
export type DaisyUIThemeEnum = z.infer<typeof daisyUIThemeEnumSchema>;

export const errorEnumSchema = z.enum(errorList).catch("INTERNAL_SERVER_ERROR");
export type ErrorEnum = z.infer<typeof errorEnumSchema>;
