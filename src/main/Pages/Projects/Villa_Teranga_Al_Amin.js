import { React, useEffect, useState, Fragment } from 'react';

import ImageProjectC1 from '../../Style/Images/Project/Villa_Teranga_Al_Amin-1.jpg';
import ImageProjectC2 from '../../Style/Images/Project/Villa_Teranga_Al_Amin-2.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Villa_Teranga_Al_Amin-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/Villa_Teranga_Al_Amin-4.jpg';
import ImageProjectC5 from '../../Style/Images/Project/Villa_Teranga_Al_Amin-5.jpg';
import ImageProjectC6 from '../../Style/Images/Project/Villa_Teranga_Al_Amin-6.jpg';

function SmallHouse1({ }) {
    const [TheImageContainer, setTheImageContainer] = useState(false);
    const [TheImageInTheContainer, setTheImageInTheContainer] = useState(ImageProjectC1);

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
            <div className='Villa_Teranga_Al_Amin_container'>
                <div className='project_display'>
                    <h1 className='project_title'>
                        Villa Al Amin
                    </h1>
                    <h3 className='project_description'>
                        par Pape Momar Ndiaye | 26 Janvier, 2023 |
                    </h3>
                    <p>
                        Les visites virtuelles offrent de nombreux avantages pour les acheteurs, propriétaires et agents immobiliers. Pour les acheteurs, elles permettent de visualiser les propriétés sans se déplacer. Pour les agents immobiliers, elles peuvent diffuser les propriétés à plus de gens, ce qui peut conduire à une vente plus rapide. Les visites virtuelles sont une solution pratique pour toutes les parties impliquées dans le processus immobilier.
                    </p>
                    <a className='the_links' href='https://archviz-villa-teranga-al-amine.netlify.app/' target="_blank">
                        Experience VR/AR <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='47%' />
                        <img onClick={displayImage} src={ImageProjectC3} width='47%' />
                    </div>
                    <h1 className='project_title'>
                        Création
                    </h1>
                    <div className='the_video'>
                        <iframe width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/6uC6D4vMnJE"
                            title=" Villa Al Amin"
                            allow="accelerometer; 
                            autoplay; clipboard-write;
                            encrypted-media; gyroscope;
                            picture-in-picture"
                            allowfullscreen>

                        </iframe>
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='47%' />
                        <img onClick={displayImage} src={ImageProjectC6} width='47%' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}




export default SmallHouse1;
