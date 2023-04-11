function gradeQuiz(
  numQuestions: number,
  key: number[],
  answers: number[]
): void {
  let correct: number = 0;

  for (let i: number = 0; i < numQuestions; i++) {
    if (key[i] === answers[i]) {
      correct++;
    }
  }

  const percentCorrect: number = (correct / numQuestions) * 100;

  console.log(`Number correct: ${correct} out of ${numQuestions}`);
  console.log(`Percent correct: ${percentCorrect}%`);
}

const quiz1NumQuestions: number = 10;
const quiz1Key: number[] = [34, 7, 13, 100, 81, 3, 9, 10, 321, 12];
const quiz1Answers: number[] = [34, 7, 13, 100, 81, 3, 9, 10, 321, 12];
console.log("Quiz 1:");
gradeQuiz(quiz1NumQuestions, quiz1Key, quiz1Answers);

const quiz2NumQuestions: number = 5;
const quiz2Key: number[] = [1, 2, 3, 4, 5];
const quiz2Answers: number[] = [1, 2, 3, 5, 5];
console.log("Quiz 2:");
gradeQuiz(quiz2NumQuestions, quiz2Key, quiz2Answers);
