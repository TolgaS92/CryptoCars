import React from 'react';
import './style.css';


function About() {
    return (
        <section className="bg-light about-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-dark text-center mt-0 about">MERNers</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-dark mb-0">MERNers is group of a Full-Stack Web Developers experienced with Front End development, API’s, Back End Development. Programming & Markup languages: Node.Js., Express, JavaScript, jQuery, React.js, React, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6, React Hooks, JSON, Sequelize</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;