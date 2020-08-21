import React, {useEffect, useState} from "react"
import styled from "styled-components"
import {theGeneral, theHtml, theCss} from "./questions"

const H5 = styled.div`
    height:30px;
    text-align:center;
    font-weight:bold;
    background:lightblue;
    color:white;
    display:grid;
    align-items:center;
    font-family: 'Quicksand', sans-serif;

`
const QuestionBox = styled.div`
    border:2px solid lightblue;
    min-height: calc((100vh - 30px) / 2);
    box-sizing: border-box;
    padding:20px;
    overflow-y: scroll;
    font-family: 'Quicksand', sans-serif;

`

const AnswerBox = styled(QuestionBox)`
    border:2px solid orange;
    padding: 20px 80px;
`

const NextButton = styled.button`
    position: fixed;
    right:20px;
    bottom: 50px;
    width:50px;
    height:50px;
    font-family: 'Quicksand', sans-serif;

`
const PrevButton = styled.button`
    position: fixed;
    left:20px;
    bottom: 50px;
    width:50px;
    height:50px;
    font-family: 'Quicksand', sans-serif;

`

const HideAnswer = styled.div`
    width:100%;
    height:100%;
    display:grid;
    align-items:center;
    justify-content:center;
`

const Side = styled.div`
    position: fixed;
    right: 10px;
    top:10px;
`

const Main = () => {
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [theTotal, setTheTotal] = useState(0)
    const [displayAnswer, setDisplayAnswer] = useState(false)

    useEffect(() => {
        let momo = [...theGeneral, ...theCss, ...theHtml]
        const newData = mixing(momo)
        setQuestions(newData)
        setTheTotal(newData.length)
    }, [])



    const mixing = obj => {
        let total = obj.length;
        let idx = 0;
        let newData = []
        let usedIndex = []
        while (idx < total) {
            let selectIdx = Math.floor(Math.random() * (total)); 
            let checkExist = usedIndex.find(val => val.used === selectIdx)

            if(!checkExist){
                newData.push(obj[selectIdx])
                usedIndex.push({used: selectIdx})
                idx++;
            }
        }
        return newData
    }

    const onNext = () => {
        if(index < theTotal - 1){
            setIndex(index + 1)
            setDisplayAnswer(false)
        }
    }

    const onPrev = () => {
        if(index - 1 >= 0){
            setIndex(index - 1)
            setDisplayAnswer(false)
        }
    }

    const onAnswerBox = () => {
        setDisplayAnswer(!displayAnswer)
    }


    const onGeneral = () => {
        const newData = mixing(theGeneral)
        setQuestions(newData)
        setTheTotal(newData.length)
    }

    const onHtml = () => {
        const newData = mixing(theHtml)
        setQuestions(newData)
        setTheTotal(newData.length)
    }

    const onCss = () => {
        const newData = mixing(theCss)
        setQuestions(newData)
        setTheTotal(newData.length)
    }


    return (
        <div>
            <H5>Smart Memorize {index+1} / {theTotal}</H5>
            <Side>
                <button onClick={()=>onGeneral()}>General</button>
                <button onClick={()=>onHtml()}>Html</button>
                <button onClick={()=>onCss()}>Css</button>
            </Side>
            
            <QuestionBox>
                { questions.length > 0 ? questions[index].question : null }
            </QuestionBox>
            <AnswerBox onClick={()=>onAnswerBox()}>
                { questions.length > 0 ? 
                    displayAnswer ?
                        questions[index].answer
                    : <HideAnswer><b>Tab to see answer</b></HideAnswer>
                : null }
            </AnswerBox>
            <NextButton onClick={()=> onNext()}>NEXT</NextButton>
            <PrevButton onClick={()=> onPrev()}>PREV</PrevButton>

        </div>
    )
}

export default Main