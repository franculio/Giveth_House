/// <reference types="astro/client" />

// Extend Astro's built-in types
declare module "astro" {
  interface AstroBuiltinProps {
    class?: string;
    className?: string;
  }
}
