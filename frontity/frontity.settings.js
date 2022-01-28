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
          isMenuOpen:true
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost/headless-wordpress/wordpress/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
