/* 
Selection Sort pseudocode from my introduction to CS class
def selection_sort(array):
    n = length of array
    for (i=0, i<n, i++):
        min_index = find_min(array, starting from i)
        swap array[i] with array[min_index]

def find_min(array, mark):
    ind_min = mark
    n = length of array
    for (i=mark+1, i<n, i++):
        if array[i] < array[ind_min]:
            ind_min = i
    return ind_min
*/

export function performSelectionSort(array) {
    const colourChanges = [];
    const heightChanges = [];

    const n = array.length;
    for (let i = 0; i < n; i++) {
        let minIndex = findMin(array, i, colourChanges, heightChanges);
        swapElements(array, i, minIndex, colourChanges, heightChanges);
    }
    return [colourChanges, heightChanges];
}

function findMin(array, mark, colourChanges, heightChanges) {
    let indMin = mark;
    const n = array.length;

    let iterationComparisons = [];

    for (let i = mark + 1; i < n; i++) {
        iterationComparisons.push(i);
        if (array[i] < array[indMin]) {
            indMin = i;
        }
    }

    // iterationComparisons.push([mark, indMin]);  // Not needed?
    colourChanges.push(iterationComparisons);

    return indMin;
}

function swapElements(array, indexA, indexB, colourChanges, heightChanges) {
    heightChanges.push([indexA, indexB, array[indexB], array[indexA]]);

    const temp = array[indexB];
    array[indexB] = array[indexA];
    array[indexA] = temp;
}