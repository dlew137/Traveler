// Function to post a question
function postQuestion() {
    const questionText = document.getElementById('questionInput').value;
    if (questionText === '') return;

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    
    const questionTitle = document.createElement('h3');
    questionTitle.innerText = questionText;
    questionElement.appendChild(questionTitle);

    const answerInput = document.createElement('textarea');
    answerInput.placeholder = 'Type your answer here...';
    questionElement.appendChild(answerInput);

    const answerButton = document.createElement('button');
    answerButton.innerText = 'Submit Answer';
    answerButton.onclick = function() {
        postAnswer(answerInput, questionElement);
    };
    questionElement.appendChild(answerButton);

    document.getElementById('questionsContainer').appendChild(questionElement);

    document.getElementById('questionInput').value = ''; // Clear the question input field
}

// Function to post an answer
function postAnswer(answerInput, questionElement) {
    const answerText = answerInput.value;
    if (answerText === '') return;

    const answerElement = document.createElement('p');
    answerElement.innerText = `Answer: ${answerText}`;
    answerElement.style.fontStyle = "italic";
    questionElement.appendChild(answerElement);

    answerInput.value = ''; // Clear the answer input field
}
