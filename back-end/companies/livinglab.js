const express = require('express');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function executeSSHCommand(command) {
  const { stdout } = await exec(command);
  return stdout;
}

async function livingLab(req, res) {
  try {
    const password = 'raspberry';
    const password2 = '$uport3fpc';
    const sshCommands = [
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.230 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:2000'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.231 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:4000'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.232 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:5000'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pi@10.146.42.233 'DISPLAY=:0.0 chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:8000'`),
      () => executeSSHCommand(`sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no linuxc@10.146.42.50 'pkill firefox; DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.12:3000'`),
      () => executeSSHCommand(`sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no linuxlited@10.146.42.51 'pkill firefox; DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito https://dashboard.greenant.com.br/login'`),
      () => executeSSHCommand(`sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no pcminib@10.146.42.52 'pkill firefox; DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.210:3000'`),
      () => executeSSHCommand(`sshpass -p '${password2}' ssh -o StrictHostKeyChecking=no pcminia@10.146.42.53 'pkill firefox; DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.210:4080'`)
    ];

    const promises = sshCommands.map(command => command());
    const results = await Promise.allSettled(promises);

    const response = results.reduce((result, resultObj, index) => {
      if (resultObj.status === 'fulfilled') {
        const { value } = resultObj;
        result[`totem${index + 1}`] = value;
      } else {
        console.log(resultObj.reason);
        result[`totem${index + 1}`] = 'Error executing SSH command';
      }
      return result;
    }, {});

    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = livingLab;
