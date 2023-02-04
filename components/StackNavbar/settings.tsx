export const defaultSuffix = '/'
export const defaultPrefix = '/data-structures/'
export const vizualizationSuffix = '/vizualization'
export const codeExamplesSuffix = '/code-examples'
// TODO: Handle that in other way just dummy solution for now
export const differentSufixes = [vizualizationSuffix, codeExamplesSuffix]
// TOOD: Move everything here to utils
export const buildUrl = (url: string) => defaultPrefix + url + defaultSuffix; 

export const stackNavSettings = [
    { title: 'Data structures'},
    {
        title: 'Linear'
    },
    {
        title: 'Linked List',
        url: 'linked-list'
    },
    {
        title: 'Array',
        url: 'array'
    },
    {
        title: 'Stack',
        url: 'stack'
    },
    {
        title: 'Queue',
        url: 'queue'
    },
    {
        title: 'Non-linear'
    },
    {
        title: 'Hash Table',
        url: 'hash-table'
    },
    {
        title: 'Tree',
        url: '/tree'
    },
    {
        title: 'Heap',
        url: 'heap'
    },
    {
        title: 'Graph',
        url: 'graph'
    }
];