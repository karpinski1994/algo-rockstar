export const defaultSuffix = '/'
export const defaultPrefix = '/data-structures/'
export const visualizationSuffix = '/visualization'
export const codeExamplesSuffix = '/code-examples'
export const quizSuffix = '/quiz'
// TODO: Handle that in other way just dummy solution for now
export const differentSufixes = [visualizationSuffix, codeExamplesSuffix, quizSuffix]
// TOOD: Move everything here to utils
export const buildUrl = (url: string) => defaultPrefix + url + defaultSuffix; 

export const stackNavSettings = [
    {
        title: 'Basics',
        url: '',
    },
    {
        title: 'Big O Notation',
        url: 'big-o'
    },
    {
        title: 'Linear',
        url: '',
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
        title: 'Non-linear',
        url: '',
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