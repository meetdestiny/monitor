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

  var nodes = new Array();
  for(var i =0; i< 840; i++ ) {
    var node = {};
    if(i < 420)
      node.dc ="dal" + ((i %4 )+ 1);
    else 
      node.dc = "dfw" + ((i %4 ) + 1);
    node.ip=i;
    node.request= "1000000";
    node.x= Math.ceil((i+1)/18);
    node.y= (i % 18) +1 ;
    nodes.push(node);
  }

  res.json(nodes);
};

