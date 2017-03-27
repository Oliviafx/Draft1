var scotchSearch = angular.module('scotchSearch', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/api/search')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the form, send the text to the node API
    $scope.createSearch = function() {
        $http.post('/api/search', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.search = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
