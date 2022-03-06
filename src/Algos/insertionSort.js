/* 
Insertion Sort pseudocode from my introduction to CS class
def insertion_sort(array):
    n = length of the array
    for (mark=1, mark<n, mark++):
        temp = array[mark]
        i = mark - 1
        while (i >= 0 and array[i] > temp):
            array[i + 1] = array[i]  # Shift everything over
            i -= 1
        array[i + 1] = temp
*/

export function performInsertionSort(array) {
    const colourChanges = [];
    const heightChanges = [];

    const n = array.length;
    for (let mark = 0; mark < n; mark++) {
        let temp = array[mark];
        let i = mark - 1;
        let iterationComparisons = [];
        let iterationSwaps = [];
        while (i >= 0 and array[i] > temp) {
            iterationComparisons.push(i);
            array[i + 1] = array[i];
            i -= 1;
        }
        array[i + 1] = temp;
    }

    return [colourChanges, heightChanges];
}


function swapElements(array, indexA, indexB, colourChanges, heightChanges) {
    let iterationSwap = [];
    heightChanges.push([indexA, indexB, array[indexB], array[indexA]]);

    const temp = array[indexB];
    array[indexB] = array[indexA];
    array[indexA] = temp;
}