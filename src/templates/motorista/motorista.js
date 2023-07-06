import Logo from "../../icons/Logo-completo.svg";
import "./motorista.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import motoristas from "./motoristas.json";

import React from "react";

const MotoristaInfo = ({id}) => {
    // const motorista = await motoristas.motoristas.filter(m => m.id === id)[0]
    console.log(id, "moto")
    const {fullname, email, telefone, birthday, cpf, tipo_caminhao, modelo_caminhao, tamanho_caminhao, estrelas, comentarios} = id
  return (
      <div>
          <h2>{fullname}</h2>
          <p>Email: {email}</p>
          <p>Telefone: {telefone}</p>
          <p>Data de Nascimento: {birthday}</p>
          <p>CPF: {cpf}</p>
          <p>Tipo de Caminhão: {tipo_caminhao}</p>
          <p>Modelo de Caminhão: {modelo_caminhao}</p>
          <p>Tamanho de Caminhão: {tamanho_caminhao}</p>
          <p>Estrelas: {estrelas}</p>
          <div className="comment-area">
              <h3>Comentários:</h3>
              {comentarios.map((comentario) => (
                  <div key={comentario.id} className="comment">
                      <p className="user">{comentario.nome}</p>
                      <p className="text">{comentario.comentario}</p>
                  </div>
              ))}
          </div>
          <button style={{background: '#008000'}} class="btn btn-success mt-3">Escolher motorista</button>
      </div>
  );
};


const ListarMotoristas = ({ onMotoristaSelecionado }) => {
    const RenderEstrelas = ({estrelas}) => {
        const fullStars = Math.floor(estrelas);
        const halfStar = estrelas % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        const stars = [];

        // Renderizar estrelas cheias
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="fa fa-star checked"></span>);
        }

        // Renderizar estrela meia
        if (halfStar) {
            stars.push(
                <span
                    key={fullStars}
                    className="fa fa-star-half checked"
                ></span>
            );
        }

        // Renderizar estrelas vazias
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={fullStars + i + 1} className="fa fa-star"></span>
            );
        }

        return stars;
    };

    return (
        <>
            {motoristas.motoristas.length &&
                motoristas.motoristas.map((m) => (
                    <div
                        className="box"
                        key={m.id}
                        onClick={() => onMotoristaSelecionado(m)}
                    >
                        <p>{m.fullname}</p>
                        <div className="star-rating">
                            <RenderEstrelas estrelas={m.estrelas} />
                            <span>({m.estrelas})</span>
                        </div>
                    </div>
                ))}
        </>
    );
};

const Motorista = () => {
    const mapDiv = useRef(null);
    const [motoristaSelecionado, setMotoristaSelecionado] = useState(null);

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
            "top-left"
        );
    }, [mapDiv]);

    const handleMotoristaSelecionado = (motorista) => {
        setMotoristaSelecionado(motorista);
    };

    return (
        <div>
            <div className="title">
                <img src={Logo} alt="Logo" />
                <h1>Motorista</h1>
            </div>
            <div
                ref={mapDiv}
                style={{
                    backgroundColor: "green",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                }}
            ></div>
            <div id="map"></div>
            <div className="sidebar">
                <h1 className="title-motorista">Escolher Motorista</h1>
                {motoristaSelecionado ? (
                    <div className="box">
                        <MotoristaInfo id={motoristaSelecionado} />
                    </div>
                ) : (
                    <ListarMotoristas
                        onMotoristaSelecionado={handleMotoristaSelecionado}
                    />
                )}
                <div id="reports"></div>
                <div className="mot">
                    <a className="button" href="/principal">
                        Voltar para o menu principal
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Motorista;
