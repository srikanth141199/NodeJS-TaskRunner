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
        },

        //task to minify css
        
        cssmin : {
            target:{
                files:[
                    {
                        expand:true,
                        cwd:"src/css",//current working directory
                        src:["*.css", "!*.min.css"],
                        dest:"dest/css",
                        ext:".min.css"
                    }
                ]
            }
        }
    });

    //Load libraries
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //setting up the tasks
    grunt.registerTask('default', ['uglify', 'cssmin']);
}