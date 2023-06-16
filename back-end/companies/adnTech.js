const express = require('express')
const shell = require('shelljs')

function adnTech(req, res) {
    try {
        const password = 'raspberry'
        const password2 = '$uport3fpc'
        const totem1 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.230 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:3000/adn/'`)
        const totem2 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.231 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:3000/adn/'`)
        const totem3 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.232 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:3000/adn/'`)
        const totem4 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.233 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:3000/adn/'`)
        const tv1 = shell.exec(`sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no linuxc@10.146.42.13 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.12:3000/adn/'`)
        const tv2 = shell.exec(`sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no linuxlited@10.146.42.18 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.12:3000/adn/`)
        const tv3 = shell.exec(`sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no pcminib@10.146.42.17 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.12:3000/adn/'`)

        res.send({
            totem1: totem1.stdout,
            totem2: totem2.stdout,
            totem3: totem3.stdout,
            totem4: totem4.stdout,
            tv1: tv1.stdout, 
            tv2: tv2.stdout, 
            tv3: tv3.stdout
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

module.exports = adnTech;