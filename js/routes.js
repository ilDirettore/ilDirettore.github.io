angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('nuovaNota', {
    url: '/newNote',
    templateUrl: 'templates/nuovaNota.html',
    controller: 'nuovaNotaCtrl'
  })

  .state('note', {
    url: '/notes',
    templateUrl: 'templates/note.html',
    controller: 'noteCtrl'
  })

  .state('dettaglio', {
    url: '/details',
    templateUrl: 'templates/dettaglio.html',
    controller: 'dettaglioCtrl'
  })

$urlRouterProvider.otherwise('/newNote')

  

});