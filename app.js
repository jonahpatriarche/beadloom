/**
 * Created by jonah on 2016-12-06.
 */
var loom = [];
var swatches = [
    [
        {name: 'red-1', code: '#FFEBEE', column: 1, row: 1},
        {name: 'red-2', code: '#FFCDD2', column: 2, row: 1},
        {name: 'red-3', code: '#EF9A9A', column: 3, row: 1},
        {name: 'red-4', code: '#E57373', column: 4, row: 1},
        {name: 'red-5', code: '#EF5350', column: 5, row: 1},
        {name: 'red-6', code: '#F44336', column: 6, row: 1},
        {name: 'red-7', code: '#E53935', column: 7, row: 1},
        {name: 'red-8', code: '#D32F2F', column: 8, row: 1},
        {name: 'red-9', code: '#C62828', column: 9, row: 1},
        {name: 'red-10', code: '#B71C1C', column: 10, row: 1},
        {name: 'red-11', code: '#FF8A80', column: 11, row: 1},
        {name: 'red-12', code: '#FF5252', column: 12, row: 1},
        {name: 'red-13', code: '#FF1744', column: 13, row: 1},
        {name: 'red-14', code: '#D50000', column: 14, row: 1}
    ],
    [
        {name: 'pink-1', code: '#FCE4EC', column: 1, row: 2},
        {name: 'pink-2', code: '#F8BBD0', column: 2, row: 2},
        {name: 'pink-3', code: '#F48FB1', column: 3, row: 2},
        {name: 'pink-4', code: '#F06292', column: 4, row: 2},
        {name: 'pink-5', code: '#EC407A', column: 5, row: 2},
        {name: 'pink-6', code: '#E91E63', column: 6, row: 2},
        {name: 'pink-7', code: '#D81B60', column: 7, row: 2},
        {name: 'pink-8', code: '#C2185B', column: 8, row: 2},
        {name: 'pink-9', code: '#AD1457', column: 9, row: 2},
        {name: 'pink-10', code: '#880E4F', column: 10, row: 2},
        {name: 'pink-11', code: '#FF80AB', column: 11, row: 2},
        {name: 'pink-12', code: '#FF4081', column: 12, row: 2},
        {name: 'pink-13', code: '#F50057', column: 13, row: 2},
        {name: 'pink-14', code: '#C51162', column: 14, row: 2}
    ],
    [
        {name: 'purple-1', code: '#F3E5F5', column: 1, row: 3},
        {name: 'purple-2', code: '#E1BEE7', column: 2, row: 3},
        {name: 'purple-3', code: '#CE93D8', column: 3, row: 3},
        {name: 'purple-4', code: '#BA68C8', column: 4, row: 3},
        {name: 'purple-5', code: '#AB47BC', column: 5, row: 3},
        {name: 'purple-6', code: '#9C27B0', column: 6, row: 3},
        {name: 'purple-7', code: '#8E24AA', column: 7, row: 3},
        {name: 'purple-8', code: '#7B1FA2', column: 8, row: 3},
        {name: 'purple-9', code: '#6A1B9A', column: 9, row: 3},
        {name: 'purple-10', code: '#4A148C', column: 10, row: 3},
        {name: 'purple-11', code: '#EA80FC', column: 11, row: 3},
        {name: 'purple-12', code: '#E040FB', column: 12, row: 3},
        {name: 'purple-13', code: '#D500F9', column: 13, row: 3},
        {name: 'purple-14', code: '#AA00FF', column: 14, row: 3}
    ],
    [
        {name: 'deepPurple-1', code: '#EDE7F6', column: 1, row: 4},
        {name: 'deepPurple-2', code: '#D1C4E9', column: 2, row: 4},
        {name: 'deepPurple-3', code: '#B39DDB', column: 3, row: 4},
        {name: 'deepPurple-4', code: '#9575CD', column: 4, row: 4},
        {name: 'deepPurple-5', code: '#7E57C2', column: 5, row: 4},
        {name: 'deepPurple-6', code: '#673AB7', column: 6, row: 4},
        {name: 'deepPurple-7', code: '#5E35B1', column: 7, row: 4},
        {name: 'deepPurple-8', code: '#512DA8', column: 8, row: 4},
        {name: 'deepPurple-9', code: '#4527A0', column: 9, row: 4},
        {name: 'deepPurple-10', code: '#311B92', column: 10, row: 4},
        {name: 'deepPurple-11', code: '#B388FF', column: 11, row: 4},
        {name: 'deepPurple-12', code: '#7C4DFF', column: 12, row: 4},
        {name: 'deepPurple-13', code: '#651FFF', column: 13, row: 4},
        {name: 'deepPurple-14', code: '#6200EA', column: 14, row: 4}
    ],
    [
        {name: 'indigo-1', code: '#E8EAF6', column: 1, row: 5},
        {name: 'indigo-2', code: '#C5CAE9', column: 2, row: 5},
        {name: 'indigo-3', code: '#9FA8DA', column: 3, row: 5},
        {name: 'indigo-4', code: '#7986CB', column: 4, row: 5},
        {name: 'indigo-5', code: '#5C6BC0', column: 5, row: 5},
        {name: 'indigo-6', code: '#3F51B5', column: 6, row: 5},
        {name: 'indigo-7', code: '#3949AB', column: 7, row: 5},
        {name: 'indigo-8', code: '#303F9F', column: 8, row: 5},
        {name: 'indigo-9', code: '#283593', column: 9, row: 5},
        {name: 'indigo-10', code: '#1A237E', column: 10, row: 5},
        {name: 'indigo-11', code: '#8C9EFF', column: 11, row: 5},
        {name: 'indigo-12', code: '#536DFE', column: 12, row: 5},
        {name: 'indigo-13', code: '#3D5AFE', column: 13, row: 5},
        {name: 'indigo-14', code: '#304FFE', column: 14, row: 5}
    ],
    [
        {name: 'blue-1', code: '#E3F2FD', column: 1, row: 6},
        {name: 'blue-2', code: '#BBDEFB', column: 2, row: 6},
        {name: 'blue-3', code: '#90CAF9', column: 3, row: 6},
        {name: 'blue-4', code: '#64B5F6', column: 4, row: 6},
        {name: 'blue-5', code: '#42A5F5', column: 5, row: 6},
        {name: 'blue-6', code: '#2196F3', column: 6, row: 6},
        {name: 'blue-7', code: '#1E88E5', column: 7, row: 6},
        {name: 'blue-8', code: '#1976D2', column: 8, row: 6},
        {name: 'blue-9', code: '#1565C0', column: 9, row: 6},
        {name: 'blue-10', code: '#0D47A1', column: 10, row: 6},
        {name: 'blue-11', code: '#82B1FF', column: 11, row: 6},
        {name: 'blue-12', code: '#448AFF', column: 12, row: 6},
        {name: 'blue-13', code: '#2979FF', column: 13, row: 6},
        {name: 'blue-14', code: '#2962FF', column: 14, row: 6}
    ],
    [
        {name: 'lightBlue-1', code: '#E1F5FE', column: 1, row: 7},
        {name: 'lightBlue-2', code: '#B3E5FC', column: 2, row: 7},
        {name: 'lightBlue-3', code: '#81D4FA', column: 3, row: 7},
        {name: 'lightBlue-4', code: '#4FC3F7', column: 4, row: 7},
        {name: 'lightBlue-5', code: '#29B6F6', column: 5, row: 7},
        {name: 'lightBlue-6', code: '#03A9F4', column: 6, row: 7},
        {name: 'lightBlue-7', code: '#039BE5', column: 7, row: 7},
        {name: 'lightBlue-8', code: '#0288D1', column: 8, row: 7},
        {name: 'lightBlue-9', code: '#0277BD', column: 9, row: 7},
        {name: 'lightBlue-10', code: '#01579B', column: 10, row: 7},
        {name: 'lightBlue-11', code: '#80D8FF', column: 11, row: 7},
        {name: 'lightBlue-12', code: '#40C4FF', column: 12, row: 7},
        {name: 'lightBlue-13', code: '#00B0FF', column: 13, row: 7},
        {name: 'lightBlue-14', code: '#0091EA', column: 14, row: 7}
    ],
    [
        {name: 'cyan-1', code: '#E0F7FA', column: 1, row: 8},
        {name: 'cyan-2', code: '#B2EBF2', column: 2, row: 8},
        {name: 'cyan-3', code: '#80DEEA', column: 3, row: 8},
        {name: 'cyan-4', code: '#4DD0E1', column: 4, row: 8},
        {name: 'cyan-5', code: '#26C6DA', column: 5, row: 8},
        {name: 'cyan-6', code: '#00BCD4', column: 6, row: 8},
        {name: 'cyan-7', code: '#00ACC1', column: 7, row: 8},
        {name: 'cyan-8', code: '#0097A7', column: 8, row: 8},
        {name: 'cyan-9', code: '#00838F', column: 9, row: 8},
        {name: 'cyan-10', code: '#006064', column: 10, row: 8},
        {name: 'cyan-11', code: '#84FFFF', column: 11, row: 8},
        {name: 'cyan-12', code: '#18FFFF', column: 12, row: 8},
        {name: 'cyan-13', code: '#00E5FF', column: 13, row: 8},
        {name: 'cyan-14', code: '#00B8D4', column: 14, row: 8}
    ],
    [
        {name: 'teal-1', code: '#E0F2F1', column: 1, row: 9},
        {name: 'teal-2', code: '#B2DFDB', column: 2, row: 9},
        {name: 'teal-3', code: '#80CBC4', column: 3, row: 9},
        {name: 'teal-4', code: '#4DB6AC', column: 4, row: 9},
        {name: 'teal-5', code: '#26A69A', column: 5, row: 9},
        {name: 'teal-6', code: '#009688', column: 6, row: 9},
        {name: 'teal-7', code: '#00897B', column: 7, row: 9},
        {name: 'teal-8', code: '#00796B', column: 8, row: 9},
        {name: 'teal-9', code: '#00695C', column: 9, row: 9},
        {name: 'teal-10', code: '#004D40', column: 10, row: 9},
        {name: 'teal-11', code: '#A7FFEB', column: 11, row: 9},
        {name: 'teal-12', code: '#64FFDA', column: 12, row: 9},
        {name: 'teal-13', code: '#1DE9B6', column: 13, row: 9},
        {name: 'teal-14', code: '#00BFA5', column: 14, row: 9}
    ],
    [
        {name: 'green-1', code: '#E8F5E9', column: 1, row: 10},
        {name: 'green-2', code: '#C8E6C9', column: 2, row: 10},
        {name: 'green-3', code: '#A5D6A7', column: 3, row: 10},
        {name: 'green-4', code: '#81C784', column: 4, row: 10},
        {name: 'green-5', code: '#66BB6A', column: 5, row: 10},
        {name: 'green-6', code: '#4CAF50', column: 6, row: 10},
        {name: 'green-7', code: '#43A047', column: 7, row: 10},
        {name: 'green-8', code: '#388E3C', column: 8, row: 10},
        {name: 'green-9', code: '#2E7D32', column: 9, row: 10},
        {name: 'green-10', code: '#1B5E20', column: 10, row: 10},
        {name: 'green-11', code: '#B9F6CA', column: 11, row: 10},
        {name: 'green-12', code: '#69F0AE', column: 12, row: 10},
        {name: 'green-13', code: '#00E676', column: 13, row: 10},
        {name: 'green-14', code: '#00C853', column: 14, row: 10}
    ],
    [
        {name: 'lightGreen-1', code: '#F1F8E9', column: 1, row: 11},
        {name: 'lightGreen-2', code: '#DCEDC8', column: 2, row: 11},
        {name: 'lightGreen-3', code: '#C5E1A5', column: 3, row: 11},
        {name: 'lightGreen-4', code: '#AED581', column: 4, row: 11},
        {name: 'lightGreen-5', code: '#9CCC65', column: 5, row: 11},
        {name: 'lightGreen-6', code: '#8BC34A', column: 6, row: 11},
        {name: 'lightGreen-7', code: '#7CB342', column: 7, row: 11},
        {name: 'lightGreen-8', code: '#689F38', column: 8, row: 11},
        {name: 'lightGreen-9', code: '#558B2F', column: 9, row: 11},
        {name: 'lightGreen-10', code: '#33691E', column: 10, row: 11},
        {name: 'lightGreen-11', code: '#CCFF90', column: 11, row: 11},
        {name: 'lightGreen-12', code: '#B2FF59', column: 12, row: 11},
        {name: 'lightGreen-13', code: '#76FF03', column: 13, row: 11},
        {name: 'lightGreen-14', code: '#64DD17', column: 14, row: 11}
    ],
    [
        {name: 'lime-1', code: '#F9FBE7', column: 1, row: 12},
        {name: 'lime-2', code: '#F0F4C3', column: 2, row: 12},
        {name: 'lime-3', code: '#E6EE9C', column: 3, row: 12},
        {name: 'lime-4', code: '#DCE775', column: 4, row: 12},
        {name: 'lime-5', code: '#D4E157', column: 5, row: 12},
        {name: 'lime-6', code: '#CDDC39', column: 6, row: 12},
        {name: 'lime-7', code: '#C0CA33', column: 7, row: 12},
        {name: 'lime-8', code: '#AFB42B', column: 8, row: 12},
        {name: 'lime-9', code: '#9E9D24', column: 9, row: 12},
        {name: 'lime-10', code: '#827717', column: 10, row: 12},
        {name: 'lime-11', code: '#F4FF81', column: 11, row: 12},
        {name: 'lime-12', code: '#EEFF41', column: 12, row: 12},
        {name: 'lime-13', code: '#C6FF00', column: 13, row: 12},
        {name: 'lime-14', code: '#AEEA00', column: 14, row: 12}
    ],
    [
        {name: 'yellow-1', code: '#FFFDE7', column: 1, row: 13},
        {name: 'yellow-2', code: '#FFF9C4', column: 2, row: 13},
        {name: 'yellow-3', code: '#FFF59D', column: 3, row: 13},
        {name: 'yellow-4', code: '#FFF176', column: 4, row: 13},
        {name: 'yellow-5', code: '#FFEE58', column: 5, row: 13},
        {name: 'yellow-6', code: '#FFEB3B', column: 6, row: 13},
        {name: 'yellow-7', code: '#FDD835', column: 7, row: 13},
        {name: 'yellow-8', code: '#FBC02D', column: 8, row: 13},
        {name: 'yellow-9', code: '#F9A825', column: 9, row: 13},
        {name: 'yellow-10', code: '#F57F17', column: 10, row: 13},
        {name: 'yellow-11', code: '#FFFF8D', column: 11, row: 13},
        {name: 'yellow-12', code: '#FFFF00', column: 12, row: 13},
        {name: 'yellow-13', code: '#FFEA00', column: 13, row: 13},
        {name: 'yellow-14', code: '#FFD600', column: 14, row: 13}
    ],
    [
        {name: 'amber-1', code: '#FFF8E1', column: 1, row: 14},
        {name: 'amber-2', code: '#FFECB3', column: 2, row: 14},
        {name: 'amber-3', code: '#FFE082', column: 3, row: 14},
        {name: 'amber-4', code: '#FFD54F', column: 4, row: 14},
        {name: 'amber-5', code: '#FFCA28', column: 5, row: 14},
        {name: 'amber-6', code: '#FFC107', column: 6, row: 14},
        {name: 'amber-7', code: '#FFB300', column: 7, row: 14},
        {name: 'amber-8', code: '#FFA000', column: 8, row: 14},
        {name: 'amber-9', code: '#FF8F00', column: 9, row: 14},
        {name: 'amber-10', code: '#FF6F00', column: 10, row: 14},
        {name: 'amber-11', code: '#FFE57F', column: 11, row: 14},
        {name: 'amber-12', code: '#FFD740', column: 12, row: 14},
        {name: 'amber-13', code: '#FFC400', column: 13, row: 14},
        {name: 'amber-14', code: '#FFAB00', column: 14, row: 14}
    ],
    [
        {name: 'orange-1', code: '#FFF3E0', column: 1, row: 15},
        {name: 'orange-2', code: '#FFE0B2', column: 2, row: 15},
        {name: 'orange-3', code: '#FFCC80', column: 3, row: 15},
        {name: 'orange-4', code: '#FFB74D', column: 4, row: 15},
        {name: 'orange-5', code: '#FFA726', column: 5, row: 15},
        {name: 'orange-6', code: '#FF9800', column: 6, row: 15},
        {name: 'orange-7', code: '#FB8C00', column: 7, row: 15},
        {name: 'orange-8', code: '#F57C00', column: 8, row: 15},
        {name: 'orange-9', code: '#EF6C00', column: 9, row: 15},
        {name: 'orange-10', code: '#E65100', column: 10, row: 15},
        {name: 'orange-11', code: '#FFD180', column: 11, row: 15},
        {name: 'orange-12', code: '#FFAB40', column: 12, row: 15},
        {name: 'orange-13', code: '#FF9100', column: 13, row: 15},
        {name: 'orange-14', code: '#FF6D00', column: 14, row: 15}
    ],
    [
        {name: 'deepOrange-1', code: '#FBE9E7', column: 1, row: 16},
        {name: 'deepOrange-2', code: '#FFCCBC', column: 2, row: 16},
        {name: 'deepOrange-3', code: '#FFAB91', column: 3, row: 16},
        {name: 'deepOrange-4', code: '#FF8A65', column: 4, row: 16},
        {name: 'deepOrange-5', code: '#FF7043', column: 5, row: 16},
        {name: 'deepOrange-6', code: '#FF5722', column: 6, row: 16},
        {name: 'deepOrange-7', code: '#F4511E', column: 7, row: 16},
        {name: 'deepOrange-8', code: '#E64A19', column: 8, row: 16},
        {name: 'deepOrange-9', code: '#D84315', column: 9, row: 16},
        {name: 'deepOrange-10', code: '#BF360C', column: 10, row: 16},
        {name: 'deepOrange-11', code: '#FF9E80', column: 11, row: 16},
        {name: 'deepOrange-12', code: '#FF6E40', column: 12, row: 16},
        {name: 'deepOrange-13', code: '#FF3D00', column: 13, row: 16},
        {name: 'deepOrange-14', code: '#DD2C00', column: 14, row: 16}
    ],
    [
        {name: 'brown-1', code: '#EFEBE9', column: 1, row: 17},
        {name: 'brown-2', code: '#D7CCC8', column: 2, row: 17},
        {name: 'brown-3', code: '#BCAAA4', column: 3, row: 17},
        {name: 'brown-4', code: '#A1887F', column: 4, row: 17},
        {name: 'brown-5', code: '#8D6E63', column: 5, row: 17},
        {name: 'brown-6', code: '#795548', column: 6, row: 17},
        {name: 'brown-7', code: '#6D4C41', column: 7, row: 17},
        {name: 'brown-8', code: '#5D4037', column: 8, row: 17},
        {name: 'brown-9', code: '#4E342E', column: 9, row: 17},
        {name: 'brown-10', code: '#3E2723', column: 10, row: 17}
    ],
    [
        {name: 'grey-1', code: '#FAFAFA', column: 1, row: 18},
        {name: 'grey-2', code: '#F5F5F5', column: 2, row: 18},
        {name: 'grey-3', code: '#EEEEEE', column: 3, row: 18},
        {name: 'grey-4', code: '#E0E0E0', column: 4, row: 18},
        {name: 'grey-5', code: '#BDBDBD', column: 5, row: 18},
        {name: 'grey-6', code: '#9E9E9E', column: 6, row: 18},
        {name: 'grey-7', code: '#757575', column: 7, row: 18},
        {name: 'grey-8', code: '#616161', column: 8, row: 18},
        {name: 'grey-9', code: '#424242', column: 9, row: 18},
        {name: 'grey-10', code: '#212121', column: 10, row: 18}
    ],
    [
        {name: 'blueGrey-1', code: '#ECEFF1', column: 1, row: 19},
        {name: 'blueGrey-2', code: '#CFD8DC', column: 2, row: 19},
        {name: 'blueGrey-3', code: '#B0BEC5', column: 3, row: 19},
        {name: 'blueGrey-4', code: '#90A4AE', column: 4, row: 19},
        {name: 'blueGrey-5', code: '#78909C', column: 5, row: 19},
        {name: 'blueGrey-6', code: '#607D8B', column: 6, row: 19},
        {name: 'blueGrey-7', code: '#546E7A', column: 7, row: 19},
        {name: 'blueGrey-8', code: '#455A64', column: 8, row: 19},
        {name: 'blueGrey-9', code: '#37474F', column: 9, row: 19},
        {name: 'blueGrey-10', code: '#263238', column: 10, row: 19}
    ],
    [
        {name: 'white', code: '#FFFFFF', column: 1, row: 20},
        {name: 'black', code: '#000000', column: 2, row: 20},
        {name: 'custom1', code: '#80260C', column: 3, row: 20},
        {name: 'custom2', code: '#5c0b03', column: 4, row: 20},
        {name: 'custom3', code: '#011182', column: 5, row: 20},
        {name: 'custom4', code: '#010947', column: 6, row: 20}
    ]
];
(function () {
    'use strict';

    angular.module('BeadingApp', ['ngMaterial', 'ngMessages'])
    .controller('BeadingController', BeadingController);

    BeadingController.$inject = ['$scope'];
    function BeadingController($scope) {
        $scope.rowLength = 30;
        $scope.numBeadRows = 50;
        $scope.loom = loom;
        $scope.swatches = swatches;
        $scope.defaultColor = {name: 'white', code: '#FFFFFF', column: 1, row: 20};
        $scope.selectedColor = $scope.defaultColor;

        for (var i = 0; i < $scope.numBeadRows; i++) {
            var row = [];
            for (var j = 0; j < $scope.rowLength; j++) {
                row.push({row: j, rowIndex: i, color: $scope.selectedColor});
            }
            $scope.loom.push(row);
        } // end outer for loop

        $scope.setBeadColor = function (bead) {
            if (bead.color.code == $scope.selectedColor.code) {
                bead.color = $scope.defaultColor;
            } else {
                bead.color = $scope.selectedColor;
            }
        }; //changeColor

        $scope.setColor = function (color) {
            $scope.selectedColor = color;
        };

        /*
         * Add another row of white beads onto top of loom
         */
        $scope.addRowTop = function () {
            var newRow = [];
            for (var i = 0; i < $scope.rowLength; i++) {
                newRow.push({
                    row: $scope.numBeadRows,
                    rowIndex: i,
                    color: $scope.defaultColor
                });
            }

            $scope.loom.unshift(newRow);
            $scope.numBeadRows++;
        }; // addRow

        /*
         * Add another row of white beads onto bottom of loom
         */
        $scope.addRowBottom = function () {
            var newRow = [];
            for (var i = 0; i < $scope.rowLength; i++) {
                newRow.push({
                    row: $scope.numBeadRows,
                    rowIndex: i,
                    color: $scope.defaultColor
                });
            }

            $scope.loom.push(newRow);
            $scope.numBeadRows++;
        }; // addRow

        /*
         * Add a white bead to the end of each row, and increment row length
         *  - max length is 50
         */
        $scope.addColumn = function () {
            if ($scope.rowLength < 50) {
                for (var i = 0; i < $scope.numBeadRows; i++) {
                    var row = $scope.loom[i];
                    row.push({
                        row: i,
                        rowIndex: $scope.rowLength + 1,
                        color: $scope.defaultColor
                    });
                }

                $scope.rowLength++;
            }
        }; // addColumn

        /*
         * Add a white bead to the beginning of each row, and increment row length
         *  - max length is 50
         */
        $scope.addColumnLeft = function () {
            if ($scope.rowLength < 50) {
                for (var i = 0; i < $scope.numBeadRows; i++) {
                    var row = $scope.loom[i];
                    row.unshift({
                        row: i,
                        rowIndex: 0,
                        color: $scope.defaultColor
                    });
                }

                $scope.rowLength++;
            }
        }; // addColumn

        /*
         * Remove the last row of beads
         */
        $scope.removeRowTop = function () {
            if ($scope.loom.shift()) {
                $scope.numBeadRows--;
            }
        }; // removeRow

        /*
         * Remove the last row of beads
         */
        $scope.removeRowBottom = function () {
            if ($scope.loom.pop()) {
                $scope.numBeadRows--;
            }
        }; // removeRow

        /*
         * Remove bead from the end of each row
         */
        $scope.removeColumn = function () {
            if ($scope.rowLength > 0) {
                for (var i = 0; i < $scope.numBeadRows; i++) {
                    var row = $scope.loom[i];
                    row.pop();
                }
                $scope.rowLength--;
            }
        }; // removeColumn

        /*
         * Remove bead from the beginning of each row
         */
        $scope.removeColumnLeft = function () {
            if ($scope.rowLength > 0) {
                for (var i = 0; i < $scope.numBeadRows; i++) {
                    var row = $scope.loom[i];
                    row.shift();
                }
                $scope.rowLength--;
            }
        }; // removeColumn

        $scope.printLoom = function () {
            var printHTML = '';
            var bead = document.getElementsByClassName('bead')[0];
            var viewHeight = 50 * $scope.numBeadRows + 200;
            var viewWidth = 20 * $scope.rowLength + 50;

            for (var i = 0; i < $scope.numBeadRows; i++) {
                var row = $scope.loom[i];
                printHTML = printHTML.concat(
                    '<body class="print-view" style="height:' + viewHeight +'; width=' + viewWidth + '">' +
                    '<div class="bead-row">'
                );
                for (var j = 0; j < $scope.rowLength; j++) {
                    printHTML = printHTML.concat(
                        '<span class="bead">' +
                            '<button style="background-color: ' + row[j].color.code +'"></button>' +
                        '</span>'
                    );
                }
                printHTML = printHTML.concat('</div></div>');
            }

            var popupWin = window.open(
                'Print View',
                'Print View',
                'width=' + viewWidth + ',height=' + viewHeight
            );
            popupWin.document.open();
            popupWin.document.write('' +
                '<html>' +
                    '<head>' +
                        '<link rel="stylesheet" type="text/css" href="css/styles.css" />' +
                    '</head>' +
                    '<body onpageshow="window.print()">' +
                            printHTML +
                    '</body>' +
                '</html>'
            );
            popupWin.document.close();
        }; //printLoom

    } // Controller
})();