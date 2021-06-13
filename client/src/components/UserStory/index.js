import React from 'react';
import './style.css';


function UserStory() {
    return (
        <section className="bg-light about-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-dark text-center mt-0 about">Why CryptoCars?</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-dark mb-0">Crypto is the currency of the future and the exchange rate is changing on a daily basis. This site allows you to learn how much your current assets are worth in crypto and how that is changing on a daily basis. We created CryptoCars so users can search for their used cars current market value and learn the current cryptocurrency value. That way users can decide if they want to put their car on the market now or wait until the value of crypto changes.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserStory;