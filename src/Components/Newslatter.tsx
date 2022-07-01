import './styles.css'
interface props {
    
}

export default function Newslatter() {
    return(
        <div className="Newslatter-div" >
            <form>
                <input className="Newslatter-input" type="text" placeholder = "Insira seu e-mail" ></input>
                <button className = "Newslatter-button">Assinar Newslatter</button>
            </form>
        </div>
        
    )
}