
export const toCamelCase = (str) => {

    return str.toLowerCase()
            .replace(/_/g, ' ')
            .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase())
            .replace(/\s+/g, '')
            .replace('#','');
}