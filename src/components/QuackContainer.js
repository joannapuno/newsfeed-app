import Quack from './Quack/Quack'

function QuackContainer() {
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
            userName: "Alatus Xiao",
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

    return(
        <main className="quack-container">
            { quackEls }
        </main>
    )
}

export default QuackContainer