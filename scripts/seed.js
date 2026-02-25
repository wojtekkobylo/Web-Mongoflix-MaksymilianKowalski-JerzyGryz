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
