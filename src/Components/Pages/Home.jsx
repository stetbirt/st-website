import './Home.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";

export const Home = () => {

    const directory = '/st-website/assets/logos/';

    const images = [
        {
            original : directory + "Andaloussi-2024-Noune.png",
            thumbnail : directory + "Andaloussi-2024-Noune.png",
        },
        {
            original : directory + "Cadenas-JIM-Noir.png",
            thumbnail : directory + "Cadenas-JIM-Noir.png",
        },
        {
            original : directory + "Cadenas-JIM-petit.png",
            thumbnail : directory + "Cadenas-JIM-petit.png",
        },
        {
            original : directory + "Dhael.png",
            thumbnail : directory + "Dhael.png",
        },
        {
            original : directory + "Djanoub-3lam-2.png",
            thumbnail : directory + "Djanoub-3lam-2.png",
        },
        {
            original : directory + "Djanoub-nord-sud-1.png",
            thumbnail : directory + "Djanoub-nord-sud-1.png",
        },
        {
            original : directory + "folded-letter-Lam.png",
            thumbnail : directory + "folded-letter-Lam.png",
        },
        {
            original : directory + "Horouf-Chromes-mgata3-3Ain.png",
            thumbnail : directory + "Horouf-Chromes-mgata3-3Ain.png",
        },
        {
            original : directory + "Hourouf-2ouba-TEST-Lam.png",
            thumbnail : directory + "Hourouf-2ouba-TEST-Lam.png",
        },
        {
            original : directory + "Hourouf-Filet-Alif-CLIP.png",
            thumbnail : directory + "Hourouf-Filet-Alif-CLIP.png",
        },
        {
            original : directory + "Hourouf-Handassia-Couleur-Lam.png",
            thumbnail : directory + "Hourouf-Handassia-Couleur-Lam.png",
        },
        {
            original : directory + "Hourouf-Handassia-TEST.png",
            thumbnail : directory + "Hourouf-Handassia-TEST.png",
        },
        {
            original : directory + "Hourouf-Khyal-Brocha-Main-Lam-Couleur.png",
            thumbnail : directory + "Hourouf-Khyal-Brocha-Main-Lam-Couleur.png",
        },
        {
            original : directory + "Hourouf-Rossort-1-Ha-2024.png",
            thumbnail : directory + "Hourouf-Rossort-1-Ha-2024.png",
        },
        {
            original : directory + "IMAGES-TEST.png",
            thumbnail : directory + "IMAGES-TEST.png",
        },
        {
            original : directory + "Lettre-outils-scol-Test-2024-Ba2.png",
            thumbnail : directory + "Lettre-outils-scol-Test-2024-Ba2.png",
        },
        {
            original : directory + "PROTOTYPES-BOIS-HA2.png",
            thumbnail : directory + "PROTOTYPES-BOIS-HA2.png",
        },
        {
            original : directory + "PROTOTYPES-BOIS-JIM.png",
            thumbnail : directory + "PROTOTYPES-BOIS-JIM.png",
        },
        {
            original : directory + "zaweche.png",
            thumbnail : directory + "zaweche.png",
        },
        {
            original: "https://picsum.photos/id/1016/3840/2160/",
            thumbnail: "https://picsum.photos/id/1016/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160/",
            thumbnail: "https://picsum.photos/id/1019/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1018/3840/2160/",
            thumbnail: "https://picsum.photos/id/1018/1920/1080/",
        },
        {
            original: '/st-website/src/Assets/images/1.jpg',
            thumbnail: '/st-website/src/Assets/images/1.jpg',
        },
        {
            original: "https://picsum.photos/id/1015/3840/2160/",
            thumbnail: "https://picsum.photos/id/1015/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160/",
            thumbnail: "https://picsum.photos/id/1019/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1018/3840/2160/",
            thumbnail: "https://picsum.photos/id/1018/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1015/3840/2160/",
            thumbnail: "https://picsum.photos/id/1015/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160/",
            thumbnail: "https://picsum.photos/id/1019/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1018/3840/2160/",
            thumbnail: "https://picsum.photos/id/1018/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1015/3840/2160/",
            thumbnail: "https://picsum.photos/id/1015/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160/",
            thumbnail: "https://picsum.photos/id/1019/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160/",
            thumbnail: "https://picsum.photos/id/1019/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1018/3840/2160/",
            thumbnail: "https://picsum.photos/id/1018/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1015/3840/2160/",
            thumbnail: "https://picsum.photos/id/1015/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160/",
            thumbnail: "https://picsum.photos/id/1019/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160/",
            thumbnail: "https://picsum.photos/id/1019/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1018/3840/2160/",
            thumbnail: "https://picsum.photos/id/1018/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1015/3840/2160/",
            thumbnail: "https://picsum.photos/id/1015/1920/1080/",
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160/",
            thumbnail: "https://picsum.photos/id/1019/1920/1080/",
        },
    ];

    return (
        <div className="header-section1">

            <div className="bg-black">
                <div className="main-carousel-page ml-auto mr-auto mb-10">
                    <ImageGallery
                        items={images}
                        thumbnailPosition={'left'}
                    />
                </div>
            </div>

            <div>
                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <div className="flex flex-col lg:flex-row justify-between gap-14">
                        <div className="w-full lg:w-5/12 flex flex-col">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 pb-4">About Me</h1>
                            <p className="font-normal text-base leading-6 text-gray-600 ">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Etiam quis eros eget justo tempor porta ut id dui. Donec
                                neque sem, vulputate fermentum nibh a, consequat vulputate nisi. Integer et lacinia
                                odio. Vivamus et lorem tellus. Integer vehicula sit amet enim non viverra. Curabitur
                                cursus ac ligula ut volutpat. Quisque consequat ut tellus in aliquet. Pellentesque vitae
                                blandit justo, ac sagittis leo. Donec sodales metus vel dapibus ultrices.</p>
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 pt-10">My
                                Story</h1>
                            <p className="font-normal text-base leading-6 text-gray-600 ">
                                Quisque tellus tortor, malesuada ac sapien eu, posuere viverra ligula. Phasellus
                                ultricies leo a magna mollis, eget venenatis risus tincidunt. Fusce at laoreet arcu.
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant
                                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec
                                ullamcorper sit amet sapien et posuere. Vivamus vel rutrum nibh. Sed elementum suscipit
                                dolor, ac volutpat lectus ullamcorper a. Mauris eget malesuada nunc. Phasellus vel
                                tellus nec libero eleifend dapibus vel id nisi.</p>
                        </div>
                        <div className="main-image w-full lg:w-8/12"
                             style={{backgroundImage: `url(/st-website/assets/images/1.jpg)`}}>
                        </div>
                    </div>
                </div>
            </div>

            <p className="pt-16 league-spartan-400 text-black text-xl text-center">ALL RIGHTS RESERVED</p>
        </div>

    );
};
