# Arena Support AI

An offline help chatbot for **Inncircles Arena** — answers questions about how to use the product by matching them against Arena's own documentation. No external AI model, no server, no API key required.

## What it does

- Ask a question in plain English (or speak it via the mic button) — e.g. *"How do I create a new opportunity?"* or *"How do I assign a user to a project?"*
- A local intent-matching engine (`engine.js`) scores the question against a knowledge base of documented procedures (`data.js`) by action, object, and scope (global vs. project vs. module), so closely related questions resolve to the correct, distinct answer.
- If nothing matches confidently, it asks a clarifying question or points to Arena support (`support@inncircles.com`) rather than guessing.
- Browse the same knowledge base by module in the left sidebar, organized by the product's own screens/tabs.
- Each visitor's conversation history is saved locally in their own browser (`localStorage`) — nothing is sent to a server.

## Running it

This is a static site — no build step, no dependencies.

```bash
# from this directory
python3 -m http.server 8000
# then open http://localhost:8000
```

Or open `index.html` directly in a browser, or serve the folder with GitHub Pages / any static host.

**Voice input** requires the browser's Web Speech API (Chrome). It also requires the page to be served with normal microphone permissions — if this page is ever embedded inside another site's sandboxed iframe (for example, when viewed through claude.ai's Artifact preview), the browser may block mic access at the sandbox level regardless of the site's own permission prompt. Opening this file directly, or via GitHub Pages, does not have that restriction.

## Files

- `index.html` — the app shell, chat UI, and browse-by-module UI
- `data.js` — the knowledge base: modules, and per-module `qaItems` (question/answer/action/object/scope/section)
- `engine.js` — the offline matching engine (`buildKB`, `matchQuery`)

## Updating the knowledge base

Each module in `data.js` has a `qaItems` array. Add entries in the shape:

```js
{
  action: "create",       // create | edit | delete | assign | approve | reject | view | configure | export | filter | search | submit | track | link | define
  object: "opportunity",  // short noun this acts on
  scope: "module",        // global | project | module
  section: "Opportunities", // the product tab/screen this belongs to
  question: "How do I create a new opportunity?",
  answer: "1. Go to **Opportunities Management → Opportunities**.\n2. Click **+ Create**.\n...",
  tags: ["create opportunity", "add lead", "new pursuit"]
}
```
