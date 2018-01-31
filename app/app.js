"use strict";

angular
  .module("RouteRouting", ["ngRoute"])
  .config($routeProvider => {
    $routeProvider
      .when("/route66", {
        templateUrl: "partials/famous-highway1.html",
        controller: "FamousOneCtrl"
      })
      .when("/blueridgeparkway", {
        templateUrl: "partials/famous-highway2.html",
        controller: "FamousTwoCtrl"
      });
    });