
// import React, { useState } from 'react'

function Quack(props: any) {
    // const [content, setContent] = useState(props.content);

    // const clickHandler = (evt: any) => {
    //     setContent('New Content yay!!')
    //     console.log(evt)
    // }



    return(
        <article className="qds-card">
            <div className="qds-card__heading d-flex justify-content-between">
                <div className="quack-details d-flex gap-16">
                    <div className="quack-details__user-thumb"></div>
                    <div>
                        <div className="quack-details__username">
                            <p>Quacksimodo</p>
                        </div>
                        <div className="quack-details__timestamp">
                            <p>1 minute ago</p>
                        </div>
                    </div>
                </div>
                <button className="qds-button--neutral">Follow</button>
            </div>
            <div className="qds-card__content">
            s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
             {props.content}
            </div>
            <div className="qds-actions">
             actions here
            </div>
        </article>
    )
}

export default Quack