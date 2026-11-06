# Chakras

A quiet, solo reflection game through the seven chakras, root to crown.

For each chakra, choose **Reflect** (a question to sit with) or **Practice** (a small ritual
of breath, movement or kind words, some with a timer). Complete a card to open that chakra.
Progress is saved in your browser, so you can come back any time.

The seven-chakra system comes from the yoga and tantra traditions of India; the colors follow
the common modern rainbow mapping. This is a game for reflection and relaxation, not medical
or psychological advice.

## Play

Open the GitHub Pages link on your phone. Tip: "Add to Home Screen" makes it feel like an app.

## Edit the cards

All cards live in `cards.js`. A card can be plain text, or an object:

- `{ "text": "...", "seconds": 60 }` adds a timer (good for practices)
- `{ "text": "...", "deeper": "...", "theme": "..." }` adds a "Go deeper" follow-up question and a small theme label

A chakra can also have an `intimacy` deck of adults-only questions, shown behind an 18+ check (Sacral has one).

Each chakra also has a `bija` (seed sound) and an `affirmation`, shown when it awakens.

## Run locally

```bash
python3 -m http.server 8095
```

Then open http://localhost:8095.
