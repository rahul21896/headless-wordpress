import React from 'react';
import rdTheme from "./rdTheme";


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
      homepage:'/home-page/'
    }
  },
  actions: {
    rdTheme: {
      setLoading: ({state,status}) => {
          state.rdTheme.isLoading = status;
      }
    }
  }
};
