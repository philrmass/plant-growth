# Plant Growth L-system

### By **Phil Mass**

## Description

_A React application to explore the L-system description of plant growth._

_L-systems consist of three main components_
* _A set of module types (i.e. A for apice, I for internode)_
* _A set of rules for evolving the types over a given timestep (i.e. A -> I1[+A][-A]I1A, Ix -> I2x)_
* _The initial structure of the plant (i.e. I1A[+A][-A]I1A)_

_Each module in the L-system corresponds to a section of the plant body, so as you evolve
the L-system according to the rules, it determines the new shape of the plant body as it
grows_

_You can view the deployed site [here](https://plantsystem.herokuapp.com/)_

![ScreenShot](img/screenShot.png)

## Setup and Installation

To build the project
* Clone the project from https://github.com/philrmass/plant-growth.git to a local directory
* In a terminal, go into the project directory and install the dependencies with:
```console
npm install
```
* Build the project and start up a development server with:
```console
npm start
```
It should open the application in a browser window at the address **localhost:3000**

## Support and Contact Details

If you have any issues or questions, please email me at philrmass@gmail.com

## Technologies

_Created using React and JavaScript_

## Legal

Copyright (c) 2019 Phil Mass
