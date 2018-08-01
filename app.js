/**
 * Created by jonah on 2016-12-06.
 */
var loom = [];
var swatches = [
    [
        {name: 'red-50', code: '#FFEBEE', column: 1, row: 1},
        {name: 'red-100', code: '#FFCDD2', column: 2, row: 1},
        {name: 'red-200', code: '#EF9A9A', column: 3, row: 1},
        {name: 'red-300', code: '#E57373', column: 4, row: 1},
        {name: 'red-400', code: '#EF5350', column: 5, row: 1},
        {name: 'red-500', code: '#F44336', column: 6, row: 1},
        {name: 'red-600', code: '#E53935', column: 7, row: 1},
        {name: 'red-700', code: '#D32F2F', column: 8, row: 1},
        {name: 'red-800', code: '#C62828', column: 9, row: 1},
        {name: 'red-900', code: '#B71C1C', column: 10, row: 1},
        {name: 'red-A100', code: '#FF8A80', column: 11, row: 1},
        {name: 'red-A200', code: '#FF5252', column: 12, row: 1},
        {name: 'red-A400', code: '#FF1744', column: 13, row: 1},
        {name: 'red-A700', code: '#D50000', column: 14, row: 1}
    ],
    [
        {name: 'pink-50', code: '#FCE4EC', column: 1, row: 2},
        {name: 'pink-100', code: '#F8BBD0', column: 2, row: 2},
        {name: 'pink-200', code: '#F48FB1', column: 3, row: 2},
        {name: 'pink-300', code: '#F06292', column: 4, row: 2},
        {name: 'pink-400', code: '#EC407A', column: 5, row: 2},
        {name: 'pink-500', code: '#E91E63', column: 6, row: 2},
        {name: 'pink-600', code: '#D81B60', column: 7, row: 2},
        {name: 'pink-700', code: '#C2185B', column: 8, row: 2},
        {name: 'pink-800', code: '#AD1457', column: 9, row: 2},
        {name: 'pink-900', code: '#880E4F', column: 10, row: 2},
        {name: 'pink-A100', code: '#FF80AB', column: 11, row: 2},
        {name: 'pink-A200', code: '#FF4081', column: 12, row: 2},
        {name: 'pink-A400', code: '#F50057', column: 13, row: 2},
        {name: 'pink-A700', code: '#C51162', column: 14, row: 2}
    ],
    [
        {name: 'purple-50', code: '#F3E5F5', column: 1, row: 3},
        {name: 'purple-100', code: '#E1BEE7', column: 2, row: 3},
        {name: 'purple-200', code: '#CE93D8', column: 3, row: 3},
        {name: 'purple-300', code: '#BA68C8', column: 4, row: 3},
        {name: 'purple-400', code: '#AB47BC', column: 5, row: 3},
        {name: 'purple-500', code: '#9C27B0', column: 6, row: 3},
        {name: 'purple-600', code: '#8E24AA', column: 7, row: 3},
        {name: 'purple-700', code: '#7B1FA2', column: 8, row: 3},
        {name: 'purple-800', code: '#6A1B9A', column: 9, row: 3},
        {name: 'purple-900', code: '#4A148C', column: 10, row: 3},
        {name: 'purple-A100', code: '#EA80FC', column: 11, row: 3},
        {name: 'purple-A200', code: '#E040FB', column: 12, row: 3},
        {name: 'purple-A400', code: '#D500F9', column: 13, row: 3},
        {name: 'purple-A700', code: '#AA00FF', column: 14, row: 3}
    ],
    [
        {name: 'deepPurple-50', code: '#EDE7F6', column: 1, row: 4},
        {name: 'deepPurple-100', code: '#D1C4E9', column: 2, row: 4},
        {name: 'deepPurple-200', code: '#B39DDB', column: 3, row: 4},
        {name: 'deepPurple-300', code: '#9575CD', column: 4, row: 4},
        {name: 'deepPurple-400', code: '#7E57C2', column: 5, row: 4},
        {name: 'deepPurple-500', code: '#673AB7', column: 6, row: 4},
        {name: 'deepPurple-600', code: '#5E35B1', column: 7, row: 4},
        {name: 'deepPurple-700', code: '#512DA8', column: 8, row: 4},
        {name: 'deepPurple-800', code: '#4527A0', column: 9, row: 4},
        {name: 'deepPurple-900', code: '#311B92', column: 10, row: 4},
        {name: 'deepPurple-A100', code: '#B388FF', column: 11, row: 4},
        {name: 'deepPurple-A200', code: '#7C4DFF', column: 12, row: 4},
        {name: 'deepPurple-A400', code: '#651FFF', column: 13, row: 4},
        {name: 'deepPurple-A700', code: '#6200EA', column: 14, row: 4}
    ],
    [
        {name: 'indigo-50', code: '#E8EAF6', column: 1, row: 5},
        {name: 'indigo-100', code: '#C5CAE9', column: 2, row: 5},
        {name: 'indigo-200', code: '#9FA8DA', column: 3, row: 5},
        {name: 'indigo-300', code: '#7986CB', column: 4, row: 5},
        {name: 'indigo-400', code: '#5C6BC0', column: 5, row: 5},
        {name: 'indigo-500', code: '#3F51B5', column: 6, row: 5},
        {name: 'indigo-600', code: '#3949AB', column: 7, row: 5},
        {name: 'indigo-700', code: '#303F9F', column: 8, row: 5},
        {name: 'indigo-800', code: '#283593', column: 9, row: 5},
        {name: 'indigo-900', code: '#1A237E', column: 10, row: 5},
        {name: 'indigo-A100', code: '#8C9EFF', column: 11, row: 5},
        {name: 'indigo-A200', code: '#536DFE', column: 12, row: 5},
        {name: 'indigo-A400', code: '#3D5AFE', column: 13, row: 5},
        {name: 'indigo-A700', code: '#304FFE', column: 14, row: 5}
    ],
    [
        {name: 'blue-50', code: '#E3F2FD', column: 1, row: 6},
        {name: 'blue-100', code: '#BBDEFB', column: 2, row: 6},
        {name: 'blue-200', code: '#90CAF9', column: 3, row: 6},
        {name: 'blue-300', code: '#64B5F6', column: 4, row: 6},
        {name: 'blue-400', code: '#42A5F5', column: 5, row: 6},
        {name: 'blue-500', code: '#2196F3', column: 6, row: 6},
        {name: 'blue-600', code: '#1E88E5', column: 7, row: 6},
        {name: 'blue-700', code: '#1976D2', column: 8, row: 6},
        {name: 'blue-800', code: '#1565C0', column: 9, row: 6},
        {name: 'blue-900', code: '#0D47A1', column: 10, row: 6},
        {name: 'blue-A100', code: '#82B1FF', column: 11, row: 6},
        {name: 'blue-A200', code: '#448AFF', column: 12, row: 6},
        {name: 'blue-A400', code: '#2979FF', column: 13, row: 6},
        {name: 'blue-A700', code: '#2962FF', column: 14, row: 6}
    ],
    [
        {name: 'lightBlue-50', code: '#E1F5FE', column: 1, row: 7},
        {name: 'lightBlue-100', code: '#B3E5FC', column: 2, row: 7},
        {name: 'lightBlue-200', code: '#81D4FA', column: 3, row: 7},
        {name: 'lightBlue-300', code: '#4FC3F7', column: 4, row: 7},
        {name: 'lightBlue-400', code: '#29B6F6', column: 5, row: 7},
        {name: 'lightBlue-500', code: '#03A9F4', column: 6, row: 7},
        {name: 'lightBlue-600', code: '#039BE5', column: 7, row: 7},
        {name: 'lightBlue-700', code: '#0288D1', column: 8, row: 7},
        {name: 'lightBlue-800', code: '#0277BD', column: 9, row: 7},
        {name: 'lightBlue-900', code: '#01579B', column: 10, row: 7},
        {name: 'lightBlue-A100', code: '#80D8FF', column: 11, row: 7},
        {name: 'lightBlue-A200', code: '#40C4FF', column: 12, row: 7},
        {name: 'lightBlue-A400', code: '#00B0FF', column: 13, row: 7},
        {name: 'lightBlue-A700', code: '#0091EA', column: 14, row: 7}
    ],
    [
        {name: 'cyan-50', code: '#E0F7FA', column: 1, row: 8},
        {name: 'cyan-100', code: '#B2EBF2', column: 2, row: 8},
        {name: 'cyan-200', code: '#80DEEA', column: 3, row: 8},
        {name: 'cyan-300', code: '#4DD0E1', column: 4, row: 8},
        {name: 'cyan-400', code: '#26C6DA', column: 5, row: 8},
        {name: 'cyan-500', code: '#00BCD4', column: 6, row: 8},
        {name: 'cyan-600', code: '#00ACC1', column: 7, row: 8},
        {name: 'cyan-700', code: '#0097A7', column: 8, row: 8},
        {name: 'cyan-800', code: '#00838F', column: 9, row: 8},
        {name: 'cyan-900', code: '#006064', column: 10, row: 8},
        {name: 'cyan-A100', code: '#84FFFF', column: 11, row: 8},
        {name: 'cyan-A200', code: '#18FFFF', column: 12, row: 8},
        {name: 'cyan-A400', code: '#00E5FF', column: 13, row: 8},
        {name: 'cyan-A700', code: '#00B8D4', column: 14, row: 8}
    ],
    [
        {name: 'teal-50', code: '#E0F2F1', column: 1, row: 9},
        {name: 'teal-100', code: '#B2DFDB', column: 2, row: 9},
        {name: 'teal-200', code: '#80CBC4', column: 3, row: 9},
        {name: 'teal-300', code: '#4DB6AC', column: 4, row: 9},
        {name: 'teal-400', code: '#26A69A', column: 5, row: 9},
        {name: 'teal-500', code: '#009688', column: 6, row: 9},
        {name: 'teal-600', code: '#00897B', column: 7, row: 9},
        {name: 'teal-700', code: '#00796B', column: 8, row: 9},
        {name: 'teal-800', code: '#00695C', column: 9, row: 9},
        {name: 'teal-900', code: '#004D40', column: 10, row: 9},
        {name: 'teal-A100', code: '#A7FFEB', column: 11, row: 9},
        {name: 'teal-A200', code: '#64FFDA', column: 12, row: 9},
        {name: 'teal-A400', code: '#1DE9B6', column: 13, row: 9},
        {name: 'teal-A700', code: '#00BFA5', column: 14, row: 9}
    ],
    [
        {name: 'green-50', code: '#E8F5E9', column: 1, row: 10},
        {name: 'green-100', code: '#C8E6C9', column: 2, row: 10},
        {name: 'green-200', code: '#A5D6A7', column: 3, row: 10},
        {name: 'green-300', code: '#81C784', column: 4, row: 10},
        {name: 'green-400', code: '#66BB6A', column: 5, row: 10},
        {name: 'green-500', code: '#4CAF50', column: 6, row: 10},
        {name: 'green-600', code: '#43A047', column: 7, row: 10},
        {name: 'green-700', code: '#388E3C', column: 8, row: 10},
        {name: 'green-800', code: '#2E7D32', column: 9, row: 10},
        {name: 'green-900', code: '#1B5E20', column: 10, row: 10},
        {name: 'green-A100', code: '#B9F6CA', column: 11, row: 10},
        {name: 'green-A200', code: '#69F0AE', column: 12, row: 10},
        {name: 'green-A400', code: '#00E676', column: 13, row: 10},
        {name: 'green-A700', code: '#00C853', column: 14, row: 10}
    ],
    [
        {name: 'lightGreen-50', code: '#F1F8E9', column: 1, row: 11},
        {name: 'lightGreen-100', code: '#DCEDC8', column: 2, row: 11},
        {name: 'lightGreen-200', code: '#C5E1A5', column: 3, row: 11},
        {name: 'lightGreen-300', code: '#AED581', column: 4, row: 11},
        {name: 'lightGreen-400', code: '#9CCC65', column: 5, row: 11},
        {name: 'lightGreen-500', code: '#8BC34A', column: 6, row: 11},
        {name: 'lightGreen-600', code: '#7CB342', column: 7, row: 11},
        {name: 'lightGreen-700', code: '#689F38', column: 8, row: 11},
        {name: 'lightGreen-800', code: '#558B2F', column: 9, row: 11},
        {name: 'lightGreen-900', code: '#33691E', column: 10, row: 11},
        {name: 'lightGreen-A100', code: '#CCFF90', column: 11, row: 11},
        {name: 'lightGreen-A200', code: '#B2FF59', column: 12, row: 11},
        {name: 'lightGreen-A400', code: '#76FF03', column: 13, row: 11},
        {name: 'lightGreen-A700', code: '#64DD17', column: 14, row: 11}
    ],
    [
        {name: 'lime-50', code: '#F9FBE7', column: 1, row: 12},
        {name: 'lime-100', code: '#F0F4C3', column: 2, row: 12},
        {name: 'lime-200', code: '#E6EE9C', column: 3, row: 12},
        {name: 'lime-300', code: '#DCE775', column: 4, row: 12},
        {name: 'lime-400', code: '#D4E157', column: 5, row: 12},
        {name: 'lime-500', code: '#CDDC39', column: 6, row: 12},
        {name: 'lime-600', code: '#C0CA33', column: 7, row: 12},
        {name: 'lime-700', code: '#AFB42B', column: 8, row: 12},
        {name: 'lime-800', code: '#9E9D24', column: 9, row: 12},
        {name: 'lime-900', code: '#827717', column: 10, row: 12},
        {name: 'lime-A100', code: '#F4FF81', column: 11, row: 12},
        {name: 'lime-A200', code: '#EEFF41', column: 12, row: 12},
        {name: 'lime-A400', code: '#C6FF00', column: 13, row: 12},
        {name: 'lime-A700', code: '#AEEA00', column: 14, row: 12}
    ],
    [
        {name: 'yellow-50', code: '#FFFDE7', column: 1, row: 13},
        {name: 'yellow-100', code: '#FFF9C4', column: 2, row: 13},
        {name: 'yellow-200', code: '#FFF59D', column: 3, row: 13},
        {name: 'yellow-300', code: '#FFF176', column: 4, row: 13},
        {name: 'yellow-400', code: '#FFEE58', column: 5, row: 13},
        {name: 'yellow-500', code: '#FFEB3B', column: 6, row: 13},
        {name: 'yellow-600', code: '#FDD835', column: 7, row: 13},
        {name: 'yellow-700', code: '#FBC02D', column: 8, row: 13},
        {name: 'yellow-800', code: '#F9A825', column: 9, row: 13},
        {name: 'yellow-900', code: '#F57F17', column: 10, row: 13},
        {name: 'yellow-A100', code: '#FFFF8D', column: 11, row: 13},
        {name: 'yellow-A200', code: '#FFFF00', column: 12, row: 13},
        {name: 'yellow-A400', code: '#FFEA00', column: 13, row: 13},
        {name: 'yellow-A700', code: '#FFD600', column: 14, row: 13}
    ],
    [
        {name: 'amber-50', code: '#FFF8E1', column: 1, row: 14},
        {name: 'amber-100', code: '#FFECB3', column: 2, row: 14},
        {name: 'amber-200', code: '#FFE082', column: 3, row: 14},
        {name: 'amber-300', code: '#FFD54F', column: 4, row: 14},
        {name: 'amber-400', code: '#FFCA28', column: 5, row: 14},
        {name: 'amber-500', code: '#FFC107', column: 6, row: 14},
        {name: 'amber-600', code: '#FFB300', column: 7, row: 14},
        {name: 'amber-700', code: '#FFA000', column: 8, row: 14},
        {name: 'amber-800', code: '#FF8F00', column: 9, row: 14},
        {name: 'amber-900', code: '#FF6F00', column: 10, row: 14},
        {name: 'amber-A100', code: '#FFE57F', column: 11, row: 14},
        {name: 'amber-A200', code: '#FFD740', column: 12, row: 14},
        {name: 'amber-A400', code: '#FFC400', column: 13, row: 14},
        {name: 'amber-A700', code: '#FFAB00', column: 14, row: 14}
    ],
    [
        {name: 'orange-50', code: '#FFF3E0', column: 1, row: 15},
        {name: 'orange-100', code: '#FFE0B2', column: 2, row: 15},
        {name: 'orange-200', code: '#FFCC80', column: 3, row: 15},
        {name: 'orange-300', code: '#FFB74D', column: 4, row: 15},
        {name: 'orange-400', code: '#FFA726', column: 5, row: 15},
        {name: 'orange-500', code: '#FF9800', column: 6, row: 15},
        {name: 'orange-600', code: '#FB8C00', column: 7, row: 15},
        {name: 'orange-700', code: '#F57C00', column: 8, row: 15},
        {name: 'orange-800', code: '#EF6C00', column: 9, row: 15},
        {name: 'orange-900', code: '#E65100', column: 10, row: 15},
        {name: 'orange-A100', code: '#FFD180', column: 11, row: 15},
        {name: 'orange-A200', code: '#FFAB40', column: 12, row: 15},
        {name: 'orange-A400', code: '#FF9100', column: 13, row: 15},
        {name: 'orange-A700', code: '#FF6D00', column: 14, row: 15}
    ],
    [
        {name: 'deepOrange-50', code: '#FBE9E7', column: 1, row: 16},
        {name: 'deepOrange-100', code: '#FFCCBC', column: 2, row: 16},
        {name: 'deepOrange-200', code: '#FFAB91', column: 3, row: 16},
        {name: 'deepOrange-300', code: '#FF8A65', column: 4, row: 16},
        {name: 'deepOrange-400', code: '#FF7043', column: 5, row: 16},
        {name: 'deepOrange-500', code: '#FF5722', column: 6, row: 16},
        {name: 'deepOrange-600', code: '#F4511E', column: 7, row: 16},
        {name: 'deepOrange-700', code: '#E64A19', column: 8, row: 16},
        {name: 'deepOrange-800', code: '#D84315', column: 9, row: 16},
        {name: 'deepOrange-900', code: '#BF360C', column: 10, row: 16},
        {name: 'deepOrange-A100', code: '#FF9E80', column: 11, row: 16},
        {name: 'deepOrange-A200', code: '#FF6E40', column: 12, row: 16},
        {name: 'deepOrange-A400', code: '#FF3D00', column: 13, row: 16},
        {name: 'deepOrange-A700', code: '#DD2C00', column: 14, row: 16}
    ],
    [
        {name: 'brown-50', code: '#EFEBE9', column: 1, row: 17},
        {name: 'brown-100', code: '#D7CCC8', column: 2, row: 17},
        {name: 'brown-200', code: '#BCAAA4', column: 3, row: 17},
        {name: 'brown-300', code: '#A1887F', column: 4, row: 17},
        {name: 'brown-400', code: '#8D6E63', column: 5, row: 17},
        {name: 'brown-500', code: '#795548', column: 6, row: 17},
        {name: 'brown-600', code: '#6D4C41', column: 7, row: 17},
        {name: 'brown-700', code: '#5D4037', column: 8, row: 17},
        {name: 'brown-800', code: '#4E342E', column: 9, row: 17},
        {name: 'brown-900', code: '#3E2723', column: 10, row: 17}
    ],
    [
        {name: 'grey-50', code: '#FAFAFA', column: 1, row: 18},
        {name: 'grey-100', code: '#F5F5F5', column: 2, row: 18},
        {name: 'grey-200', code: '#EEEEEE', column: 3, row: 18},
        {name: 'grey-300', code: '#E0E0E0', column: 4, row: 18},
        {name: 'grey-400', code: '#BDBDBD', column: 5, row: 18},
        {name: 'grey-500', code: '#9E9E9E', column: 6, row: 18},
        {name: 'grey-600', code: '#757575', column: 7, row: 18},
        {name: 'grey-700', code: '#616161', column: 8, row: 18},
        {name: 'grey-800', code: '#424242', column: 9, row: 18},
        {name: 'grey-900', code: '#212121', column: 10, row: 18}
    ],
    [
        {name: 'blueGrey-50', code: '#ECEFF1', column: 1, row: 19},
        {name: 'blueGrey-100', code: '#CFD8DC', column: 2, row: 19},
        {name: 'blueGrey-200', code: '#B0BEC5', column: 3, row: 19},
        {name: 'blueGrey-300', code: '#90A4AE', column: 4, row: 19},
        {name: 'blueGrey-400', code: '#78909C', column: 5, row: 19},
        {name: 'blueGrey-500', code: '#607D8B', column: 6, row: 19},
        {name: 'blueGrey-600', code: '#546E7A', column: 7, row: 19},
        {name: 'blueGrey-700', code: '#455A64', column: 8, row: 19},
        {name: 'blueGrey-800', code: '#37474F', column: 9, row: 19},
        {name: 'blueGrey-900', code: '#263238', column: 10, row: 19}
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
         * Add another row of white beads onto bottom of loom
         */
        $scope.addRow = function () {
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
         * Remove the last row of beads
         */
        $scope.removeRow = function () {
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
                            '<button style="background-color: ' + row[j].color +'"></button>' +
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