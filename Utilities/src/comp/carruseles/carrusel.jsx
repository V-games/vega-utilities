"use client"
import React,{useState,useEffect} from "react"
import "./carrusel.css"
import { listaImagenes } from "./carrusel.js"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


function CarruselNormal(){

    const [indexState,setIndexState] = useState(0);

    let imagenes = listaImagenes[indexState] 

    function actualizarEstado(){
        if(indexState != listaImagenes.length - 1){
    
            setIndexState(indexState + 1);
        }else{
            setIndexState(0)
        }
    }

    function actualizarEstado2(){
        if(indexState != 0){
    
            setIndexState(indexState - 1);
        }else{
            setIndexState(listaImagenes.length - 1)
        }
    }

    return<>

        <div className="contenedor-carrusel">
            <div className="contenedor-imagen">
                <h1 className="carrusel-titulo">{imagenes.title}</h1>
                <img src={imagenes.url} id={imagenes.id} alt={imagenes.alt} className={`carrusel-imagen `}/>
                <div onClick={actualizarEstado} className="contenedor-arrow-right"><i className="icon-arrow"><IoIosArrowForward size={40} /></i></div>

                <div onClick={actualizarEstado2} className="contenedor-arrow-left"><i className="icon-arrow"><IoIosArrowBack size={40} /></i></div>
            </div>
        </div>

    </>
}

export default CarruselNormal