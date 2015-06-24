ngSoundManager.directive('soundManager', ['$filter', 'angularPlayer',
    function($filter, angularPlayer) {
        return {
            restrict: "E",
            link: function(scope, element, attrs) {
                //init and load sound manager 2
                angularPlayer.init();
                scope.$on('track:progress', function(event, data) {
                        scope.progress = data;
                });
                scope.$on('track:id', function(event, data) {
                        scope.currentPlaying = angularPlayer.currentTrackData();
                });
                scope.$on('currentTrack:position', function(event, data) {
                        scope.currentPostion = $filter('humanTime')(data);
                });
                scope.$on('currentTrack:duration', function(event, data) {
                        scope.currentDuration = $filter('humanTime')(data);
                });
                scope.isPlaying = false;
                scope.$on('music:isPlaying', function(event, data) {
                        scope.isPlaying = data;
                });
                scope.playlist = angularPlayer.getPlaylist(); //on load
                scope.$on('player:playlist', function(event, data) {
                        scope.playlist = data;
                });
            }
        };
    }
]);
