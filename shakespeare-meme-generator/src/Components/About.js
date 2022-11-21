import React from "react";

export default function About() {
    return (
        <>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <h1 className="text-center">About</h1>
                <p>
                This is a meme generator that uses Shakespeare quotes. It was
                created as a final project for Promineo Tech's Front End Web
                Development Bootcamp.
                </p>
                <p>
                The meme generator uses the Imgflip API to retrieve images and a Shakespeare quotes array to retrieve quotes.
                It saves the memes to a mock API using the Fetch API and allows the user to update and delete the memes.
                </p>
                <p>
                The code for this project is available on GitHub at https://github.com/zaccrabtree/shakespearememegenerator.git
                .
                </p>
            </div>
            </div>
        </div>
        </>
    );
}
