import Logo from "./componentes/logo";
import { SobreMi } from "./componentes/sobreMi";
import { Cabezera } from "./componentes/cabezera";
import { Trabajos } from "./componentes/trabajos";
import "./App.css";
import { Contacto } from "./componentes/contacto";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <Cabezera
          contacto1="linkedin"
          contacto2="githup"
          contacto3="whatsapp"
        />
      </div>
      <div className="sobreMi">
        <div className="contenedorContenido">
          <SobreMi
            contenido="Mi nombre es Iván Ramiro Navas Guerrero, soy estudiante de la Fundación Universitaria 
            Antonio de Arévalo (UNITECNAR), en la cual estudio Tecnología en
            Sistemas; me especializo en el Desarrollo web." />
        </div>
      </div>
      <div className="contenedorTecnologias">
        <div className="tecnologias">
          
          <Logo imagen="html" nombre="HTML" />

          <Logo imagen="css" nombre="CSS" />

          <Logo imagen="javascript" nombre="JavaScript" />

          <Logo imagen="wordpress" nombre="WordPress" />

          <Logo imagen="react" nombre="React" />

          <Logo imagen="sql" nombre="MySql" />

          <Logo imagen="php" nombre="PhP" />
        </div>
        <div className="contenedorInformacion">
          <p class="contenido">
            Me gusta estar en constante aprendisaje, estudiando sobre las nuevas
            tecnologias que aparecen cada dia, investigar sobre nuevos lenguajes
            de programacion y todo lo relacionado con la tecnologia.
          </p>
        </div>
      </div>
      
      <div className="contenedorTrabajos">
      <div className="titulosh2">
        <h2 className="titulos">trabajos</h2>
      </div>
      <div className="contenedorImagenesTrabajo">
        <Trabajos 
        trabajo1='trabajo2'
        tecnologia1='html'
        tecnologia2='css'
        />
      </div>
      </div>
      <div className="Contacto">
        <Contacto />
      </div>
    </div>
  );
}

export default App;
