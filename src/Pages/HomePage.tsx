import { useState } from 'react'
import Menu from '../Components/Menu';
import Newslatter from "../Components/Newslatter/Newslatter";

export default function HomePage ( ) {
    const [count, setCount] = useState(0)
    return(
        <main>
            <Menu />
            <Newslatter />
        </main>
    )
}