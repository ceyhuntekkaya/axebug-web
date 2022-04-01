import React, { useState } from 'react'
import SpechText from '../components/SpechText';

var stringSimilarity = require("string-similarity");
const answerEmpty = require('./Exam1Answer.json');

export default function Exam1() {
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
        <div>
            AXE EXAM CHAPTER 1

            <div className='container'>

                <div>READING</div>


                <div>A. Read the Passage and answer the questions.</div>
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
                    <input value={answer.reading.A.S1.student} onChange={(e) => setStudentOpenAnswer("reading", "A", "S1", e.target.value)} type="text" />
                </div>
                <div>2. Was Einstein born and raised in Germany?
                    <input value={answer.reading.A.S2.student} onChange={(e) => setStudentOpenAnswer("reading", "A", "S2", e.target.value)} type="text" />
                </div>
                <div>3. Why did he go to America when he was older?
                    <input value={answer.reading.A.S3.student} onChange={(e) => setStudentOpenAnswer("reading", "A", "S3", e.target.value)} type="text" />
                </div>
                <div>4. Which issues did he focus on?
                    <input value={answer.reading.A.S4.student} onChange={(e) => setStudentOpenAnswer("reading", "A", "S4", e.target.value)} type="text" />
                </div>
                <div>5. What do you think ‘Person of the century’ mean?
                    <input value={answer.reading.A.S5.student} onChange={(e) => setStudentOpenAnswer("reading", "A", "S5", e.target.value)} type="text" />
                </div>

                <hr />

                <div className='container'>
                    Multiple choice. Read and choose the best answer.
                    <div className='row'>
                        6. Einstein’s father supported him to ___________________ .


                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer("reading", "A", "S6", "A")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) write books
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer("reading", "A", "S6", "B")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                B) do science activities
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer("reading", "A", "S6", "C")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                C) do drama plays
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as6" onChange={(e) => setStudentOpenAnswer("reading", "A", "S6", "D")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                D) play in sports
                            </label>
                        </div>

                    </div>
                    <div className='row'>
                        7. He became a professor in ___________________ .
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer("reading", "A", "S7", "A")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) England
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer("reading", "A", "S7", "B")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                B) France
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer("reading", "A", "S7", "C")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                C) Germany
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as7" onChange={(e) => setStudentOpenAnswer("reading", "A", "S7", "D")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                D) Spain
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        8. The two types of relativity are ___________________ .
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer("reading", "A", "S8", "A")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) Special relativity and general relativity
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer("reading", "A", "S8", "B")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                B) General relativity and second relativity
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer("reading", "A", "S8", "C")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                C) Second relativity and special relativity
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as8" onChange={(e) => setStudentOpenAnswer("reading", "A", "S8", "D")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                D) Space relativity and general relativity
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        9. General theory focused on ___________________ which express the light bending when it comes to larger objects.
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer("reading", "A", "S9", "A")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) control panels
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer("reading", "A", "S9", "B")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                B) gravitional lensing
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer("reading", "A", "S9", "C")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                C) mass lensing
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as9" onChange={(e) => setStudentOpenAnswer("reading", "A", "S9", "D")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                D) velocity panels
                            </label>
                        </div>
                    </div>
                    <div className='row'>
                        10. Einstein died in ___________________ .
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer("reading", "A", "S10", "A")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                A) 1953
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer("reading", "A", "S10", "B")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                B) 1954
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer("reading", "A", "S10", "C")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                C) 1955
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="as10" onChange={(e) => setStudentOpenAnswer("reading", "A", "S10", "D")} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                D) 1956
                            </label>
                        </div>
                    </div>
                </div>

                <hr />

            </div>
            <div className='container'>
                B. Read the story. Choose a word from the box below. Write the correct word in the blank.
                <br /><br />Michael picked up a plane from the carpet and checked it very carefully. He was amused. ‘This is so nice, I love it! He said to his Uncle George.
                <br /><br />Uncle George lived in Paris. Michael visited him on holidays with his parents. Uncle George was a
                <input className="form-input" type="text" value={answer.reading.B.S1.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S1", e.target.value)} />
                so he had a lot of
                <input className="form-input" type="text" value={answer.reading.B.S2.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S2", e.target.value)} />in his house. Michael loved being here because he loves to hear plane stories and his Uncle’s adventures.
                <br /><br />“Please Uncle, tell me another
                <input className="form-input" type="text" value={answer.reading.B.S3.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S3", e.target.value)} /> tonight!” he said with his hands clapping.
                <br /><br />“All right. I’ll tell you the one in 1995 then...” he said sitting on his couch with his warm cup of tea.
                <br /><br />“You mean the one with the
                <input className="form-input" type="text" value={answer.reading.B.S4.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S4", e.target.value)} />.”
                <br /><br />“Yeah. It was a cold and rainy night in
                <input className="form-input" type="text" value={answer.reading.B.S5.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S5", e.target.value)} />. The tower allowed us to fly so we did. But it was a total
                <input className="form-input" type="text" value={answer.reading.B.S6.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S6", e.target.value)} /> on the plane.”
                <br /><br />“What happened?” he said and Uncle George
                <input className="form-input" type="text" value={answer.reading.B.S7.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S7", e.target.value)} />.
                <br /><br />“We had two people fighting over a lost case at court. I guess they knew eachother from before. They were lawyers. They had knives and tried to
                <input className="form-input" type="text" value={answer.reading.B.S8.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S8", e.target.value)} /> eachother. I was the one to stop them.”
                <br /><br />“But what about the plane? It will crash if you’re not flying it!”
                <br /><br />“That’s why we have
                <input className="form-input" type="text" value={answer.reading.B.S9.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S9", e.target.value)} /> on the plane son!”
                <br /><br />Michael reached to another plane and starting speaking.
                <br /><br />“I want you to tell me more stories. I also want to know more about planes. Maybe I’ll become a pilot one day, just like you. I love you and I want to be like you. You’re a
                <input className="form-input" type="text" value={answer.reading.B.S10.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S10", e.target.value)} /> Uncle!”
                <br /><br />Uncle George wiped his tears from his cheeks and gave his nephew a big
                <input className="form-input" type="text" value={answer.reading.B.S11.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S11", e.target.value)} />. He opened his old cabinet and showed him his
                <input className="form-input" type="text" value={answer.reading.B.S12.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S12", e.target.value)} /> and books about planes. They They spoke and laughed all night until there weren’t any stars left in the
                <input className="form-input" type="text" value={answer.reading.B.S13.student} onChange={(e) => setStudentOpenAnswer("reading", "B", "S13", e.target.value)} /> .

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

            <div className='container'>



                A. Listen and fill in the blanks.

                <br /><br />Dung Beetle: Thank you Axebug. This was an amazing
                <input className="form-input" type="text" value={answer.listening.A.S1.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S1", e.target.value)} />.
                <br /><br />Dung Beetle: Except for the fact that there is no life in outer space
                <input className="form-input" type="text" value={answer.listening.A.S2.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S2", e.target.value)} />.
                <br /><br />
                <input className="form-input" type="text" value={answer.listening.A.S3.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S3", e.target.value)} />: I think there is!
                <br /><br />Dung Beetle: Axebug says there isn’t.
                <input className="form-input" type="text" value={answer.listening.A.S4.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S4", e.target.value)} />.
                <br /><br />Ladybug: He said it only for the solar system.
                <br /><br />Dung Beetle: Yes, she is right.
                <br /><br />
                <input className="form-input" type="text" value={answer.listening.A.S5.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S5", e.target.value)} /> : We don’t know whether there is
                <input className="form-input" type="text" value={answer.listening.A.S6.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S6", e.target.value)} />
                in the unknown places of space.
                <br /><br />Axebug : Anyway, we will
                <input className="form-input" type="text" value={answer.listening.A.S7.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S7", e.target.value)} />. It is time to go back to home.
                <br /><br />Axebug: Could you please check the control panel for me?
                <br /><br />
                <input className="form-input" type="text" value={answer.listening.A.S8.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S8", e.target.value)} />
                : I think now is the best time to talk about it.
                <br /><br />Ladybug : Why?
                <br /><br />Ladybug : You had better
                <input className="form-input" type="text" value={answer.listening.A.S9.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S9", e.target.value)} />.
                <br /><br />Dung Beetle : No way!
                <br /><br />Robug 13 :
                <input className="form-input" type="text" value={answer.listening.A.S10.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S10", e.target.value)} />
                , please help!
                <br /><br />Axebug : It is an emergency call.
                <br /><br />Axebug : Guys!
                <input className="form-input" type="text" value={answer.listening.A.S11.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S11", e.target.value)} />
                Our return home.
                <br /><br />Axebug : I think we found
                <input className="form-input" type="text" value={answer.listening.A.S12.student} onChange={(e) => setStudentOpenAnswer("listening", "A", "S12", e.target.value)} />
                . Wooohooo!!!
                <br /><br />Axebug : Let’s go and find out.

            </div>

            <hr />

            <div className='container'>
                B. Listen and read. Then put the words below in order according to the story. Which one happens first?
                <br /><br /><br /><br />
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
                <br /><br />Axebug: Tell me when you see the "Start" notice on screen.
                <br /><br />Spaceship Computer: I tihnk there is 9 seconds. 8...7...6...5...4...3...2...1... Lanch!
                <br /><br />Axebug: Well... Here we go. Hold tight!

                <br /><br />Launch          1<input className="form-input" type="text" value={answer.listening.B.S1.student} onChange={(e) => setStudentOpenAnswer("listening", "B", "S1", e.target.value)} />
                <br /><br />Control panel   2<input className="form-input" type="text" value={answer.listening.B.S2.student} onChange={(e) => setStudentOpenAnswer("listening", "B", "S2", e.target.value)} />
                <br /><br />ZZZ55           3<input className="form-input" type="text" value={answer.listening.B.S3.student} onChange={(e) => setStudentOpenAnswer("listening", "B", "S43", e.target.value)} />
                <br /><br />Space suits     4<input className="form-input" type="text" value={answer.listening.B.S4.student} onChange={(e) => setStudentOpenAnswer("listening", "B", "S4", e.target.value)} />
                <br /><br />Personal stuff  5<input className="form-input" type="text" value={answer.listening.B.S5.student} onChange={(e) => setStudentOpenAnswer("listening", "B", "S5", e.target.value)} />

            </div>

            <hr />
            <div className='container'>

                <br /><br /><br /><br />A. Read the dialogue and choose the best answer for the blanks. Use the box below.
                <br /><br />1. Dung Beetle : Where did earth go?
                <br /><br />Axebug :
                <input className="form-input" type="text" value={answer.writting.A.S1.student} onChange={(e) => setStudentOpenAnswer("writting", "A", "S1", e.target.value)} />
                <br /><br />2. Axebug: Are you ready for the answer?
                <br /><br />Dung Beetle :
                <input className="form-input" type="text" value={answer.writting.A.S2.student} onChange={(e) => setStudentOpenAnswer("writting", "A", "S2", e.target.value)} />
                <br /><br />3. Ladybug: I’m ready! Let’s find out.
                <br /><br />Axebug :
                <input className="form-input" type="text" value={answer.writting.A.S3.student} onChange={(e) => setStudentOpenAnswer("writting", "A", "S3", e.target.value)} />
                <br /><br />4. Axebug: Close your eyes until i tell you to open them.
                <br /><br />Axebug :
                <input className="form-input" type="text" value={answer.writting.A.S4.student} onChange={(e) => setStudentOpenAnswer("writting", "A", "S4", e.target.value)} />
                <br /><br />5. Dung Beetle: wow! Spectacular.
                <br /><br />Ladybug :
                <input className="form-input" type="text" value={answer.writting.A.S5.student} onChange={(e) => setStudentOpenAnswer("writting", "A", "S5", e.target.value)} />
                <br /><br />6. Dung Beetle: it’s just like i imagined.
                <br /><br />Ladybug :
                <input className="form-input" type="text" value={answer.writting.A.S6.student} onChange={(e) => setStudentOpenAnswer("writting", "A", "S6", e.target.value)} />
                <br /><br /><br /><br />A. Yayy! I’m ready. How about you?
                <br /><br />B. Now open your eyes!
                <br /><br />C. No! It’s impossible.
                <br /><br />D. Don’t panic. It’s right behind us. E1WA1 E. He was right.
                <br /><br />F. All right then... lets hang a left now. But first...
            </div>

            <hr />
            <div className='container'>
                B. Macth a synonym for each word.
                <br /><br />Emergency
                <input className="form-input" type="text" value={answer.writting.B.S1.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S1", e.target.value)} />
                <br /><br />Travel
                <input className="form-input" type="text" value={answer.writting.B.S2.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S2", e.target.value)} />
                <br /><br />Possible
                <input className="form-input" type="text" value={answer.writting.B.S3.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S3", e.target.value)} />
                <br /><br />Amazing
                <input className="form-input" type="text" value={answer.writting.B.S4.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S4", e.target.value)} />
                <br /><br />Transfer
                <input className="form-input" type="text" value={answer.writting.B.S5.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S5", e.target.value)} />
                <br /><br />Cancel
                <input className="form-input" type="text" value={answer.writting.B.S6.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S6", e.target.value)} />
                <br /><br />Rush
                <input className="form-input" type="text" value={answer.writting.B.S7.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S7", e.target.value)} />
                <br /><br />Center
                <input className="form-input" type="text" value={answer.writting.B.S8.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S8", e.target.value)} />
                <br /><br />Right
                <input className="form-input" type="text" value={answer.writting.B.S9.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S9", e.target.value)} />
                <br /><br />Strange
                <input className="form-input" type="text" value={answer.writting.B.S10.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S10", e.target.value)} />
                <br /><br />Master
                <input className="form-input" type="text" value={answer.writting.B.S11.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S11", e.target.value)} />
                <br /><br />Cluttered
                <input className="form-input" type="text" value={answer.writting.B.S12.student} onChange={(e) => setStudentOpenAnswer("writting", "B", "S12", e.target.value)} />


                <br /><br /><br /><br />
                <br /><br /><span>1 -</span>
                Middle
                <br /><br /><span>2 -</span>
                End
                <br /><br /><span>3 -</span>
                Send
                <br /><br /><span>4 -</span>
                Super
                <br /><br /> <span>5 -</span>
                King
                <br /><br /><span> 6-</span>
                Visit
                <br /><br /><span>7 -</span>
                Quick
                <br /><br /><span>8 -</span>
                Sos
                <br /><br /> <span>9 -</span>
                Correct
                <br /><br /><span>10 -</span>
                Right
                <br /><br /><span>11 -</span>
                Weird
                <br /><br /><span>12 -</span>
                Untidy

            </div>
            <hr />
            <div className='container'>
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

            <button>FINISH EXAM</button>
        </div>
    )
}
