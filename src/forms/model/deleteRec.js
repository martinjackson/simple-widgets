import { useMutation } from '@apollo/client'
import gql from 'graphql-tag';

import { client } from '../client.js'

const DELETE_RECORD = gql`mutation(
        $gqlTable: String,
        $input: JSON,
        $where: JSON,
        $who: String) {
            deleteRecord(gqlTable: $gqlTable, input: $input, where: $where, who: $who)
            }
`

// ------------------------------------------------------------------------
export const deleteRec = (gqlTable, where, username) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [deleteRecord] = useMutation(DELETE_RECORD, {client, fetchPolicy: 'network-only'});

    deleteRecord({ variables: { gqlTable: gqlTable, input: {}, where: where, who: username } })
        .then(rec => {
          const status = rec.data.deleteRecord;
          if (status) {
              console.log('record deleted:', where);
          }
        })
        .catch(err => {
          throw new Error('Unable to delete ' + where + ' -- ' + err);
        });
}
