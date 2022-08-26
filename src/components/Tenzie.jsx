import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Dice from './Dice'
import Confetti from 'react-confetti'

const Tenzie = () => {
    
    const [ dice, setDice ] = useState(allNewDice)
    const [ complete, setComplete ] = useState(false)
    const [ counter, setCounter ] = useState(0)
    const [ width, setWidth ] = useState(window.innerWidth)

    useEffect(() => {
        const allPick = dice.every(die => die.isPick)
        const firstValue = dice[0].value
        const allSame = dice.every(die => die.value === firstValue)

        if(allPick && allSame) {
            setComplete(true)
            setCounter(0)
        }

        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, [dice])


    function newDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isPick: false
        }
    }

    function allNewDice() {

        const randomNumber = []

        for( let i = 0; i < 10; i++ ) {
            randomNumber.push(newDie())
        }

        return randomNumber
    }

    function rollDice() {

        if(!complete) {
            setDice(prevDie => prevDie.map(die => {
                return die.isPick ? die : newDie()
            }))
            setCounter(prevCounter => prevCounter += 1)
        } else {
            setDice(allNewDice)
            setComplete(false)
            setCounter(0)
        }

    }

    function pick(id) {
        setDice(prevDie => prevDie.map(die => {
            return die.id === id ? {...die, isPick: !die.isPick} : die
        }))
    }

    const height = window.innerHeight

  return (
    <div className='w-full h-screen bg-sky-800 flex items-center justify-center px-2'>
        {complete && <Confetti width={width} height={height} />}
        <div className="w-[700px] bg-white rounded-lg p-5 lg:p-12">
            <h1 className='text-center text-4xl lg:text-5xl font-bold'>Tenzies</h1>
			<p className="text-center text-lg md:text-xl lg:text-2xl leading-relaxed mt-6 text-gray-800">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            
            <div className="grid grid-cols-5 gap-5 justify-items-center my-10">
                { dice.map(die => <Dice key={die.id} {...die} pick={(id) => pick(die.id)} /> ) }
            </div>
            
            <div className="text-center">
                <button onClick={rollDice} className={complete ? 'bg-green-400 text-xl px-7 text-zinc-900 rounded py-2' : 'bg-violet-400 text-xl px-7 text-zinc-900 rounded py-2'}>{complete ? 'New Game' : 'Roll'}</button>
            </div>
            <p className='mt-3'>Roll Count: <span className='font-bold'>{counter}</span></p>
        </div>
    </div>
  )
}

export default Tenzie