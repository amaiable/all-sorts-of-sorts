import React from "react";  
import { Modal, Tabs, Tab } from "react-bootstrap";
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { python } from '@codemirror/lang-python';
import { pyMergeSort } from "./Python Algos/pyMergeSort.js";
import { pySelectionSort } from "./Python Algos/pySelectionSort.js";
import { pyInsertionSort } from "./Python Algos/pyInsertionSort.js";
import { pyBubbleSort } from "./Python Algos/pyBubbleSort.js";

export class SortingModal extends React.Component {
    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    All about the sorting algorithms!
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="mergeSortTab">
                        <Tab eventKey="mergeSortTab" title="Merge Sort">
                            <div>
                                Worst Case Time Complexity: O(nlog(n))
                                <br />
                                Worst Case Space Complexity: O(n)
                                <CodeMirror value={pyMergeSort} theme={oneDark} />
                            </div>
                        </Tab>
                        <Tab eventKey="selectionSortTab" title="Selection Sort">
                            <div>
                                Worst Case Time Complexity: O(n^2)
                                <br />
                                Worst Case Space Complexity: O(1)
                                <CodeMirror value={pySelectionSort} theme={oneDark} />
                            </div>
                        </Tab>
                        <Tab eventKey="insertionSortTab" title="Insertion Sort">
                            <div>
                                Worst Case Time Complexity: O(n^2)
                                <br />
                                Worst Case Space Complexity: O(1)
                                <CodeMirror value={pyInsertionSort} theme={oneDark} />
                            </div>
                        </Tab>
                        <Tab eventKey="bubbleSortTab" title="Bubble Sort">
                            <div>
                                Worst Case Time Complexity: O(n^2)
                                <br />
                                Worst Case Space Complexity: O(1)
                                <CodeMirror value={pyBubbleSort} theme={oneDark} />
                            </div>
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </div>
        )
    }
}