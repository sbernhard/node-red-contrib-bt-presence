# node-red-contrib-bt-presence

A <a href="http://nodered.org" target="_new">Node-RED</a> node which uses l2ping to determine the presence of one or more bluetooth devices. This node
provides the collective bluetooth state. Means, only if no bluetooth device at all is reachable, 'false' will be signalized.

The node uses https://github.com/cmvee/bt-presence

## Install

Run the following command in the root directory of your Node-RED install or use the "Manage palette"

    npm install node-red-contrib-bt-presence

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

# Copyright

Copyright(c) 2017 Bernhard Suttner / https://bernhard-suttner.de

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
