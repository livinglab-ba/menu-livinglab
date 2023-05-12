const express = require('express');
const cors = require('cors')

const hiveComputerVision = require('./companies/hiveComputerVision');
const lactecOne = require('./companies/lactecOne');
const lactecTwo = require('./companies/lactecTwo');
const chargeBack = require('./companies/chargeBack');
const generalEnergy = require('./companies/generalEnergy');
const adnTech = require('./companies/adnTech');
const giuSoft = require('./companies/giuSoft');
const livingLab = require('./companies/livinglab');


const app = express();
app.use(cors())

app.get("/hive", hiveComputerVision)

app.get("/lactec1", lactecOne)

app.get("/lactec2", lactecTwo)

app.get("/chargeback", chargeBack)

app.get("/generalenergy", generalEnergy)

app.get("/adntech", adnTech)

app.get("/giusoft", giuSoft)

app.get("/livinglab", livingLab)

app.listen(4040, () => {
    console.log("Server running on port 4040")
});


