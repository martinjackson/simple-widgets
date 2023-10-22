# AppCore

Used by an Application's App.js

## example App.js

```jsx

import React from 'react'

import { setAppSpecificInfo }   from './simple-widgets.js'
import AppCore from './AppCore.js'

import { getMenu }        from './menuItems.js'            // getMenu(role, dbType) called from AppCore
import { AppStartup }     from './AppStartup.js'

import { formDictionary } from './entry/formDictionary.js'
import { namedQueries }   from './models/queries.js'
import { dbStruct }       from './models/dbStruct.js'

import './App.css'
import './sw-overrides.css'

const debug = null     // set up all the screens with props.debug to turn on extra level of debugging
const origTabTitle =  document.title

const ACCESS_FORM = 'https://sharepoint.yourcompany.org/Shared%20Documents/Forms/Shared%20Documents%2FYourOrg%20Administrative%20Application%20Access%20Request'
let Bottom = <h3>If you do not have the proper role set up for this applicaiton. Please submit a <a href={ACCESS_FORM}>User Account Request Form</a></h3>;

// ----------------------------------------------------------------------------------------------
const App = () => {

  // set for simple-widget forms and graphQL named queries, Lookups etc
  setAppSpecificInfo({dbStruct, formDictionary, namedQueries})

  return <AppCore
              AppStartup={AppStartup}
              getMenu={getMenu}

              title='Basic CRUD Single Page App'
              alertLogo='./logo192.png'
              titleLogo='Logo.svg'
              loginURL='https://yourcompany.org/login/'
              logoutURL='https://yourcompany.org/logout/'
              missingRoleMessage={Bottom}
              origTabTitle={origTabTitle}
              debug={debug}
              />
}

AppCore uses the following backend APIs: /api/checkIn, /api/checkOut

export default App
```

## example paired backend API

```js
    let router = express.Router()

    // Before everything else so req.session will have correct info:
    // -- user
    //   {name, id, role}
    // -- database info
    //      dbType:      ['PROD', 'TEST', 'DEV', 'NoSQL', or 'SQL']
    //      dbReadOnly:  false     (usefull to set true for integrated testing)
    //
    // as you develop your own API layer your organization may need
    // other information in dbType -- it is just a string to be
    // displayed in thhe header of the application by the <Header />
    // compoent.
    // This is so a tester's screen shots will help document
    // how/where/what they are testing.
    // ---------------------------------------------------------
    router.use((req, res, next)=>{

      if (!req.session['user']) {
        const name = getUser(req)
        const {role, roleNum, userId} = getRole(name)
        const user = { name, role, roleNum, userId }

        req.session.user = user
      }

      if (!req.session['dbInfo']) {
        const dbInfo = {
          dbType: process.env.DB_TYPE,
          dbReadOnly: false
        }

        req.session.dbInfo = dbInfo
    }

    next()
    })

    // ---------------------------------------------------------
    router.get('/api/checkIn', async (req, response) => {

      try {
        const newInfo = getRole(req.session.user.name)     // update Role
        req.session.user = {...req.session.user, ...newInfo}

        const {user, dbInfo} = req.session // only return non-secret session stuff
        response.json({user, dbInfo})

      } catch (err) {
        response.status(500).send("Error:"+err)
        console.error(err)
      }

    })

    // ---------------------------------------------------------
    router.get('/api/checkOut', async (req, response) => {

      try {
        if (req.session['user']) {
          delete req.session['user']
        }

        if (req.session['dbInfo']) {
          delete req.session['dbInfo']
        }

        response.send('ok')
      } catch (err) {
        response.status(500).send("Error:"+err)
        console.error(err)
      }

    })


```

Props:

1. ***AppStartup*** A React component that is provided by App.js and is designed to load App specific lookups and other data
   it is displayed directly above the menu and will become invisible after initial loading has completed w/o error

2. ***getMenu*** a function getMenu(role, dbType) that returns the application menu based on the current user's role and database type
   (see [MenuBar](MenuBar.md) for example menus). AppCore will call this function everytime the user information changes and refreshes
   the menuTree passed to MenuBar
3. ***title*** passed to [Header](Header.md) is it a verbose applicaiton title displayed in the top middle of the application header
4. ***alertLogo*** this is the url to the image that should be used in all modal boxes including if the user is not authorized example: `'./logo192.png'`
5. ***titleLogo*** this is the url for the logo of your applicaiton of the logo of your organization. example `'Logo.svg'`
6. ***loginURL***  the url where a user can be authenticated. example: `'https://yourcompany.org/login/'`
7. ***logoutURL***  the url where a user can have their authentication revoked. example: `'https://yourcompany.org/logout/'`
8. ***missingRoleMessage***  a message to the user if they are not authorized or ar missing roles for the appliciation
9. ***origTabTitle*** = The original application title in the browser tab, this is used allong with the clicked path to change the browser title when a menu item is selected. example: you clicked About and the browser title becomes "{application title} - /About"
   because this was passed as origTabTitle="{application title}" to MenuBar
10. ***debug*** passed to all React components so applcation wide `if (props.debug) { console.log('Error info:', err.message) }`
