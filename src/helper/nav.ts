
export default {
    items: [
      {
        name: 'Dashboard',
        url: '/home',
        icon:'icon-speedometer',
        badge: {
          variant: 'info'
        },
      },
      {
        title: true,
        name: 'Welcome',
        wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
        name: 'Profile',
        url: '/profile',
        icon: 'icon-user',
      },
      {
        name: 'Request', // for employee only
        url: '/emp/request',
        icon: 'icon-cursor',
      },
      {
        name: 'Create User', // for dba only
        url: '/admin/create',
        icon: 'icon-people',
      },
      {
        name: 'Flagged', // for auditor only
        url: '/auditor/flagged',
        icon: 'icon-flag'
      },
      {
        name: 'Settings',
        url: '/settings',
        icon: 'icon-settings'
      },
      {
        name: 'Logout',
        url: '/login',
        icon: 'icon-logout'
      }
    ],
  };
  
