**Question 1: Checking Rotated Palindrome**

#### **Problem Statement:**

You are given a sequence of numbers. When you rotate the paper 180°, the sequence should still appear valid and readable. The validation follows these rules:

1. The sequence must contain only specific characters (0, 1, 6, 8, 9). If any other characters are present, return `false`.  
2. After rotation, the sequence should match the original with the following transformations:  
   * 6 transforms into 9 (and vice versa).  
   * 0, 1, and 8 remain unchanged.

#### **Approach:**

1. **Validating the Sequence:**  
   * Ensure that the input sequence contains only the allowed characters: '0', '1', '6', '8', and '9'.  
   * If any other character appears, return `false` immediately.  
2. **Checking the Rotated Palindrome Property:**  
   * Use a **two-pointer technique**: one pointer starts at the beginning (`left`), and another starts at the end (`right`).  
   * Compare characters while moving towards the center of the sequence.  
   * Apply rotation rules:  
     * '6' should match '9' (and vice versa).  
     * '0', '1', and '8' should match themselves.  
   * If any mismatches occur, return `false`.  
3. **Final Decision:**  
   * If all characters match their rotated counterparts, return `true`.

#### **Pseudocode:**

*function isValidNumber(sequence):*

    *allowed\_chars \= {'0', '1', '6', '8', '9'}*

    *for char in sequence:*

        *if char not in allowed\_chars:*

            *return false*

    *return true*

*function isRotatedPalindrome(sequence):*

    *if not isValidNumber(sequence):*

        *return false*

    *left \= 0*

    *right \= length(sequence) \- 1*

    *while left \<= right:*

        *if not isValidRotation(sequence\[left\], sequence\[right\]):*

            *return false*

        *left++*

        *right--*

    *return true*

#### **Java Code:**

*public class RotatedPalindromeChecker {*

    *public static boolean isValidNumber(String number) {*

        *for (char ch : number.toCharArray()) {*

            *if (ch \!= '0' && ch \!= '1' && ch \!= '6' && ch \!= '8' && ch \!= '9') {*

                *return false;*

            *}*

        *}*

        *return true;*

    *}*

    *public static boolean isRotatedPalindrome(String number) {*

        *if (\!isValidNumber(number)) {*

            *return false;*

        *}*

        *int left \= 0, right \= number.length() \- 1;*

        *while (left \<= right) {*

            *char leftChar \= number.charAt(left);*

            *char rightChar \= number.charAt(right);*

            *if ((leftChar \== '0' && rightChar \!= '0') ||*

                *(leftChar \== '1' && rightChar \!= '1') ||*

                *(leftChar \== '8' && rightChar \!= '8') ||*

                *(leftChar \== '6' && rightChar \!= '9') ||*

                *(leftChar \== '9' && rightChar \!= '6')) {*

                *return false;*

            *}*

            *left++;*

            *right--;*

        *}*

        *return true;*

    *}*

    *public static void main(String\[\] args) {*

        *String\[\] testCases \= {"69", "88", "818", "96", "609", "123", "689"};*

        *for (String test : testCases) {*

            *System.out.println("Sequence: " \+ test \+ " \-\> " \+ isRotatedPalindrome(test));*

        *}*

    *}*

*}*

---

### **Question 2: Print First 10 Even Multiples of 5**

#### **Problem Statement:**

Find and print the first 10 numbers that are both even and multiples of 5\.

#### **Approach:**

* An even multiple of 5 follows the formula `n * 1`, where `n` starts from 1`0`.  
* Use a loop to generate and print 10 such values.  
* **Implementation:**  
  * Use a loop to iterate 10 times.  
  * Print `n * 10` in each iteration.

#### **Pseudocode:**

*for i \= 1 to 10:*

    *print(i \* 10\)*

#### **Java Code:**

*public class EvenMultiplesOfFive {*

    *public static void main(String\[\] args) {*

        *System.out.println("First 10 even multiples of 5:");*

        *for (int i \= 1; i \<= 10; i++) {*

            *System.out.println(i \* 10);*

        *}*

    *}*

*}*

---

### **Question 3: Count Vowels in a String**

#### **Problem Statement:**

Count and return the number of vowels (a, e, i, o, u) in a given string.

#### **Approach:**

* Convert the string to lowercase toensure uniformity when checking vowels handle case insensitivity.  
* Iterate through each character and check if it is a vowel.  
* Maintain a counter and return the final count.  
* **Iterating Through the String:**  
  * Use a loop to traverse the string character by character.  
  * Check if each character belongs to the set of vowels {'a', 'e', 'i', 'o', 'u'}.  
  * Maintain a counter to count occurrences of vowels.  
* **Returning the Count:**  
  * After iterating through the entire string, return the final count of vowels.

#### **Pseudocode:**

*function countVowels(str):*

    *count \= 0*

    *vowels \= {'a', 'e', 'i', 'o', 'u'}*

    *for char in str:*

        *if char in vowels:*

            *count++*

    *return count*

#### **Java Code:**

*public class VowelCounter {*

    *public static void main(String\[\] args) {*

        *String input \= "Hello World\!";*

        *System.out.println("Number of vowels: " \+ countVowels(input));*

    *}*

    *public static int countVowels(String str) {*

        *int count \= 0;*

        *str \= str.toLowerCase();*

        *for (char ch : str.toCharArray()) {*

            *if (ch \== 'a' || ch \== 'e' || ch \== 'i' || ch \== 'o' || ch \== 'u') {*

                *count++;*

            *}*

        *}*

        *return count;*

    *}*

*}*

---

### **Question 4: Replace Vowels at Even Positions with '\*'**

#### **Problem Statement:**

Modify a given string by replacing vowels at even positions with `*`.

#### **Approach:**

1. **Convert the string into a character array** to allow modifications.  
2. **Define the set of vowels** ('a', 'e', 'i', 'o', 'u') and their uppercase equivalents.  
3. **Loop through the characters** and check for vowels at even positions (1-based indexing).  
4. **Replace such vowels with '\*'** and return the modified string.

#### **Pseudocode:**

*function replaceVowelsAtEvenPositions(str):*

    *chars \= list(str)*

    *vowels \= {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}*

    *for i in range(1, length(chars), 2):*

        *if chars\[i\] in vowels:*

            *chars\[i\] \= '\*'*

    *return join(chars)*

#### **Java Code:**

*public class ReplaceVowelsAtEvenPositions {*

    *public static void main(String\[\] args) {*

        *String input \= "Hello World";*

        *System.out.println("Modified String: " \+ replaceVowels(input));*

    *}*

    *public static String replaceVowels(String str) {*

        *char\[\] chars \= str.toCharArray();*

        *String vowels \= "aeiouAEIOU";*

        *for (int i \= 1; i \< chars.length; i \+= 2\) {*

            *if (vowels.indexOf(chars\[i\]) \!= \-1) {*

                *chars\[i\] \= '\*';*

            *}*

        *}*

        *return new String(chars);*

    *}*

*}*

---

### 

### **Question 5: Find Factorial Using Iteration and Recursion**

#### **Problem Statement:**

Find the factorial of a given number using both iterative and recursive methods.

#### **Approach:**

1. **Iterative Method:**  
   * Use a loop to multiply numbers from `1` to `n`.  
   * Store the result in a variable and return it.  
2. **Recursive Method:**  
   * Define the base case (`n == 0` or `n == 1`, return `1`).  
   * Call the function recursively for `n-1` and multiply with `n`.

#### **Pseudocode:**

*function factorialIterative(n):*

    *result \= 1*

    *for i in range(1, n+1):*

        *result \*= i*

    *return result*

*function factorialRecursive(n):*

    *if n \== 0 or n \== 1:*

        *return 1*

    *return n \* factorialRecursive(n \- 1\)*

#### **Java Code:**

*public class FactorialExample {*

    *public static void main(String\[\] args) {*

        *int number \= 5;*

        *System.out.println("Factorial (Iterative): " \+ factorialIterative(number));*

        *System.out.println("Factorial (Recursive): " \+ factorialRecursive(number));*

    *}*

    *public static int factorialIterative(int n) {*

        *int result \= 1;*

        *for (int i \= 1; i \<= n; i++) {*

            *result \*= i;*

        *}*

        *return result;*

    *}*

    *public static int factorialRecursive(int n) {*

        *if (n \== 0 || n \== 1\) return 1;*

        *return n \* factorialRecursive(n \- 1);*

    *}*

*}*

