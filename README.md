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

## Your sanctuary (the idle tycoon side)

After the first chakra wakes, **Your sanctuary** becomes home: the seven chakras as temples, root
at the bottom.

- **Temples:** each temple's bar fills (Root every 1.5s, up to Crown every 96s) and pays ✦ light.
  Tap a full bar to collect it; tap any bar or buddy to nudge it along.
- **Levels:** spend light to level a temple up (×1, ×10 or Max; +15% cost per level). Levels 10,
  25, 50, 100, 150… double that temple's payout.
- **Guides:** hire a guide for each temple (Mira, Juno, Sol, Rosa, Echo, Iris, Lumen). A guide
  collects automatically, pays ×1.5, and keeps working while the game is closed (up to 8 hours,
  collected as a welcome-back gift).
- **Seekers:** a following that drifts in as your temples grow (faster with guides), and arrives
  with every card and written answer. Each seeker adds +0.5% light.
- **Visitors:** every minute or so on the sanctuary screen, someone drifts by for a few seconds:
  a full moon (light ×2 for 60s), a shooting star (×3 for 30s), a pilgrim's gift, a circle of
  seekers, or a sound bath that fills every bar. Tap to claim. Missing one costs nothing.
- **Cards are power:** temples wake only by finishing a card, root to crown. Every card done in a
  chakra adds +25% to that temple for good. Every journal answer adds +2% to all light (up to
  +200%). Playing on new days adds +10% per streak day (up to +100%); rest days lower it gently.
- **New cycle:** with all seven awake and 1M light gathered, be reborn for lotus petals (+10%
  light each, forever). Light, levels, guides and seekers start over; cards, journal, streak and
  petals stay.

The numbers live at the top of the "your sanctuary" section in `index.html` (`CYCLE`, `BASE`,
`COST0`, `GUIDE_COST`, `MILES`, `CYCLE_AT`, `VISITORS`) if you want to tune the pace.

## Your journal

Players can write an answer on any card. Answers stay on their device, and from **Your journal**
(the ✎ button, or the link on the first screen) they can save them as a PDF, download a file for
the SoulSite journal, or copy everything as text. The SoulSite file format is in
[SOULSITE-IMPORT.md](SOULSITE-IMPORT.md).

## Edit the cards

All cards live in `cards.js`. A card can be plain text, or an object:

- `{ "text": "...", "seconds": 60 }` adds a timer (good for practices)
- `{ "text": "...", "deeper": "...", "theme": "..." }` adds a "Go deeper" follow-up question and a small theme label

A chakra can also have an `intimacy` deck, shown behind an 18+ check. Sacral has one: intimacy with yourself, covering your body and senses, pleasure and desire, shame and healing, plus a few self-love rituals.

Each chakra also has a `bija` (seed sound) and an `affirmation`, shown when it awakens.

## Run locally

```bash
python3 -m http.server 8095
```

Then open http://localhost:8095.
