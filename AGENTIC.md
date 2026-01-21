# AGENTIC MEMORY & RULEBOOK

## Project Overview
**Name**: THE ELECTRONICS BOND
**Goal**: A premium electronics application (likely e-commerce or community platform) built with top-tier aesthetics and performance.

## Technology Stack
- **Framework**: Angular v21+
- **Styling**: SCSS + Tailwind CSS (v3)
- **Rendering**: Server-Side Rendering (SSR) enabled
- **State Management**: Angular Signals (Preferred)
- **Architecture**: Standalone Components

## Critical Directives
> [!IMPORTANT]
> **AESTHETICS ARE PARAMOUNT.**
> - Designs must be "premium", "modern", and "dynamic".
> - Avoid generic, flat, or boring UI.
> - Use rich colors, gradients, glassmorphism, and micro-animations.

## Coding Standards
1.  **Component Structure**:
    - Every component/page MUST have dedicated files: `component.ts`, `component.html`, and `component.scss`.
    - **NO** inline templates or styles.

2.  **Styling Strategy (CRITICAL)**:
    - **NO** Tailwind utility classes in HTML (e.g., `<div class="p-4">` is FORBIDDEN).
    - Use Tailwind exclusively via `@apply` in SCSS files.
    - **NO** Vanilla CSS properties (like `padding: 10px`) unless absolutely necessary/complex. Prefer `@apply`.
    - Example:
        ```scss
        .my-card {
            @apply p-4 bg-white rounded-lg shadow-md; // Correct
        }
        ```

3.  **Architecture**:
    - Use `standalone: true`.
    - Use `OnPush` change detection where possible.
    - Define routes in `app.routes.ts`.

4.  **Signals**:
    - Prefer `signal()`, `computed()`, and `effect()` over RxJS observables for synchronous state.

5.  **SSR**:
    - Ensure code is safe for server execution (wrap `window` or `document` access in platform checks).

## Task Memory
- **Initialization**: Project created with routing, SCSS, SSR.
- **Tailwind**: Installed and configured manually (v3) due to v4 issues. Global directives in `src/styles.scss`.
