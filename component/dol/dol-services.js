angular.module('exam').factory('dolService', ['$http','$q',function($http, $q){

	return {

		getData : function(url){

			var deferred = $q.defer()

			$http.get(url).success(function(result){
				deferred.resolve(result)
			})

			return deferred.promise
		}

	}

}])