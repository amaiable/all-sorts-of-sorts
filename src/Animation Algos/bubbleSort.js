/*
Bubble sort pseudocode
def bubble_sort(array):
    n = len(array)
    for (i=0, i<n, i++):
        for (j=0, j<n-1, j++):
            if (array[j] > array[j-1]):
                swap array[j] with array[j-1]
*/

export function performBubbleSort(array) {
    const colourChanges = [];
    const heightChanges = [];

    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            colourChanges.push([j, j+1]);  // Flash red to show a comparison has happened
            if (array[j] > array[j + 1]) {
                colourChanges.push(j);  // Flash green to show we have "bubbled" an element upwards
                swapElements(array, j, j+1, colourChanges, heightChanges);
            }
        }
    }
    return [colourChanges, heightChanges]
}


function swapElements(array, indexA, indexB, colourChanges, heightChanges) {
    heightChanges.push([indexA, indexB, array[indexB], array[indexA]]);

    const temp = array[indexB];
    array[indexB] = array[indexA];
    array[indexA] = temp;
}