import { Role } from "@prisma/client"

export {}

// Create a type for the roles
export type Roles = "ADMIN" | "NURSE" | "DOCTOR" | "LAB_TECHNICIAN" | "PATIENT" | "CASHIER";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}