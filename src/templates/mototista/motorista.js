import Logo from "../../icons/Logo-completo.svg";
import "./motorista.css";
import 'bootstrap/dist/css/bootstrap.css';
import AuthGuard from "../home/AuthGuard";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect, useRef } from "react";

const Motorista = () => {
    const mapDiv = useRef(null)
    
    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiaDFiZXJ0b2giLCJhIjoiY2tqOThpOGw2NDI0czJ5cXQxbXhtdDR4NSJ9.T4acMmPSql-dGgRAMVSU3A";
        const map_init = new mapboxgl.Map({
            container: mapDiv?.current, // container ID
            style: "mapbox://styles/h1bertoh/clgk12411001401pdq7p8acg2", // style URL
            center: [-40.3381, -20.3222], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });

        map_init.addControl(
            // eslint-disable-next-line no-undef
            new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                
            }),
            'top-left',
        
        );
    }, [mapDiv])
    
    return AuthGuard(
            <div>
                <div className="title">
                    <img src={Logo}></img>
                    <h1>Motorista</h1>
                </div>
                <div ref={mapDiv}
                style={{
                    backgroundColor: "red",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0
                }}
                ></div>
            </div>
        

    )
}

export default Motorista;


