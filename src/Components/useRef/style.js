import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    height: 540px;
    margin: auto;
    margin-top: 50px;
    background: #E5E5E5;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
`
Container.Title = styled.h3`
    text-align: center;
`
Container.P = styled.p`
    text-align: center;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

Wrapper.Input = styled.input`
    width: 300px;
    height: 40px;
    margin: auto;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    margin-bottom: 10px;
    outline: none;
    padding-left: 10px;
    
`
Container.Button = styled.button`
    width: 310px;
    height: 45px;
    background: #46A358;
    border-radius: 5px;
    color: white;
    border: none;
`
export {Container, Wrapper}