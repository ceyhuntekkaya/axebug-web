import React, { useState } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Exam1Answer.json');


export default function Quiz1() {
  const [answer, setAnswer] = useState({ ...answerEmpty })

  const setStudentOpenAnswer = (skils, section, queationNumber, value) => {
    const temp = { ...answer };
    temp[skils][section][queationNumber].student = value;
    setAnswer(temp)
  }

  const getSpeechText = (text1, text2, questionNumber) => {
    var similarity = stringSimilarity.compareTwoStrings(clearText(text1), clearText(text2));
    const value = parseInt(similarity)
    setStudentOpenAnswer("speaking", "A", questionNumber, value)
  }

  const clearText = (text) => {
    let newText = text.replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
    newText = newText.toLowerCase();
    return newText;
  }
  return (
    <div>Quiz1</div>
  )
}
