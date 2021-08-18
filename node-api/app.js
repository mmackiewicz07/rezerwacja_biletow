const express = require('express');
const app = express();

app.use(express.json());


var places = [];

let seanceItems = [{
    id: 1,
    star: 3,
    desc: 'Logan opiekuje się chorym Charlesem Xavierem, nie stroniąc od alkoholu. Jego wegetację przerywa prośba nieznajomej o przewiezienie małej Laury za kanadyjską granicę.',
    freeSpots: 12,
    spotsTable: [false, false, false, false, false, false, false, false, false, false, false,
        false, false, true, false, false, false, false, false, true, false, true, true,
        true, true, true, true, false, false, false, false, true, true, true, true, false,
        false, false, false, false, false , false, false, false, false, false, false , false]
}, {
    id: 2,
    star: 4,
    desc: 'Peter Parker po ugryzieniu przez radioaktywnego pająka zyskuje supermoce pozwalające mu walczyć z przestępcami. Stara się pomścić śmierć wuja i pokonać Zielonego Goblina.',
    freeSpots: 16,
    spotsTable: [false, false, true, true, false, false, false, true, true, false, false,
        false, false, true, false, false, false, false, false, true, false, true, true,
        true, true, true, true, false, false, false, false, true, true, true, true, false,
        false, false, false, false, false , false, false, false, false, false, false , false]
}, {
    id: 3,
    star: 2,
    desc: 'Przed startem samolotu młody mężczyzna doświadcza wizji, w której giną wszyscy pasażerowie. Przeczucie powoduje, że chce ich ostrzec, lecz zostaje usunięty z pokładu.',
    freeSpots: 7,
    spotsTable: [false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, true, true,
        true, true, true, true, false, false, false, false, false, false, true, false, false,
        false, false, false, false, false , false, false, false, false, false, false , false]
}, {
    id: 4,
    star: 5,
    desc: 'Zohan, izraelski komandos będący postrachem palestyńskich terrorystów postanawia zrealizować swoje wielkie życiowe marzenie i udaje się do Ameryki, by zostać fryzjerem.',
    freeSpots: 0,
    spotsTable: [false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false , false, false, false, false, false, false , false]
}];

app.get('/getSeances', (req, res)=> {
    res.json({
        data: seanceItems,
    })

})
app.post('/putPlaces', (req, res)=> {
    console.log('req', req.body);
    setTablesToMovie(req.body.data.table, req.body.data.id);
})
app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000');
})

function setTablesToMovie(places, id ) {
    seanceItems[id-1].spotsTable = places;
}