angular.module('blogger', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
   //  $scope.test = 'Hello world!';
	  $scope.contents = [
      {title:'Content 1', content:'s'},
      {title:'Content 2', content:'s'},
      {title:'Content 3', content:'s'},
    ];
    $scope.create = function(data){
      return $http.post('/content', data).success(function(data){
        // console.log("Blame thing: ", data);
        $scope.contents.push(data);
      });
    };
	$scope.addContent = function(){
    console.log("Add content");
	  $scope.create({title:$scope.formTitle,content:$scope.formContent, picture:$scope.formImage});
    $scope.formContent='';
    $scope.formTitle='';
    $scope.formPicture='';
  };

  // $scope.getAll = function(){
  //   return $http.get('/comments').success(function(data){
  //     angular.copy(data, $scope.comments);
  //   });
  // };
  // $scope.getAll();

  }
]);
