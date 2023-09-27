const express = require('express');
const cors = require('cors')

const hiveComputerVision = require('./companies/hiveComputerVision');
const lactecOne = require('./companies/lactecOne');
const chargeBack = require('./companies/chargeBack');
const generalEnergy = require('./companies/generalEnergy');
const adnTech = require('./companies/adnTech');
const giuSoft = require('./companies/giuSoft');
const livingLab = require('./companies/livinglab');
const hiveComputerVisionI = require('./companies/hiveI');
const lactecOneI = require('./companies/lactecOneI');
const lactecTwo = require('./companies/lactecTwo');
const lactecTwoI = require('./companies/lactecTwoI');


const app = express();
app.use(cors())

app.get("/hive", hiveComputerVision);

app.get("/hiveI", hiveComputerVisionI);


app.get("/lactecOne", lactecOne);

app.get("/lactecOneI", lactecOneI);


app.get("/lactecTwo", lactecTwo);

app.get("/lactecTwoI", lactecTwoI);

app.get("/chargeback", chargeBack);

app.get("/generalenergy", generalEnergy);

app.get("/adntech", adnTech);

app.get("/giusoft", giuSoft);

app.get("/livinglab", livingLab);

app.listen(4040, () => {
    console.log("Server running on port 4040")
});


