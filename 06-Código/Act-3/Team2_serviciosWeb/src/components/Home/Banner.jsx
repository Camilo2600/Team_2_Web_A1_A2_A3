import logo from "../../assets/logo.jpg";
import "../../css/home.banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container d-flex align-items-center justify-content-center banner__container">
        <div className="row banner__content">
          <h1 className="col-12 text-center mt-4 mb-4 banner__content-title">
            BIENVENIDO A LIBRERÍA MUNDOS DE PAPEL
          </h1>
          <p className="col-12 col-md-6 text-center d-flex align-items-center banner__content-text">
           
          "Explora infinitos mundos entre las páginas de papel."

            Mucho más que una simple librería. 
            Aquí, cada libro es un portal hacia aventuras inimaginables, 
            conocimiento ilimitado y emociones que trascienden las barreras del tiempo. 
            Sumérgete en un universo de historias cautivadoras, donde las palabras cobran vida 
            y te transportan a lugares lejanos, épocas pasadas y futuros prometedores. 
            Nuestra librería es el refugio de los soñadores, el rincón de los curiosos y 
            el hogar de aquellos que encuentran en cada página un compañero fiel. 
            Únete a nosotros mientras abrimos las puertas hacia mundos inexplorados, 
            donde tu imaginación es el único límite. 
            "Mundos de Papel": Donde tus sueños toman forma entre las hojas.

          </p>
          <img
            src={logo}
            alt="logo"
            className="col-12 col-md-6 img-fluid banner__content-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
