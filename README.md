# grunt-nw-builder

Grunt wrapper for [dummy-nw-builder](https://github.com/probalazs/dummy-nw-builder).

## Example

```
grunt.initConfig({
 	nwjs: {
	    options: {
		    version: 'v0.16.1',
		    type: 'normal',
		    sourceFolder: '/app/source',
		    buildFolder: '/app/build',
		    tmpFolder: '/app/cache'
        },
        win64: {
            options: {
				architecture: 'x64',
			    platform: 'win'
			}
    	}
	}
})
```