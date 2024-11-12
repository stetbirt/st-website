import Card from "../Cards/Card.jsx";
import './Home.css'

const title1 = 'Project Eulys';
const desc1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est nibh, rhoncus ut ante nec, sollicitudin molestie velit. In vestibulum mi eget interdum lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est nibh, rhoncus ut ante nec, sollicitudin molestie velit. In vestibulum mi eget interdum lobortis.'
export const Home = () => {
    return (
        <div className="header-section1">

            <div className="cards px-10">
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
                <div className="card"><Card imageName={'1.jpg'} description={desc1} title={title1}></Card></div>
            </div>

            <p className="league-spartan-400 text-black text-xl pt-96 text-center">ALL RIGHTS RESERVED</p>
        </div>

    );
};
