import { useState } from 'react'
import Menu from '../Components/Menu';
import Newslatter from "../Components/Newslatter";

export default function HomePage ( ) {
    const [count, setCount] = useState(0)
    return(
        <div>
            <Menu />
            <Newslatter />
        </div>
    )
}