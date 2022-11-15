
import React, { useState } from 'react'

function Quack(props) {
    const [content, setContent] = useState(props.content);

    const clickHandler = () => {
        setContent('New Content yay!!')
    }



    return(
        <article className="card-quack" onClick={clickHandler}>
            {props.userName}
            {content}
        </article>
    )
}

export default Quack