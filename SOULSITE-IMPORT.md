# Chakras → SoulSite journal import

Chakras lets players write an answer on any card. Answers are kept only on their device
(browser storage, key `cj.journal`). From **Your journal** they can:

- **Save as PDF**: opens the print dialog with a clean, paper-style journal. Choose "Save as PDF".
- **For SoulSite**: downloads `chakras-journal-YYYY-MM-DD.soulsite.json` (format below).
- **Copy all**: copies everything as plain text, ready to paste into the SoulSite journal by hand.

Nothing is sent anywhere. Every question and follow-up is hand-written.

## File format (version 1)

```json
{
  "format": "soulsite-journal-import",
  "version": 1,
  "source": { "app": "Chakras", "url": "https://kiss42.github.io/chakras-game/" },
  "exportedAt": "2026-11-06T21:14:03.120Z",
  "entries": [
    {
      "id": "m3k9x2ab1c",
      "createdAt": "2026-11-06T21:02:44.501Z",
      "kind": "chakra-reflection",
      "chakra": { "id": "root", "name": "Root", "sanskrit": "Muladhara" },
      "deck": "reflect",
      "theme": "childhood",
      "prompt": "What is your earliest memory of feeling truly safe?",
      "followUp": "What was there in that moment that's missing from your life now?",
      "answer": "The player's own words…",
      "adult": false
    }
  ]
}
```

| Field | Meaning |
|---|---|
| `format`, `version` | Always `"soulsite-journal-import"` and `1` for this shape. Reject anything else. |
| `entries[].id` | Unique within the player's journal. Use it to skip duplicates if the same file is imported twice. |
| `entries[].createdAt` | When the answer was kept (ISO 8601, UTC). Use as the journal entry's date. |
| `entries[].kind` | Always `"chakra-reflection"` for now. |
| `entries[].chakra` | Which of the seven chakras. `id` is one of `root`, `sacral`, `solar`, `heart`, `throat`, `thirdeye`, `crown`. |
| `entries[].deck` | `reflect` (a question), `practice` (a small ritual; the answer is how it felt), `deepen` (a challenging practice or inquiry for people already open) or `intimacy` (adults-only sacral self-intimacy). |
| `entries[].theme` | Small theme label, such as `boundaries` or `self-worth`. Can be `null`. |
| `entries[].prompt` | The question or practice, exactly as shown. Good as the journal entry's title or "today's question". |
| `entries[].followUp` | The "Go deeper" question, or `null`. |
| `entries[].answer` | The player's own words. Plain text with line breaks. Never empty. |
| `entries[].adult` | `true` for intimacy (18+) answers. Keep these private, and never show them in previews or shared views. |

## Suggested import in SoulSite

1. Journal → "Import from Chakras" → pick the `.soulsite.json` file (on the device, no upload).
2. Check `format` and `version`, then add each entry as a journal page dated `createdAt`,
   titled with `prompt`, with `followUp` under it and `answer` as the body.
3. Tag entries with the chakra (`chakra.id`) so they can link to SoulSite's energy-body pages.
4. Skip any `id` that's already imported.
