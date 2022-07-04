import { Button, Input } from './styled'

interface props {
    
}


export default function Newslatter() {
    return(
        <div className="Newslatter-div" >
            <form>
                <Input type="text" placeholder = "Insira seu e-mail" ></Input>
                <Button Newslatter>Assinar Newslatter</Button>
            </form>
        </div>
        
    )
}