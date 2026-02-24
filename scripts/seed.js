db = db.getSiblingDB('filmyDB');

db.filmy.drop();
db.obsada.drop();


const result = db.filmy.insertMany([
    { "tytul": "Minionki", "premiera": 2015, "gatunek": ["Komedia", "Familijny"] },
    { "tytul": "Incepcja", "premiera": 2010, "gatunek": ["Sci-Fi", "Thriller"] },
    { "tytul": "Shrek", "premiera": 2001, "gatunek": ["Animacja", "Komedia", "Przygodowy"] }
]);

const idMinionki = result.insertedIds[0];
const idIncepcja = result.insertedIds[1];
const idShrek = result.insertedIds[2];

db.obsada.insertMany([
    {
        "film_id": idMinionki,
        "rezyser": "Pierre Coffin",
        "aktorzy": ["Sandra Bullock", "Jon Hamm", "Michael Keaton", "Allison Janney"]
    },
    {
        "film_id": idIncepcja,
        "rezyser": "Christopher Nolan",
        "aktorzy": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"]
    },
    {
        "film_id": idShrek,
        "rezyser": "Andrew Adamson",
        "aktorzy": ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow"]
    }
]);