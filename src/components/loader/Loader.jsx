import "./loader.css";

function Loader(){
    return(
        <div className="pageLoaderContent">
            <div className="loaderContent">
                <h2 className="encabezadoLoader">¡Estamos tejiendo tu contenido!</h2>
                <img className="loaderImage" src="https://i.imgur.com/ep7fr6q.gif" alt="Manos tejiendo" />
            </div>
        </div>
    )
}

export default Loader;