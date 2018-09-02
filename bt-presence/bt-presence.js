/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {

	"use strict";

  function BtPresenceNode(config) {

		RED.nodes.createNode(this, config);
		var node = this;
    const btPresence = require('bt-presence').btPresence
    var btp = new btPresence()

    node.log("Initialize btPresence");

    function sendPresent() {
      node.log("BT scan result: present");

      const msg = {
        title: "BT present",
        description: "At least one BT device is available",
        payload: true;
      };
      node.send(msg)
    }

    function sendNotPresent() {
      node.log("BT scan result: not-present");

      const msg = {
        title: "BT not present",
        description: "No BT device of your devices list is available",
        payload: false;
      };
      node.send(msg)
    }

    var interval = 60;
    if (config.interval !== undefined) {
      if (Number.isInteger(parseInt(config.interval))) {
        interval = config.interval;
      }
    } else {
      node.warn("Interval is not set / is not a number. Use default: 60");
    }

    var devices = [];
    if (config.devices !== undefined) {
      devices = config.devices.split(",").map(function(item) {
        return item.trim();
      });
    }

		if (devices.length < 1) {
			node.error('No devices are specificed. Please specify the devices in node configuration!');
		} else {

      btp.setDevices(devices);
      btp.setIntervalSeconds(interval);

      // Looks like the btPresence Object does survive. Remove the
      // Listeners before we add the new one
      btp.removeAllListeners();
      btp.on('present', sendPresent);
      btp.on('not-present', sendNotPresent);

      node.log("Starting Bluetooth scan for "+ devices.length + " devices every "+ interval + " seconds!");
      btp.start(true);

      // On Close, stop the presence scan
      node.on('close', function () {
        node.log("Close bt-presence node");
        btp.stop()
      });
    }
  }

  RED.nodes.registerType("bt-presence", BtPresenceNode);
}

// vim: ts=2 sw=2 sts=2 et
