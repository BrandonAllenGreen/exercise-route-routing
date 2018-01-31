"use strict";

angular
  .module("RouteRouting")
  .controller("NavCtrl", function($scope) {

    $scope.links = [
      {
        name: "Route 66",
        url: "#!/route66"
      },
      {
        name: "BRP",
        url: "#!/blueridgeparkway",
      }
    ];
  });
  

