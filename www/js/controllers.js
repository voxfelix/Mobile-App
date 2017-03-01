angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
})

.controller('CategoriesCtrl', function($scope) {
  $scope.categories = [
    { title: 'General', id: 1 },
    { title: 'Health and Wellness', id: 2 },
    { title: 'Food Delivery', id: 3 },
    { title: 'Transportation', id: 4 },
    { title: 'Leisure and Recreation', id: 5 }
  ];
})

.controller('CategoryCtrl', function($scope, $stateParams) {
  $scope.items = dataObj;
  $scope.id =$stateParams.categoryId;
});
