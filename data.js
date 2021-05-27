import React from 'react';
import Inbox from './images/Inbox.svg';
import Trash from './images/Trash.svg';
import Outbox from './images/Outbox.svg';
import Spam from './images/Spam.svg';
import Forums from './images/Forums.svg';
import Updates from './images/Updates.svg';
import Promos from './images/Promos.svg';
import Purchases from './images/Purchases.svg';


const menu_data = {
    id_position: ['inbox', 'outbox','trash', 'spam','forums', 'updates','promos', 'purchases'],
    inbox: {
      id: 'inbox_',
      title: 'Inbox',
      icon: (props) =><Inbox {...props}/>,
      inbox_content: {
        id_position: ['lorem','new_link','home'],
        home: {
          id: 'home_page_',
          title: 'Home Page',
          link: 'home'
        },
        lorem: {
          id: 'lorem_ipsum_',
          title: 'Lorem ipsum',
          link: 'lorem'
        },
        new_link: {
          id: 'new_link_',
          title: 'New Link',
          link: 'new_link'
        }
      }
    },
      outbox: {
        id: 'outbox_',
        title: 'Outbox',
        icon: (props) =><Outbox {...props}/>,
        link: 'outbox',
    },
    trash: {
      id: 'trash_',
      title: 'Trash',
      link: 'trash',
      icon: (props) =><Trash {...props}/>,
  },
  spam: {
    id: 'spam_',
    title: 'Spam',
    link: 'spam',
    icon: (props) =><Spam {...props}/>,
  },
  forums: {
    id: 'forums_',
    title: 'Forums',
    link: 'forums',
    icon: (props) =><Forums {...props}/>,
  },
  updates: {
    id: 'updates_',
    title: 'Updates',
    link: 'updates',
    icon: (props) =><Updates {...props}/>,
  },
  
  promos: {
    id: 'promos_',
    title: 'Promos',
    link: 'promos',
    icon:(props) =><Promos {...props}/>,
  },
  purchases: {
    id: 'purchases_',
    title: 'Purchases',
    link: 'purchases',
    icon: (props) =><Purchases {...props}/>,
  },
  };
  export default menu_data;