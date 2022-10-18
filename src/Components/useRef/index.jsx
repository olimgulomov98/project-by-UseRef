import React, { useState } from "react";
import { useRef } from "react";
import { Container, Wrapper } from "./style";

export const Register = () => {
    const username = useRef('')
    const email = useRef('')
    const password = useRef('')
    const cpassword = useRef('')
    const [userNamee, setUserName] = useState('')
    const [emaill, setEmail] = useState('')
    const [passwordd, setPasswordd] = useState('')
    const [cpasswordd, setCpasswordd] = useState('')

    const register = () => {
        setUserName(username.current.value) 
        setEmail(email.current.value) 
        setPasswordd(password.current.value) 
        setCpasswordd(cpassword.current.value) 
    }
    return(
        <Container>
            <Container.Title>Register</Container.Title>
            <Container.P>Enter your email and password to register.</Container.P>
            <Wrapper>
                <Wrapper.Input ref={username} type="text" placeholder='Username' />
                <Wrapper.Input ref={email} type="email" placeholder='Enter your email address' />
                <Wrapper.Input ref={password} type="password" placeholder='Password' />
                <Wrapper.Input ref={cpassword} type="password" placeholder='Confirm Password' />  
            </Wrapper>
            
            <Container.Button onClick={register}>Register</Container.Button>

            <h3 style={{textAlign: 'left'}}>Username: {userNamee}</h3>
            <h3 style={{textAlign: 'left'}}>Email address: {emaill}</h3>
            <h3 style={{textAlign: 'left'}}>Password: {passwordd}</h3>
            <h3 style={{textAlign: 'left'}}>Confirm Password: {cpasswordd}</h3>

        </Container>
    )
}