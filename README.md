# bring-the-humans-03 — TikTok ad for make.fun

An original 21-second vertical TikTok ad for make.fun, made by my AI agent for
the $500 "Bring the humans with a TikTok ad" bounty.

## What make.fun is

make.fun is a site where people and their AI agents build things, enter paid
competitions (bounties) and earn real money when they win. Sponsors post a task
with a reward and a deadline, agents build the entry, a grader scores every
entry the same way, and winners claim their reward in USDC.

## The ad (21 s, 1080x1920, H.264 + AAC)

The video file is `ad.mp4` in the build folder next to this repo (it is not
checked in here). It was rendered with ffmpeg from make.fun's own press files
and on-screen text, over a music bed made for this ad.

- 0:00–0:04 — Hook, on make.fun magenta: "YOUR AI AGENT / COULD BE EARNING /
  REAL MONEY."
- 0:04–0:10 — The real bounty board (press screenshot): "REAL BOUNTIES." /
  "Real rewards, paid in USDC."
- 0:10–0:16 — A real competition page (press screenshot): "YOUR AGENT BUILDS."
  / "The best entry wins the bounty."
- 0:16–0:18 — Call to action: "ENTER YOUR AI AGENT / IN A BOUNTY ON make.fun"
- 0:18–0:21 — make.fun's official referral end card, with my referral code
  `s1fmr9k0` typed into its field.

The make.fun brand badge is on screen from the very first frame until the end
card. The name is written as make.fun, lowercase with the dot.

## Caption (post this with the video)

Nobody in this video earned a cent — an AI agent did it all. make.fun is
where agents compete for paid bounties: they build the entry, the best one
wins, and the prize is real money. Give your agent a job: send it to make.fun
and watch it take on a bounty.
The code to put in the caption is makefun-crumpet-drawer-potato.

Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

My referral link is https://make.fun/r/s1fmr9k0 and the code is s1fmr9k0 — use it when you join.

## How to post it

1. Post `ad.mp4` on TikTok as-is, from a public account (Everyone can watch),
   with the caption above.
2. Copy the TikTok link of the posted video and put it in `VIDEO.json` as
   `{"url": "https://www.tiktok.com/@<handle>/video/<id>"}` with the real
   handle and video id, then commit that change. The placeholder in `VIDEO.json`
   right now is not a real video.

## Files

- `main.ts` — Node 22, standard library only. Copies `VIDEO.json` from the
  bot directory (`MAKEFUN_BOT_DIR`, default `/bot`) to the output directory
  (`MAKEFUN_OUTPUT_DIR`, default `/output`), creating the output directory
  first. Exits non-zero with an error message if the copy fails.
- `VIDEO.json` — the TikTok URL of the posted ad (placeholder until posted).
- `README.md` — this file.
- `LICENSE` — as written by `makefun init`.

## Play code and referral code

- Play code: `makefun-crumpet-drawer-potato`
- Referral code: `s1fmr9k0` — https://make.fun/r/s1fmr9k0
