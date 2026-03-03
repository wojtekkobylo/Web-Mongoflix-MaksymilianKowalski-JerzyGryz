db = db.getSiblingDB('filmyDB');

db.filmy.drop();
db.obsada.drop();
db.obsada.recenzje.drop();


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


const ids = result.insertedIds;


db.obsada.insertMany([
    {
        film_id: ids[0],
        rezyser: "Pierre Coffin",
        aktorzy: ["Sandra Bullock", "Jon Hamm", "Michael Keaton", "Allison Janney"]
    },
    {
        film_id: ids[1],
        rezyser: "Christopher Nolan",
        aktorzy: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"]
    },
    {
        film_id: ids[2],
        rezyser: "Andrew Adamson",
        aktorzy: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow"]
    },

    {
        film_id: ids[3],
        rezyser: "Lana Wachowski, Lilly Wachowski",
        aktorzy: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        film_id: ids[4],
        rezyser: "Robert Zemeckis",
        aktorzy: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
        film_id: ids[5],
        rezyser: "James Cameron",
        aktorzy: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
    },
    {
        film_id: ids[6],
        rezyser: "Ridley Scott",
        aktorzy: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
    },
    {
        film_id: ids[7],
        rezyser: "John Lasseter",
        aktorzy: ["Tom Hanks", "Tim Allen", "Don Rickles"]
    },
    {
        film_id: ids[8],
        rezyser: "Christopher Nolan",
        aktorzy: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    },
    {
        film_id: ids[9],
        rezyser: "Todd Phillips",
        aktorzy: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
    },

    {
        film_id: ids[10],
        rezyser: "Joss Whedon",
        aktorzy: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
    },
    {
        film_id: ids[11],
        rezyser: "James Cameron",
        aktorzy: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
    },
    {
        film_id: ids[12],
        rezyser: "Quentin Tarantino",
        aktorzy: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]
    },
    {
        film_id: ids[13],
        rezyser: "Roger Allers, Rob Minkoff",
        aktorzy: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons"]
    },
    {
        film_id: ids[14],
        rezyser: "Chris Columbus",
        aktorzy: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
        film_id: ids[15],
        rezyser: "Peter Jackson",
        aktorzy: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
    },
    {
        film_id: ids[16],
        rezyser: "George Miller",
        aktorzy: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]
    },
    {
        film_id: ids[17],
        rezyser: "Lee Unkrich",
        aktorzy: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"]
    },
    {
        film_id: ids[18],
        rezyser: "Frank Darabont",
        aktorzy: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"]
    },
    {
        film_id: ids[19],
        rezyser: "Tim Miller",
        aktorzy: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"]
    }
]);
db.recenzje.insertMany([
    { "film_id": ids[0], "recenzent_id": 1, "ocena filmu": 8, "krotka recenzja": "Zabawne i urocze!" },
    { "film_id": ids[0], "recenzent_id": 2, "ocena filmu": 6, "krotka recenzja": "Trochę zbyt chaotyczne." },
    { "film_id": ids[1], "recenzent_id": 3, "ocena filmu": 10, "krotka recenzja": "Arcydzieło kina sci-fi." },
    { "film_id": ids[1], "recenzent_id": 4, "ocena filmu": 9, "krotka recenzja": "Wymaga skupienia, ale warto." },
    { "film_id": ids[2], "recenzent_id": 5, "ocena filmu": 9, "krotka recenzja": "Klasyka animacji, świetny humor." },
    { "film_id": ids[3], "recenzent_id": 1, "ocena filmu": 10, "krotka recenzja": "Zmienił postrzeganie efektów specjalnych." },
    { "film_id": ids[4], "recenzent_id": 6, "ocena filmu": 10, "krotka recenzja": "Wzruszająca historia." },
    { "film_id": ids[5], "recenzent_id": 7, "ocena filmu": 8, "krotka recenzja": "Wizualnie oszałamiający." },
    { "film_id": ids[6], "recenzent_id": 2, "ocena filmu": 9, "krotka recenzja": "Potężne kino historyczne." },
    { "film_id": ids[7], "recenzent_id": 8, "ocena filmu": 9, "krotka recenzja": "Najlepsza bajka mojego dzieciństwa." },
    { "film_id": ids[8], "recenzent_id": 3, "ocena filmu": 10, "krotka recenzja": "Nolan w szczytowej formie." },
    { "film_id": ids[9], "recenzent_id": 9, "ocena filmu": 9, "krotka recenzja": "Mroczny i niepokojący występ Phoenixa." },
    { "film_id": ids[10], "recenzent_id": 4, "ocena filmu": 8, "krotka recenzja": "Świetna rozrywka superbohaterska." },
    { "film_id": ids[11], "recenzent_id": 5, "ocena filmu": 10, "krotka recenzja": "Epicki romans, wciąż robi wrażenie." },
    { "film_id": ids[12], "recenzent_id": 10, "ocena filmu": 10, "krotka recenzja": "Kultowe dialogi i świetna muzyka." },
    { "film_id": ids[13], "recenzent_id": 6, "ocena filmu": 9, "krotka recenzja": "Płakałem za każdym razem." },
    { "film_id": ids[14], "recenzent_id": 7, "ocena filmu": 8, "krotka recenzja": "Magiczny początek wielkiej sagi." },
    { "film_id": ids[15], "recenzent_id": 8, "ocena filmu": 10, "krotka recenzja": "Najlepsze fantasy w historii." },
    { "film_id": ids[16], "recenzent_id": 9, "ocena filmu": 9, "krotka recenzja": "Czysta adrenalina!" },
    { "film_id": ids[17], "recenzent_id": 10, "ocena filmu": 9, "krotka recenzja": "Przepiękna historia o rodzinie." },
    { "film_id": ids[18], "recenzent_id": 1, "ocena filmu": 10, "krotka recenzja": "Bardzo smutny, ale piękny film." },
    { "film_id": ids[19], "recenzent_id": 2, "ocena filmu": 8, "krotka recenzja": "Zupełnie inne podejście do Marvela." },
    { "film_id": ids[1], "recenzent_id": 5, "ocena filmu": 8, "krotka recenzja": "Muzyka Zimmera robi tu robotę." },
    { "film_id": ids[12], "recenzent_id": 3, "ocena filmu": 9, "krotka recenzja": "Tarantino w najlepszym wydaniu." },
    { "film_id": ids[4], "recenzent_id": 8, "ocena filmu": 9, "krotka recenzja": "Życie jest jak pudełko czekoladek." }
]);