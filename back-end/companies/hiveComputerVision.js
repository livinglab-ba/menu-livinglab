const express = require('express');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function executeSSHCommand(command) {
  const { stdout } = await exec(command);
  return stdout;
}

async function hiveComputerVision(req, res) {
  try {
    const password = '$uport3fpc';
    const sshCommands = [
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no linuxc@10.146.42.230 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:4001'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pcminib@10.146.42.231 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:4004'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no linuxlited@10.146.42.232 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:4002'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pcminia@10.146.42.233 'DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --kiosk --incognito http://10.146.42.210:4003'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pc-mini-02@10.146.42.50 'pkill firefox; DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito  http://10.146.42.12:9000/hive'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pc-mini-04@10.146.42.51 'pkill firefox; DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito http://10.146.42.12:9000/hive'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pc-mini-01@10.146.42.52 'pkill firefox; DISPLAY=:0.0 firefox --noerrors --disable-session-crashed-bubble --disable-infobars$fobars --incognito  http://10.146.42.12:9000/hive'`),
      () => executeSSHCommand(`sshpass -p '${password}' ssh -o StrictHostKeyChecking=no pc-mini-03@10.146.42.53 'pkill firefox; DISPLAY=:0.0 firefox http://10.146.42.160/bluequeen/'`),
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

module.exports = hiveComputerVision;


