import { bubbleSort } from './bubble_sort.js';
import { selectionSort } from './selection_sort.js';
import { insertionSort } from './insertion_sort.js';

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
document.getElementById('arrayOfStart').innerHTML = 'Mảng ban đầu là: '+ inputArray.join(', ').toString();

(async () => {
    renderArray(inputArray, [], false, "outputBubbleSort");
    await bubbleSort([...inputArray], renderArray, delay, "outputBubbleSort", "resultBubbleSort");

    await delay(1500); // nghỉ giữa hai thuật toán

    renderArray(inputArray, [], false, "outputSelectionSort");
    await selectionSort([...inputArray], renderArray, delay, "outputSelectionSort", "resultSelectionSort");

    await delay(1500); // nghỉ giữa hai thuật toán

    renderArray(inputArray, [], false, "outputInsertionSort");
    await insertionSort([...inputArray], renderArray, delay, "outputInsertionSort", "resultInsertionSort");
})();
