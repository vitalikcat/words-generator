"use strict";

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAjectives = ["Smelly","Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Выбираем случайную часть тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
console.log(randomBodyPart);
console.log(randomBodyParts)

// ВЫбираем случайное прилагательное из массива randomAjectives:
var randomAjective = randomAjectives[Math.floor(Math.random() * randomAjectives.length)];
console.log(randomAjective);
console.log(randomAjectives);

// Выбираем случайное слово из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(randomWord);
console.log(randomWords);

// Сойденяем все случайные слова:
console.log(`"Your ${randomBodyPart} is like a  ${randomAjective} ${randomWord}!!!"`);