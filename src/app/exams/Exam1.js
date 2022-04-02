import React, { useState, useEffect } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Exam1Answer.json');

export default function Exam1(props) {
    const [answer, setAnswer] = useState({ ...answerEmpty })
    const [pageNo, setPageNo] = useState(0)
    const [maxPage, setMaxPage] = useState(10)

    const nextPage = () => {
        if (pageNo < maxPage - 2) setPageNo(pageNo + 1)
    }
    const prevPage = () => {
        if (pageNo > 0) setPageNo(pageNo - 1)
    }

    const setStudentOpenAnswer = (skils, section, queationNumber, value, compare) => {
        const temp = { ...answer };
        temp.result[skils][section][queationNumber].student = value;
        let finalScore = temp.result[skils][section][queationNumber].weigth;
        if (compare) {
            var similarity = stringSimilarity.compareTwoStrings(clearText(value), clearText(temp.result[skils][section][queationNumber].answer));
            const finalScore = similarity * parseFloat(temp.result[skils][section][queationNumber].weigth)
            temp.result[skils][section][queationNumber].score = finalScore;
        }
        else {
            temp.result[skils][section][queationNumber].score = finalScore;
        }
        if (finalScore > (temp.result[skils][section][queationNumber].weigth / 10 * 6)) {
            temp.result[skils][section][queationNumber].functionScore = true;
        }
        else {
            temp.result[skils][section][queationNumber].functionScore = false;
        }
        setAnswer(temp)
    }

    const getSpeechText = (text, questionNumber) => {
        setStudentOpenAnswer("speaking", 0, questionNumber, text, true)
    }

    const clearText = (text) => {
        let newText = text.replace(".", "").replace("'", "").replace("!", "").replace(",", "").replace("’", "").replace("?", "").replace("-", "").replace("_", "");
        newText = newText.toLowerCase();
        return newText;
    }




    return (
        <div>
            {
                answer ?
                    <React.Fragment>

                        <h5 className="card-title mt-3">AXE EXAM CHAPTER 1</h5>
                        <div>

                            <div className="alert alert-success mt-3" role="alert">
                                READING
                            </div>
                            <div class="alert alert-dark" role="alert">
                                A. Read the Passage and answer the questions.
                            </div>

                            <div>THE GUY WITH THE CRAZY HAIR</div>
                            <div>
                                Known as the biggest science discoverist. Born and raised in Germany, Einstein was a high leveled student through his life. His father supported him to science activities, discussions and experiments. Researching about new ideas, keeping notes and expanding statements was his thing. “Anyone who has never made a mistake, has never tried anything new” was one of his sayings.
                                <br /><br />When he was young, he met a teacher called Max Talmund. He started having conversations with him, thus Talmund was teaching him how to experiment a lot. Einstein started to be more curious about light due to Talmund’s light experiments. Investigating became a desire to Einstein. “If you can’t explain it to a six year old, you don’t understand it yourself” he said.
                                <br /><br />When he was much older, he became a professor in Germany. Many years later he went to America becauese of political issues. This made him examine more of his theories. He was intrusive about time,space,matter,energy and gravity. He is very special for his “Theory of relativity”.
                                <br /><br />The theory aims to solve problems that classical Physics can not be enough to. Two types of relativity was explained. Special relativity and general relativity.
                                <br /><br />It was revealed in 1905, that things going in the same direction at the same speed are called ‘Inertial frame’. This was special relativity’s concentration. On the other side, general theory focused on gravitional lensing which express the light bending when it comes to larger objects.
                                <br /><br />Einstein’s work was mad and hard to sink in. It is still very significant for the World.
                                <br /><br />We can clearly understand that he was a smart cunning man who thought knowledge is estential to everyone no matter what. He got a Nobel prize too.
                                <br /><br />Einstein died in 1955. He was named "Person of the century" by Time Magazine.
                            </div>
                            <div>Write the answers in the blanks. </div>
                            <div>1. What was his teachers name?
                                <input value={answer.result[0][0][1].student} onChange={(e) => setStudentOpenAnswer(0, 0, 1, e.target.value)} type="text" />
                            </div>
                            <div>2. Was Einstein born and raised in Germany?
                                <input value={answer.result[0][0][2].student} onChange={(e) => setStudentOpenAnswer(0, 0, 2, e.target.value)} type="text" />
                            </div>
                            <div>3. Why did he go to America when he was older?
                                <input value={answer.result[0][0][3].student} onChange={(e) => setStudentOpenAnswer(0, 0, 3, e.target.value)} type="text" />
                            </div>
                            <div>4. Which issues did he focus on?
                                <input value={answer.result[0][0][4].student} onChange={(e) => setStudentOpenAnswer(0, 0, 4, e.target.value)} type="text" />
                            </div>
                            <div>5. What do you think ‘Person of the century’ mean?
                                <input value={answer.result[0][0][5].student} onChange={(e) => setStudentOpenAnswer(0, 0, 5, e.target.value)} type="text" />
                            </div>
                            <hr />

                            <div>

                                <div class="alert alert-dark" role="alert">
                                    B. Multiple choice. Read and choose the best answer.
                                </div>



                                <div className='row'>
                                    6. Einstein’s father supported him to ___________________ .
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer(0, 0, 6, "A")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            A) write books
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer(0, 0, 6, "B")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            B) do science activities
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer(0, 0, 6, "C")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            C) do drama plays
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer(0, 0, 6, "D")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            D) play in sports
                                        </label>
                                    </div>
                                </div>
                                <div className='row'>
                                    7. He became a professor in ___________________ .
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer(0, 0, 7, "A")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            A) England
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer(0, 0, 7, "B")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            B) France
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer(0, 0, 7, "C")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            C) Germany
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer(0, 0, 7, "D")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            D) Spain
                                        </label>
                                    </div>
                                </div>
                                <div className='row'>
                                    8. The two types of relativity are ___________________ .
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer(0, 0, 8, "A")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            A) Special relativity and general relativity
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer(0, 0, 8, "B")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            B) General relativity and second relativity
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer(0, 0, 8, "C")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            C) Second relativity and special relativity
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer(0, 0, 8, "D")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            D) Space relativity and general relativity
                                        </label>
                                    </div>
                                </div>
                                <div className='row'>
                                    9. General theory focused on ___________________ which express the light bending when it comes to larger objects.
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer(0, 0, 9, "A")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            A) control panels
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer(0, 0, 9, "B")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            B) gravitional lensing
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer(0, 0, 9, "C")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            C) mass lensing
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer(0, 0, 9, "D")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            D) velocity panels
                                        </label>
                                    </div>
                                </div>
                                <div className='row'>
                                    10. Einstein died in ___________________ .
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer(0, 0, 10, "A")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            A) 1953
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer(0, 0, 10, "B")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            B) 1954
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer(0, 0, 10, "C")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            C) 1955
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer(0, 0, 10, "D")} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            D) 1956
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div class="alert alert-dark" role="alert">
                                B. Read the story. Choose a word from the box below. Write the correct word in the blank.
                            </div>
                            <br /><br />Michael picked up a plane from the carpet and checked it very carefully. He was amused. ‘This is so nice, I love it! He said to his Uncle George.
                            <br /><br />Uncle George lived in Paris. Michael visited him on holidays with his parents. Uncle George was a
                            <input className="form-input textformat" type="text" value={answer.result[0][1][1].student} onChange={(e) => setStudentOpenAnswer(0, 1, 1, e.target.value)} />
                            so he had a lot of
                            <input className="form-input textformat" type="text" value={answer.result[0][1][2].student} onChange={(e) => setStudentOpenAnswer(0, 1, 2, e.target.value)} />in his house. Michael loved being here because he loves to hear plane stories and his Uncle’s adventures.
                            <br /><br />“Please Uncle, tell me another
                            <input className="form-input textformat" type="text" value={answer.result[0][1][3].student} onChange={(e) => setStudentOpenAnswer(0, 1, 3, e.target.value)} /> tonight!” he said with his hands clapping.
                            <br /><br />“All right. I’ll tell you the one in 1995 then...” he said sitting on his couch with his warm cup of tea.
                            <br /><br />“You mean the one with the
                            <input className="form-input textformat" type="text" value={answer.result[0][1][4].student} onChange={(e) => setStudentOpenAnswer(0, 1, 4, e.target.value)} />.”
                            <br /><br />“Yeah. It was a cold and rainy night in
                            <input className="form-input textformat" type="text" value={answer.result[0][1][5].student} onChange={(e) => setStudentOpenAnswer(0, 1, 5, e.target.value)} />. The tower allowed us to fly so we did. But it was a total
                            <input className="form-input textformat" type="text" value={answer.result[0][1][6].student} onChange={(e) => setStudentOpenAnswer(0, 1, 6, e.target.value)} /> on the plane.”
                            <br /><br />“What happened?” he said and Uncle George
                            <input className="form-input textformat" type="text" value={answer.result[0][1][7].student} onChange={(e) => setStudentOpenAnswer(0, 1, 7, e.target.value)} />.
                            <br /><br />“We had two people fighting over a lost case at court. I guess they knew eachother from before. They were lawyers. They had knives and tried to
                            <input className="form-input textformat" type="text" value={answer.result[0][1][8].student} onChange={(e) => setStudentOpenAnswer(0, 1, 8, e.target.value)} /> eachother. I was the one to stop them.”
                            <br /><br />“But what about the plane? It will crash if you’re not flying it!”
                            <br /><br />“That’s why we have
                            <input className="form-input textformat" type="text" value={answer.result[0][1][9].student} onChange={(e) => setStudentOpenAnswer(0, 1, 9, e.target.value)} /> on the plane son!”
                            <br /><br />Michael reached to another plane and starting speaking.
                            <br /><br />“I want you to tell me more stories. I also want to know more about planes. Maybe I’ll become a pilot one day, just like you. I love you and I want to be like you. You’re a
                            <input className="form-input textformat" type="text" value={answer.result[0][1][10].student} onChange={(e) => setStudentOpenAnswer(0, 1, 10, e.target.value)} /> Uncle!”
                            <br /><br />Uncle George wiped his tears from his cheeks and gave his nephew a big
                            <input className="form-input textformat" type="text" value={answer.result[0][1][11].student} onChange={(e) => setStudentOpenAnswer(0, 1, 11, e.target.value)} />. He opened his old cabinet and showed him his
                            <input className="form-input textformat" type="text" value={answer.result[0][1][12].student} onChange={(e) => setStudentOpenAnswer(0, 1, 12, e.target.value)} /> and books about planes. They They spoke and laughed all night until there weren’t any stars left in the
                            <input className="form-input textformat" type="text" value={answer.result[0][1][13].student} onChange={(e) => setStudentOpenAnswer(0, 1, 13, e.target.value)} /> .
                            <br /><br /><br /><br />
                            Scroll the words into the right blanks.
                            <div>
                                hug hero sky
                                magazines pilot story
                                accident plane toys nodded
                                England
                                nightmare co pilots
                                hurt
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div class="alert alert-dark" role="alert">
                                A. Listen and fill in the blanks.
                            </div>




                            Dung Beetle: Thank you Axebug. This was an amazing
                            <input className="form-input textformat" type="text" value={answer.result[1][0][1].student} onChange={(e) => setStudentOpenAnswer(1, 0, 1, e.target.value)} />.
                            <br /><br />Dung Beetle: Except for the fact that there is no life in outer space
                            <input className="form-input textformat" type="text" value={answer.result[1][0][2].student} onChange={(e) => setStudentOpenAnswer(1, 0, 2, e.target.value)} />.
                            <br /><br />
                            <input className="form-input textformat" type="text" value={answer.result[1][0][3].student} onChange={(e) => setStudentOpenAnswer(1, 0, 3, e.target.value)} />: I think there is!
                            <br /><br />Dung Beetle: Axebug says there isn’t.
                            <input className="form-input textformat" type="text" value={answer.result[1][0][4].student} onChange={(e) => setStudentOpenAnswer(1, 0, 4, e.target.value)} />.
                            <br /><br />Ladybug: He said it only for the solar system.
                            <br /><br />Dung Beetle: Yes, she is right.
                            <br /><br />
                            <input className="form-input textformat" type="text" value={answer.result[1][0][5].student} onChange={(e) => setStudentOpenAnswer(1, 0, 5, e.target.value)} /> : We don’t know whether there is
                            <input className="form-input textformat" type="text" value={answer.result[1][0][6].student} onChange={(e) => setStudentOpenAnswer(1, 0, 6, e.target.value)} />
                            in the unknown places of space.
                            <br /><br />Axebug : Anyway, we will
                            <input className="form-input textformat" type="text" value={answer.result[1][0][7].student} onChange={(e) => setStudentOpenAnswer(1, 0, 7, e.target.value)} />. It is time to go back to home.
                            <br /><br />Axebug: Could you please check the control panel for me?
                            <br /><br />
                            <input className="form-input textformat" type="text" value={answer.result[1][0][8].student} onChange={(e) => setStudentOpenAnswer(1, 0, 8, e.target.value)} />
                            : I think now is the best time to talk about it.
                            <br /><br />Ladybug : Why?
                            <br /><br />Ladybug : You had better
                            <input className="form-input textformat" type="text" value={answer.result[1][0][9].student} onChange={(e) => setStudentOpenAnswer(1, 0, 9, e.target.value)} />.
                            <br /><br />Dung Beetle : No way!
                            <br /><br />Robug 13 :
                            <input className="form-input textformat" type="text" value={answer.result[1][0][10].student} onChange={(e) => setStudentOpenAnswer(1, 0, 10, e.target.value)} />
                            , please help!
                            <br /><br />Axebug : It is an emergency call.
                            <br /><br />Axebug : Guys!
                            <input className="form-input textformat" type="text" value={answer.result[1][0][11].student} onChange={(e) => setStudentOpenAnswer(1, 0, 11, e.target.value)} />
                            Our return home.
                            <br /><br />Axebug : I think we found
                            <input className="form-input textformat" type="text" value={answer.result[1][0][12].student} onChange={(e) => setStudentOpenAnswer(1, 0, 12, e.target.value)} />
                            . Wooohooo!!!
                            <br /><br />Axebug : Let’s go and find out.
                        </div>
                        <hr />
                        <div>



                            <div class="alert alert-dark" role="alert">
                                B. Listen and read. Then put the words below in order according to the story. Which one happens first?

                            </div>




                            <br /><br />Insect Brown: There is a rumour: “It landed on the town square.” And one question: “Have you seen it?”
                            <br /><br />Insect Purple: They say it’s like a huge housefly. Is that right?
                            <br /><br />Butterfly: It would be better if it looked like a butterfly.
                            <br /><br />Mosquito: Look! There it is.
                            <br /><br />Axebug was ready for the take off.
                            <br /><br />He was waiting for the two buddies.
                            <br /><br />Soon, the two buddies appeared in the town square.
                            <br /><br />Dung Beetle: Come on! Of course I had to take them with me. They are my personal stuff.
                            <br /><br />Axebug: Here you are, finally! The spaceship is almost ready. We will set off soon.
                            <br /><br />Axebug: Follow me! Let’s get your clothes changed for the journey.
                            <br /><br />Dung Beetle: Clothes? I have brought some with me.
                            <br /><br />Axebug: Hah hah! You can’t travel to the space in jeans. You need space suits.
                            <br /><br /> Axebug: There is o ne for each of you.
                            <br /><br />Axebug: This is for you.
                            <br /><br />Axebug: And this is yours.
                            <br /><br />Dung Beetle: I think my own pyjamas are more comfortable. But whatever...
                            <br /><br />Axebug: Come on! All aboard.
                            <br /><br />Axebug: We are ready to take off if you are both seated. Can you please check the control panel for me?
                            <br /><br />Dung Beetle: What do you want me to check? This is too complicated.
                            <br /><br />Axebug: Tell me when you see thetart" notice on screen.
                            <br /><br />Spaceship Computer: I tihnk there is 9 seconds. 8...7...6...5...4...3...2...1... Lanch!
                            <br /><br />Axebug: Well... Here we go. Hold tight!
                            <br /><br />Launch          1<input className="form-input textformat" type="text" value={answer.result[1][1][1].student} onChange={(e) => setStudentOpenAnswer(1, 1, 1, e.target.value)} />
                            <br /><br />Control panel   2<input className="form-input textformat" type="text" value={answer.result[1][1][2].student} onChange={(e) => setStudentOpenAnswer(1, 1, 2, e.target.value)} />
                            <br /><br />ZZZ55           3<input className="form-input textformat" type="text" value={answer.result[1][1][3].student} onChange={(e) => setStudentOpenAnswer(1, 1, 43, e.target.value)} />
                            <br /><br />Space suits     4<input className="form-input textformat" type="text" value={answer.result[1][1][4].student} onChange={(e) => setStudentOpenAnswer(1, 1, 4, e.target.value)} />
                            <br /><br />Personal stuff  5<input className="form-input textformat" type="text" value={answer.result[1][1][5].student} onChange={(e) => setStudentOpenAnswer(1, 1, 5, e.target.value)} />
                        </div>
                        <hr />
                        <div>

                            <div class="alert alert-dark" role="alert">
                                A. Read the dialogue and choose the best answer for the blanks. Use the box below.
                            </div>





                            <div className='row'>
                                <div className='col-6'>

                                    1. Dung Beetle : Where did earth go?
                                    <br /><br />Axebug :
                                    <input className="form-input textformat" type="text" value={answer.result[2][0][1].student} onChange={(e) => setStudentOpenAnswer(2, 0, 1, e.target.value)} />
                                    <br /><br />2. Axebug: Are you ready for the answer?
                                    <br /><br />Dung Beetle :
                                    <input className="form-input textformat" type="text" value={answer.result[2][0][2].student} onChange={(e) => setStudentOpenAnswer(2, 0, 2, e.target.value)} />
                                    <br /><br />3. Ladybug: I’m ready! Let’s find out.
                                    <br /><br />Axebug :
                                    <input className="form-input textformat" type="text" value={answer.result[2][0][3].student} onChange={(e) => setStudentOpenAnswer(2, 0, 3, e.target.value)} />
                                    <br /><br />4. Axebug: Close your eyes until i tell you to open them.
                                    <br /><br />Axebug :
                                    <input className="form-input textformat" type="text" value={answer.result[2][0][4].student} onChange={(e) => setStudentOpenAnswer(2, 0, 4, e.target.value)} />
                                    <br /><br />5. Dung Beetle: wow! Spectacular.
                                    <br /><br />Ladybug :
                                    <input className="form-input textformat" type="text" value={answer.result[2][0][5].student} onChange={(e) => setStudentOpenAnswer(2, 0, 5, e.target.value)} />
                                    <br /><br />6. Dung Beetle: it’s just like i imagined.
                                    <br /><br />Ladybug :
                                    <input className="form-input textformat" type="text" value={answer.result[2][0][6].student} onChange={(e) => setStudentOpenAnswer(2, 0, 6, e.target.value)} />


                                </div>
                                <div className='col-6'>
                                    A. Yayy! I’m ready. How about you?
                                    <br /><br />B. Now open your eyes!
                                    <br /><br />C. No! It’s impossible.
                                    <br /><br />D. Don’t panic. It’s right behind us.
                                    <br /><br />E. He was right.
                                    <br /><br />F. All right then... lets hang a left now. But first...
                                </div>
                            </div>




                        </div>
                        <hr />
                        <div>
                            B. Macth a synonym for each word.


                            <table>
                                <tr>
                                    <td>Emergency
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][1].student} onChange={(e) => setStudentOpenAnswer(2, 1, 1, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>1 -</span>Middle </td>
                                </tr>
                                <tr>
                                    <td>Travel
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][2].student} onChange={(e) => setStudentOpenAnswer(2, 1, 2, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>2 -</span>End </td>
                                </tr>
                                <tr>
                                    <td>Possible
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][3].student} onChange={(e) => setStudentOpenAnswer(2, 1, 3, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>3 -</span>Send </td>
                                </tr>
                                <tr>
                                    <td>Amazing
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][4].student} onChange={(e) => setStudentOpenAnswer(2, 1, 4, e.target.value)} />
                                    </td>
                                    <td> <span className='numberBox'>4 -</span>Super </td>
                                </tr>
                                <tr>
                                    <td> Transfer
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][5].student} onChange={(e) => setStudentOpenAnswer(2, 1, 5, e.target.value)} />
                                    </td>
                                    <td> <span className='numberBox'>5 -</span>King </td>
                                </tr>
                                <tr>
                                    <td>Cancel
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][6].student} onChange={(e) => setStudentOpenAnswer(2, 1, 6, e.target.value)} />
                                    </td>
                                    <td> <span className='numberBox'>6-</span>Visit </td>
                                </tr>
                                <tr>
                                    <td>Rush
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][7].student} onChange={(e) => setStudentOpenAnswer(2, 1, 7, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>7 -</span>Quick </td>
                                </tr>
                                <tr>
                                    <td>Center
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][8].student} onChange={(e) => setStudentOpenAnswer(2, 1, 8, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>8 -</span>Sos </td>
                                </tr>
                                <tr>
                                    <td>Right
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][9].student} onChange={(e) => setStudentOpenAnswer(2, 1, 9, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>9 -</span>Correct </td>
                                </tr>
                                <tr>
                                    <td>Strange
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][10].student} onChange={(e) => setStudentOpenAnswer(2, 1, 10, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>10 -</span> Right </td>
                                </tr>
                                <tr>
                                    <td>Master
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][11].student} onChange={(e) => setStudentOpenAnswer(2, 1, 11, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>11 -</span>Weird </td>
                                </tr>
                                <tr>
                                    <td>luttered
                                        <input className="form-input textformat" type="text" value={answer.result[2][1][12].student} onChange={(e) => setStudentOpenAnswer(2, 1, 12, e.target.value)} />
                                    </td>
                                    <td><span className='numberBox'>12 -</span>Untidy</td>
                                </tr>
                            </table>
                        </div>
                        <hr />
                        <div>
                            A. Listen to the audio. Then, repeat the sentences clearly.

                            <div>
                                <SpechText getSpeechText={getSpeechText} questionNumber="S1" />
                            </div>
                            <div>
                                <SpechText getSpeechText={getSpeechText} questionNumber="S2" />
                            </div>
                            <div>
                                <SpechText getSpeechText={getSpeechText} questionNumber="S3" />
                            </div>
                            <div>
                                <SpechText getSpeechText={getSpeechText} questionNumber="S4" />
                            </div>
                        </div>
                        <button onClick={() => props.sendExam(answer)}>FINISH EXAM</button>
                    </React.Fragment>
                    : null
            }
        </div>
    )

}
