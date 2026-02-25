db = db.getSiblingDB('filmyDB');

db.filmy.drop();
db.obsada.drop();
db.recenzje.drop();


const result = db.filmy.insertMany([
    { "tytul": "Minionki", "premiera": 2015, "gatunek": ["Komedia", "Familijny"] },
    { "tytul": "Incepcja", "premiera": 2010, "gatunek": ["Sci-Fi", "Thriller"] },
    { "tytul": "Shrek", "premiera": 2001, "gatunek": ["Animacja", "Komedia", "Przygodowy"] },

    { "tytul": "Matrix", "premiera": 1999, "gatunek": ["Sci-Fi", "Akcja"] },
    { "tytul": "Forrest Gump", "premiera": 1994, "gatunek": ["Dramat", "Komedia"] },
    { "tytul": "Avatar", "premiera": 2009, "gatunek": ["Sci-Fi", "Przygodowy"] },
    { "tytul": "Gladiator", "premiera": 2000, "gatunek": ["Dramat", "Historyczny", "Akcja"] },
    { "tytul": "Toy Story", "premiera": 1995, "gatunek": ["Animacja", "Familijny", "Komedia"] },
    { "tytul": "Interstellar", "premiera": 2014, "gatunek": ["Sci-Fi", "Dramat"] },
    { "tytul": "Joker", "premiera": 2019, "gatunek": ["Dramat", "Thriller"] },

    { "tytul": "Avengers", "premiera": 2012, "gatunek": ["Akcja", "Sci-Fi"] },
    { "tytul": "Titanic", "premiera": 1997, "gatunek": ["Dramat", "Romans"] },
    { "tytul": "Pulp Fiction", "premiera": 1994, "gatunek": ["Kryminalny", "Dramat"] },
    { "tytul": "Król Lew", "premiera": 1994, "gatunek": ["Animacja", "Familijny", "Dramat"] },
    { "tytul": "Harry Potter i Kamień Filozoficzny", "premiera": 2001, "gatunek": ["Fantasy", "Przygodowy"] },
    { "tytul": "Władca Pierścieni: Drużyna Pierścienia", "premiera": 2001, "gatunek": ["Fantasy", "Przygodowy"] },
    { "tytul": "Mad Max: Na drodze gniewu", "premiera": 2015, "gatunek": ["Akcja", "Sci-Fi"] },
    { "tytul": "Coco", "premiera": 2017, "gatunek": ["Animacja", "Familijny", "Muzyczny"] },
    { "tytul": "Zielona Mila", "premiera": 1999, "gatunek": ["Dramat", "Fantasy"] },
    { "tytul": "Deadpool", "premiera": 2016, "gatunek": ["Akcja", "Komedia"] }
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


db.recenzje.insertMany([
    {
        "film_id": idMinionki,
        "recenzent_id": 1,
        "ocena filmu": 7,
        "krotka recenzja": "Zabawny i lekki film dla całej rodziny"
    },
    {
        "film_id": idIncepcja,
        "recenzent_id": 2,
        "ocena filmu": 9,
        "krotka recenzja": "Mind-blowing, Nolan jak zawsze mistrz"
    },
    {
        "film_id": idShrek,
        "recenzent_id": 3,
        "ocena filmu": 8,
        "krotka recenzja": "Klasyk animacji, humor ponadczasowy"
    }
]);
