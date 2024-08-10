import { Canvas } from "@react-three/fiber";
import { Olimpiada } from './Olimpiadas';
import { OrbitControls } from "@react-three/drei";
import { Suspense  } from "react";
import { motion } from 'framer-motion';




function Entrada() {
  return (
    <section>
      <Canvas
        id="entrada"
        camera={{ position: [15, 0, 15] }}
      >
        <pointLight position={[0, 0, 15]} intensity={1.5} />
        <ambientLight />
        <Suspense fallback={null}>
          <Olimpiada />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>

      <div className="parent">
        <motion.div className="div1" initial={{ opacity: 0, x: '-50%' }} animate={{ opacity: 1, x: '0%' }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h1 className="titulo">25 Polémicas Olímpicas</h1>
        </motion.div>
        <motion.div className="div2" initial={{ opacity: 0, x: '-50%' }} animate={{ opacity: 1, x: '0%' }} transition={{ duration: 0.6, delay: 0.4 }}>
          <p>A pesar de su increíble talento y logros deportivos, algunos atletas pueden comportarse de manera sorprendentemente miserable. La presión y el éxito a veces desnudan aspectos negativos de su carácter, demostrando que el talento no garantiza integridad. Estos momentos revelan que, incluso en la cima, los atletas pueden enfrentar luchas internas y comportamientos cuestionables que contrastan con su imagen pública.</p>
        </motion.div>
        <motion.div className="div3" initial={{ opacity: 0, x: '-50%' }} animate={{ opacity: 1, x: '0%' }} transition={{ duration: 0.6, delay: 0.6 }}>
          <p>A continuación vas a leer los casos más resonados en los últimos años, que han captado la atención mundial y generado debates intensos sobre el comportamiento y la ética en el deporte.</p>
        </motion.div>
        <motion.div className="div4" initial={{ opacity: 0, x: '-50%' }} animate={{ opacity: 1, x: '0%' }} transition={{ duration: 0.6, delay: 0.8 }}>
          <p>A pesar de su entrenamiento excepcional y sus logros sobresalientes, los atletas olímpicos no están exentos de errores humanos y comportamientos que pueden resultar vergonzosos. Aunque compiten al más alto nivel y se esfuerzan por alcanzar la perfección, también son personas sujetas a las mismas fallas y debilidades que cualquiera de nosotros. Esta realidad nos recuerda que, a pesar de su estatus de élite, los atletas son tan humanos como el resto, enfrentando desafíos y cometiendo errores en su camino hacia la grandeza.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Entrada;
