import {bubbleSort} from './bubble_sort.js';
import {selectionSort} from './selection_sort.js';
import {insertionSort} from './insertion_sort.js';
import {mergeSort} from './merge_sort.js';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const renderArray = (arr, highlight = [], done = false, containerId = "output") => {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    arr.forEach((value, index) => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = value;
        if (highlight.includes(index)) {
            div.classList.add("swapping");
        }
        if (done) {
            div.style.backgroundColor = "lightgreen";
        }
        container.appendChild(div);
    });
};

const inputArray = [8, 3, 7, 2, 5];
document.getElementById('arrayOfStart').innerHTML = 'Mảng ban đầu: ' + inputArray.join(', ').toString();

const runBubbleSort = async () => {
    renderArray(inputArray, [], false, "outputBubbleSort");
    await bubbleSort([...inputArray], renderArray, delay, "outputBubbleSort", "resultBubbleSort");
};

const runSelectionSort = async () => {
    renderArray(inputArray, [], false, "outputSelectionSort");
    await selectionSort([...inputArray], renderArray, delay, "outputSelectionSort", "resultSelectionSort");
};

const runInsertionSort = async () => {
    renderArray(inputArray, [], false, "outputInsertionSort");
    await insertionSort([...inputArray], renderArray, delay, "outputInsertionSort", "resultInsertionSort");
};

const runMergeSort = async () => {
    renderArray(inputArray, [], false, "outputMergeSort");
    await mergeSort([...inputArray], renderArray, delay, "outputMergeSort", "resultMergeSort");
};

// Initial run of Bubble Sort
runBubbleSort();
runSelectionSort();
runInsertionSort();
runMergeSort();

// Set up "Return" button functionality for each sort
document.getElementById('returnBubbleSort').addEventListener('click', () => {
    renderArray(inputArray, [], false, "outputBubbleSort");
    document.getElementById("resultBubbleSort").innerHTML = "";
    runBubbleSort();
});

document.getElementById('returnSelectionSort').addEventListener('click', () => {
    renderArray(inputArray, [], false, "outputSelectionSort");
    document.getElementById("resultSelectionSort").innerHTML = "";
    runSelectionSort();
});

document.getElementById('returnInsertionSort').addEventListener('click', () => {
    renderArray(inputArray, [], false, "outputInsertionSort");
    document.getElementById("resultInsertionSort").innerHTML = "";
    runInsertionSort();
});

document.getElementById('returnMergeSort').addEventListener('click', () => {
    renderArray(inputArray, [], false, "outputMergeSort");
    document.getElementById("resultMergeSort").innerHTML = "";
    runMergeSort();
});
