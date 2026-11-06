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

## Your sky (the idle side)

After the first chakra wakes, **Your sky** becomes home: a ladder of the seven chakras, root at the
bottom. Every awakened chakra gathers ✦ light each second, even while the game is closed (up to
8 hours, collected as a welcome-back gift).

- **Glow:** spend light to raise a chakra's glow level (×1, ×10 or Max). Costs grow 15% per level.
  Glow 10, 25, 50, 100, 150… doubles that chakra's output.
- **Cards are power:** chakras wake only by finishing a card, root to crown. Every card done in a
  chakra adds +25% to it for good, and pays a burst of light.
- **Insight:** every answer kept in the journal adds +2% to all light (up to +200%).
- **Streak:** playing on new days adds +10% per day (up to +100%). Missed days lower it gently,
  they never wipe it out.
- **Tap** an awake buddy for a little light.
- **New cycle:** with all seven awake and 1M light gathered in a cycle, be reborn for lotus petals
  (+10% light each, forever). Light and glow start over; cards, journal, streak and petals stay.

The numbers live at the top of the "your sky" section in `index.html` (`BASE`, `COST0`, `GROWTH`,
`MILES`, `CYCLE_AT`) if you want to tune the pace.

## Your journal

Players can write an answer on any card. Answers stay on their device, and from **Your journal**
(the ✎ button, or the link on the first screen) they can save them as a PDF, download a file for
the SoulSite journal, or copy everything as text. The SoulSite file format is in
[SOULSITE-IMPORT.md](SOULSITE-IMPORT.md).

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
