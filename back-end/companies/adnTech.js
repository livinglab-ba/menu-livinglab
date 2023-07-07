const express = require('express')
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function executeSSHCommand(command) {
  const { stdout } = await exec(command);
  return stdout;
}

async function adnTech(req, res) {
  try {
    const password = 'raspberry';
    const password2 = '$uport3fpc';
    const sshCommands = [
      `sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.230 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:9000/adn-tech'`,
      `sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.231 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:9000/adn-tech'`,
      `sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.232 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:9000/adn-tech'`,
      `sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.233 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:9000/adn-tech'`,
      `sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no linuxc@10.146.42.13 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.12:9000/adn-tech'`,
      `sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no linuxlited@10.146.42.18 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.12:9000/adn-tech'`,
      `sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no pcminib@10.146.42.17 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.12:9000/adn-tech'`
    ];

    const results = await Promise.all(sshCommands.map(command => executeSSHCommand(command)));

    const [totem1, totem2, totem3, totem4, tv1, tv2, tv3] = results;

    res.send({
      totem1,
      totem2,
      totem3,
      totem4,
      tv1,
      tv2,
      tv3
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = adnTech;