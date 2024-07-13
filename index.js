const quizzes = {
    java: [
        { question: "What is the purpose of the `main` method in a Java application?", options: ["To initialize instance variables", "To handle exceptions", "To serve as the entry point for the application", "To execute multiple threads"], correctAnswer: 2 },
        { question: "Which of the following is not a Java keyword?", options: ["final", "volatile", "main", "synchronized"], correctAnswer: 2 },
        { question: "What will be the output of the following code snippet?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        int y = 10;\n        System.out.println(x > y ? x : y);\n    }\n}\n```", options: ["5", "10", "true", "false"], correctAnswer: 1 },
        { question: "Which of the following statements is true about constructors in Java?", options: ["Constructors have the same name as the class", "Constructors can return a value", "Constructors are inherited by subclasses", "Constructors can be abstract"], correctAnswer: 0 },
        { question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        String str1 = \"Java\";\n        String str2 = \"Java\";\n        System.out.println(str1 == str2);\n    }\n}\n```", options: ["true", "false", "Compilation error", "Runtime error"], correctAnswer: 0 },
        { question: "Which collection class allows you to grow or shrink its size and provides indexed access to its elements but is not synchronized?", options: ["java.util.HashSet", "java.util.LinkedList", "java.util.ArrayList", "java.util.Vector"], correctAnswer: 2 },
        { question: "What does the `finally` block do in exception handling?", options: ["It executes only if an exception is thrown", "It executes only if no exception is thrown", "It executes regardless of whether an exception is thrown or not", "It must execute before the `catch` block"], correctAnswer: 2 },
        { question: "Which of the following is a marker interface?", options: ["java.util.List", "java.io.Serializable", "java.lang.Comparable", "java.util.Comparator"], correctAnswer: 1 },
        { question: "What is the difference between `==` and `equals()` in Java?", options: ["`==` compares object references, while `equals()` compares object content", "`==` compares object content, while `equals()` compares object references", "Both `==` and `equals()` compare object content", "Both `==` and `equals()` compare object references"], correctAnswer: 0 },
        { question: "Which of the following is not a valid way to create a thread in Java?", options: ["Extending the `Thread` class", "Implementing the `Runnable` interface", "Using the `Callable` interface", "Using the `ExecutorService` interface directly"], correctAnswer: 3 }
    ],
    js: [
        { question: "Which of the following is a correct way to declare a variable in JavaScript?", options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"], correctAnswer: 3 },
        { question: "What is the output of the following code?\n\n```javascript\nconsole.log(typeof null);\n```", options: ["null", "undefined", "object", "number"], correctAnswer: 2 },
        { question: "Which method converts a JSON string into a JavaScript object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.convert()"], correctAnswer: 0 },
        { question: "What is the purpose of the `addEventListener` method in JavaScript?", options: ["To add a new HTML element to the DOM", "To trigger a callback function when an event occurs", "To remove an event listener from an element", "To log an event to the console"], correctAnswer: 1 },
        { question: "Which of the following is not a valid JavaScript data type?", options: ["Number", "String", "Boolean", "Character"], correctAnswer: 3 },
        { question: "What will be the output of the following code?\n\n```javascript\nconsole.log(0.1 + 0.2 === 0.3);\n```", options: ["true", "false", "undefined", "TypeError"], correctAnswer: 1 },
        { question: "Which keyword is used to create a class in JavaScript?", options: ["function", "class", "constructor", "object"], correctAnswer: 1 },
        { question: "What is the purpose of the `Promise` object in JavaScript?", options: ["To handle synchronous code execution", "To handle asynchronous operations", "To handle exceptions", "To create new objects"], correctAnswer: 1 },
        { question: "Which array method is used to add elements to the end of an array in JavaScript?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0 },
        { question: "What does the `this` keyword refer to in JavaScript?", options: ["The global object", "The current function", "The current object", "The parent object"], correctAnswer: 2 }
    ],
    python: [
        { question: "Which of the following is a correct way to create a function in Python?", options: ["function myFunc():", "def myFunc():", "func myFunc():", "create myFunc():"], correctAnswer: 1 },
        { question: "What is the output of the following code?\n\n```python\nprint(type([]))\n```", options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"], correctAnswer: 0 },
        { question: "Which of the following is a mutable data type in Python?", options: ["str", "int", "list", "tuple"], correctAnswer: 2 },
        { question: "What does the `len()` function do in Python?", options: ["Returns the length of a list or string", "Returns the length of a dictionary", "Returns the length of a tuple", "All of the above"], correctAnswer: 3 },
        { question: "What will be the output of the following code?\n\n```python\nprint(2 ** 3)\n```", options: ["5", "6", "8", "9"], correctAnswer: 2 },
        { question: "Which of the following statements is used to handle exceptions in Python?", options: ["try...except", "try...catch", "try...handle", "try...resolve"], correctAnswer: 0 },
        { question: "What is the purpose of the `self` keyword in Python?", options: ["To refer to the current class", "To refer to the current object", "To refer to the parent class", "To refer to a global variable"], correctAnswer: 1 },
        { question: "Which of the following is used to import a module in Python?", options: ["import module_name", "include module_name", "using module_name", "require module_name"], correctAnswer: 0 },
        { question: "What will be the output of the following code?\n\n```python\nprint('Hello' + 'World')\n```", options: ["Hello World", "HelloWorld", "Hello+World", "Syntax Error"], correctAnswer: 1 },
        { question: "Which of the following is not a keyword in Python?", options: ["pass", "lambda", "eval", "raise"], correctAnswer: 2 }
    ],
    cPlusPlus: [
        { question: "Which of the following is the correct way to define a function in C++?", options: ["function myFunc() {}", "def myFunc() {}", "void myFunc() {}", "func myFunc() {}"], correctAnswer: 2 },
        { question: "What is the output of the following code?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << x++ << endl;\n    return 0;\n}\n```", options: ["10", "11", "undefined", "Compilation error"], correctAnswer: 0 },
        { question: "Which of the following is not a feature of C++?", options: ["Object-oriented programming", "Platform independence", "Multiple inheritance", "Operator overloading"], correctAnswer: 1 },
        { question: "What does the `new` keyword do in C++?", options: ["Creates a new variable", "Allocates memory dynamically", "Deletes a variable", "Initializes an object"], correctAnswer: 1 },
        { question: "Which of the following is used to define a constant in C++?", options: ["const", "constant", "define", "static"], correctAnswer: 0 },
        { question: "What will be the output of the following code?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 2;\n    cout << a / b << endl;\n    return 0;\n}\n```", options: ["2", "2.5", "2.0", "Compilation error"], correctAnswer: 0 },
        { question: "Which of the following is a correct way to declare a pointer in C++?", options: ["int ptr;", "int *ptr;", "int &ptr;", "int ptr*;"], correctAnswer: 1 },
        { question: "What is the use of the `virtual` keyword in C++?", options: ["To create a new variable", "To define a virtual function", "To allocate memory", "To delete a variable"], correctAnswer: 1 },
        { question: "Which of the following is used to handle exceptions in C++?", options: ["try...catch", "try...handle", "try...resolve", "try...error"], correctAnswer: 0 },
        { question: "What will be the output of the following code?\n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    cout << arr[2] << endl;\n    return 0;\n}\n```", options: ["1", "2", "3", "4"], correctAnswer: 2 }
    ]
};
// const quizzes = {
//     // ... (Your quiz data goes here)
// };

let currentQuiz = '';
let currentIndex = 0;
let score = 0;
let startTime = null;
let endTime = null;
let quizTimer = null;
let optionClicked = false; // Flag to track if an option was clicked

function startQuiz(quizId) {
    currentQuiz = quizId;
    currentIndex = 0;
    score = 0;
    startTime = new Date().getTime(); // Start the timer
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    // Update the question and options on the page
    // This will depend on your HTML structure
    const questionElement = document.getElementById('quiz-question');
    const optionsElement = document.getElementById('quiz-options');
    questionElement.textContent = quizzes[currentQuiz][currentIndex].question;
    optionsElement.innerHTML = '';

    quizzes[currentQuiz][currentIndex].options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('quiz-option');
        optionDiv.dataset.value = index;
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', handleOptionClick); // Attach click handler to each option
        optionsElement.appendChild(optionDiv);
    });

    updateNavigationButtons();
}

function handleOptionClick(e) {
    const selectedOption = parseInt(e.target.dataset.value);
    const correctAnswer = quizzes[currentQuiz][currentIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentIndex++;
    optionClicked = true; // Set the flag indicating an option was clicked
    if (currentIndex < quizzes[currentQuiz].length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    if (currentIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentIndex === quizzes[currentQuiz].length - 1 || optionClicked) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

function startTimer() {
    clearInterval(quizTimer);
    quizTimer = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeElapsed = currentTime - startTime;
        const timeLimit = 600000; // 10 minutes in milliseconds
        if (timeElapsed >= timeLimit) {
            endQuiz();
        }
    }, 1000); // Check every second
}

function endQuiz() {
    clearInterval(quizTimer);
    displayScore();
}

function displayScore() {
    const totalQuestions = quizzes[currentQuiz].length;
    const correctAnswers = score;
    const percentageCorrect = Math.round((correctAnswers / totalQuestions) * 100);

    // Display the score in an alert dialog or any other preferred method
    alert(`Your score is ${percentageCorrect}% (${correctAnswers} out of ${totalQuestions})`);
}

// Event listener for the "Next" button
document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex < quizzes[currentQuiz].length) {
        displayQuestion();
    } else {
        endQuiz();
    }
    optionClicked = false; // Reset the flag since the user manually moved to the next question
});

// Event listener for the "Prev" button
document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex--;
    displayQuestion();
});

// Event listener for the "Submit" button
document.getElementById('submit-btn').addEventListener('click', function() {
    endQuiz();
});

// Start the quiz when the page loads or when a start button is clicked
// For example: startQuiz('java');