import { useState } from 'react'
import Newslatter from "../Components/Newslatter";

const [count, setCount] = useState(0)

export default function HomePage ( ) {
    return(
        <div className="">
        <Newslatter />
        </div>
    )
}