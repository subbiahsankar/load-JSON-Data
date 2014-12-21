angular.module('directory',[])
.controller('application',['$scope','$http', function($scope,$http){
	$http.get("SampleData.json")
    .success(function(response) {$scope.datas = response;});
    $scope.addData = function(){
    	$scope.datas.push({"Name": $scope.Name,"Age" :$scope.Age});
    };
}])