# Closer Tonight

A quiet date-night game for two.

Three levels — **Spark**, **Connect**, **Closer** — plus a separate **Hard Conversation** ritual in the menu. The web app draws one card at a time on phone or laptop. A printable deck is included for nights you want it on the table.

## Files

| File | What it is |
|---|---|
| `index.html` | The web app. Open in any browser. Works offline once loaded. |
| `cards.js` | The card data. Edit this to add, change, or remove cards. |
| `print.html` | Printable deck — all cards laid out 9 per page. Open in browser, click **Print / Save as PDF**. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is. |
| `README.md` | This file. |
| `.gitignore` | Standard ignore patterns. |

## Try it locally

Double-click `index.html`. That's it.

## Host it on GitHub Pages (so you can open it from any device)

### One-time setup with GitHub Desktop

**Step 1 — Clean up the broken `.git` folder.**

I left a partially-initialized `.git/` folder in this directory that I couldn't fully clean up from my sandbox. You need to delete it once before GitHub Desktop will work cleanly.

1. Open **Windows Explorer** and navigate to this folder.
2. View → Show → **Hidden items** (check this on).
3. You'll see a `.git` folder. Delete it.
4. Turn Hidden items back off if you want.

**Step 2 — Add the folder to GitHub Desktop.**

1. Open **GitHub Desktop**.
2. Sign in to your GitHub account if you haven't.
3. **File → Add Local Repository** → choose this `Date night` folder.
4. GitHub Desktop will say *"This directory does not appear to be a Git repository. Would you like to create a repository here instead?"* → Click **create a repository**.
5. **Name:** something private-feeling (e.g. `date-night` — your call).
6. **Description:** optional.
7. **Initialize this repository with a README:** leave **unchecked** (we already have one).
8. **Git ignore:** None.
9. **License:** None.
10. Click **Create repository**.

**Step 3 — Commit and publish.**

1. GitHub Desktop will show all your files in the "Changes" tab on the left.
2. Bottom-left: type a commit summary like `Closer Tonight v1` and click **Commit to main**.
3. Top-right: click **Publish repository**.
4. **Keep this code private** — check this box. (Pages on private repos requires GitHub Pro; if you're on the free tier and want it private, keep it private and skip Pages — use it locally instead.)
5. Click **Publish repository**.

**Step 4 — Turn on GitHub Pages.**

1. In GitHub Desktop, click **View on GitHub** (top right) to open your repo in the browser.
2. **Settings → Pages**.
3. Under "Build and deployment", **Source** = **Deploy from a branch**.
4. **Branch** = `main`, **folder** = `/ (root)`. Click **Save**.
5. Wait a minute. Refresh. You'll see *"Your site is live at https://YOUR-USERNAME.github.io/YOUR-REPO/"*.

**Step 5 — Bookmark on your phones.**

- iPhone: open the URL in Safari → tap the share icon → **Add to Home Screen**.
- Android: open in Chrome → menu → **Add to Home screen**.

It opens like an app.

### Updating cards later

1. Open `cards.js` in any text editor (or directly on GitHub through the web UI).
2. Add a new card to any array:
   ```js
   { type: "question", text: "Your new card here." }
   ```
3. Save.
4. In GitHub Desktop: commit + push. Pages picks it up within a minute.

## How to play

1. Open the app. Tap a level — Spark, Connect, or Closer.
2. Whoever draws reads the card aloud. The other answers.
3. Tap **Next** (or tap the card) for the next one.
4. The deck remembers what you've drawn so it won't repeat until you've seen them all.
5. Occasionally a **Wildcard** interrupts — trust it.
6. Occasionally an **Overlay** drops in alongside a question — answer the question, then apply the overlay.
7. If something hard comes up that needs its own conversation, open **Hard Conversation** from the menu — an eight-step ritual you walk through together at your own pace.

## How the cards are organized

- **Spark** — small specifics in the present. Easy entries. Notice each other.
- **Connect** — own interior. Things named with ownership. The "I" tier.
- **Closer** — bodies, breath, want. Flirty, sensual, intimate — never crude.
- **Wildcards** — change the rules for one turn.
- **Overlays** — modifiers that drop onto any question.
- **Hard Conversation** — eight steps for revisiting something old together, on purpose. Available from the menu. Not a card you draw.

## Notes

The deck isn't trying to entertain. It's giving you words to start. Take your time. The point isn't to get to the next card.

Whoever draws reads. The other answers. That's the whole rule.
