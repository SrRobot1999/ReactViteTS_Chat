import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "La contraseña debe contener al menos 6 caracteres"),
});

export const registerFormSchema = z
  .object({
    photoURL: z
      .instanceof(File, { message: "Please upload a valid image" })
      .refine((data) => data.size < 2 * 1024 * 1024, {
        message: "Image must be less than  2MB",
      }),
    displayName: z
      .string()
      .min(3, "El nombre de usuario es obligatorio")
      .max(50, "El nombre de usuario debe tener 50 caracteres o menos"),
    email: z
      .string()
      .email("Por favor, ingresa una dirección de correo electrónico válida"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas deben coincidir",
  });

export const searchFormSchema = z.object({
  email: z.string().email("Please enter a valid email to search users"),
});
