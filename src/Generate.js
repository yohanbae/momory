import React, {useState} from "react"
import styled from "styled-components"

const Result = styled.div`
    height:auto;
    background:lightblue;
    font-size:12px;
`

const InputText = styled.textarea`
    width:100%;
    height:500px;
    resize: none;
    border:2px solid gray;
`

const Generate = () => {
    const [thecode, setThecode] = useState("Question Answer Here")
    const [theresult, setTheresult] = useState("")
    const handleChange = e => {
        setThecode(e.target.value)
    }

    const onGenerate = () => {
        let newnew = thecode.split("NEXTIZONE")

        let meme = ""
        for(let i = 0; i < newnew.length; i++) {
            if(i === 0 || i % 2 == 0) {
                meme += `{question: "${newnew[i]}",`
            } else {
                meme += `answer: "${newnew[i]}" },`
            }
        }

        setTheresult(meme)


        // setTheresult(thecode)
    }

    return (

        <>
        <InputText width={600} height={800} value={thecode} onChange={e => handleChange(e)}></InputText>
        <button onClick={()=> onGenerate()}>Generate</button>
        <Result>{theresult}</Result>
        </>
    )


}

export default Generate