module.exports = function (grunt) {  
    // Project configuration.  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),  
        cssmin: { 
        	dist: {
		        src: ['app/styles/main.css'],
		        dest: 'app/styles/styles.min.css'
		      }  
        },  
        uglify: {
        	options: {
			    mangle: false
			  },
	        	dist: {
			        src: ['app/scripts/app.js'],
			        dest: 'app/scripts/app.min.js'
				} 
        },
        jshint: {
        	files: ['app/scripts/app.js']
        },
        sass: {
		    dist: {
				src: ['app/styles/main.scss'],
				dest: 'app/styles/main.css'
			} 
		},
	    watch: {
	    	css: {
	    		files: ['<%= cssmin.dist.src %>'],
			    tasks: ['cssmin']	
	    	},
	    	js: {
	    		files: ['<%= uglify.dist.src %>'],
			    tasks: ['uglify']	
	    	},
	    	jshint: {
	    		files: ['<%= jshint.files %>'],
      			tasks: ['jshint']
	    	},
	    	sass: {
	    		files: ['<%= sass.dist.src %>'],
      			tasks: ['sass']
	    	}
	    }  
    });  
    // Default task. 
	grunt.loadNpmTasks('grunt-contrib-cssmin'); 
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-jshint'); 
	grunt.loadNpmTasks('grunt-contrib-sass'); 
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', 
		['watch']); 
};