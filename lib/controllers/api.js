'use strict';

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};

exports.statusRecords = function(req, res) {
  res.json([ { dc: "dal1", ip:"Hydrogen", request:"1.00794", x: 1, y:1},
        { dc: "dal1", ip:"Hydrogen", request:"1.00794", x: 18, y:1},
        { dc: "dal1", ip:"Hydrogen", request:"1.00794", x: 1, y:2},
        { dc: "dal1", ip:"Hydrogen", request:"1.00794", x: 2, y:2},
        { dc: "dal2", ip:"Hydrogen", request:"1.00794", x: 13, y:2},
        { dc: "dal3", ip:"Hydrogen", request:"1.00794", x: 14, y:2},
        { dc: "dal4", ip:"Hydrogen", request:"1.00794", x: 15, y:2},
        { dc: "dfw1", ip:"Hydrogen", request:"1.00794", x: 16, y:2},
        { dc: "dfw2", ip:"Hydrogen", request:"1.00794", x: 17, y:2},
        { dc: "dfw2", ip:"Hydrogen", request:"1.00794", x: 18, y:2}
  ]);
};

