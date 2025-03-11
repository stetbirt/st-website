import Contacts from '../Contact/Contacts.jsx'
import './About.css'

import React from "react";

export const About = () => {
    return (
        <div className="mega-container">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-14">
                    <div className="w-full lg:w-5/12 flex flex-col">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 pb-4">About Me</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis eros eget justo tempor porta ut id dui. Donec neque sem, vulputate fermentum nibh a, consequat vulputate nisi. Integer et lacinia odio. Vivamus et lorem tellus. Integer vehicula sit amet enim non viverra. Curabitur cursus ac ligula ut volutpat. Quisque consequat ut tellus in aliquet. Pellentesque vitae blandit justo, ac sagittis leo. Donec sodales metus vel dapibus ultrices.</p>
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 pt-10">My Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                            Quisque tellus tortor, malesuada ac sapien eu, posuere viverra ligula. Phasellus ultricies leo a magna mollis, eget venenatis risus tincidunt. Fusce at laoreet arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ullamcorper sit amet sapien et posuere. Vivamus vel rutrum nibh. Sed elementum suscipit dolor, ac volutpat lectus ullamcorper a. Mauris eget malesuada nunc. Phasellus vel tellus nec libero eleifend dapibus vel id nisi.</p>
                    </div>
                    <div className="main-image w-full lg:w-8/12" style={{backgroundImage: `url(/st-website/assets/images/1.jpg)`}}>
                    </div>
                </div>
            </div>
        </div>

    );
};
