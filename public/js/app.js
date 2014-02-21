var dependencies = [
  'ngRoute',
  'mgcrea.ngStrap',
  'ncook.filters',
  'ncook.directives',
  'ncook.services'
];

angular.module('ncook', dependencies).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/help', {
      templateUrl: '/partials/help.html',
      controller: 'HelpCtrl'
    }).
    when('/help/getStarted', {
      templateUrl: '/partials/help-getStarted.html'
    }).
    when('/profile/:userID', {
      templateUrl: '/partials/profile.html',
      controller: 'ProfileCtrl'
    }).
    when('/messages/compose/:recipientID', {
      templateUrl: '/partials/messages-compose.html',
      controller: 'ComposeMessageCtrl'
    }).
    when('/messages', {
      templateUrl: '/partials/messages.html',
      controller: 'MessageCtrl'
    }).
    when('/inventory', {
      templateUrl: 'partials/inventory.html',
      controller: 'InventoryCtrl'
    }).
    when('/inventory/initialize', {
      templateUrl: 'partials/inventory-initialize.html',
      controller: 'InitInventoryCtrl'
    }).
    when('/bulletins/create', {
      templateUrl: 'partials/bulletins-create.html',
      controller: 'CreateBulletinCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
