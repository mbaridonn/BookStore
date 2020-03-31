import React from 'react';

export interface WelcomeProps {
    name: string;
}

const Welcome = (props: WelcomeProps) =>
    <div>Hola {props.name}</div>

export default Welcome;