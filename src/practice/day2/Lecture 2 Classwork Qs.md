## **1\) Rotate an Array *n* Number of Times**

### **Explanation**

You are given an array of integers and a number *n*. The task is to rotate the array to the right by *n* positions. For example:

* Original Array: `[1, 2, 3, 4, 5, 6, 7]`  
* Rotate by 3: `[5, 6, 7, 1, 2, 3, 4]`

### **Approach**

* **Efficient Method (Using Reversal)**

  * Reverse the entire array.  
  * Reverse the first *n* elements.  
  * Reverse the remaining elements.  
     This method works in-place and only requires a single pass through parts of the array.  
* **Brute Force (Less Efficient)**

  * Repeatedly rotate the array by 1 position, *n* times (Time complexity: O(n×k)O(n \\times k) if rotating *k* times).

Below, we focus on the efficient reversal approach which has O(n)O(n) time complexity.

### **Pseudocode**

function rotateArray(arr, n):  
    length \= arr.length  
    n \= n mod length           // To handle cases where n \> length  
      
    // Step 1: Reverse entire array  
    reverse(arr, 0, length \- 1\)  
      
    // Step 2: Reverse first n elements  
    reverse(arr, 0, n \- 1\)  
      
    // Step 3: Reverse remaining elements  
    reverse(arr, n, length \- 1\)

// Helper function to reverse elements in a given range  
function reverse(arr, start, end):  
    while start \< end:  
        swap arr\[start\] and arr\[end\]  
        start++  
        end--

---

### **Solution in Java**

*import java.util.Arrays;*

*public class RotateArray {*  
    *public static void rotate(int\[\] arr, int n) {*  
        *int len \= arr.length;*  
        *n \= n % len;  // Handle cases where n \> len*

        *// Step 1: Reverse the entire array*  
        *reverse(arr, 0, len \- 1);*

        *// Step 2: Reverse the first n elements*  
        *reverse(arr, 0, n \- 1);*

        *// Step 3: Reverse the remaining elements*  
        *reverse(arr, n, len \- 1);*  
    *}*

    *private static void reverse(int\[\] arr, int start, int end) {*  
        *while (start \< end) {*  
            *int temp \= arr\[start\];*  
            *arr\[start\] \= arr\[end\];*  
            *arr\[end\] \= temp;*  
            *start++;*  
            *end--;*  
        *}*  
    *}*

    *public static void main(String\[\] args) {*  
        *int\[\] arr \= {1, 2, 3, 4, 5, 6, 7};*  
        *int n \= 3;*  
        *rotate(arr, n);*  
        *System.out.println(Arrays.toString(arr)); // \[5, 6, 7, 1, 2, 3, 4\]*  
    *}*  
*}*

### **Solution in Python**

*def reverse\_segment(arr, start, end):*  
    *while start \< end:*  
        *arr\[start\], arr\[end\] \= arr\[end\], arr\[start\]*  
        *start \+= 1*  
        *end \-= 1*

*def rotate\_array(arr, n):*  
    *length \= len(arr)*  
    *n \= n % length  \# Handle cases where n \> length*

    *\# Step 1: Reverse the entire array*  
    *reverse\_segment(arr, 0, length \- 1\)*

    *\# Step 2: Reverse the first n elements*  
    *reverse\_segment(arr, 0, n \- 1\)*

    *\# Step 3: Reverse the remaining elements*  
    *reverse\_segment(arr, n, length \- 1\)*

*\# Example Usage*  
*if \_\_name\_\_ \== "\_\_main\_\_":*  
    *arr \= \[1, 2, 3, 4, 5, 6, 7\]*  
    *rotate\_array(arr, 3\)*  
    *print(arr)  \# \[5, 6, 7, 1, 2, 3, 4\]*

### **Solution in C++**

*\#include \<iostream\>*  
*\#include \<vector\>*  
*\#include \<algorithm\>*  
*using namespace std;*

*void reverseSegment(vector\<int\>& arr, int start, int end) {*  
    *while (start \< end) {*  
        *int temp \= arr\[start\];*  
        *arr\[start\] \= arr\[end\];*  
        *arr\[end\] \= temp;*  
        *start++;*  
        *end--;*  
    *}*  
*}*

*void rotateArray(vector\<int\>& arr, int n) {*  
    *int len \= arr.size();*  
    *n \= n % len;  // Handle cases where n \> len*

    *// Step 1: Reverse entire array*  
    *reverseSegment(arr, 0, len \- 1);*

    *// Step 2: Reverse first n elements*  
    *reverseSegment(arr, 0, n \- 1);*

    *// Step 3: Reverse remaining elements*  
    *reverseSegment(arr, n, len \- 1);*  
*}*

*int main() {*  
    *vector\<int\> arr \= {1, 2, 3, 4, 5, 6, 7};*  
    *int n \= 3;*  
    *rotateArray(arr, n);*  
    *for (int num : arr) {*  
        *cout \<\< num \<\< " ";*  
    *}*  
    *// Output: 5 6 7 1 2 3 4*  
    *return 0;*  
*}*

**Time Complexity**: O(n)O(n)  
 **Space Complexity**: O(1)O(1)

---

## **2\) Three Sum Problem**

### **Explanation**

You have an array of integers (possibly containing both positive and negative numbers). The goal is to find all unique triplets (a,b,c)(a, b, c) such that a+b+c=0a \+ b \+ c \= 0\.

Example:

* Input: `[-1, 0, 1, 2, -1, -4]`  
* Possible unique solutions: `[[-1, -1, 2], [-1, 0, 1]]`

### **Approach: Sorting & Two-Pointer (Efficient)**

1. Sort the array.  
2. Iterate through the array, fixing one element (say at index *i*).  
3. Use two pointers (*left* and *right*) to find pairs within the subarray `i+1` to `end` that sum up to `-nums[i]`.  
4. If the sum is too small, move *left* pointer forward; if the sum is too large, move *right* pointer backward.  
5. Skip duplicates to ensure unique triplets.

This approach has a time complexity of O(n2)O(n^2), which is more efficient than the brute force approach of O(n3)O(n^3).

### **Pseudocode**

function threeSum(nums):  
    sort(nums)  
    result \= \[\]

    for i in range from 0 to nums.length \- 2:  
        if i \> 0 and nums\[i\] \== nums\[i \- 1\]:  
            continue  // skip duplicates

        left \= i \+ 1  
        right \= nums.length \- 1

        while left \< right:  
            sum \= nums\[i\] \+ nums\[left\] \+ nums\[right\]

            if sum \== 0:  
                add \[nums\[i\], nums\[left\], nums\[right\]\] to result  
                left++  
                right--

                // skip duplicates for left  
                while left \< right and nums\[left\] \== nums\[left \- 1\]:  
                    left++  
                // skip duplicates for right  
                while left \< right and nums\[right\] \== nums\[right \+ 1\]:  
                    right--

            else if sum \< 0:  
                left++  
            else:  
                right--

    return result

---

### **Solution in Java**

import java.util.\*;

public class ThreeSum {  
    public static List\<List\<Integer\>\> threeSum(int\[\] nums) {  
        Arrays.sort(nums);  
        List\<List\<Integer\>\> result \= new ArrayList\<\>();

        for (int i \= 0; i \< nums.length \- 2; i++) {  
            // Skip duplicates  
            if (i \> 0 && nums\[i\] \== nums\[i \- 1\]) {  
                continue;  
            }  
            int left \= i \+ 1, right \= nums.length \- 1;

            while (left \< right) {  
                int sum \= nums\[i\] \+ nums\[left\] \+ nums\[right\];

                if (sum \== 0\) {  
                    result.add(Arrays.asList(nums\[i\], nums\[left\], nums\[right\]));  
                    left++;  
                    right--;

                    // Skip duplicates for left  
                    while (left \< right && nums\[left\] \== nums\[left \- 1\]) {  
                        left++;  
                    }  
                    // Skip duplicates for right  
                    while (left \< right && nums\[right\] \== nums\[right \+ 1\]) {  
                        right--;  
                    }  
                } else if (sum \< 0\) {  
                    left++;  
                } else {  
                    right--;  
                }  
            }  
        }

        return result;  
    }

    public static void main(String\[\] args) {  
        int\[\] nums \= {-1, 0, 1, 2, \-1, \-4};  
        System.out.println(threeSum(nums));   
        // Output: \[\[-1, \-1, 2\], \[-1, 0, 1\]\]  
    }  
}

### **Solution in Python**

def three\_sum(nums):  
    nums.sort()  
    result \= \[\]  
    n \= len(nums)

    for i in range(n \- 2):  
        if i \> 0 and nums\[i\] \== nums\[i \- 1\]:  
            continue  \# skip duplicates  
        left, right \= i \+ 1, n \- 1

        while left \< right:  
            current\_sum \= nums\[i\] \+ nums\[left\] \+ nums\[right\]

            if current\_sum \== 0:  
                result.append(\[nums\[i\], nums\[left\], nums\[right\]\])  
                left \+= 1  
                right \-= 1

                \# Skip duplicates for left  
                while left \< right and nums\[left\] \== nums\[left \- 1\]:  
                    left \+= 1  
                \# Skip duplicates for right  
                while left \< right and nums\[right\] \== nums\[right \+ 1\]:  
                    right \-= 1  
            elif current\_sum \< 0:  
                left \+= 1  
            else:  
                right \-= 1

    return result

if \_\_name\_\_ \== "\_\_main\_\_":  
    nums \= \[-1, 0, 1, 2, \-1, \-4\]  
    print(three\_sum(nums))   
    \# \[\[-1, \-1, 2\], \[-1, 0, 1\]\]

### **Solution in C++**

\#include \<iostream\>  
\#include \<vector\>  
\#include \<algorithm\>  
using namespace std;

vector\<vector\<int\>\> threeSum(vector\<int\>& nums) {  
    vector\<vector\<int\>\> result;  
    sort(nums.begin(), nums.end());  
    int n \= nums.size();

    for (int i \= 0; i \< n \- 2; i++) {  
        if (i \> 0 && nums\[i\] \== nums\[i \- 1\]) {  
            continue;  // skip duplicates  
        }  
        int left \= i \+ 1;  
        int right \= n \- 1;

        while (left \< right) {  
            int sum \= nums\[i\] \+ nums\[left\] \+ nums\[right\];  
            if (sum \== 0\) {  
                result.push\_back({nums\[i\], nums\[left\], nums\[right\]});  
                left++;  
                right--;

                // skip duplicates for left  
                while (left \< right && nums\[left\] \== nums\[left \- 1\]) {  
                    left++;  
                }  
                // skip duplicates for right  
                while (left \< right && nums\[right\] \== nums\[right \+ 1\]) {  
                    right--;  
                }  
            } else if (sum \< 0\) {  
                left++;  
            } else {  
                right--;  
            }  
        }  
    }  
    return result;  
}

int main() {  
    vector\<int\> nums \= {-1, 0, 1, 2, \-1, \-4};  
    vector\<vector\<int\>\> res \= threeSum(nums);  
      
    // Print results  
    for (auto \&triplet : res) {  
        cout \<\< "\[";  
        for (int i \= 0; i \< triplet.size(); i++) {  
            cout \<\< triplet\[i\];  
            if (i \< triplet.size() \- 1\) cout \<\< ", ";  
        }  
        cout \<\< "\] ";  
    }  
    // Output: \[-1, \-1, 2\] \[-1, 0, 1\]  
    return 0;  
}

**Time Complexity**:

* Sorting: O(nlog⁡n)O(n \\log n)  
* Two-pointer traversal: O(n2)O(n^2)  
* Overall: O(n2)O(n^2)

**Space Complexity**: O(1)O(1) auxiliary (not counting the space used for the output).

---

## **3\) Find the Average of an Integer Array**

### **Explanation**

Given an array of integers, determine the average value.  
 For example, if the array is `[10, 20, 30, 40, 50]`, the average is 10+20+30+40+505=30\\frac{10 \+ 20 \+ 30 \+ 40 \+ 50}{5} \= 30\.

### **Approach**

1. Sum all elements in the array.  
2. Divide the sum by the number of elements.  
3. If the array is empty, return 0 to avoid division by zero.

### **Pseudocode**

function findAverage(nums):  
    if nums.length \== 0:  
        return 0

    sum \= 0  
    for each number in nums:  
        sum \+= number

    return sum / nums.length

---

### **Solution in Java**

public class ArrayAverage {  
    public static double findAverage(int\[\] nums) {  
        if (nums.length \== 0\) {  
            return 0;  
        }  
        int sum \= 0;  
        for (int num : nums) {  
            sum \+= num;  
        }  
        return (double) sum / nums.length;  
    }

    public static void main(String\[\] args) {  
        int\[\] nums \= {10, 20, 30, 40, 50};  
        System.out.println("Average: " \+ findAverage(nums));   
        // Output: Average: 30.0  
    }  
}

### **Solution in Python**

def find\_average(nums):  
    if len(nums) \== 0:  
        return 0  
    total \= sum(nums)  
    return total / len(nums)

if \_\_name\_\_ \== "\_\_main\_\_":  
    nums \= \[10, 20, 30, 40, 50\]  
    print("Average:", find\_average(nums))   
    \# 30.0

### **Solution in C++**

\#include \<iostream\>  
\#include \<vector\>  
using namespace std;

double findAverage(const vector\<int\>& nums) {  
    if (nums.empty()) {  
        return 0.0;  
    }  
    long long sum \= 0;  
    for (int num : nums) {  
        sum \+= num;  
    }  
    return static\_cast\<double\>(sum) / nums.size();  
}

int main() {  
    vector\<int\> nums \= {10, 20, 30, 40, 50};  
    cout \<\< "Average: " \<\< findAverage(nums) \<\< endl;  
    // Output: Average: 30  
    return 0;  
}

**Time Complexity**: O(n)O(n)  
 **Space Complexity**: O(1)O(1)

---

## **4\) Replace Even Numbers at Odd Indexes with \-1**

### **Explanation**

Given an array, for every **odd index** ii (i.e., i≡1(mod2)i \\equiv 1 \\pmod{2}), if the element at that index is **even**, replace it with −1-1. All other elements remain unchanged.

Example:

* Input: `[4, 3, 8, 6, 5, 10, 12, 7]`  
* Output: `[4, 3, 8, -1, 5, -1, 12, 7]`

Here,

* Index 1 → element 3 (odd index, but 3 is odd, so no change)  
* Index 3 → element 6 (odd index, even element, replace with \-1)  
* Index 5 → element 10 (odd index, even element, replace with \-1)  
* Index 7 → element 7 (odd index, but 7 is odd, so no change)

### **Approach**

1. Traverse the array by iterating over its indexes.  
2. If an index *i* is odd (`i % 2 != 0`) and `arr[i]` is even, then set `arr[i] = -1`.

### **Pseudocode**

function replaceEvenAtOddIndices(arr):  
    for i from 0 to arr.length \- 1:  
        if (i % 2 \!= 0\) AND (arr\[i\] % 2 \== 0):  
            arr\[i\] \= \-1

---

### **Solution in Java**

import java.util.Arrays;

public class ReplaceOddIndexEven {  
    public static void replaceElements(int\[\] arr) {  
        for (int i \= 1; i \< arr.length; i \+= 2\) {  
            if (arr\[i\] % 2 \== 0\) {  
                arr\[i\] \= \-1;  
            }  
        }  
    }

    public static void main(String\[\] args) {  
        int\[\] nums \= {4, 3, 8, 6, 5, 10, 12, 7};  
        replaceElements(nums);  
        System.out.println(Arrays.toString(nums));  
        // Output: \[4, 3, 8, \-1, 5, \-1, 12, 7\]  
    }  
}

### **Solution in Python**

def replace\_even\_at\_odd\_indices(arr):  
    for i in range(1, len(arr), 2):  
        if arr\[i\] % 2 \== 0:  
            arr\[i\] \= \-1

if \_\_name\_\_ \== "\_\_main\_\_":  
    nums \= \[4, 3, 8, 6, 5, 10, 12, 7\]  
    replace\_even\_at\_odd\_indices(nums)  
    print(nums)  
    \# \[4, 3, 8, \-1, 5, \-1, 12, 7\]

### **Solution in C++**

\#include \<iostream\>  
\#include \<vector\>  
using namespace std;

void replaceEvenAtOddIndices(vector\<int\>& arr) {  
    for (int i \= 1; i \< (int)arr.size(); i \+= 2\) {  
        if (arr\[i\] % 2 \== 0\) {  
            arr\[i\] \= \-1;  
        }  
    }  
}

int main() {  
    vector\<int\> nums \= {4, 3, 8, 6, 5, 10, 12, 7};  
    replaceEvenAtOddIndices(nums);  
      
    for (int val : nums) {  
        cout \<\< val \<\< " ";  
    }  
    // Output: 4 3 8 \-1 5 \-1 12 7  
    return 0;  
}

**Time Complexity**: O(n)O(n)  
 **Space Complexity**: O(1)O(1)

---

