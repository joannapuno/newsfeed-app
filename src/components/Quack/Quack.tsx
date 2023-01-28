
import React, { Component } from 'react'

interface Props {
	id?: number,
	userName?: string,
	content?: string
}

class Quack extends Component<Props> {
	// const [content, setContent] = useState(props.content);

	// const clickHandler = (evt: any) => {
	//     setContent('New Content yay!!')
	//     console.log(evt)
	// }
	// constructor(props: {}) {
  //   super(props);
  // }
	
	render() {

		return (
			<article className="qds-card">
	
				{/* Top header */}
				<div className="qds-card__heading d-flex justify-content-between">
					<div className="quack-details d-flex gap-16">
						<div className="quack-details__user-thumb"></div>
						<div>
							<div className="quack-details__username">
								<p>{ this.props.userName }</p>
							</div>
							<div className="quack-details__timestamp">
								<p>1 minute ago</p>
							</div>
						</div>
					</div>
					<button className="qds-button--neutral">Follow</button>
				</div>
	
				{/* Content */}
				<div className="qds-card__content">
					s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
					{this.props.content}
				</div>
	
				{/* Actions */}
				<div className="qds-actions">
					actions here
				</div>
			</article>
		)
	}

}

export default Quack