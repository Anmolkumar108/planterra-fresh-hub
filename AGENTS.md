<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the existing TanStack Start/Vite route infrastructure; use it only for rendering and navigation, with no business server functions, to preserve the supported Lovable runtime.
- Implement PLANTERRA feature components and mock data in JavaScript JSX with manually built React controls; avoid external UI packages to keep presentation lightweight.
- Maintain a single React context for all demo website content and browser-local persistence so admin changes immediately reflect on public pages without a backend.
- Use generated bundled photos and imported asset pointers for downloaded media; never depend on temporary files or third-party image hotlinks.
- Keep independently shareable public and admin pages as file-based leaf routes, each with its own metadata, for reliable navigation and page titles.
