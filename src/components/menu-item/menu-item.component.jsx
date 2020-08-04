import React from 'react';
import {withRouter} from 'react-router-dom';



import './menu-item.styles.scss';

// esto es un componmente funcional
//functional component
// Hacemos destructuring 
const MenuItem = ({title, imageUrl, size, history,linkUrl,match}) => (
   // en react para trabajar con estilo se pasa el classname
   //se ocupa los backtick para hacer unir el parametro de entrada 
   <div 
        className = {`${size} menu-item`} 
        onClick = { () => history.push(`${match.url}${linkUrl}`) }
   >
            <div
                className = 'background-image'
                style = {{
                       backgroundImage : `url${imageUrl}`              
                }}            
            />
            <div className = 'content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className = 'subtitle'>SHOW NOW</span>
            </div>
            
            
            
    </div>
    // Navegacion interna 
// History :  ${match.url}${linkUrl} esto se ocupa para copiar la url y si uno quiere entrar a una ruta nueva se saca el match.url
//  nueva navegacion , donde la nueva url se le concatena la nueva url 
// Match   : apunta la url donmde uno se encuentra parado  y el push permite moverte

);

// hay que pasarle el compoinente por parametro 
// para que with router pueda ocupar todas sus propiedades
// como  estamos ocuoando WithRouer se puede ocupar sus propiedades por parametro
export default withRouter(MenuItem);

// componente de orden superior : 
// hay tipos de componentres de orden superior,
// todo compenente que tenga asociada una ruta , es un cmpte de orden superior