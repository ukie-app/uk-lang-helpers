# uk-lang-helpers
A repo for storing helper functions needed to process the Ukrainian language in various ways


### splitTheWordIntoSyllables(str: word)

This function splits the word into syllables

Syllable forming rules:
 
Based on rules specified in [EdEra book](https://edera.gitbook.io/ed-era-book-ukr/fonetika_grafka_orfoepya/sklad_skladopodl)

Vowels form syllables

What defines whether a constant joins current syllable or the next:

* constant belongs to the current syllable in these cases:
  - it's the first or the last character in the string (`к` in `кни-га`)
  - if it's voiced or voiceless consonant and it's next neighbor is sonorant (`з` in `бли-зня-та`, `д` in `му-дрець`)

* constant belongs to the next syllable in these cases:
  - if both neighbors are vowels (`г` in `кни-га`)
  - if the next consonant is the same type (voiced or voiceless) (`с` in `го-спо-дар`, `ща-стя`)
  - if it's sonorant and it's next neighbor is sonorant as well (`ль` in` вiль-но`, `р` in `вiр-нiсть`)
  - if it's voiced and it's next neighbor is voiceless (`б` in `греб-ти`, `ж` in `нiж-ка`)
  - if it's next neighbor is the same letter (doubling of consonants) (`збi-жжя`, `бу-ття`, `во-ло-сся`)


