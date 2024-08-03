import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const questions = [
    {
        id: 1,
        englishQuestion: "What is the English word for 'maçã'?",
        portugueseQuestion: "Qual é a palavra em inglês para 'maçã'?",
        options: ['Apple', 'Orange', 'Banana', 'Grapes'],
        correctAnswer: 'Apple'
      },
      {
        id: 2,
        englishQuestion: "Choose the correct sentence:",
        portugueseQuestion: "Escolha a frase correta:",
        options: [
          'I going to the store.',
          'I go to the store.',
          'I goes to the store.'
        ],
        correctAnswer: 'I go to the store.'
      },
      {
        id: 3,
        englishQuestion: "Fill in the blank: She ____ (to be) a student.",
        portugueseQuestion: "Preencha a lacuna: She ____ (ser) a student.",
        options: ['is', 'are', 'am'],
        correctAnswer: 'is'
      },
      {
        id: 4,
        englishQuestion: "What is the past tense of 'eat'?",
        portugueseQuestion: "Qual é o passado de 'eat'?",
        options: ['ate', 'eaten', 'eats'],
        correctAnswer: 'ate'
      },
      {
        id: 5,
        englishQuestion: "Choose the correct form: He ____ to the gym every day.",
        portugueseQuestion: "Escolha a forma correta: Ele ____ para a academia todos os dias.",
        options: ['go', 'going', 'goes'],
        correctAnswer: 'goes'
      },
      {
        id: 6,
        englishQuestion: "What is the English translation for 'livro'?",
        portugueseQuestion: "Qual é a tradução em inglês para 'livro'?",
        options: ['Book', 'Notebook', 'Pen', 'Desk'],
        correctAnswer: 'Book'
      },
      {
        id: 7,
        englishQuestion: "Identify the mistake: 'She don’t have any questions.'",
        portugueseQuestion: "Identifique o erro: 'She don’t have any questions.'",
        options: ['She don’t have', 'She doesn’t have', 'She not have'],
        correctAnswer: 'She doesn’t have'
      },
      {
        id: 8,
        englishQuestion: "Choose the right question word: ____ is your name?",
        portugueseQuestion: "Escolha a palavra interrogativa certa: ____ é seu nome?",
        options: ['What', 'Where', 'How'],
        correctAnswer: 'What'
      },
      {
        id: 9,
        englishQuestion: "Complete the sentence: They ____ (to be) happy.",
        portugueseQuestion: "Complete a frase: Eles ____ (ser) felizes.",
        options: ['is', 'are', 'am'],
        correctAnswer: 'are'
      },
      {
        id: 10,
        englishQuestion: "Select the correct sentence structure: 'She always ____ to the music.'",
        portugueseQuestion: "Selecione a estrutura de frase correta: 'Ela sempre ____ para a música.'",
        options: ['listens', 'listen', 'listening'],
        correctAnswer: 'listens'
      },
];

export default function Diagnostico() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const router = useRouter()

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });
    return (score / questions.length) * 100;
  };

  const getLevel = (score) => {
    if (score < 60) return 'Beginner Level 1';
    if (score > 50) return 'Beginner Level 2';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex flex-col justify-center items-center p-4">
      <Head>
        <title>Diagnóstico de Inglês</title>
      </Head>

      <main className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        {!showResult ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Saiba o seu Nível
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
            <div className="mb-6">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                {questions[currentQuestion].englishQuestion}
              </p>
              <p className="text-lg text-gray-600 italic mb-4">
                {questions[currentQuestion].portugueseQuestion}
              </p>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full p-3 text-left rounded ${
                      answers[currentQuestion] === option
                        ? 'bg-yellow-200 border-yellow-400'
                        : 'bg-gray-100 hover:bg-gray-200'
                    } border transition duration-150`}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded transition duration-300"
              onClick={handleNext}
            >
              {currentQuestion < questions.length - 1 ? 'Seguir' : 'Ver Resultado'}
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Resultado do Teste</h2>
            <p className="text-xl mb-4">
              Sua pontuação: {calculateScore().toFixed(2)}%
            </p>
            <p className="text-2xl font-semibold mb-6">
              Nível: {getLevel(calculateScore())}
            </p>
            <p className="text-gray-600 mb-5">
              Baseado em suas respostas, você comece o curso em <strong> {getLevel(calculateScore()).toLowerCase()} </strong>.
            </p>
            <button 
      className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
      onClick={() => {router.replace("/dashboard")}}
    >
      Começar Aulas
    </button>
          </div>

        )}
      </main>
    </div>
  );
}