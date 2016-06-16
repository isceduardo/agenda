var app = angular.module('app',[]);
app.controller('AlumnosController', function($scope){
       $scope.alumnos = [
           {"nombre":"Eduardo", "telefono":"9611340853", "curso":"noveno"},
           {"nombre":"Nayeli", "telefono":"9611240874", "curso":"Graduada"},
           {"nombre":"Jenrry", "telefono":"9611340864", "curso":"noveno"}
       ];
        $scope.Save=function()
        {
            $scope.alumnos.push({
                nombre:$scope.nuevoAlumno.nombre,
                telefono:$scope.nuevoAlumno.telefono, 
                curso:$scope.nuevoAlumno.curso
            });
        }
});
