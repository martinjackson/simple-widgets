
import { useMutation } from '@apollo/client'
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
export const createRec = (gqlTable, input) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [createRecord] = useMutation(INSERT_RECORD, {client, fetchPolicy: 'network-only'});

    // TODO: this function should return the promise and make the calling code cleaner
    createRecord({ variables: { gqlTable: gqlTable, input: input} })
        .then(rec => {
          const status = rec.data.createRecord;
          if (status) {
              console.log('record inserted:', input);
          }
        })
        .catch(err => {
          throw new Error('Unable to insert ' + input + ' -- ' + err);
        })
}
