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

## Project architecture

- Keep the restaurant experience as a single-page route with anchored sections because navigation is content-focused and must remain fast on mobile.
- Store all brand colors and typography as semantic tokens in `src/styles.css` so visual changes remain consistent across the site.
- Keep restaurant photo assignments in one content module so future image swaps do not require layout edits.
