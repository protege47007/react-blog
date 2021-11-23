import React, { Component } from 'react'
import Posts from './Posts'

export class Index extends Component {
    render() {
        const data = [
            {
                id: "001",
                title: "Hello World",
                body: "Dramatically strategize user-centric potentialities without top-line expertise. Credibly fashion wireless niches whereas business interfaces. Monotonectally actualize functionalized alignments before plug-and-play.",
                timeStamp: "October 29th, 2021. 17:30",
                commentsCount: 69,
                likesCount: 146
            },
            {
                id: "002",
                title: "Hello World Again.",
                body: "Dramatically strategize user-centric potentialities without top-line expertise. Credibly fashion wireless niches whereas business interfaces. Monotonectally actualize functionalized alignments before plug-and-play.",
                timeStamp: "May 18th, 2021. 14:05",
                commentsCount: 47,
                likesCount: 100
            },
            {
                id: "003",
                title: "Hello World 3.0",
                body: "Dramatically strategize user-centric potentialities without top-line expertise. Credibly fashion wireless niches whereas business interfaces. Monotonectally actualize functionalized alignments before plug-and-play.",
                timeStamp: "September 30th, 2021. 12:30",
                commentsCount: 16,
                likesCount: 2
            }
        ]
        return (
            <div className="main-container">
                    <h1 className="active-header">Home</h1>
                    <p className="intro">Hi👋, welcome to the fortnight journal. My name is David, I am a software developer. This is a compilation of subjects I have found intriguing, do enjoy.</p>

                    <Posts posts={data}/>
            </div>
        );
    }
}

export default Index
