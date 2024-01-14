import { Background } from "../../components/Background";
import { Container } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn () {
        signIn({ email, password })
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
                        title="Email Address"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        title="Password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button 
                        title="Sign In"
                        onClick={handleSignIn}
                    />
                </form>
            </main>

            <Background />
        </Container>
    )
}