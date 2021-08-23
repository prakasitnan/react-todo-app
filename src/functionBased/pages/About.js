import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
import SignlePage from './SinglePage'

const About = () => {
    const { url, path } = useRouteMatch();
    return (
        <div className="about__content">
            <ul className="about__list">
                <li>
                    <Link to={`${url}/about-app`}>About App</Link>
                </li>
                <li>
                    <Link to={`${url}/about-author`}>About Author</Link>
                </li>
            </ul>
            <Route path={`${path}/:slug`}>
                <SignlePage />
            </Route>
        </div>
    )
}

export default About

