/* 
Merge Sort with auxiliary array pseudocode
def merge_sort(array):
    aux_array = new array with same length as array to be sorted
    start_index = 0  # First index of array
    end_index = len(array) - 1  # Last index of array
    merge_sort_aux(array, start_index, end_index, aux_array)  # Call auxiliary function to perform the sorting

def merge_sort_aux(array, start_index, end_index, aux_array)
    if start == end:  # Nothing to sort since you have only one element
        return
    else:
        middle_index = floor((start_index + end_index) / 2)
        # Divide the problem into two half sized problems
        merge_sort_aux(array, start_index, middle_index, aux_array)
        merge_sort_aux(array, middle_index+1, end_index, aux_array)
        # Merge back the two arrays together
        merge_arrays(array, start_index, middle_index, end_index, aux_array)
        # Copy auxiliary array back to original array
        for (i=start_index, i<end_index+1, ++i):
            array[i] = aux_array[i]

def merge_arrays(array, start_index, middle_index, end_index, aux_array):
    index_a = start_index
    index_b = middle_index + 1
    for (i=start_index, i<end_index+1, i++):
        if index_a > middle_index:
            aux_array[i] = array[index_b]
            index_b += 1
        elif index_b > end_index:
            aux_array[i] = array[index_a]
            index_a += 1
        elif array[index_a] <= array[indedx_b]:
            aux_array[i] = array[index_a]
            index_a += 1
        else:
            aux_array[i] = array[index_b]
            index_b += 1
*/

export function performMergeSort(array) {
    const colourChanges = [];
    const heightChanges = [];

    let auxArray = array.slice();
    let startIndex = 0;
    let endIndex = array.length - 1;
    mergeSortAux(array, startIndex, endIndex, auxArray, colourChanges, heightChanges);
    return [colourChanges, heightChanges];
}

function mergeSortAux(array, startIndex, endIndex, auxArray, colourChanges, heightChanges) {
    if (startIndex === endIndex) {
        return;
    }
    else {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        mergeSortAux(array, startIndex, middleIndex, auxArray, colourChanges, heightChanges);
        mergeSortAux(array, middleIndex+1, endIndex, auxArray, colourChanges, heightChanges);
        mergeArrays(array, startIndex, middleIndex, endIndex, auxArray, colourChanges, heightChanges);
        for (let i = startIndex; i < endIndex + 1; i++) {
            array[i] = auxArray[i];
        }
    }
}

function mergeArrays(array, startIndex, middleIndex, endIndex, auxArray, colourChanges, heightChanges) {
    let indexA = startIndex;
    let indexB = middleIndex + 1;
    for (let i = startIndex; i < endIndex + 1; i++) {
        const animation = {};
        if (indexA > middleIndex) {
            colourChanges.push([indexB, indexB]);
            heightChanges.push([i, array[indexB]]);
            auxArray[i] = array[indexB];
            indexB += 1;
        }
        else if (indexB > endIndex) {
            colourChanges.push([indexA, indexA]);
            heightChanges.push([i, array[indexA]]);
            auxArray[i] = array[indexA];
            indexA += 1;
        }
        else if (array[indexA] <= array[indexB]) {
            colourChanges.push([indexA, indexB]);
            heightChanges.push([i, array[indexA]]);
            auxArray[i] = array[indexA];
            indexA += 1;
        }
        else {
            colourChanges.push([indexA, indexB]);
            heightChanges.push([i, array[indexB]]);
            auxArray[i] = array[indexB];
            indexB += 1;
        }
    }
}