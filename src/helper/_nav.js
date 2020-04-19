
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
      icon: 'icon-star',
    },
    {
      name: 'Employee',// for employee only
      url: '/employee',
      icon: 'icon-people',
      children: [
        { 
          name: 'View Expenses',
          url: '/emp/view',
          icon: 'icon-credit-card'
        },
        {
          name: 'Create Request', 
          url: '/emp/request',
          icon: 'icon-cursor',
        }
      ],
    },
    {
      name: 'Manager',// for employee only
      url: '/manager',
      icon: 'icon-user-follow',
      children: [
        {
          name: 'Employee Requests',
          url: '/man/request',
          icon: 'icon-cursor'
        },
        {
          name: 'Employee Expenses', 
          url: '/man/expense',
          icon: 'icon-credit-card',
        }
      ],
    },
    {
      name: 'Auditor',// for employee only
      url: '/auditor',
      icon: 'icon-user-female',
      children: [
        {
          name: 'Flagged',
          url: '/auditor/flagged',
          icon: 'icon-flag'
        }
      ],
    },
    {
      name: 'Admin',// for employee only
      url: '/admin',
      icon: 'icon-user-following',
      children: [
        {
          name: 'Ongoing Requests',
          url: '/admin/ongoing',
          icon: 'icon-arrow-right-circle'
        },
        {
          name: 'Create User', // for dba only
          url: '/admin/create',
          icon: 'icon-people',
        },
      ],
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

