import { Background } from "../../components/Background";
import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function SignUp () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    async function handleSignUp () {
        try {
            if ( !name || !email || !password ) {
                return alert("Preencha todos os campos.")
            }

            api.post("/users", { name, email, password}).then(() => {
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
                        <h1>Welcome back!</h1>
                        <p>Enter your Credentials to access your account</p>
                    </div>

                    <Input 
                        title="Name"
                        onChange={e => setName(e.target.value)}
                    />

                    <Input 
                        title="Email Address"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        title="Password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button 
                        title="Sign In"
                        onClick={handleSignUp}
                    />
                </form>
            </main>

            <Background />
        </Container>
    )
}