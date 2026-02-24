db = db.getSiblingDB('filmyDB');

db.filmy.insertMany([
        {
            "tytul": "Minionki",
            "premiera": 2015,
            "gatunek": ["Komedia", "Familijny"]
        },
        {
            "tytul": "Incepcja",
            "premiera": 2010,
            "gatunek": ["Sci-Fi", "Thriller"]
        },
        {
            "tytul": "Shrek",
            "premiera": 2001,
            "gatunek": ["Animacja", "Komedia", "Przygodowy"]
        }
]);