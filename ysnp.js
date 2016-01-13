#!/usr/bin/env node
/*
    Copyright © 2014  Damon Poole

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var length = 12;
var salt = '!!YouShalNotPass!!';

// check if salt or length were specified
if(typeof process.argv[2] != 'undefined'){
	length = process.argv[2];
}

if(typeof process.argv[3] != 'undefined'){
	salt = process.argv[3];
}

var rl = require('readline'), crypto = require('crypto');

rl = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('\n',
	'***************************************************************', '\n',
	'* YSNP — You Shall Not Pass!                                  *', '\n',
	'* ——————————————————————————————————————————————————————————— *', '\n',
	'* Please input the service name and your master password to   *', '\n', 
	'* generate/retrieve a password for that service:              *', '\n',
	'***************************************************************'
);

rl.question('Service: ', function(service){
	rl.question('Password: ', function(master){
		var hash = crypto.createHash('sha256');
		var password = hash.update(service + salt + master, 'utf8');
		var password = password.digest().slice(0, length);
		
		console.log('Password for ' + service + ':', '\n\n', password, '\n');
		rl.close();
	});
});
