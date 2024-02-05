# Affiliate Banner
A Gutenberg block that displays a welcome banner with the affiliate name if the site is visited via an affiliate link.<br>
The link should contain the affilate username: https://my-site.com/?affiliate=username<br>
If the username belongs to an admin or super admin, the banner will not display.<br><br>
![affiliate-banner-setup](https://github.com/nicolaslimet/affiliate-banner/assets/77786638/5acc2009-e0bb-4d7f-b83b-8b50c8b708c3)![affiliate-banner-block-editor](https://github.com/nicolaslimet/affiliate-banner/assets/77786638/183557d5-4bed-43ca-816f-aab92b0e8e7a)





## Usage
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="15" height="15" viewBox="0 0 3.969 3.969"><path d="M96.686 142.018c0 .676.39 1.258.961 1.532l-.814-2.225a1.685 1.685 0 0 0-.15.693zm2.851-.086a.896.896 0 0 0-.14-.47c-.086-.14-.167-.259-.167-.399 0-.156.119-.302.286-.302a.25.25 0 0 1 .025 0 1.705 1.705 0 0 0-2.575.323c.04 0 .08 0 .112.002.178 0 .453-.022.453-.022.092-.005.106.13.013.143 0 0-.092.01-.195.016l.62 1.844.372-1.117-.265-.727c-.092-.005-.178-.016-.178-.016-.092-.005-.081-.146.01-.14 0 0 .28.018.447.021.178 0 .454-.021.454-.021.091-.005.105.13.012.14 0 0-.092.01-.195.016l.615 1.83.17-.567c.07-.24.125-.407.125-.555zm-1.119.235-.51 1.484a1.699 1.699 0 0 0 1.049-.028.161.161 0 0 1-.013-.024zm1.464-.968c.007.056.012.112.012.175 0 .173-.032.367-.129.61l-.52 1.503c.506-.295.846-.843.846-1.471a1.72 1.72 0 0 0-.208-.815zm-1.494-1.166c-1.094 0-1.984.89-1.984 1.985a1.99 1.99 0 0 0 1.984 1.984c1.092 0 1.985-.89 1.985-1.984a1.99 1.99 0 0 0-1.985-1.985zm0 3.878a1.896 1.896 0 0 1-1.893-1.893c0-1.042.852-1.892 1.893-1.892 1.042 0 1.894.85 1.892 1.894a1.896 1.896 0 0 1-1.892 1.891z" style="fill:#0073aa;stroke-width:.0620116" transform="translate(-96.404 -140.033)"/></svg>![wp](https://github.com/nicolaslimet/affiliate-banner/assets/77786638/a4ba05b9-11f5-4815-8d4b-f4f8d7c78815)
   **Requires at least:** 5.8.0, tested up to: 6.4.3<br>
The blocks source code & package.json are included here, but not the node modules.

### 1- Use as is
Download the plugin, install in your WP site.<br>
You can delete the blocks-src directory & package.json file.

### 2- Tweak it
You need to have node.js installed in your machine.<br>
Don't forget to add "define('SCRIPT_DEBUG', true);" to your wp-config.php file to get detailed React error/warning messages in the console.

**Node.js version**: 20.10.0<br>
**Source directory:** blocks-src/.<br>
**Output directory:** assets/js/.<br>
:eyeglasses: package.json:

```
"scripts": {
		"start": "wp-scripts start --webpack-src-dir=blocks-src --output-path=assets/js",
		"build": "wp-scripts build --webpack-src-dir=blocks-src --output-path=assets/js"
	},
```

If you change those paths, remember to **edit the register_block_type() function** accordingly in the main plugin file.

For more customizations, linting, or to run tests, see the <a href="https://developer.wordpress.org/block-editor/getting-started/devenv/get-started-with-wp-scripts/">WP scripts Docs</a>

To install the node modules, open your terminal and:

```
cd <path-to plugin-directory>
npm install
```

The 'npm start' command will bundle your code changes on each save.

Once done, type 'npm run build' for the production build.

:trumpet: I make custom plugins for WordPress sites. You can contact me at <a href="mailto:nicolaslimet@gmail.com">nicolaslimet@gmail.com</a>
