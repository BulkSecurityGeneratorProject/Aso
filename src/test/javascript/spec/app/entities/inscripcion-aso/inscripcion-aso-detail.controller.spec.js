'use strict';

describe('Controller Tests', function() {

    describe('InscripcionAso Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockInscripcionAso, MockAsociacion, MockUser;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockInscripcionAso = jasmine.createSpy('MockInscripcionAso');
            MockAsociacion = jasmine.createSpy('MockAsociacion');
            MockUser = jasmine.createSpy('MockUser');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'InscripcionAso': MockInscripcionAso,
                'Asociacion': MockAsociacion,
                'User': MockUser
            };
            createController = function() {
                $injector.get('$controller')("InscripcionAsoDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'asoApp:inscripcionAsoUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
