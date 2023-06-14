import { React, useEffect, useState, Fragment } from 'react';


import ImageProjectC1 from '../../Style/Images/Project/Interior-1-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Interior-1-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Interior-1-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/Interior-1-4.jpg';
import ImageProjectC6 from '../../Style/Images/Project/Interior-1-6.jpg';
import ImageProjectC7 from '../../Style/Images/Project/Interior-1-7.jpg';
// import ImageProjectC7 from '../../Style/Images/Project/Interior-1-7.jpg';


// import blender from '../../Style/Images/SVG/blender.png';
// import unreal from '../../Style/Images/SVG/unreal.png';
// import photoShop from '../../Style/Images/SVG/PhotoShop.png';



function Interior1({ }) {

    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC6);

    useEffect(() => {

        let Page_slider = document.querySelector('.page_title_slider')
        Page_slider.style.opacity = `0`

        let AccueilContainer = document.querySelector(".App_container")
        AccueilContainer.scrollTop = 0;

        let hoverLoaderContainer = document.querySelector(".hover_loader_container")
        hoverLoaderContainer.style.display = 'flex';

        setTimeout(function () {
            hoverLoaderContainer.style.display = '';
        }, 1500);


        return () => {
            Page_slider.style.opacity = `1`

        }
    }, []);


    const displayImage = (e) => {
        if (TheImageContainer) {
            setTheImageContainer(false);
        } else {
            setTheImageInTheContainer(e.target.getAttribute("src"))
            setTheImageContainer(true);
        }
    }

    return (
        <Fragment>
            {TheImageContainer &&
                <div className='display_image_container'>
                    <div>
                        <div
                            onClick={displayImage}
                            className='close_image_container'>
                        </div>
                        <img src={TheImageInTheContainer} width='100%' />
                    </div>
                </div>
            }

            <div className='Interior_1_container'>

                <div className='project_display'>
                    <h1 className='project_title'>
                        Interior Decoration
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momar Ndiaye | 3 Juin, 2022 |
                    </h3>
                    <p>
                        À l'aide des logiciels de dernière génération et de notre savoir-faire dans le domaine de l’architecture d’intérieur, nous vous aidons dans l’aménagement de vos espaces. Du design moderne au traditionnelle, minimaliste etc. nous modélisons espaces, mobiliers et décors intérieurs afin de vous assurer de toute la commodité et de l’esthétique qu’auront vos projets avant leur réalisation.
                    </p>

                    <a className='the_links' href='https://papemndiaye1.github.io/ArchViz_Interior_Design_1/' target="_blank">
                        Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC3} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='47%' alt='Interior Decoration - 1' />
                        <img onClick={displayImage} src={ImageProjectC1} width='47%' alt='Interior Decoration - 2' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' alt='Interior Decoration - 3' />
                    </div>
                    <h1 className='project_title'>
                        Animation                    </h1>
                    <div className='the_video'>
                        <iframe width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/hci-BMwTmCU"
                            title="Interior Design"
                            // frameborder="0"
                            allow="accelerometer; 
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
                            allowfullscreen>

                        </iframe>
                    </div>
                    <h1 className='project_title'>
                        Création
                    </h1>
                    <div className='the_video the_video_2 '>
                        <iframe width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Xtg9qROxy34"
                            title="Interior Design"
                            allow="accelerometer; 
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>

                    <h1 className='project_title'>
                        Clay Renders
                    </h1>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC6} width='47%' alt='Interior Decoration - 4' />
                        <img onClick={displayImage} src={ImageProjectC7} width='47%' alt='Interior Decoration - 5' />
                    </div>

                </div>

            </div>
        </Fragment >
    );
}
export default Interior1;
