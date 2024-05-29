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
                <div className="carrusel-contenedor-titulo">
                    <h1 className="carrusel-titulo">{imagenes.title}</h1>
                </div>
                <img src={imagenes.url} id={imagenes.id} alt={imagenes.alt} className={`carrusel-imagen `}/>
                
                <div onClick={actualizarEstado} className="contenedor-arrow-right"><i className="icon-arrow"><IoIosArrowForward size={40} /></i></div>

                <div onClick={actualizarEstado2} className="contenedor-arrow-left"><i className="icon-arrow"><IoIosArrowBack size={40} /></i></div>
            </div>
        </div>

    </>
}

function CarruselTriple(){

    
    const [indexState,setIndexState] = useState(0)


    let imagen1 = listaImagenes[indexState] 

    let imagen2 = listaImagenes[indexState + 1]

    let imagen3 = listaImagenes[indexState + 2]
    
    function actualizarEstado(){

        if(indexState + 3 != listaImagenes.length){
            setIndexState(indexState + 3)
        }
        console.log(listaImagenes.length, indexState)
        
    }

    function actualizarEstado2(){

        if(indexState != 0){
            setIndexState(indexState - 3)
        }
        else{
            setIndexState(0)
        }
        console.log(listaImagenes.length, indexState)
        
    }


    return<>

        <div className="carruselT-contenedor">
            <div className="contenedorT-imagenes">

            <button className="carruselT-button" onClick={actualizarEstado2}><IoIosArrowBack size={50}/></button>

                <div className="contenedorT-imagen">
                    <img className="ct-imagen ct-imagen1" src={imagen1.url} alt={imagen1.alt} />
                </div>
                <div className="contenedorT-imagen">
                    <img className="ct-imagen ct-imagen2" src={imagen2.url} alt={imagen2.alt} />
                </div>
                <div className="contenedorT-imagen">
                    <img className="ct-imagen ct-imagen3" id={indexState} src={imagen3.url} alt={imagen3.alt} />
                </div>

                <button className="carruselT-button" onClick={actualizarEstado}><IoIosArrowForward size={50}/></button>
            </div>
        </div>
    

    </>



}


export { CarruselNormal, CarruselTriple }