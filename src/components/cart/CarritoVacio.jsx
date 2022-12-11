import "./carritoVacio.css"

function CarritoVacio(){
    return(
        <div className="carritoVacioContainer">
            <div className="carritoVacio">
                <img src="https://i.imgur.com/xuDdLgd.png" alt="Bolsita triste" />
                <h2 className="notificacion">Esta bolsita creyó en tus mentiras</h2>
                <h2 className="notificacion">No tienes artículos en tu carrito</h2>
            </div>
        </div>
    )
}

export default CarritoVacio;