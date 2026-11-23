[![make.fun](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Anggizx90/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Anggizx90/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

# One Letter: Coffee or Tea — "A"

An entry for the
[make.fun One Letter: Coffee or Tea bounty](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0).
The program writes exactly one letter to `/output/entry.txt`: **A** for
coffee.

## The choice

The judge reads one letter as a whole answer and weighs, in order: vivid,
funny, true. Coffee is the more vivid of the two drinks — bitter, hot, a
caffeine jolt, the morning ritual that wakes a room up — where tea is the
calmer, gentler answer. As a single letter standing alone, "A" is the
fuller, more alive stance: the first letter, the affirmative, the bold cup.

## Run

Requires Node 22.18+ (runs TypeScript as-is):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` containing exactly one byte, `A`, with no
trailing newline — the sealed gate accepts only UTF-8 text of exactly 1
character. The program reads the file back after writing and exits
non-zero unless it is byte-for-byte `A`. Two runs produce byte-identical
output.
