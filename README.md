# uk-lang-helpers
A repo for storing helper functions needed to process the Ukrainian language in various ways


### splitTheWordIntoSyllables(str: word)

This function splits the word into syllables

Syllable forming rules:
 
Based on rules specified in [EdEra book](https://edera.gitbook.io/ed-era-book-ukr/fonetika_grafka_orfoepya/sklad_skladopodl)

Main rule: vowels form syllables
1. There are as many syllables as there are vowels
2. A syllable cannot exist without a vowel
    
Cases to form a new syllable with the current consonant:
1. both neighbors are vowels (`г` in `кни-га`)
2. it's sonorant and its previous neighbor is sonorant as well (`н` in` вiль-но`, `н` in `вiр-нiсть`)
3. it's voiced and its previous neighbor is voiceless (`т` in `греб-ти`, `к` in `нiж-ка`)
4. the next consonant neighbor is the same type (voiced or voiceless) (`с` in `го-спо-дар`, `ща-стя`)
5. it's voiced or voiceless consonant and its next neighbor is sonorant (`з` in `бли-зня-та`, `д` in `му-дрець`)
6. its next neighbor is the same letter (doubling of consonants) (`збi-жжя`, `бу-ття`, `во-ло-сся`)


