# Short Response Questions

## Question 1: Promise States

What are the three states of a Promise? For each state, explain what it represents and which Promise method (`.then()` or `.catch()`) is used to handle it.

**Your Answer:**
The three states of a Promise are: `pending`, `resolved`, and `rejected`.
1. `pending`, this is the default state a Promise returns. It occurs when the Promise's **response** has not been **resolved** or **rejected**, hence the function is still in process.
2. `resolved` (or **fulfilled**) represents a successful retrieving of the wanted value. This state is handled by the `.then()` method.
3. `rejected` represents the failure of obtaining the wanted value. The method `.catch()` handles this as an error form.

## Question 2: Callback Hell vs. Promise Chaining

Explain why deeply nested callbacks (callback hell) are problematic, and describe how Promise chaining with `.then()` solves this problem.

**Your Answer:** **Callback hell** is problematic because it affects code readability by having several levels of indentation. Promise chaining takes this nesting problem by reducing the indentation issue and having the functions separated handling different data. In addition, a Promise handles all errors with the `.catch()` method instead of checking for errors inside every single nested callback.

## Question 3: Error Handling with `.catch()`

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, what happens? Why is this behavior useful?

**Your Answer:** It's important to note that the callback function a Promise object accepts takes two parameters: `resolve` for success and `reject` for failure. Therefore, when the second `.then()` throws an error, the Promise transitions to the `rejected` state, and the `.catch()` triggered, handling the error. This behavior is useful because it allows us to handle errors in a controlled and organized manner. It also makes the code more readable, easier to debug, and more maintainable.
