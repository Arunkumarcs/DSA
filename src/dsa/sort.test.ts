import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort,
  radixSort,
  bucketSort,
} from "../sort";

describe("Bubble Sort", () => {
  const testCases = [
    {
      input: [64, 34, 25, 12, 22, 11, 90],
      expected: [11, 12, 22, 25, 34, 64, 90],
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    },
    {
      input: [-5, 3, -1, 0, 7, -9],
      expected: [-9, -5, -1, 0, 3, 7],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should sort [${input}] to [${expected}]`, () => {
      expect(bubbleSort([...input])).toEqual(expected);
    });
  });
});

describe("Selection Sort", () => {
  const testCases = [
    {
      input: [64, 34, 25, 12, 22, 11, 90],
      expected: [11, 12, 22, 25, 34, 64, 90],
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    },
    {
      input: [-5, 3, -1, 0, 7, -9],
      expected: [-9, -5, -1, 0, 3, 7],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should sort [${input}] to [${expected}]`, () => {
      expect(selectionSort([...input])).toEqual(expected);
    });
  });
});

describe("Insertion Sort", () => {
  const testCases = [
    {
      input: [64, 34, 25, 12, 22, 11, 90],
      expected: [11, 12, 22, 25, 34, 64, 90],
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    },
    {
      input: [-5, 3, -1, 0, 7, -9],
      expected: [-9, -5, -1, 0, 3, 7],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should sort [${input}] to [${expected}]`, () => {
      expect(insertionSort([...input])).toEqual(expected);
    });
  });
});

describe("Merge Sort", () => {
  const testCases = [
    {
      input: [64, 34, 25, 12, 22, 11, 90],
      expected: [11, 12, 22, 25, 34, 64, 90],
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    },
    {
      input: [-5, 3, -1, 0, 7, -9],
      expected: [-9, -5, -1, 0, 3, 7],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should sort [${input}] to [${expected}]`, () => {
      expect(mergeSort([...input])).toEqual(expected);
    });
  });
});

describe("Quick Sort", () => {
  const testCases = [
    {
      input: [64, 34, 25, 12, 22, 11, 90],
      expected: [11, 12, 22, 25, 34, 64, 90],
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    },
    {
      input: [-5, 3, -1, 0, 7, -9],
      expected: [-9, -5, -1, 0, 3, 7],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should sort [${input}] to [${expected}]`, () => {
      expect(quickSort([...input])).toEqual(expected);
    });
  });
});

describe("Heap Sort", () => {
  const testCases = [
    {
      input: [64, 34, 25, 12, 22, 11, 90],
      expected: [11, 12, 22, 25, 34, 64, 90],
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    },
    {
      input: [-5, 3, -1, 0, 7, -9],
      expected: [-9, -5, -1, 0, 3, 7],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should sort [${input}] to [${expected}]`, () => {
      expect(heapSort([...input])).toEqual(expected);
    });
  });
});

describe("Radix Sort", () => {
  const testCases = [
    {
      input: [170, 45, 75, 90, 802, 24, 2, 66],
      expected: [2, 24, 45, 66, 75, 90, 170, 802],
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    },
    {
      input: [555, 111, 999, 333, 777],
      expected: [111, 333, 555, 777, 999],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should sort [${input}] to [${expected}]`, () => {
      expect(radixSort([...input])).toEqual(expected);
    });
  });
});

describe("Bucket Sort", () => {
  const testCases = [
    {
      input: [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434],
      expected: [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897],
    },
    {
      input: [0.1, 0.2, 0.3, 0.4, 0.5],
      expected: [0.1, 0.2, 0.3, 0.4, 0.5],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [0.5],
      expected: [0.5],
    },
    {
      input: [5, 3, 1, 0, 7, 9],
      expected: [0, 1, 3, 5, 7, 9],
    },
  ];

  testCases.forEach(({ input, expected }) => {
    test(`should sort [${input}] to [${expected}]`, () => {
      expect(bucketSort([...input])).toEqual(expected);
    });
  });
});
