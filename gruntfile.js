module.exports = function(grunt){

    grunt.initConfig({
        //specify task
        uglify:{ // used to minimize js files
            target :{
                files : {
                    //"dest/js/main.min.js" : ["src/js/input1.js", "src/js/input2.js"]
                    "dest/js/main.min.js" : ["src/js/*.js"]
                }
            }
        }
    });

    //Load libraries
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //setting up the tasks
    grunt.registerTask('default', ['uglify']);
}