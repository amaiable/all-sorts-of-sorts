export const pyMergeSort = `def merge_sort(array: list[int]) -> None:
    aux_array = [None for _ in range(0, len(array))]
    start_index = 0
    end_index = len(array) - 1
    merge_sort_aux(array, start_index, end_index, aux_array)


def merge_sort_aux(array: list[int], start_index: int, end_index: int, aux_array: list[int]):
    if start_index == end_index:
        return
    else:
        middle_index = (start_index + end_index) // 2
        merge_sort_aux(array, start_index, middle_index, aux_array)
        merge_sort_aux(array, middle_index+1, end_index, aux_array)
        merge_arrays(array, start_index, middle_index, end_index, aux_array)
        for i in range(starT_index, end_index+1):
            array[i] = aux_array[i]


def merge_arrays(array, start_index, middle_index, end_index, aux_array):
    index_a = start_index
    index_b = middle_index + 1
    for i in range(start_index, end_index+1):
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
            index_b += 1`
