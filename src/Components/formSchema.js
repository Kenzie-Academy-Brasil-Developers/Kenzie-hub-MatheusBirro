import { z } from "zod"

export const formSchemaLogin = z.object({
    email: z
    .string()
    .nonempty("Email é obrigatório"),
    password: z
    .string()
    .nonempty("Senha é obrigatório"),
})

export const formSchemaRegister = z.object({
    name: z
    .string()
    .nonempty("Nome é obrigatório"),
    email: z
    .string()
    .nonempty("Email é obrigatório")
    .email("Forneça um email válido"),
    password: z
    .string()
    .nonempty("Senha é obrigatório")
    .min(8, "É necessário ter pelo menos 8 caracteres")
    .regex(/(?=.*[A-Z])/, "É necessário conter pelo menos uma letra maiúscula")
    .regex(/(?=.*[a-z])/, "É necessário conter pelo menos uma letra minúscula")
    .regex(/(?=.*[0-9])/, "É necessário conter pelo menos um número")
    .regex(/(?=.*[!@#$%^&*])/, "É necessário conter pelo menos um caractere especial"),
    confirmPassword: z
    .string()
    .nonempty("É necessário confirmar a senha"),
    bio: z
    .string()
    .nonempty("Bio é obrigatória"),
    contact: z
    .string()
    .nonempty("Contato é obrigatório"),
    course_module: z
    .string()
    .nonempty("Módulo é obrigatório"),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"],
    })

export const formSchemaCreateTech = z.object({
    title: z
        .string()
        .nonempty("Nome é obrigatório"),
    status: z
        .string()
        .nonempty("Status é obrigatório"),
})