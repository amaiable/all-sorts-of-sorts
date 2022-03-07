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

Needs to be modified because the visualisation will involve swaps (like reverse bubble sort) instead of using a temp variable to store it
def insertion_sort(array):
    n = length of the array
    for (mark=1, mark<n, mark++):
        j = mark
        while (j > 0 and array[j - 1] > array[j]):
            swap array[j] with array[j - 1]
            j -= 1
*/

export function performInsertionSort(array) {
    const colourChanges = [];
    const heightChanges = [];

    const n = array.length;
    for (let mark = 1; mark < n; mark++) {
        let iterationComparisons = [];

        let j = mark;

        heightChanges.push([]);
        colourChanges.push([]);

        while (j > 0 && array[j - 1] > array[j]) {
            swapElements(array, j, j-1, colourChanges, heightChanges);
            j -= 1;
        }
    }
    return [colourChanges, heightChanges];
}


function swapElements(array, indexA, indexB, colourChanges, heightChanges) {
    const currIter = heightChanges.length - 1;
    heightChanges[currIter].push([indexA, indexB, array[indexB], array[indexA]]);
    colourChanges[currIter].push(indexB);

    const temp = array[indexB];
    array[indexB] = array[indexA];
    array[indexA] = temp;
}