import { useState } from 'react';
import Data from '../../Data.json';
import LazyLoad from 'react-lazyload';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function BarraBusqueda() {
  const [data, setData] = useState(Data); 
  const [search, setSearch] = useState(''); 
  const [visibleRows, setVisibleRows] = useState(3); 

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1
  });

  const filteredData = data.filter(item =>
    item.protagonistas.toLowerCase().includes(search.toLowerCase()) ||
    item.descripcion.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerRow = 4;
  const itemsToShow = visibleRows * itemsPerRow;

  const handleShowMore = () => {
    setVisibleRows(prev => prev + 2); 
  };

  return (
    <div className='big-container'>
      <input  
        className='busqueda'
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <motion.div
        className='conte-datos'
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} 
        transition={{ duration: 0.6 }} 
      >
        {filteredData.slice(0, itemsToShow).map((item, index) => (
          <div key={index} className="muestra">
            <p><strong>Protagonistas:</strong> {item.protagonistas}</p>
            <LazyLoad
              height={200} 
              offset={100} 
              placeholder={<div>Loading...</div>} 
            >
              <img
                className='atletas'
                src={item.img}
                alt={`Imagen de ${item.protagonistas}`}
                
              />
            </LazyLoad>
            <p>{item.descripcion}</p>
            <small>Año: {item.año}</small>
          </div>
        ))}
      </motion.div>
      {itemsToShow < filteredData.length && (
        <div className="button-container">
          <button onClick={handleShowMore} className="ver-mas">Ver más</button>
        </div>
      )}
    </div>
  );
}

export default BarraBusqueda;
