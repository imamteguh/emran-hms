import { Role } from "@/lib/generated/prisma/enums";

export {}

// Create a type for the roles
export type Roles = Role;

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}