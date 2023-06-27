import Logo from "../../icons/Logo-completo.svg";
import "./motorista.css";
import 'bootstrap/dist/css/bootstrap.css';
import AuthGuard from "../home/AuthGuard";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect, useState, useRef } from "react";
import axios from 'axios'
import motoristas from "./motoristas.json"

let id_motorista = null

const motoristasController = () => {
    if(id_motorista){
        listarComentarios()
    } 
}

function listarComentarios() {
}

const getMotoristas = async () => {
    console.log("nhain")
    console.log(motoristas, "chupa ku")
    const response = await fetch("./motoristas.json")
    // .then((e) => console.log(e.json()))
    let d = await response.json()
    return response

}

const ListarMotoristas = () => {
    const [listamotoristas, setMotoristas] = useState([]);
        useEffect(() => {
            try {
                setMotoristas(motoristas.motoristas)
                console.log(listamotoristas)
                // console.log(response)
                // const data = await response.json();
                // setMotoristas(data.motoristas);
                // console.log(setMotoristas)
            } catch (error) {
                console.error("Erro ao carregar os motoristas:", error);
            }

        }, [])
        
    return (
        <>
            {   listamotoristas.length &&
                listamotoristas.map((m) => {
                    return (
                        <div className="box">
                        <p>{m.fullname}</p>
                         <div className="star-rating">
                            {[...Array(5)].map((_, starIndex) => (
                            <><span
                                    key={starIndex}
                                    className={`fa fa-star ${starIndex < m.estrelas ? "checked" : ""}`}
                                ></span></>
                            ))}
                            <span>({m.estrelas})</span>
                        </div>
                    </div>

                    )
                })
            }
        </>
    )
}
// listarMotoristas()

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
                <div id="map"></div>
                    <div class="sidebar">
                        <h1 class="title-motorista">Escolher Motorista</h1>
                        {motoristas ? ListarMotoristas() : null}
                        
                    <div id="reports"></div>
                    <div className="mot">
                        <a  className="button" href="/principal">Voltar para o menu principal</a>
                    </div>
                </div>
            </div>
        

    )
}

export default Motorista;


