"use strict";

angular
  .module("RouteRouting")
  .controller("FamousOneCtrl", function($scope) {

    $scope.highway = "Route 66";
    $scope.details = "U.S. Route 66, also known as the Will Rogers Highway, the Main Street of America or the Mother Road, was one of the original highways within the U.S. Highway System.";

    $scope.goBack =  
      {
        name: "Home",
        url: "#!/"
      }
  });
  
  