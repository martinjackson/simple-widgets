
# Example of How To get GraphQL info from the front end


## To ask the GraphQL API what type of the database connection (PROD, TEST, DEV)

**queries.js**

```js
    export const DBCON_QUERY = gql`
        query {
          getDBConnection
        }
`;
```


**originally from Header.js**
```js
import client from './client'
import {DBCON_QUERY} from './queries'


const [dbType, setDBType] = useState('_')

  // GraphQL using Promises
  const getDBtype = () => {
    client.query({ query: DBCON_QUERY, variables: {} })
    .then( info => {
      setDBType(info.data.getDBConnection)
    })
    .catch( err => {
    console.log ('The following error occurred: ', err);
    setError(err)
    })
  }

  // GraphQL using async await
  const getDBtypeSync = async () => {
     try {
        const info = await client.query({ query: DBCON_QUERY, variables: {} })
        console.log('info:', info);
        setDBType(info.data.getDBConnection)
     }
     catch(err) {
      console.log ('The following error occurred: ', err);
      setError(err)
     }
  }

  // useEffect(getDBtype, [])
  useEffect(getDBtypeSync, [])

```