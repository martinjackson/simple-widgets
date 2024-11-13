
import gql from 'graphql-tag';

import { client } from '../client.js'

const INSERT_RECORD = gql`mutation(
        $gqlTable: String,
        $input: JSON,
        $where: JSON,
        $who: String) {
            createRecord(gqlTable: $gqlTable, input: $input, where: $where, who: $who)
            }
`

// ------------------------------------------------------------------------
export async function createRec(gqlTable, input) {
    
    const recStr = JSON.stringify(input)
    console.log(`createRec(${gqlTable}, ${recStr})`)

    let info = await client.mutate ({
      mutation: INSERT_RECORD,
      variables: { gqlTable: gqlTable, input: input} })

    const status = info.data.createRecord;
    if (status) {
       console.log('record inserted:', input);
    }

    return info.data
}
