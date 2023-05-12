const express = require("express")
const shell = require("shelljs")

function lactecOne(req, res) {
    try {
        const password = 'raspberry'
        const password2 = '$uport3fpc'
        const totem1 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.230 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:3000/lactec/'`)
        const totem2 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.231 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:3000/lactec/'`)
        const totem3 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.232 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:3000/lactec/'`)
        const totem4 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.233 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:3000/lactec/'`)
        //const tv1 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.230 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:3000/'`)
        //const tv2 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.230 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:3000/'`)
        //const tv3 = shell.exec(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.230 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:3000/'`)
        res.send({
            totem1: totem1.stdout,
            totem2: totem2.stdout,
            totem3: totem3.stdout,
            totem4: totem4.stdout
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

module.exports = lactecOne;