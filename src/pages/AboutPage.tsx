import React from "react";
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate fugit impedit minima molestias
                pariatur perferendis quia quos repellendus velit?
            </p>
            <button className={"btn deep-purple darken-4"} onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}
