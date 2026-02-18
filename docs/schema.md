### 1. Kolekcja: `filmy`
| Pole | Typ | Opis            | Przykład
| :--- | :--- |:----------------| :--- |
| `tytul` | **String** | Tytuł filmu     | `"Minionki"` |
| `premiera` | **Number** | Rok premiery    | `2015` |
| `gatunek` | **Array** | Gatunek/Gatunki | `[“Komedia”, “Familijny”]`

### 2. Kolekcja: `obsada`
| Pole | Typ | Opis | Przykład
| :--- | :--- |:----------------| :--- |
| `film_id` | **ObjectId** | Id filmu | `ObjectId("507f1f...")` |
| `rezyser` | **String** | Imię I nazwisko reżysera | `"Pierre Coffin"` |
| `aktorzy` | **Array** | Lista aktorów | `["Sandra Bullock", "Jon Hamm", "Michael Keaton", "Alisson Janney" ]` |

### 3. Kolekcja: `recenzje`
| Pole              | Typ          | Opis                     | Przykład                |
|:------------------|:-------------|:-------------------------|:------------------------|
| `film_id`         | **ObjectId** | Referencja do filmu      | `ObjectId("507f1f...")` |
| `recenzent_id`    | **Int**      | Id recenzenta            | `1`                     |
| `ocena filmu`     | **Int**      | Ocena filmu w skali 0-10 | `7`                     |
| `krotka recenzja` | **String**   | Krotka recenzja filmu    | `Kozacki`               |