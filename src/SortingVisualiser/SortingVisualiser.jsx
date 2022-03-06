import React from "react";
import "./SortingVisualiser.css";
import { performMergeSort } from "../Algos/mergeSort.js"
import { performSelectionSort } from "../Algos/selectionSort.js"
import { Navbar, Container, Button, Form, Row } from 'react-bootstrap';

const delayInterval = 2.5;
const stickyColour = 250;

export default class SortingVisualiser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesToSort: []
        }
    };

    resetValues() {  // Gives us a fresh randomised array
        const newValues = [];
        for (let i = 0; i < 100; i++) {
            // newValues.push(Math.floor(Math.random() * (500 - 5) + 5));  // Formula used for uniformly picking numbers between 4 and 500
            newValues.push(Math.floor(Math.random() * (90 - 5) + 5));
        }
        this.setState({
            valuesToSort: newValues
        });
    };

    componentDidMount() {  // Once we successfully render this component in, this runs
        this.resetValues();
    };

    mergeSort() {
        const [colourChanges, heightChanges] = performMergeSort(this.state.valuesToSort);
        const n = colourChanges.length;  // Should be the same for height changes

        let delayMultiplier = 0;

        const verticalBars = document.getElementsByClassName("vertical-bar");

        for (let i = 0; i < n; i++) {
            const currBars = colourChanges[i];
            const barA = verticalBars[currBars[0]].style;
            const barB = verticalBars[currBars[1]].style;

            setTimeout(() => {
                barA.backgroundColor = "red";
                barB.backgroundColor = "red";
            }, delayMultiplier * delayInterval);
            delayMultiplier += 1;

            setTimeout(() => {
                barA.backgroundColor = "#BD8BDD";
                barB.backgroundColor = "#BD8BDD";
            }, delayMultiplier * delayInterval);
            delayMultiplier += 1;

            setTimeout(() => {
                const [barToChange, newBarHeight] = heightChanges[i];
                const barStyle = verticalBars[barToChange].style;
                barStyle.height = `${newBarHeight}%`;
            }, delayMultiplier * delayInterval);
            delayMultiplier += 1;
        }
    };

    selectionSort() {
        const [colourChanges, heightChanges] = performSelectionSort(this.state.valuesToSort);
        const n = colourChanges.length;

        let delayMultiplier = 0;

        const verticalBars = document.getElementsByClassName("vertical-bar");

        for (let i = 0; i < n; i++) {
            const m = colourChanges[i].length;
            for (let j = 0; j < m - 1; j++) {
                const barStyle = verticalBars[colourChanges[i][j]].style;

                setTimeout(() => {
                    barStyle.backgroundColor = "red";
                }, delayMultiplier * delayInterval);
                delayMultiplier += 1;

                setTimeout(() => {
                    barStyle.backgroundColor = "#BD8BDD";
                }, delayMultiplier * delayInterval);
                delayMultiplier += 1;
            }

            setTimeout(() => {
                const [barA, barB, newBarAHeight, newBarBHeight] = heightChanges[i];
                const barAStyle = verticalBars[barA].style;
                barAStyle.height = `${newBarAHeight}%`;
                const barBStyle = verticalBars[barB].style;
                barBStyle.height = `${newBarAHeight}%`;
                verticalBars[i].style.backgroundColor = "#90EE90";
            }, delayMultiplier * delayInterval);
            delayMultiplier += 1;

            setTimeout(() => {
                verticalBars[i].style.backgroundColor = "#BD8BDD";
            }, delayMultiplier * delayInterval + stickyColour);
            delayMultiplier += 1;
        }
    };

    insertionSort() {
        const [colourChanges, heightChanges] = performSelectionSort(this.state.valuesToSort);
        const n = colourChanges.length;

        let delayMultiplier = 0;
    }

    render() {
        const values = this.state.valuesToSort;

        return (
            <div className="app-container">
                <Navbar bg="dark">
                    <Navbar.Brand><img className="logo" src="/logo_transparent_cropped.png" /></Navbar.Brand>
                    <Container className="overwrite-display-flex">
                        <Button className="sort-button" onClick={() => this.resetValues()}>New Values</Button>
                        <Button className="sort-button" onClick={() => this.mergeSort()}>Merge Sort</Button>
                        <Button className="sort-button" onClick={() => this.selectionSort()}>Selection Sort</Button>
                        <Button className="sort-button" onClick={() => this.insertionSort()}>Insertion Sort</Button>
                    </Container>
                </Navbar>
                <div className="bar-container">
                    {values.map((value, index) => 
                        <div className="vertical-bar" key={index} style={{height: `${value}%`}}>
                        </div>
                    )}
                </div>
            </div>
        )
    };
}