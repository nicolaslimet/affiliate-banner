# Affiliate Banner
A Gutenberg block that displays a welcome banner with the affiliate name if the site is visited via an affiliate link.
The link should contain the affilate username: https://my-site.com/?affiliate=username
If the username belongs to an admin or super admin, the banner will not display.

## Usage
Requires at least: 5.8.0, tested up to: 6.4.3
The blocks source code & package.json are included here, but not the node modules.

### 1- Use as is
Download the plugin, install in your WP site.
You can delete the blocks-src directory & package.json file.

### 2- Tweak it
You need to have node.js installed in your machine.
Don't forget to add "define('SCRIPT_DEBUG', true);" to your wp-config.php file to get detailed React error/warning messages in the console.

Node.js version used: 20.10.0
Source directory: blocks-src/.
Output directory: assets/js/.
:eyeglasses: package.json:

```
"scripts": {
		"start": "wp-scripts start --webpack-src-dir=blocks-src --output-path=assets/js",
		"build": "wp-scripts build --webpack-src-dir=blocks-src --output-path=assets/js"
	},
```

If you change those paths, remember to edit the register_block_type() function accordingly in the main plugin file.

For more customizations, linting, or to run tests, see the <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/">WP scripts Docs</a>

To install the node modules, open your terminal and:

```
cd <path-to plugin-directory>
npm install
```

The 'npm start' command will bundle your code changes on each save.

Once done, type 'npm run build' for the production build.

:trumpet: I make custom plugins for WordPress sites. You can contact me at <a href="mailto:nicolaslimet@gmail.com">nicolaslimet@gmail.com</a>
