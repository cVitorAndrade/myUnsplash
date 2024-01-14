import { Background } from "../../components/Background";
import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";


export function SignUp () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    function handleSignUp () {
        try {
            if ( !name || !email || !password ) {
                return alert("Preencha todos os campos.")
            }

            api.post("/users", { name, email, password }).then(() => {
                alert("Usuário cadastrado com sucesso");
                navigate("/")
            })

        } catch (error) {
            if ( error.response ) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar o cadastro.")
            }
        }
    }

    return(
        <Container>
            <main>
                <form>
                    <div className="header">
                        <h1>Get Started Now</h1>
                    </div>

                    <Input 
                        title="Name"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />

                    <Input 
                        title="Email Address"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        title="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button 
                        title="Sign Up"
                        onClick={handleSignUp}
                    />

                    <p>
                        Have an account?
                        <Link to="/">Sign In</Link>
                    </p>
                </form>
            </main>

            <Background />
        </Container>
    )
}