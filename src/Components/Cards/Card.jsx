import './Card.css'

const Card = ({ imageName, title, description }) => {
    return (
        <div className="main-card" style={{backgroundImage: `url(/src/Assets/images/${imageName})`}}>

            <div className="title-desc text-white gradient-filter px-4">
                    <div className="image-title-234 text-5xl league-spartan-400 pb-3">
                        <p>
                            {title}
                        </p>
                    </div>
                    <div className="image-desc-234 league-spartan-250">
                        <p>
                            {description}
                        </p>
                    </div>

            </div>

        </div>
    );
};

export default Card;