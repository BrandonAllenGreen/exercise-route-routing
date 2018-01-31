"use strict";

angular
  .module("RouteRouting")
  .controller("FamousTwoCtrl", function($scope) {

    $scope.highway = "Blue Ridge Parkway";
    $scope.details = "The Blue Ridge Parkway is a National Parkway and All-American Road in the United States, noted for its scenic beauty.";  

    $scope.goBack =  
      {
        name: "Home",
        url: "#!/"
      }
  });
