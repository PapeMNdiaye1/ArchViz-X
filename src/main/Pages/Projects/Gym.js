import { React, useEffect, useState, Fragment } from 'react';


import ImageProjectC2 from '../../Style/Images/Project/Pharmacie_C-2.jpg';
import ImageProjectC1 from '../../Style/Images/Project/Pharmacie_C-1.jpg';
import ImageProjectC3 from '../../Style/Images/Project/Pharmacie_C-3.jpg';
import ImageProjectC4 from '../../Style/Images/Project/Pharmacie_C-4.jpg';
import ImageProjectC5 from '../../Style/Images/Project/Pharmacie_C-5.jpg';



function Pharmacie1({ }) {
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
            <div className='Pharmacie_3_container'>
                <div className='project_display'>
                    <h1 className='project_title'>
                        Espace Sportif
                    </h1>
                    <h3 className='project_description'>
                        par Pape M Ndiaye | 7 Mai, 2023 |
                    </h3>
                    <p>
                        Nous avons une grande expérience dans l'agencement d'espace commune.                                                                </p>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC1} width='100%' alt='  Pharmacie Design - 2' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC2} width='47%' alt='  Pharmacie Design - 3' />
                        <img onClick={displayImage} src={ImageProjectC3} width='47%' alt='  Pharmacie Design - 4' />
                    </div>
                    <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC4} width='100%' alt='  Pharmacie Design - 5' />
                    </div>
                    {/* <div className='TheImageContainer'>
                        <img onClick={displayImage} src={ImageProjectC5} width='100%' alt='  Pharmacie Design - 1' />
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
}




export default Pharmacie1;
