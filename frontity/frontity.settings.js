const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "RD Blog Theme",
      "description": "React Frontity Theme"
    }
  },
  "packages": [
    {
      "name": "rd-theme",
      "state": {
        "theme": {
           "pageSettings":{
             "pageTitle": "Rd Theme"
           }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost/headless-wordpress/wordpress/",
          "homepage":"/home-page/",
          "postsPage":"/sample-page/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
