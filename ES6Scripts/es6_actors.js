let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// who is the Academy Member whose ID is 187?
let actor = academyMembers.filter((actor) => actor.memID === 187);
console.log("Academy Member ID 187:");
actor.forEach((actor) => console.log(actor.name));

// who has been in at least 3 films?
console.log("\nHas been in at least 3 films:");
let threeFilms = academyMembers.filter((actor) => actor.films.length >= 3);
threeFilms.forEach((actor) => console.log(actor.name));

// who has a name that starts with "Bob"?
console.log("\nHas name that starts with 'Bob':");
let bobMembers = academyMembers.filter((actor) => actor.name.startsWith("Bob"));
bobMembers.forEach((actor) => console.log(actor.name));

// HARD: which Academy Members have been in a film that starts with "A"
console.log("\nHas been in a film that starts with 'A':");
let aFilms = academyMembers.filter((actor) =>
  actor.films.some((film) => film.startsWith("A"))
);
aFilms.forEach((actor) => console.log(actor.name));
