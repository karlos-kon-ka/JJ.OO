
import Data from '../../Data.json';

function Datos() {
  return (
    <div >
      {Data.map((item, index) => (
        <div key={index} >
          <h2>Año: {item.año}</h2>
          <img src={item.img} alt={`Imagen de ${item.protagonistas}`} style={{ width: '100%', height: 'auto' }} />
          <p>{item.descripcion}</p>
          <p><strong>Protagonistas:</strong> {item.protagonistas}</p>
        </div>
      ))}
    </div>
  );
}

export default Datos;
