/**
 * Created by jonah on 2016-12-06.
 */
var loom = [];
/**
 * TEMPORARY
 * @todo replace with backend data
 */
var swatches = [
    [
        {name: 'red-50', code: '#FFEBEE'},
        {name: 'red-100', code: '#FFCDD2'},
        {name: 'red-200', code: '#EF9A9A'},
        {name: 'red-300', code: '#E57373'},
        {name: 'red-400', code: '#EF5350'},
        {name: 'red-500', code: '#F44336'},
        {name: 'red-600', code: '#E53935'},
        {name: 'red-700', code: '#D32F2F'},
        {name: 'red-800', code: '#C62828'},
        {name: 'red-900', code: '#B71C1C'},
        {name: 'red-A100', code: '#FF8A80'},
        {name: 'red-A200', code: '#FF5252'},
        {name: 'red-A400', code: '#FF1744'},
        {name: 'red-A700', code: '#D50000'}
    ],
    [
        {name: 'pink-50', code: '#FCE4EC'},
        {name: 'pink-100', code: '#F8BBD0'},
        {name: 'pink-200', code: '#F48FB1'},
        {name: 'pink-300', code: '#F06292'},
        {name: 'pink-400', code: '#EC407A'},
        {name: 'pink-500', code: '#E91E63'},
        {name: 'pink-600', code: '#D81B60'},
        {name: 'pink-700', code: '#C2185B'},
        {name: 'pink-800', code: '#AD1457'},
        {name: 'pink-900', code: '#880E4F'},
        {name: 'pink-A100', code: '#FF80AB'},
        {name: 'pink-A200', code: '#FF4081'},
        {name: 'pink-A400', code: '#F50057'},
        {name: 'pink-A700', code: '#C51162'}
    ],
    [
        {name: 'purple-50', code: '#F3E5F5'},
        {name: 'purple-100', code: '#E1BEE7'},
        {name: 'purple-200', code: '#CE93D8'},
        {name: 'purple-300', code: '#BA68C8'},
        {name: 'purple-400', code: '#AB47BC'},
        {name: 'purple-500', code: '#9C27B0'},
        {name: 'purple-600', code: '#8E24AA'},
        {name: 'purple-700', code: '#7B1FA2'},
        {name: 'purple-800', code: '#6A1B9A'},
        {name: 'purple-900', code: '#4A148C'},
        {name: 'purple-A100', code: '#EA80FC'},
        {name: 'purple-A200', code: '#E040FB'},
        {name: 'purple-A400', code: '#D500F9'},
        {name: 'purple-A700', code: '#AA00FF'}
    ],
    [
        {name: 'deepPurple-50', code: '#EDE7F6'},
        {name: 'deepPurple-100', code: '#D1C4E9'},
        {name: 'deepPurple-200', code: '#B39DDB'},
        {name: 'deepPurple-300', code: '#9575CD'},
        {name: 'deepPurple-400', code: '#7E57C2'},
        {name: 'deepPurple-500', code: '#673AB7'},
        {name: 'deepPurple-600', code: '#5E35B1'},
        {name: 'deepPurple-700', code: '#512DA8'},
        {name: 'deepPurple-800', code: '#4527A0'},
        {name: 'deepPurple-900', code: '#311B92'},
        {name: 'deepPurple-A100', code: '#B388FF'},
        {name: 'deepPurple-A200', code: '#7C4DFF'},
        {name: 'deepPurple-A400', code: '#651FFF'},
        {name: 'deepPurple-A700', code: '#6200EA'}
    ],
    [
        {name: 'indigo-50', code: '#E8EAF6'},
        {name: 'indigo-100', code: '#C5CAE9'},
        {name: 'indigo-200', code: '#9FA8DA'},
        {name: 'indigo-300', code: '#7986CB'},
        {name: 'indigo-400', code: '#5C6BC0'},
        {name: 'indigo-500', code: '#3F51B5'},
        {name: 'indigo-600', code: '#3949AB'},
        {name: 'indigo-700', code: '#303F9F'},
        {name: 'indigo-800', code: '#283593'},
        {name: 'indigo-900', code: '#1A237E'},
        {name: 'indigo-A100', code: '#8C9EFF'},
        {name: 'indigo-A200', code: '#536DFE'},
        {name: 'indigo-A400', code: '#3D5AFE'},
        {name: 'indigo-A700', code: '#304FFE'}
    ],
    [
        {name: 'blue-50', code: '#E3F2FD'},
        {name: 'blue-100', code: '#BBDEFB'},
        {name: 'blue-200', code: '#90CAF9'},
        {name: 'blue-300', code: '#64B5F6'},
        {name: 'blue-400', code: '#42A5F5'},
        {name: 'blue-500', code: '#2196F3'},
        {name: 'blue-600', code: '#1E88E5'},
        {name: 'blue-700', code: '#1976D2'},
        {name: 'blue-800', code: '#1565C0'},
        {name: 'blue-900', code: '#0D47A1'},
        {name: 'blue-A100', code: '#82B1FF'},
        {name: 'blue-A200', code: '#448AFF'},
        {name: 'blue-A400', code: '#2979FF'},
        {name: 'blue-A700', code: '#2962FF'}
    ],
    [
        {name: 'lightBlue-50', code: '#E1F5FE'},
        {name: 'lightBlue-100', code: '#B3E5FC'},
        {name: 'lightBlue-200', code: '#81D4FA'},
        {name: 'lightBlue-300', code: '#4FC3F7'},
        {name: 'lightBlue-400', code: '#29B6F6'},
        {name: 'lightBlue-500', code: '#03A9F4'},
        {name: 'lightBlue-600', code: '#039BE5'},
        {name: 'lightBlue-700', code: '#0288D1'},
        {name: 'lightBlue-800', code: '#0277BD'},
        {name: 'lightBlue-900', code: '#01579B'},
        {name: 'lightBlue-A100', code: '#80D8FF'},
        {name: 'lightBlue-A200', code: '#40C4FF'},
        {name: 'lightBlue-A400', code: '#00B0FF'},
        {name: 'lightBlue-A700', code: '#0091EA'}
    ],
    [
        {name: 'cyan-50', code: '#E0F7FA'},
        {name: 'cyan-100', code: '#B2EBF2'},
        {name: 'cyan-200', code: '#80DEEA'},
        {name: 'cyan-300', code: '#4DD0E1'},
        {name: 'cyan-400', code: '#26C6DA'},
        {name: 'cyan-500', code: '#00BCD4'},
        {name: 'cyan-600', code: '#00ACC1'},
        {name: 'cyan-700', code: '#0097A7'},
        {name: 'cyan-800', code: '#00838F'},
        {name: 'cyan-900', code: '#006064'},
        {name: 'cyan-A100', code: '#84FFFF'},
        {name: 'cyan-A200', code: '#18FFFF'},
        {name: 'cyan-A400', code: '#00E5FF'},
        {name: 'cyan-A700', code: '#00B8D4'}
    ],
    [
        {name: 'teal-50', code: '#E0F2F1'},
        {name: 'teal-100', code: '#B2DFDB'},
        {name: 'teal-200', code: '#80CBC4'},
        {name: 'teal-300', code: '#4DB6AC'},
        {name: 'teal-400', code: '#26A69A'},
        {name: 'teal-500', code: '#009688'},
        {name: 'teal-600', code: '#00897B'},
        {name: 'teal-700', code: '#00796B'},
        {name: 'teal-800', code: '#00695C'},
        {name: 'teal-900', code: '#004D40'},
        {name: 'teal-A100', code: '#A7FFEB'},
        {name: 'teal-A200', code: '#64FFDA'},
        {name: 'teal-A400', code: '#1DE9B6'},
        {name: 'teal-A700', code: '#00BFA5'}
    ],
    [
        {name: 'green-50', code: '#E8F5E9'},
        {name: 'green-100', code: '#C8E6C9'},
        {name: 'green-200', code: '#A5D6A7'},
        {name: 'green-300', code: '#81C784'},
        {name: 'green-400', code: '#66BB6A'},
        {name: 'green-500', code: '#4CAF50'},
        {name: 'green-600', code: '#43A047'},
        {name: 'green-700', code: '#388E3C'},
        {name: 'green-800', code: '#2E7D32'},
        {name: 'green-900', code: '#1B5E20'},
        {name: 'green-A100', code: '#B9F6CA'},
        {name: 'green-A200', code: '#69F0AE'},
        {name: 'green-A400', code: '#00E676'},
        {name: 'green-A700', code: '#00C853'}
    ],
    [
        {name: 'lightGreen-50', code: '#F1F8E9'},
        {name: 'lightGreen-100', code: '#DCEDC8'},
        {name: 'lightGreen-200', code: '#C5E1A5'},
        {name: 'lightGreen-300', code: '#AED581'},
        {name: 'lightGreen-400', code: '#9CCC65'},
        {name: 'lightGreen-500', code: '#8BC34A'},
        {name: 'lightGreen-600', code: '#7CB342'},
        {name: 'lightGreen-700', code: '#689F38'},
        {name: 'lightGreen-800', code: '#558B2F'},
        {name: 'lightGreen-900', code: '#33691E'},
        {name: 'lightGreen-A100', code: '#CCFF90'},
        {name: 'lightGreen-A200', code: '#B2FF59'},
        {name: 'lightGreen-A400', code: '#76FF03'},
        {name: 'lightGreen-A700', code: '#64DD17'}
    ],
    [
        {name: 'lime-50', code: '#F9FBE7'},
        {name: 'lime-100', code: '#F0F4C3'},
        {name: 'lime-200', code: '#E6EE9C'},
        {name: 'lime-300', code: '#DCE775'},
        {name: 'lime-400', code: '#D4E157'},
        {name: 'lime-500', code: '#CDDC39'},
        {name: 'lime-600', code: '#C0CA33'},
        {name: 'lime-700', code: '#AFB42B'},
        {name: 'lime-800', code: '#9E9D24'},
        {name: 'lime-900', code: '#827717'},
        {name: 'lime-A100', code: '#F4FF81'},
        {name: 'lime-A200', code: '#EEFF41'},
        {name: 'lime-A400', code: '#C6FF00'},
        {name: 'lime-A700', code: '#AEEA00'}
    ],
    [
        {name: 'yellow-50', code: '#FFFDE7'},
        {name: 'yellow-100', code: '#FFF9C4'},
        {name: 'yellow-200', code: '#FFF59D'},
        {name: 'yellow-300', code: '#FFF176'},
        {name: 'yellow-400', code: '#FFEE58'},
        {name: 'yellow-500', code: '#FFEB3B'},
        {name: 'yellow-600', code: '#FDD835'},
        {name: 'yellow-700', code: '#FBC02D'},
        {name: 'yellow-800', code: '#F9A825'},
        {name: 'yellow-900', code: '#F57F17'},
        {name: 'yellow-A100', code: '#FFFF8D'},
        {name: 'yellow-A200', code: '#FFFF00'},
        {name: 'yellow-A400', code: '#FFEA00'},
        {name: 'yellow-A700', code: '#FFD600'}
    ],
    [
        {name: 'amber-50', code: '#FFF8E1'},
        {name: 'amber-100', code: '#FFECB3'},
        {name: 'amber-200', code: '#FFE082'},
        {name: 'amber-300', code: '#FFD54F'},
        {name: 'amber-400', code: '#FFCA28'},
        {name: 'amber-500', code: '#FFC107'},
        {name: 'amber-600', code: '#FFB300'},
        {name: 'amber-700', code: '#FFA000'},
        {name: 'amber-800', code: '#FF8F00'},
        {name: 'amber-900', code: '#FF6F00'},
        {name: 'amber-A100', code: '#FFE57F'},
        {name: 'amber-A200', code: '#FFD740'},
        {name: 'amber-A400', code: '#FFC400'},
        {name: 'amber-A700', code: '#FFAB00'}
    ],
    [
        {name: 'orange-50', code: '#FFF3E0'},
        {name: 'orange-100', code: '#FFE0B2'},
        {name: 'orange-200', code: '#FFCC80'},
        {name: 'orange-300', code: '#FFB74D'},
        {name: 'orange-400', code: '#FFA726'},
        {name: 'orange-500', code: '#FF9800'},
        {name: 'orange-600', code: '#FB8C00'},
        {name: 'orange-700', code: '#F57C00'},
        {name: 'orange-800', code: '#EF6C00'},
        {name: 'orange-900', code: '#E65100'},
        {name: 'orange-A100', code: '#FFD180'},
        {name: 'orange-A200', code: '#FFAB40'},
        {name: 'orange-A400', code: '#FF9100'},
        {name: 'orange-A700', code: '#FF6D00'}
    ],
    [
        {name: 'deepOrange-50', code: '#FBE9E7'},
        {name: 'deepOrange-100', code: '#FFCCBC'},
        {name: 'deepOrange-200', code: '#FFAB91'},
        {name: 'deepOrange-300', code: '#FF8A65'},
        {name: 'deepOrange-400', code: '#FF7043'},
        {name: 'deepOrange-500', code: '#FF5722'},
        {name: 'deepOrange-600', code: '#F4511E'},
        {name: 'deepOrange-700', code: '#E64A19'},
        {name: 'deepOrange-800', code: '#D84315'},
        {name: 'deepOrange-900', code: '#BF360C'},
        {name: 'deepOrange-A100', code: '#FF9E80'},
        {name: 'deepOrange-A200', code: '#FF6E40'},
        {name: 'deepOrange-A400', code: '#FF3D00'},
        {name: 'deepOrange-A700', code: '#DD2C00'}
    ],
    [
        {name: 'brown-50', code: '#EFEBE9'},
        {name: 'brown-100', code: '#D7CCC8'},
        {name: 'brown-200', code: '#BCAAA4'},
        {name: 'brown-300', code: '#A1887F'},
        {name: 'brown-400', code: '#8D6E63'},
        {name: 'brown-500', code: '#795548'},
        {name: 'brown-600', code: '#6D4C41'},
        {name: 'brown-700', code: '#5D4037'},
        {name: 'brown-800', code: '#4E342E'},
        {name: 'brown-900', code: '#3E2723'}
    ],
    [
        {name: 'grey-50', code: '#FAFAFA'},
        {name: 'grey-100', code: '#F5F5F5'},
        {name: 'grey-200', code: '#EEEEEE'},
        {name: 'grey-300', code: '#E0E0E0'},
        {name: 'grey-400', code: '#BDBDBD'},
        {name: 'grey-500', code: '#9E9E9E'},
        {name: 'grey-600', code: '#757575'},
        {name: 'grey-700', code: '#616161'},
        {name: 'grey-800', code: '#424242'},
        {name: 'grey-900', code: '#212121'}
    ],
    [
        {name: 'blueGrey-50', code: '#ECEFF1'},
        {name: 'blueGrey-100', code: '#CFD8DC'},
        {name: 'blueGrey-200', code: '#B0BEC5'},
        {name: 'blueGrey-300', code: '#90A4AE'},
        {name: 'blueGrey-400', code: '#78909C'},
        {name: 'blueGrey-500', code: '#607D8B'},
        {name: 'blueGrey-600', code: '#546E7A'},
        {name: 'blueGrey-700', code: '#455A64'},
        {name: 'blueGrey-800', code: '#37474F'},
        {name: 'blueGrey-900', code: '#263238'}
    ],
    [
        {name: 'white', code: '#FFFFFF'},
        {name: 'black', code: '#000000'},
        {name: 'custom1', code: '#80260C'},
        {name: 'custom2', code: '#5c0b03'},
        {name: 'custom3', code: '#011182'},
        {name: 'custom4', code: '#010947'}
    ]
];
(function () {
    'use strict';

    angular.module('BeadingApp', [])
    .controller('BeadingController', BeadingController);

    BeadingController.$inject = ['$scope'];
    function BeadingController($scope) {
        $scope.rowLength = 30;
        $scope.numBeadRows = 50;
        $scope.loom = loom;
        $scope.swatches = swatches;
        $scope.selectedColor = "#FFF";
        
        for (var i = 0; i < $scope.numBeadRows; i++) {
            var row = [];
            for (var j = 0; j < $scope.rowLength; j++) {
                row.push({row: j, rowIndex: i, color: $scope.selectedColor});
            }
            $scope.loom.push(row);
        } // end outer for loop

        $scope.setBeadColor = function (bead) {
            if (bead.color == $scope.selectedColor) {
                bead.color = '#FFF';
            } else {
                bead.color = $scope.selectedColor;
            }
        }; //changeColor

        $scope.setColor = function (color) {
            $scope.selectedColor = color.code;
        };

        /*
         * Add another row of white beads onto bottom of loom
         */
        $scope.addRow = function () {
            var newRow = [];
            for (var i = 0; i < $scope.rowLength; i++) {
                newRow.push({row: $scope.numBeadRows, rowIndex: i, color: '#FFF'});
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
                    row.push({row: i, rowIndex: $scope.rowLength + 1, color: '#FFF'});
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
                console.log(row);
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
