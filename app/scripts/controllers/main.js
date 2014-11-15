'use strict';

angular.module('nodeMonitorApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/vms/status').success(function(statusLogs) {
      $scope.statusLogs = statusLogs;
      $scope.awesomeThings = {};
    });
  });
