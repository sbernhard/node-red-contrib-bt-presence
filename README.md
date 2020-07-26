# node-red-contrib-bt-presence

## USE AT YOUR OWN RISK

A <a href="http://nodered.org" target="_new">Node-RED</a> node which uses l2ping to determine the presence of one or more bluetooth devices. This node
provides the collective bluetooth state. Means, only if no bluetooth device at all is reachable, 'false' will be signalized.

The node uses https://github.com/cmvee/bt-presence

## Install

Run the following command in the root directory of your Node-RED install or use the "Manage palette"

    npm install node-red-contrib-bt-presence

### Requirements (more details: https://github.com/cmvee/bt-presence)

The l2ping linux binary requires root priveleges in order to write to bluetooth.
Run sudo setcap 'cap_net_raw+eip' `which l2ping` in order to grant root priveleges to l2ping

## Usage

* Add the bluetooth devices you want to scan. To enter more than one, use a comma to separate them. 
* Set the scan interval.
* Deploy your flow 
* 'true' will be signalized in msg.payload in case of presence. Otherwise 'false'
* A new msg will only be sent, in case of a change.
* The interval is the time seconds between two checks.

## Note for update to >=1.1.3
Previous version stored 'present' and 'not preaent' in msg.payload. Make sure to change your flow to use 'true' and 'false'. 

## Loxone Configuration
![node-red-contrib-bt-presence](/doc/node-red-contrib-bt-presence.PNG)

## Thanks
Thanks to "cmvee" for the npm modul "bt-presence" which this node-red node uses.

## USE AT YOUR OWN RISK

# Copyright

Copyright(c) 2017 Bernhard Suttner / https://bernhard-suttner.de


