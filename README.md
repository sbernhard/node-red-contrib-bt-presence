# node-red-contrib-bt-presence

A <a href="http://nodered.org" target="_new">Node-RED</a> node which uses l2ping to determine the presence of one or more bluetooth devices. This node
provides the collective bluetooth state. Means, only if no bluetooth device at all is reachable, "not-present" will be signalized. 

The node uses https://github.com/cmvee/bt-presence

## Install

Run the following command in the root directory of your Node-RED install or use the "Manage palette"

    npm install node-red-contrib-bt-presence

## Usage

* Add the bluetooth devices you want to scan. To enter more than one, use a comma to separate them. 
* Set the scan interval.
* Deploy your flow 
* "present" will be signalized in msg.payload in case of presence. Otherwise "not-present"

## Loxone Configuration
![node-red-contrib-bt-presence](/doc/node-red-contrib-bt-presence.PNG)

## Thanks
Thanks to "cmvee" for the npm modul "bt-presence" which this node-red node uses.
