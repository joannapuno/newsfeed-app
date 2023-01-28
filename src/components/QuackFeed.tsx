import React, { Component } from 'react'
import Quack from './Quack/Quack'

class QuackContainer extends Component {
	render() {
		const quackList = [
			{
				id: 1,
				userName: "Quacksimodo",
				content: "Content 1"
			},
			{
				id: 2,
				userName: "Anya Foger",
				content: "Content 2"
			},
			{
				id: 3,
				userName: "Alatus Xiao 1",
				content: "Content 3"
			},
			{
				id: 4,
				userName: "Alatus Xiao 2",
				content: "Content 3"
			},
			{
				id: 5,
				userName: "Alatus Xiao 3",
				content: "Content 3"
			},
			{
				id: 6,
				userName: "Alatus Xiao 4",
				content: "Content 3"
			}
		]
	
		const quackEls = quackList.map(quack => {
			return (
				<Quack
					key={quack.id}
					userName={quack.userName}
					content={quack.content} />
			)
		})
	
		return (
			<main className="content">
				{quackEls}
			</main>
		)
	}
}

export default QuackContainer