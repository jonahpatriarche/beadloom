/**
 * Created by jonah on 2016-12-06.
 */
var loom = [];

/*var colors = {
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
 };*/
/*
 var colors = [
 // Lights
 {
 lightRed: "#E45562",
 lightOrange: "#F5BB39",
 lightYellow: "#F5F7A6",
 lightGreen: "#4DA838",
 lightBlue: "#1A48FA",
 lightMauve: "#DC3BFE",
 white: "#FFFFFF"
 },
 // Mediums
 {
 red: "#D22525",
 orange: "#E97128",
 yellow: "#F5F925",
 green: "#2A5A0B",
 blue: "#0C1FBA",
 mauve: "#B72EBF",
 grey: "#515058"
 },
 // Darks
 {
 darkRed: "#6C1314",
 darkOrange: "#92281D",
 darkYellow: "#B89F1D",
 darkGreen: "#112601",
 darkBlue: "#010B40",
 darkMauve: "#552CF5",
 black: "#000000"
 }
 ];
 */

var colors = [
  // Lights
  [
    {
      name: "lightRed",
      code: "#E45562",
      gradient: 'radial-gradient(closest-corner at 25% 20%, #FFF, #333, "#E45562")'
    },
    {
      name: "lightOrange",
      code: "#F5BB39"
    },
    {
      name: "lightYellow",
      code: "#F5F7A6"
    },
    {
      name: "lightGreen",
      code: "#4DA838"
    },
    {
      name: "lightBlue",
      code: "#1A48FA"
    },
    {
      name: "lightMauve",
      code: "#DC3BFE"
    },
    {
      name: "white",
      code: "#FFFFFF"
    }
  ],
  // Mediums
  [
    {
      name: "red",
      code: "#D22525"
    },
    {
      name: "orange",
      code: "#E97128"
    },
    {
      name: "yellow",
      code: "#F5F925"
    },
    {
      name: "green",
      code: "#2A5A0B"
    },
    {
      name: "blue",
      code: "#0C1FBA"
    },
    {
      name: "mauve",
      code: "#B72EBF"
    },
    {
      name: "grey",
      code: "#515058"
    }
  ],
  // Darks
  [
    {
      name: "darkRed",
      code: "#6C1314"
    },
    {
      name: "darkOrange",
      code: "#92281D"
    },
    {
      name: "darkYellow",
      code: "#B89F1D"
    },
    {
      name: "darkGreen",
      code: "#112601"
    },
    {
      name: "darkBlue",
      code: "#010B40"
    },
    {
      name: "darkMauve",
      code: "#552CF5"
    },
    {
      name: "black",
      code: "#000000"
    }
  ]
];

(function () {
  'use strict';

  angular.module('BeadingApp', [])
    .controller('BeadingController', BeadingController);

  BeadingController.$inject = ['$scope'];
  function BeadingController($scope) {
    $scope.numThreads = 20; // horizontal rows
    $scope.numBeadRows = 72; // vertical rows of beads
    $scope.loom = loom;
    $scope.colors = colors;
    $scope.selectedColor = "#FFF";

    for (var i = 0; i < $scope.numThreads; i++) {
      var row = [];
      for (var j = 0; j < $scope.numBeadRows; j++) {
        row.push({row: j, threadNumber: i, color: $scope.selectedColor});
      }
      $scope.loom.push(row);
    } // end outer for loop

    $scope.changeColor = function (bead) {
      console.log(bead);
      console.log($scope.selectedColor);
      bead.color = $scope.selectedColor;
    } //changeColor

    $scope.log = function (color) {
      $scope.selectedColor = color.code;
    }
    /*
     * Add another row onto loom:
     *  - increment number of columns
     *  - fetch each horizontal column of beads 
     */
    $scope.addRow = function () {
      $scope.selectedColor = '#FFF';
      for (var i = 0; i < $scope.numThreads; i++) {
        var row = $scope.loom[i];
        row.push({row: $scope.numBeadRows, threadNumber: i, color: $scope.selectedColor});
      } // end outer for loop
      $scope.numBeadRows++;
      console.log(loom);
    } // addRow
  } // Controller
})();