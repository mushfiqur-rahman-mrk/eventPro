<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B?

<i>In the first line,  declared a variable named greeting but didn't assign any value to it.
 it will throw a ReferenceError since the variable is not properly declared.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C?

<i>The sum function takes two parameters a and b and returns their sum using the + operator.
When  call sum(1, "2"), JavaScript performs type coercion and converts the number 1 to a string to make the operation possible, resulting in the concatenation of the strings "1" and "2" to give "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A?

<i>The food array is defined with initial values "🍕", "🍫", "🥑", "🍔".
The info object is created with a property favoriteFood set to the first element of the food array, which is "🍕".
Later,  change the value of info.favoriteFood to "🍝", but this does not modify the original food array.
 for this reason it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔']</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B?

<i> 
no argument is provided when the sayHi is called.
In JavaScript, when a function is called with missing arguments, the missing parameters are assigned the value undefined. Therefore, the result is "Hi there, undefined" because name is not passed a value in the function call.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C?

<i>The forEach method iterates over each element in the nums array.
The callback function (num) => { if (num) count += 1; } increments the count variable only when the current element num is truthy. In JavaScript, 0 is considered falsy, and all other numbers are truthy.
Therefore, only the elements 1, 2, and 3 will increment the count. The final value of count is 3.  </i>

</p>
</details>