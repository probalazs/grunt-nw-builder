# grunt-nw-builder

> Let's you build your [NW.js](https://github.com/nwjs/nw.js) apps for osx, win, and linux with grunt. It will download the prebuilt binaries for a specify version, unpacks it, creates a release folder, create the app.nw file for a specified directory and copys the app.nw file where it belongs.

*Issues with the output should be reported on the nw-builder [issue tracker](https://github.com/probalazs/nw-builder/issues).*

## Getting Started
This plugin requires [Grunt](http://gruntjs.com/) `~0.4.1` and [nw-builder](https://github.com/nwjs/nw-builder) `^2.0.0`

Install command:

```shell
npm install grunt-nw-builder --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nw-builder');
```

## The "nwjs" task


### Usage Example

```js
grunt.initConfig({
 	nwjs: {
        options: {
            window: {
                frame: true,
                toolbar: true
            },
            zip: false,
            platforms: ['win', 'linux', 'osx'],
            version: '0.12.3',
            buildDir : 'build-destination-folder-path/',
            files: ['app-source-folder-path/**/*']
        },
        linux64: {
            options: {
				platforms: ['linux64']
			}
    	}
	}
})
```


### Options

Exactly the same as [nw-builder](https://github.com/mllrsohn/nw-builder). You have the advantage to configure the files via Grunt.