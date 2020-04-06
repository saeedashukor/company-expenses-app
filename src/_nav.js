export default {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
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
        name: 'Account',
        url: '/user/account',
        icon: 'icon-user',
      },
      {
        name: 'Notification',
        url: '/notifcations',
        icon: 'icon-bell'
      },
      {
        name: 'Request',
        url: '/',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Create request (e)',
            url: '/emp/create-request',
            icon: 'icon-doc',
          },
          {
              name: 'View requests (e)',
              url: '/emp/request-view',
              icon: 'icon-people',
          },
          {
            name: 'View employee requests (m)',
            url: '/manager/request-view',
            icon: 'icon-docs'
          }
        ],
      },
      {
        name: 'Settings',
        url: 'user/settings',
        icon: 'icon-settings'
      },
      {
        name: 'Logout',
        url: '/login',
        icon: 'icon-logout'
      }
    ],
  };
  
