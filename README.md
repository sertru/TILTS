# TILTS: Truly Impossibly Latest Typescript Starter

I want to live in a world where you can search for `Typescript Starter` and find a nice repository right away that was updated with reasonable changes at most a week ago (and not 2 or more years ago).

> **Status: Not much to see yet. Developer is naively optimistic.**

## Objectives

- Use Latest/LTS/Stable versions.
- Use Yarn or check for other package managers.
- Auto-formatting/linting should work on save.
- Use ESM instead of CommonJS.

## Guidelines

- Start small and expand with bite-sized chunks.
- Every push to `main` branch must come from a PR.
  - A PR must have a description of changes and how these changes were achieved (if applicable).
  - Ideally, going through PR descriptions and file changes from oldest to newest should provide a tutorial-like experience of how this repository came to be.
- Contents of every file in this repository must be reasonable and relevant.
  - e.g. for any setting or property in tsconfig, or package.json, or gitignore, or other file - there must be a reason for it to be there. `It might be used the future` is not a good reason.
- No global npm installs unless absolutely necessary (use Dev Dependencies)
- Use explicit versions for dependencies, no `^` or `~`. If version changed - check what was updated explicitly, and then update it.
  - `dependabot` is nice, saves some time, and might come later, but for the time being - it's better to try to form a habit of checking what was actually changed in a dependency that is being updated and not have "hidden" updates. No one is perfect and even patch-level updates can have breaking changes.

## Acknowledgements

- This might be a pipe dream, and this repository could end up as just another lifeless husk like so many others out there. This is fine 🔥.
- There are countless things I have no knowledge of. Building up this repository will also be a learning experience.
- In a world where everything updates constantly - expect this repository to always be at least a little out-of-date.
