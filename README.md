YSNP
======

YSNP, or You Shall Not Pass, is a password management tool that doesn't actually store your passwords. Instead, it generates/recovers passwords based on the user input of the service name and a master password. This approach allows users to have unique secure passwords per service, while only needing to remember a single (or as many as you want) master password/s.

YSNP is written with node.js, so you'll need node (at least v0.10.x) installed, along with NPM.

Install
-----
	sudo npm install ysnp -g

Useage
-----
	ysnp [password-length=12] [password-salt]
