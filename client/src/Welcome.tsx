import React from 'react';

interface WelcomeProps {
    name: string;
}

const Welcome = (props: WelcomeProps) =>
    <h2>Hola {props.name}</h2>

export default Welcome;