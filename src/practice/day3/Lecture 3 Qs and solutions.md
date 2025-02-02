## **1\. Transpose of an N×NN \\times N Matrix**

### **A. Brief Explanation**

For a square matrix of size N×NN \\times N, the **transpose** is formed by swapping each element at (i,j)(i, j) with the element at (j,i)(j, i). In other words, rows become columns and columns become rows.

### **B. Approach**

1. We only need to swap elements above the main diagonal with elements below the main diagonal to avoid swapping the same pair twice.  
2. Iterate through the matrix with two nested loops:  
   * Outer loop: ii goes from 0 to N−1N-1.  
   * Inner loop: jj goes from i+1i+1 to N−1N-1.  
   * Perform the swap: matrix\[i\]\[j\]↔matrix\[j\]\[i\] \\text{matrix}\[i\]\[j\] \\leftrightarrow \\text{matrix}\[j\]\[i\]

### **C. Pseudocode**

function transpose(matrix):  
    n \= length of matrix  
    for i in 0 to n-1:  
        for j in i+1 to n-1:  
            swap matrix\[i\]\[j\] and matrix\[j\]\[i\]

### **D. Solutions**

#### **1\. Language: Java**

public class MatrixTranspose {  
    // Function to transpose the matrix in-place  
    public static void transpose(int\[\]\[\] matrix) {  
        int n \= matrix.length;  
        for (int i \= 0; i \< n; i++) {  
            for (int j \= i \+ 1; j \< n; j++) {  
                int temp \= matrix\[i\]\[j\];  
                matrix\[i\]\[j\] \= matrix\[j\]\[i\];  
                matrix\[j\]\[i\] \= temp;  
            }  
        }  
    }

    // Utility function to print the matrix  
    public static void printMatrix(int\[\]\[\] matrix) {  
        for (int\[\] row : matrix) {  
            System.out.println(java.util.Arrays.toString(row));  
        }  
    }

    public static void main(String\[\] args) {  
        int\[\]\[\] matrix \= {  
            {1, 2, 3},  
            {4, 5, 6},  
            {7, 8, 9}  
        };

        System.out.println("Original Matrix:");  
        printMatrix(matrix);

        // Transpose the matrix  
        transpose(matrix);

        System.out.println("\\nTransposed Matrix:");  
        printMatrix(matrix);  
    }  
}

#### **2\. Language: Python**

def transpose(matrix):  
    n \= len(matrix)  
    for i in range(n):  
        for j in range(i \+ 1, n):  
            matrix\[i\]\[j\], matrix\[j\]\[i\] \= matrix\[j\]\[i\], matrix\[i\]\[j\]

def print\_matrix(matrix):  
    for row in matrix:  
        print(row)

if \_\_name\_\_ \== "\_\_main\_\_":  
    matrix \= \[  
        \[1, 2, 3\],  
        \[4, 5, 6\],  
        \[7, 8, 9\]  
    \]

    print("Original Matrix:")  
    print\_matrix(matrix)

    transpose(matrix)

    print("\\nTransposed Matrix:")  
    print\_matrix(matrix)

#### **3\. Language: C++**

\#include \<iostream\>  
\#include \<vector\>  
using namespace std;

void transpose(vector\<vector\<int\>\>& matrix) {  
    int n \= matrix.size();  
    for(int i \= 0; i \< n; i++) {  
        for(int j \= i \+ 1; j \< n; j++) {  
            int temp \= matrix\[i\]\[j\];  
            matrix\[i\]\[j\] \= matrix\[j\]\[i\];  
            matrix\[j\]\[i\] \= temp;  
        }  
    }  
}

void printMatrix(const vector\<vector\<int\>\>& matrix) {  
    for (auto& row : matrix) {  
        for (auto& val : row) {  
            cout \<\< val \<\< " ";  
        }  
        cout \<\< endl;  
    }  
}

int main() {  
    vector\<vector\<int\>\> matrix \= {  
        {1, 2, 3},  
        {4, 5, 6},  
        {7, 8, 9}  
    };

    cout \<\< "Original Matrix:" \<\< endl;  
    printMatrix(matrix);

    transpose(matrix);

    cout \<\< "\\nTransposed Matrix:" \<\< endl;  
    printMatrix(matrix);

    return 0;  
}

### **E. Complexity Analysis**

* **Time Complexity:** O(N2)O(N^2) — You visit each cell once (or swap pairs).  
* **Space Complexity:** O(1)O(1) — In-place transpose.

---

## **2\. Rotate an N×NN \\times N Matrix by 90° (Clockwise and Counterclockwise)**

### **A. Brief Explanation**

* **90° Clockwise Rotation**: Elements from the first row move to the last column, the second row to the second-last column, and so on.  
* **90° Counterclockwise Rotation**: Elements from the first row move to the first column (in reverse order), the second row to the second column, etc.

### **B. Approach**

#### **1\. 90° Clockwise Rotation**

1. **Transpose** the matrix in place.  
2. **Reverse** each row.

#### **2\. 90° Counterclockwise Rotation**

1. **Transpose** the matrix in place.  
2. **Reverse** each column.

### **C. Pseudocode**

function rotateClockwise(matrix):  
    transpose(matrix)  
    for each row in matrix:  
        reverse(row)

function rotateCounterclockwise(matrix):  
    transpose(matrix)  
    for each column in matrix:  
        reverse(column)

### **D. Solutions**

#### **1\. Language: Java**

import java.util.Arrays;

public class MatrixRotation {  
    // Rotate the matrix 90 degrees clockwise  
    public static void rotateClockwise(int\[\]\[\] matrix) {  
        int n \= matrix.length;  
          
        // Step 1: Transpose  
        for (int i \= 0; i \< n; i++) {  
            for (int j \= i \+ 1; j \< n; j++) {  
                int temp \= matrix\[i\]\[j\];  
                matrix\[i\]\[j\] \= matrix\[j\]\[i\];  
                matrix\[j\]\[i\] \= temp;  
            }  
        }

        // Step 2: Reverse each row  
        for (int i \= 0; i \< n; i++) {  
            int left \= 0, right \= n \- 1;  
            while (left \< right) {  
                int temp \= matrix\[i\]\[left\];  
                matrix\[i\]\[left\] \= matrix\[i\]\[right\];  
                matrix\[i\]\[right\] \= temp;  
                left++;  
                right--;  
            }  
        }  
    }

    // Rotate the matrix 90 degrees counterclockwise  
    public static void rotateCounterclockwise(int\[\]\[\] matrix) {  
        int n \= matrix.length;  
          
        // Step 1: Transpose  
        for (int i \= 0; i \< n; i++) {  
            for (int j \= i \+ 1; j \< n; j++) {  
                int temp \= matrix\[i\]\[j\];  
                matrix\[i\]\[j\] \= matrix\[j\]\[i\];  
                matrix\[j\]\[i\] \= temp;  
            }  
        }

        // Step 2: Reverse each column  
        for (int j \= 0; j \< n; j++) {  
            int top \= 0, bottom \= n \- 1;  
            while (top \< bottom) {  
                int temp \= matrix\[top\]\[j\];  
                matrix\[top\]\[j\] \= matrix\[bottom\]\[j\];  
                matrix\[bottom\]\[j\] \= temp;  
                top++;  
                bottom--;  
            }  
        }  
    }

    // Utility function to print the matrix  
    public static void printMatrix(int\[\]\[\] matrix) {  
        for (int\[\] row : matrix) {  
            System.out.println(Arrays.toString(row));  
        }  
    }

    public static void main(String\[\] args) {  
        int\[\]\[\] matrix \= {  
            {1, 2, 3},  
            {4, 5, 6},  
            {7, 8, 9}  
        };

        System.out.println("Original Matrix:");  
        printMatrix(matrix);

        // 90° Clockwise  
        rotateClockwise(matrix);  
        System.out.println("\\nMatrix after 90° Clockwise Rotation:");  
        printMatrix(matrix);

        // Reset matrix for demonstration  
        int\[\]\[\] matrix2 \= {  
            {1, 2, 3},  
            {4, 5, 6},  
            {7, 8, 9}  
        };

        // 90° Counterclockwise  
        rotateCounterclockwise(matrix2);  
        System.out.println("\\nMatrix after 90° Counterclockwise Rotation:");  
        printMatrix(matrix2);  
    }  
}

#### **2\. Language: Python**

def rotate\_clockwise(matrix):  
    n \= len(matrix)  
    \# Step 1: Transpose  
    for i in range(n):  
        for j in range(i+1, n):  
            matrix\[i\]\[j\], matrix\[j\]\[i\] \= matrix\[j\]\[i\], matrix\[i\]\[j\]  
    \# Step 2: Reverse rows  
    for i in range(n):  
        matrix\[i\].reverse()

def rotate\_counterclockwise(matrix):  
    n \= len(matrix)  
    \# Step 1: Transpose  
    for i in range(n):  
        for j in range(i+1, n):  
            matrix\[i\]\[j\], matrix\[j\]\[i\] \= matrix\[j\]\[i\], matrix\[i\]\[j\]  
    \# Step 2: Reverse columns  
    for j in range(n):  
        top, bottom \= 0, n \- 1  
        while top \< bottom:  
            matrix\[top\]\[j\], matrix\[bottom\]\[j\] \= matrix\[bottom\]\[j\], matrix\[top\]\[j\]  
            top \+= 1  
            bottom \-= 1

def print\_matrix(matrix):  
    for row in matrix:  
        print(row)

if \_\_name\_\_ \== "\_\_main\_\_":  
    mat1 \= \[  
        \[1, 2, 3\],  
        \[4, 5, 6\],  
        \[7, 8, 9\]  
    \]  
      
    print("Original Matrix:")  
    print\_matrix(mat1)

    rotate\_clockwise(mat1)  
    print("\\nAfter 90° Clockwise Rotation:")  
    print\_matrix(mat1)

    mat2 \= \[  
        \[1, 2, 3\],  
        \[4, 5, 6\],  
        \[7, 8, 9\]  
    \]  
      
    rotate\_counterclockwise(mat2)  
    print("\\nAfter 90° Counterclockwise Rotation:")  
    print\_matrix(mat2)

#### **3\. Language: C++**

\#include \<iostream\>  
\#include \<vector\>  
\#include \<algorithm\>  // for std::reverse  
using namespace std;

void transpose(vector\<vector\<int\>\>& matrix) {  
    int n \= matrix.size();  
    for(int i \= 0; i \< n; i++) {  
        for(int j \= i \+ 1; j \< n; j++) {  
            int temp \= matrix\[i\]\[j\];  
            matrix\[i\]\[j\] \= matrix\[j\]\[i\];  
            matrix\[j\]\[i\] \= temp;  
        }  
    }  
}

void rotateClockwise(vector\<vector\<int\>\>& matrix) {  
    int n \= matrix.size();  
    // Step 1: Transpose  
    transpose(matrix);  
    // Step 2: Reverse each row  
    for(int i \= 0; i \< n; i++) {  
        reverse(matrix\[i\].begin(), matrix\[i\].end());  
    }  
}

void rotateCounterclockwise(vector\<vector\<int\>\>& matrix) {  
    int n \= matrix.size();  
    // Step 1: Transpose  
    transpose(matrix);  
    // Step 2: Reverse each column  
    for(int j \= 0; j \< n; j++) {  
        int top \= 0, bottom \= n \- 1;  
        while(top \< bottom) {  
            int temp \= matrix\[top\]\[j\];  
            matrix\[top\]\[j\] \= matrix\[bottom\]\[j\];  
            matrix\[bottom\]\[j\] \= temp;  
            top++;  
            bottom--;  
        }  
    }  
}

void printMatrix(const vector\<vector\<int\>\>& matrix) {  
    for(const auto& row : matrix) {  
        for(const auto& val : row) {  
            cout \<\< val \<\< " ";  
        }  
        cout \<\< endl;  
    }  
}

int main() {  
    vector\<vector\<int\>\> mat1 \= {  
        {1, 2, 3},  
        {4, 5, 6},  
        {7, 8, 9}  
    };

    cout \<\< "Original Matrix:" \<\< endl;  
    printMatrix(mat1);

    rotateClockwise(mat1);  
    cout \<\< "\\nMatrix after 90° Clockwise Rotation:" \<\< endl;  
    printMatrix(mat1);

    vector\<vector\<int\>\> mat2 \= {  
        {1, 2, 3},  
        {4, 5, 6},  
        {7, 8, 9}  
    };

    rotateCounterclockwise(mat2);  
    cout \<\< "\\nMatrix after 90° Counterclockwise Rotation:" \<\< endl;  
    printMatrix(mat2);

    return 0;  
}

### **E. Complexity Analysis**

* **Time Complexity:**  
  * Transpose: O(N2)O(N^2)  
  * Reverse rows/columns: O(N2)O(N^2)  
  * **Overall**: O(N2)O(N^2)  
* **Space Complexity:** O(1)O(1) (in-place transformations)

---

## **3\. Set Matrix Zeros**

### **A. Brief Explanation**

If any element in an M×NM \\times N matrix is **0**, the entire **row** and **column** containing that element should be set to **0**. The challenge is to do this efficiently in **constant** extra space.

### **B. Approach**

1. Use the **first row** and **first column** as markers:  
   * If matrix\[i\]\[j\]=0 \\text{matrix}\[i\]\[j\] \= 0, mark:  
     * matrix\[i\]\[0\]=0\\text{matrix}\[i\]\[0\] \= 0  
     * matrix\[0\]\[j\]=0\\text{matrix}\[0\]\[j\] \= 0  
2. Have two boolean flags: `firstRowZero` and `firstColZero` to check if the first row or first column **itself** should be all zero.  
3. In the **second pass**, set elements to zero if their row or column marker is zero.  
4. Finally, adjust the **first row** and **first column** if required by the flags.

### **C. Pseudocode**

function setZeroes(matrix):  
    m \= number of rows  
    n \= number of columns  
    firstRowZero \= false  
    firstColZero \= false

    // 1\. Identify which rows and columns should be zero  
    for i in 0 to m-1:  
        for j in 0 to n-1:  
            if matrix\[i\]\[j\] \== 0:  
                if i \== 0:  
                    firstRowZero \= true  
                if j \== 0:  
                    firstColZero \= true  
                matrix\[i\]\[0\] \= 0  
                matrix\[0\]\[j\] \= 0

    // 2\. Set elements to zero based on the markers  
    for i in 1 to m-1:  
        for j in 1 to n-1:  
            if matrix\[i\]\[0\] \== 0 or matrix\[0\]\[j\] \== 0:  
                matrix\[i\]\[j\] \= 0

    // 3\. Zero out the first row if needed  
    if firstRowZero:  
        for j in 0 to n-1:  
            matrix\[0\]\[j\] \= 0

    // 4\. Zero out the first column if needed  
    if firstColZero:  
        for i in 0 to m-1:  
            matrix\[i\]\[0\] \= 0

### **D. Solutions**

#### **1\. Language: Java**

import java.util.Arrays;

public class SetMatrixZeros {  
    public static void setZeroes(int\[\]\[\] matrix) {  
        int m \= matrix.length;  
        int n \= matrix\[0\].length;

        boolean firstRowZero \= false;  
        boolean firstColZero \= false;

        // Step 1: Mark rows and columns that need to be zero  
        for (int i \= 0; i \< m; i++) {  
            for (int j \= 0; j \< n; j++) {  
                if (matrix\[i\]\[j\] \== 0\) {  
                    if (i \== 0\) firstRowZero \= true;  
                    if (j \== 0\) firstColZero \= true;  
                    matrix\[i\]\[0\] \= 0;  
                    matrix\[0\]\[j\] \= 0;  
                }  
            }  
        }

        // Step 2: Use markers to set elements  
        for (int i \= 1; i \< m; i++) {  
            for (int j \= 1; j \< n; j++) {  
                if (matrix\[i\]\[0\] \== 0 || matrix\[0\]\[j\] \== 0\) {  
                    matrix\[i\]\[j\] \= 0;  
                }  
            }  
        }

        // Step 3: Handle the first row  
        if (firstRowZero) {  
            for (int j \= 0; j \< n; j++) {  
                matrix\[0\]\[j\] \= 0;  
            }  
        }

        // Step 4: Handle the first column  
        if (firstColZero) {  
            for (int i \= 0; i \< m; i++) {  
                matrix\[i\]\[0\] \= 0;  
            }  
        }  
    }

    public static void printMatrix(int\[\]\[\] matrix) {  
        for (int\[\] row : matrix) {  
            System.out.println(Arrays.toString(row));  
        }  
    }

    public static void main(String\[\] args) {  
        int\[\]\[\] matrix \= {  
            {1, 2, 3},  
            {4, 0, 6},  
            {7, 8, 9}  
        };

        System.out.println("Original Matrix:");  
        printMatrix(matrix);

        setZeroes(matrix);

        System.out.println("\\nMatrix after setting zeroes:");  
        printMatrix(matrix);  
    }  
}

#### **2\. Language: Python**

def set\_zeroes(matrix):  
    if not matrix or not matrix\[0\]:  
        return

    m \= len(matrix)  
    n \= len(matrix\[0\])

    first\_row\_zero \= False  
    first\_col\_zero \= False

    \# 1\. Identify rows and columns that should be zero  
    for i in range(m):  
        for j in range(n):  
            if matrix\[i\]\[j\] \== 0:  
                if i \== 0:  
                    first\_row\_zero \= True  
                if j \== 0:  
                    first\_col\_zero \= True  
                matrix\[i\]\[0\] \= 0  
                matrix\[0\]\[j\] \= 0

    \# 2\. Set elements to zero based on markers  
    for i in range(1, m):  
        for j in range(1, n):  
            if matrix\[i\]\[0\] \== 0 or matrix\[0\]\[j\] \== 0:  
                matrix\[i\]\[j\] \= 0

    \# 3\. Handle the first row  
    if first\_row\_zero:  
        for j in range(n):  
            matrix\[0\]\[j\] \= 0

    \# 4\. Handle the first column  
    if first\_col\_zero:  
        for i in range(m):  
            matrix\[i\]\[0\] \= 0

def print\_matrix(matrix):  
    for row in matrix:  
        print(row)

if \_\_name\_\_ \== "\_\_main\_\_":  
    matrix \= \[  
        \[1, 2, 3\],  
        \[4, 0, 6\],  
        \[7, 8, 9\]  
    \]

    print("Original Matrix:")  
    print\_matrix(matrix)

    set\_zeroes(matrix)

    print("\\nMatrix after setting zeroes:")  
    print\_matrix(matrix)

#### **3\. Language: C++**

\#include \<iostream\>  
\#include \<vector\>  
using namespace std;

void setZeroes(vector\<vector\<int\>\>& matrix) {  
    if(matrix.empty() || matrix\[0\].empty()) return;

    int m \= matrix.size();  
    int n \= matrix\[0\].size();

    bool firstRowZero \= false;  
    bool firstColZero \= false;

    // 1\. Mark rows and columns that need zero  
    for(int i \= 0; i \< m; i++) {  
        for(int j \= 0; j \< n; j++) {  
            if(matrix\[i\]\[j\] \== 0\) {  
                if(i \== 0\) firstRowZero \= true;  
                if(j \== 0\) firstColZero \= true;  
                matrix\[i\]\[0\] \= 0;  
                matrix\[0\]\[j\] \= 0;  
            }  
        }  
    }

    // 2\. Set elements to zero using the markers  
    for(int i \= 1; i \< m; i++) {  
        for(int j \= 1; j \< n; j++) {  
            if(matrix\[i\]\[0\] \== 0 || matrix\[0\]\[j\] \== 0\) {  
                matrix\[i\]\[j\] \= 0;  
            }  
        }  
    }

    // 3\. Handle the first row  
    if(firstRowZero) {  
        for(int j \= 0; j \< n; j++) {  
            matrix\[0\]\[j\] \= 0;  
        }  
    }

    // 4\. Handle the first column  
    if(firstColZero) {  
        for(int i \= 0; i \< m; i++) {  
            matrix\[i\]\[0\] \= 0;  
        }  
    }  
}

void printMatrix(const vector\<vector\<int\>\>& matrix) {  
    for(const auto& row : matrix) {  
        for(const auto& val : row) {  
            cout \<\< val \<\< " ";  
        }  
        cout \<\< endl;  
    }  
}

int main() {  
    vector\<vector\<int\>\> matrix \= {  
        {1, 2, 3},  
        {4, 0, 6},  
        {7, 8, 9}  
    };

    cout \<\< "Original Matrix:" \<\< endl;  
    printMatrix(matrix);

    setZeroes(matrix);

    cout \<\< "\\nMatrix after setting zeroes:" \<\< endl;  
    printMatrix(matrix);

    return 0;  
}

### **E. Complexity Analysis**

* **Time Complexity:** O(M×N)O(M \\times N). We iterate over the matrix twice (marking and updating).  
* **Space Complexity:** O(1)O(1). We use the first row and first column as storage for markers, avoiding extra arrays.

---

### **Summary of Key Takeaways**

1. **Matrix Transpose**:

   * Swap (i,j)(i, j) with (j,i)(j, i) for i\<ji \< j.  
   * Complexity: O(N2)O(N^2) time, O(1)O(1) space.  
2. **Matrix Rotation**:

   * **Clockwise** \= Transpose \+ Reverse Rows.  
   * **Counterclockwise** \= Transpose \+ Reverse Columns.  
   * Complexity: O(N2)O(N^2) time, O(1)O(1) space.  
3. **Set Matrix Zeros**:

   * Mark zero rows/columns using the first row & column.  
   * Zero out rows & columns in a second pass.  
   * Complexity: O(M×N)O(M \\times N) time, O(1)O(1) space.

These methods are standard and optimal for in-place transformations on matrices.

