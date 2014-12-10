angular.module('svgClockModule', [])
  .directive('svgClockAnalog', function () {
     return {
         restrict: 'AE',
         replace: 'true',
         template: '<h3>Hello hand.hour.rotation = {{svgclock.handHour.rotation}}  {{secondRotation}}</h3>'
     };
  })
  .controller('SvgClockController', function($scope, $interval) {
      $scope.svgclock = {
          handHour   : { rotation : 10 },
          handMinute : { rotation : 20 },
          handSecond : { rotation : 30 }
      };

    function calculateRotation() {
      var now = new Date();
      $scope.hourRotation   = 360 * now.getHours()   / 12;
      $scope.minuteRotation = 360 * now.getMinutes() / 60;
      $scope.secondRotation = 360 * now.getSeconds() / 60;
    }
    $interval(calculateRotation, 1000);
    calculateRotation();
  });


