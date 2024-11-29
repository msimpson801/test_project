import React, {createContext, useContext, useState} from "react";

const CountContext = createContext(null)


function SuperDuperProvider({children}) {
    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}


function CoolApp() {


    return (
        <div>
            <SuperDuperProvider>
                <ExampleComponent1 />
                <ExampleComponent2 />
            </SuperDuperProvider>
        </div>
    )
}


function ExampleComponent1() {
    const {count, setCount} = useContext(CountContext)
    console.count("I re-render example 1")

    return (
        <>
            <div>Count is: {count}</div>
            <button onClick={() => setCount(prevState => prevState + 1)}>Update count</button>

        </>
    )

}


function ExampleComponent2() {
    console.count("I re-render example 2")

    return (
        <>
            <h6>I don't use count</h6>
        </>
    )

}


export default function ContextMessAround(){
    return <CoolApp />
}