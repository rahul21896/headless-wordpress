import React from 'react';
import rdTheme from "./rdTheme";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";


export default {
  name: "rd-theme",
  roots: {
    rdTheme: rdTheme
  },
  state: {
    rdTheme: {
      menu:[],
      site_name:'RD Theme',
      isLoading:true,
      site_options: [],
      homepage:'/home-page/',
      isMenuOpen:false
    }
  },
  actions: {
    rdTheme: {
      setLoading: ({state,status}) => {
          state.rdTheme.isLoading = status;
      }
    }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};
