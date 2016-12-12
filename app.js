/**
 * Created by jonah on 2016-12-06.
 */
var loom = [];
/*var colors = [
 // Reds
 {
 name: "rose",
 code: "#E45562"
 },
 {
 name: "red",
 code: "#D22525"
 },
 {
 name: "dark-red",
 code: "#6C1314"
 },
 {
 name: "pale-orange",
 code: "#F5BB39"
 },
 {
 name: "orange",
 code: "#E97128"
 },
 {
 name: "umber",
 code: "#92281D"
 },
 // Yellows
 {
 name: "pale-yellow",
 code: "#F5F7A6"
 },
 {
 name: "yellow",
 code: "#F5F925"
 },
 {
 name: "dark-yellow",
 code: "#B89F1D"
 },
 // Greens
 {
 name: "light-green",
 code: "#4DA838"
 },
 {
 name: "green",
 code: "#2A5A0B"
 },
 {
 name: "dark-green",
 code: "#112601"
 },
 // Blues
 {
 name: "light-blue",
 code: "#1A48FA"
 },
 {
 name: "blue",
 code: "#0C1FBA"
 },
 {
 name: "dark-blue",
 code: "#010B40"
 },
 // Mauves
 {
 name: "pink",
 code: "#DC3BFE"
 },
 {
 name: "mauve",
 code: "#B72EBF"
 },
 {
 name: "purple",
 code: "#552CF5"
 },// Shades
 {
 name: "white",
 code: "#FFFFFF"
 },
 {
 name: "grey",
 code: "#515058"
 },
 {
 name: "black",
 code: "#000000"
 }

 ];*/

var colors = {
  // Reds
  lightRed: "#E45562",
  red: "#D22525",
  darkRed: "#6C1314",

  // Oranges
  lightOrange: "#F5BB39",
  orange: "#E97128",
  darkOrange: "#92281D",

  // Yellows
  lightYellow: "#F5F7A6",
  yellow: "#F5F925",
  darkYellow: "#B89F1D",

  // Greens
  lightGreen: "#4DA838",
  green: "#2A5A0B",
  darkGreen: "#112601",

  // Blues
  lightBlue: "#1A48FA",
  blue: "#0C1FBA",
  darkBlue: "#010B40",

  // Mauves
  lightMauve: "#DC3BFE",
  mauve: "#B72EBF",
  darkMauve: "#552CF5",// Shades

  white: "#FFFFFF",
  grey: "#515058",
  black: "#000000"
};

(function () {
  'use strict';

  angular.module('BeadingApp', [])
    .controller('BeadingController', BeadingController);

  BeadingController.$inject = ['$scope'];
  function BeadingController($scope) {
    $scope.numThreads = 5; // horizontal rows 
    $scope.numBeadRows = 10; // vertical rows of beads
    $scope.loom = loom;
    $scope.colors = colors;
    $scope.selectedColor = "#FFFFFF";

    for (var i = 0; i < $scope.numThreads; i++) {
      var row = [];
      for (var j = 0; j < $scope.numBeadRows; j++) {
        row.push({row: j, threadNumber: i, color: "white"});
      }
      $scope.loom.push(row);
    } // end outer for loop

    $scope.changeColor = function (bead) {
      console.log(bead);
      console.log($scope.selectedColor);
      bead.color = $scope.selectedColor;
    } //changeColor

    /*
     * Add another row onto loom:
     *  - increment number of columns
     *  - fetch each horizontal column of beads 
     */
    $scope.addRow = function () {
      $scope.numBeadRows++;
      for (var i = 0; i < $scope.numThreads; i++) {
        var row = $scope.loom[i];
        row.push({row: $scope.numBeadRows, threadNumber: i, color: "white"});
      } // end outer for loop
    } // addRow
  } // Controller
})();