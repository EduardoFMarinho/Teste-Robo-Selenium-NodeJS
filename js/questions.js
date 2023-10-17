function generateMathQuestion() {
  // Randomly generate two numbers between 1 and 100
  let num1 = Math.floor(Math.random() ) + 5;
  let num2 = Math.floor(Math.random() ) + 5;

  // Randomly choose between addition and subtraction
  let operation = Math.random() < 0.5 ? "addition" : "subtraction";
  
  let questionText;
  let correctAnswer;

  if (operation === "addition") {
    questionText = `${num1} + ${num2} = ?`;
    correctAnswer = num1 + num2;
  } else {
    questionText = `${num1} + ${num2} = ?`;
    correctAnswer = num1 + num2;
  }

  // Creating distractor answers
  let options = [
    correctAnswer,
    correctAnswer + Math.floor(Math.random() * 10) + 1,
    correctAnswer - Math.floor(Math.random() * 10) - 1,
    correctAnswer + Math.floor(Math.random() * 5) + 2
  ];

  // Shuffle the options
  options.sort(() => Math.random() - 0.5);

  return {
    numb: 1,
    question: questionText,
    answer: correctAnswer.toString(),
    options: options.map(String)
  };
}

function generateRandomTextQuestion(numb) {
  const texts = [
    "Lorem ipsum",
    "Dolor sit amet",
    "Consectetur adipiscing",
    "Elit sed do",
    "Tempor incididunt",
    "Ut labore et dolore",
    "Magna aliqua"
  ];

  // Seleciona um texto aleatório da lista acima
  let randomText = texts[Math.floor(Math.random() * texts.length)];

  // Remove the correct answer from the array to avoid repetition
  let incorrectTexts = texts.filter(text => text !== randomText);

  // Shuffle the incorrect texts
  incorrectTexts.sort(() => Math.random() - 0.5);

  // Create options with 1 correct and 3 incorrect texts
  let options = [
    randomText,
    incorrectTexts[0],
    incorrectTexts[1],
    incorrectTexts[2]
  ];

  // Shuffle the options
  options.sort(() => Math.random() - 0.5);

  return {
    numb: numb,
    question: `Qual questão contém o texto "${randomText}"?`,
    answer: randomText,
    options: options
  };
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleQuestionOptions(question) {
  shuffleArray(question.options);
  return question;
}

let generatedQuestions = [
  generateMathQuestion(),
  generateRandomTextQuestion(4),
  // Add other generated questions if needed
];

let hardcodedQuestions = [
  shuffleQuestionOptions({
      numb: 2,
      question: "Selecione a etapa que contenha 19?",
      answer: "Vote 19",
      options: [
          "Vote 10",
          "Vote 13",
          "Vote 22",
          "Vote 19"
      ]
  }),
  shuffleQuestionOptions({
      numb: 3,
      question: "Qual elemento contém o texto Selenium?",
      answer: "Esse robô utiliza Selenium",
      options: [
          "Esse robô utiliza Selenium",
          "Esse robô utiliza Python",
          "Esse robô utiliza HTML",
          "Esse robô utiliza Angular"
      ]
  }),
  shuffleQuestionOptions({
      numb: 5,
      question: "Qual o usuário?",
      answer: "Login123",
      options: [
          "Login123",
          "Login456",
          "LoginProd890",
          "Login34535353"
      ]
  }),
  shuffleQuestionOptions({
      numb: 6,
      question: "Qual a senha?",
      answer: "Consegui",
      options: [
          "Senha",
          "Password",
          "26548",
          "Consegui"
      ]
  }),
];

shuffleArray(hardcodedQuestions);

let questions = [...generatedQuestions, ...hardcodedQuestions];

// Make sure the 'numb' property is in correct order
questions.forEach((q, index) => {
  q.numb = index + 1;
});