
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag';

import { client } from '../client.js'

const UPDATE_RECORD = gql`mutation(
        $gqlTable: String,
        $input: JSON,
        $where: JSON,
        $who: String) {
            updateRecord(gqlTable: $gqlTable, input: $input, where: $where, who: $who)
            }
`

// ------------------------------------------------------------------------
export const updateRecord = (gqlTable, input, where, username) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [updateRecord] = useMutation(UPDATE_RECORD, {client, fetchPolicy: 'network-only'});

    updateRecord({ variables: { gqlTable: gqlTable, input: input, where: where, who: username } })
        .then(rec => {
          const status = rec.data.updateRecord;
          if (status) {
              console.log('record deleted:', where);
          }
        })
        .catch(err => {
          throw new Error('Unable to delete ' + where + ' -- ' + err);
        });
}
