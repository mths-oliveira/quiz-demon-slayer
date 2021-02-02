import React, { useEffect, useState } from "react";
import { Lottie } from "@crello/react-lottie";

import Widget from "../../components/Widget";
import QuizLogo from "../../components/QuizLogo";
import QuizBackground from "../../components/QuizBackground";
import QuizContainer from "../../components/QuizContainer";
import AlternativesForm from "../../components/AlternativesForm";
import Button from "../../components/Button";
import BackLinkArrow from "../../components/BackLinkArrow";

import loadingAnimation from "./animations/loading.json";
import { useRouter } from "next/router";

function ResultWidget({ results }) {
  const { query } = useRouter();
  return (
    <Widget>
      <Widget.Header>
        <h1>Parabéns {query.name}!</h1>
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou {results.filter((result) => result).length} de{" "}
          {results.length} questões.
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              Questão {index + 1 > 10 ? index + 1 : `0${index + 1}`} -{" "}
              {result === true ? "Acertou" : "Errou"}
            </li>
          ))}
        </ul>
        <br />
        <div
          style={{
            width: "fit-content",
            margin: "0 auto",
            boxShadow: "0 3px 8px 0 rgba(0,0,0,.4)",
            borderRadius: "50%",
            padding: "6px",
          }}
        >
          <BackLinkArrow href="/" />
        </div>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando...</h1>
      </Widget.Header>

      <Widget.Content style={{ display: "flex", justifyContent: "center" }}>
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <div style={{ width: "fit-content", padding: " 0 6px 0 12px" }}>
          <BackLinkArrow href="/" />
        </div>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          margin: "0 1%",
          width: "98%",
          height: "180px",
          objectFit: "cover",
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <br />
        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1.5 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: "none" }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};
export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

  function addResult(result) {
    setResults([...results, result]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.LOADING);
      setTimeout(() => setScreenState(screenStates.RESULT), 2 * 1000);
    }
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} />
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
