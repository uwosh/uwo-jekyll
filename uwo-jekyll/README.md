# UWO Jekyll
==========

Code for the home pages of the University of Wisconsin Oshkosh. Viewable at www.uwosh.edu

## Prerequisites
- [Homebrew](http://brew.sh/)
- [NodeJS](https://nodejs.org/)
- [grunt-cli](https://github.com/gruntjs/grunt-cli)
- [jekyll](http://jekyllrb.com/)

## Setup
Install Homebrew:

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Install NodeJS (and npm) with Homebrew:

`brew install node`

Install Grunt with npm:

`npm install -g grunt-cli`

Install Jekyll with the Ruby gem command:

`sudo gem install jekyll`

## Build Site
To build the site, run the command (from the uwo-jekyll directory):

`grunt && jekyll build`

When you run the build command, Jekyll will build the site and place it in the `_site` directory. The contents of the `_site` directory are then ready for upload via ftp to the web server.
