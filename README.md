# Headless Wordpress
-------------------------------
##### How To set up Wordpress:
```
- Clone Repository in xampp/wamp/www folder using below command : 
    git clone https://github.com/rahul21896/headless-wordpress.git
- Open any browser and hit your folder path
    http://localhost/headless-wordpress/wordpress
- Wordpress Setup will start
``` 

##### Plugins:
```
- Advanced Custom Fields ( For Custom Field Use )
- Custom Post Type UI ( For Custom Post Type / Taxonomies )
- Frontity Embedded Mode ( For Embed the React Site on Wordpress )
- WP REST API Controller ( For Controlling ResetApis )
- ACF To Reset API ( Converting Acf fields to ret api )
```

##### How to Set up frontity project
```
- Open Terminal go to root of cloned repository
- cd frontity
- npm install
- npx frontity dev  
```

##### How to set up new frontity project 
```
- mkdir "Project Name"
- cd "Project Name"
- npx frontity create --use-cwd
- npx frontity dev 
```

##### Create Custom Theme From Scratch

- Go To Root Folder of frontity project ``cd frontity``
- Create new theme / package using the command: ``npx frontity create-package "Theme Name"``
- Package created under **frontity / packages / rd-theme**
- Package includes following files : 
    ```
    - package.json
    - src/index.js : entry file of the frontity project
    ```
- Change Theme Name into your setting file : frontity.settings.json
    ```
    {
          "name": "rd-theme",
    }
    ```
- 
