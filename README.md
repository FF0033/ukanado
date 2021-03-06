## ukanado

A flashcard style kana learning game to be. Type the character you see at the top of the stack to progress. Each 'mission' will have 100 characters to complete, which will measure the time taken to complete.

A demo is available at:
https://lewisfff.github.io/ukanado/

### Todo
- [x] Timer & progress update to screen
- [x] Timer end & progress display result
- [x] Timer reset mechanism
- [x] All kana (including digraphs, diacritics and obsolete)
- [x] Katakana conversion (unicode)
- [ ] Split classes into separate files and refactor (needed)
- [x] Slide stack up when complete question
- [x] Compile assets to ES2015 (rollup + babel)
- [ ] Intro screen before game starts
- [ ] Save previous time to cookie & display on reload
- [x] Training mode - displays romaji above kana
- [ ] Calculate accuracy (compare length of total kana vs total keys entered)
- [ ] Make the game work on mobile devices somehow
- [ ] Improve random function so that stack characters are unique
- [ ] Define the data better so that unused digraphs are not presented
- [ ] Ability to tweak weightings & difficulty
- [ ] Ability to toggle infinite mode
- [ ] Ability to turn off practise mode
- [ ] Allow non-standard key combinations (like si for shi)
- [ ] Display hints after a few seconds of typing wrong

### Build
```
npm install
npm run build-dev
npm run build-release
```