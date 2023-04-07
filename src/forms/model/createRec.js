
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag';

import { client } from '../forms/client.js'

const INSERT_RECORD = gql`mutation(
        $gqlTable: String,
        $input: JSON,
        $where: JSON,
        $who: String) {
            createRecord(gqlTable: $gqlTable, input: $input, where: $where, who: $who)
            }
`

// ------------------------------------------------------------------------
export const createRec = (gqlTable, input, where, username) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [createRecord] = useMutation(INSERT_RECORD, {client, fetchPolicy: 'network-only'});

    createRecord({ variables: { gqlTable: gqlTable, input: input, where: where, who: username } })
        .then(rec => {
          const status = rec.data.createRecord;
          if (status) {
              console.log('record insertd:', where);
          }
        })
        .catch(err => {
          throw new Error('Unable to insert ' + where + ' -- ' + err);
        });
}
