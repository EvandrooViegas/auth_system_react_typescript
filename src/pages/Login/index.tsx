import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Login = () => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = async () => {
        console.log("a")
        if(email && password) {
            const isLogged = await auth.signin(email, password)
            console.log(isLogged)
            if(isLogged) {
                console.log("b")
                navigate("/")
            } else {
                console.log("c")
                alert("Não deu certo")
            }
        }
    }

    return (
        <div>
            <h2>Página Fechada</h2>
            
            <br /><br />
            <span>Email: </span><br />
            <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/> <br /><br />
            
            <span>Password</span> <br />
            <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

            <button onClick={handleLogin}>Fazer Login</button>
        </div>
    )
}