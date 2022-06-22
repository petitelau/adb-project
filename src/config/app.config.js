const path = require('path'); 
const { env } = require('yargs');


const appProperties = {
    portDefault : 8080,
    maintenanceMode : false,
}

const hbsProperties = { 
    author: 'Laura Gomez', 
    version: 'June 2022' 
}

module.exports = { appProperties, hbsProperties }
