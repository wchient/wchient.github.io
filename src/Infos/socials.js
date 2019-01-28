import React from 'react'
import {Icon} from 'semantic-ui-react'
import {resume} from './resume'

const Socials = () => {
    return (
        <div>
            <a href={resume.social.facebook}>
                <Icon name='facebook' circular color="black"/>
            </a>
            <a href={resume.social.github}>
                <Icon name='github' circular color="black"/>
            </a>
            <a href={resume.social.linkedin}>
                <Icon name='linkedin' circular color="black"/>
            </a>
            <a href={resume.social.mail}>
                <Icon name='mail' circular color="black"/>
            </a>
        </div>
    );
};

export default Socials