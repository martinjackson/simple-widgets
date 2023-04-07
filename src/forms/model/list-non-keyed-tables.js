
// --------------------------------------------------------------------------------------------
export const listNotKeyedTables = (dbStructure) => {
    const entries = Object.keys(dbStructure)

    const notKeyed = entries.filter(tableName => dbStructure[tableName].pk.length == 0)

    console.log(notKeyed);
}
