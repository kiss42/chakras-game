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
- **Each temple's gift:** every chakra's temple adds a power that fits its meaning, growing with
  its level: Root (grounding) lets the sanctuary rest longer, Sacral (flow) brings visitors more
  often, Solar Plexus (willpower) makes taps push further, Heart (love) draws seekers faster,
  Throat (voice) makes written answers count for more, Third Eye (vision) strengthens blessings,
  and Crown (unity) lifts every other temple. Each temple also shows its element and seed sound.
- **Alignment:** chakras work best in balance. Keep your temples' levels close (the lowest at
  least half the highest) for ×1.5, or a quarter for ×1.2. The sanctuary tells you which chakra
  to raise.
- **The living sanctuary:** at the top, seekers walk to the temples, meditate, and carry light
  back to the lotus altar; guides stand by their temples and payouts float up.
- **Thousand-petal lotus:** the crown's lotus. Raise it with light for +25% on all light per level; every 3 levels adds an
  hour to how long the sanctuary keeps gathering while you're away.
- **Guide stars:** raise each guide from ★1 to ★5 (×1.5, ×2.25, ×3.5, ×5, ×8).
- **Seekers:** a following that drifts in as your temples grow (faster with guides), and arrives
  with every card and written answer. Each seeker adds +0.5% light.
- **Visitors:** every minute or so on the sanctuary screen, someone drifts by for a few seconds:
  each from a chakra you've awakened: a pilgrim's gift (Root), the full moon (Sacral, light ×2),
  a fire ceremony (Solar Plexus), a circle of seekers (Heart), a sound bath (Throat), a vision
  (Third Eye) or a shooting star (Crown, light ×3). Tap to claim. Missing one costs nothing.
- **Cards are power:** temples wake only by finishing a card, root to crown. Every card done in a
  chakra adds +25% to that temple for good. Every journal answer adds +2% to all light (up to
  +200%). Playing on new days adds +10% per streak day (up to +100%); rest days lower it gently.
- **New cycle:** with all seven awake and 1M light gathered, be reborn for lotus petals. Light,
  levels, the altar, guides and seekers start over; cards, journal, streak, petals and skills stay.
- **The lotus (ascension skills):** every petal you keep gives +10% light, or spend petals on
  permanent skills: Prana flow (faster bars), Open heart (more seekers), Devoted guides, Deep roots
  (more hours away), Crown of stars (more visitors, longer blessings), Kundalini rising (a head
  start each cycle).

The numbers live at the top of the "your sanctuary" section in `index.html` (`CYCLE`, `BASE`,
`COST0`, `GUIDE_COST`, `STAR_MULT`, `ALTAR_COST0`, `SKILLS`, `MILES`, `CYCLE_AT`, `VISITORS`) if you want to tune the pace.

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
