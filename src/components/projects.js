import React, { useEffect, useState } from 'react';
import { Github, CaretRightFill } from "react-bootstrap-icons";
import ps5 from "./files/ps5-project.mp4";
import snake from "./files/snake.mp4";
import portfolio from "./files/project-online.mp4";
import qalculater from "./files/qalculater.mp4";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ReactPlayer from 'react-player/file'

const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: false,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    thumbWidth: 200,
    selectedItem: 0,
    interval: 100000,
    transitionTime: 300,
    swipeScrollTolerance: 100,
});
function Project() {

    const projects = [
        {
            "Playstation 5 Skin": [
                ps5,
                <>
                    Developed an interactive front-end which provides a clean interface to launch games
                    Implemented core functionality to launch, hide, sort, remove games using Python scripts
                    UI styling and interactivity was implemented using Kodi
                    Incorporated the Xinput api to report information regarding controllers in UI
                    The skin can be viewed here: Play Station 5 Skin
                </>,
                "PlayStation-5-Kodi-Skin"
            ]

        },
        {
            "PWA Academic Mark": [
                qalculater,
                <>
                    This app removes my reliance on sticky notes and efficiently tracks my academic progress
                    UI Interactivity was implemented using the React framework and styling using SASS
                    Implemented the backend using Java and Spring boot which handles front-end requests

                </>,
                "Qalculater",
            ]

        },
        {
            "Snake Game": [
                snake,
                <>
                    Built a clone of the classic addictive game: Snake
                    Implemented core game logic and visuals using C++
                    Incorporated fundamental OOP principles to provide a clear modular structure
                </>,
                ""
            ]
        },
        {
            "Online Portfolio": [
                portfolio,
                <>
                    Web Developement has been my passion for some time now! I created this responsive website using
                    HTML,
                    CSS, JavaSCript with some Jquery!
                </>,
                "SaqibA1i.github.io"
            ]

        }
    ]

    useEffect(() => {
    }, [])
    return (
        <div id="four" class="project-section back" style={{ "background-color": "transparent" }}>
            <h2 style={{ "background-color": "transparent" }}>Projects</h2>
            <div class="projects" style={{ "max-width": "2100px", "margin": "0 auto", }}>
                <Carousel
                    width="inherit"
                    {...getConfigurableProps()}
                >
                    {
                        projects.map((project) => {
                            return (
                                <>
                                    <div class="single" >
                                        <ReactPlayer
                                            height={"inherit"}
                                            loop={true}
                                            playing={true}
                                            url={Object.entries(project)[0][1][0]}
                                            muted={true}
                                        />
                                        <div class="project-info">
                                            <h3>{Object.entries(project)[0][0]}</h3>
                                            <br />
                                            <p>
                                                {Object.entries(project)[0][1][1]}
                                            </p>
                                            <div class="project-btns">
                                                <a
                                                    href={(Object.entries(project)[0][1][2] == "") ? ("javascript:void(0)") : ("https://github.com/SaqibA1i/" + Object.entries(project)[0][1][2])}
                                                    class={(Object.entries(project)[0][1][2] == "") ? ("disabled main-btn") : ("main-btn")}>
                                                    <Github style={{ "padding-right": "10px" }} size={30} />
                                                Github
                                                <CaretRightFill style={{ "padding-left": "10px" }} class="arrow" size={25} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )

}

export default Project;