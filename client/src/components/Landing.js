import React, { Component } from 'react'
import alcoolimg from '../images/alcool.jpg';
import alcoolimg1 from '../images/alcool1.jpg';
import alcoolimg2 from '../images/alcool2.jpg';
import alcoolimg3 from '../images/alcool3.jpg';
import SlideShow from './Slideshow';


class Landing extends Component {
  render() {
    return (
        <div>
        <div className="jumbotron text-center">
        <h1>Les alcools forts</h1>
        <p>Qu'est-ce qu'un alcool fort ?</p> 
        </div>
      <br></br>
        <br></br>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <img className="img-responsive" src={alcoolimg1} alt="Chania" width="460" height="345"/>
            <h3>Whisky</h3>
            <p>Whisky ou whiskey est le nom générique d'un ensemble d'eaux-de-vie fabriquées par distillation de céréales maltées ou non maltées. L'origine du whisky est encore aujourd'hui sujette à controverses entre Écossais et Irlandais, chacun y allant de sa preuve la plus ancienne.</p>
          </div>
          <div className="col-sm-4">
          <img className="img-responsive" src={alcoolimg2} alt="Chania" width="460" height="345"/>
            <h3>Rhum brun</h3>
            <p>Le rhum (anglais  :  rum, espagnol  :  ron) est une eau-de-vie originaire des Amériques, transformée à partir de la canne à sucre ou de sous-produits de l'industrie sucrière. Il est consommé blanc, vieilli en fût (rhum vieux) ou épicé. Il prend alors une coloration ambrée plus ou moins foncée.</p>
          </div>
          <div className="col-sm-4">
            <img className="img-responsive" src={alcoolimg3} alt="Chania" width="460" height="345"/>      
            <h3>Tequilla</h3>
            <p>La tequila, est une boisson alcoolisée produite au Mexique à partir d'une plante nommée Agave tequilana. Pour obtenir l'appellation « tequila », cette boisson doit être exclusivement produite dans l'État de Jalisco et quelques municipalités des États de Nayarit, Michoacán, Guanajuato et Tamaulipas.</p>
          </div>
        </div>
        <br></br>
        <div className="jumbotron text-center">
        <p>Les alcools forts regroupent les boissons ayant un degré d'alcool supérieur à 18°. 

Ces boissons peuvent être bues avec un soft (liquide ne contenant pas d'alcool) comme de l'eau, du soda, du sucre liquide ou du jus de fruits. Certaines se dégustent "sec" à savoir sans aucun ajout d'autre substance comme c'est le cas avec quelques whisky, les vieux rhum, certaines vodka, les eaux de vie... On propose parfois un alcool sec avec de la glace afin d’apprécier au mieux les arômes.

 

Dans les établissements (hôtels, bars et restaurants), les doses d'alcools forts sont d'à peu près 2,5cl à 3cl par verre, soit 10g d'alcool pur.</p> 
        </div>
        </div>
        <h3 className="text-center">Où trouve-t-on de l'alcool fort ?</h3>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 centered">
                    <SlideShow>
                    <img className="img-responsive" src="https&#x3A;&#x2F;&#x2F;assets.afcdn.com&#x2F;recipe&#x2F;20180705&#x2F;80274_w1024h768c1cx2378cy1278cxt0cyt0cxb4799cyb3199.jpg"  alt="alcool1" width="100%"/>
                    <img className="img-responsive" src="https&#x3A;&#x2F;&#x2F;assets.afcdn.com&#x2F;recipe&#x2F;20180705&#x2F;80255_w1024h768c1cx2774cy1849cxt0cyt0cxb5541cyb3691.jpg" alt="alcool1" width="100%"/>
                    <img className="img-responsive" src="https&#x3A;&#x2F;&#x2F;assets.afcdn.com&#x2F;recipe&#x2F;20180705&#x2F;80258_w1024h768c1cx974cy1535cxt0cyt0cxb2471cyb3164.jpg" alt="alcool1" width="100%"/>
                    <img className="img-responsive"src="https&#x3A;&#x2F;&#x2F;assets.afcdn.com&#x2F;recipe&#x2F;20181220&#x2F;84959_w1024h768c1cx1989cy3800cxt0cyt0cxb3521cyb5368.jpg" alt="alcool1" width="100%"/>
                    <img className="img-responsive"src="https&#x3A;&#x2F;&#x2F;assets.afcdn.com&#x2F;recipe&#x2F;20181203&#x2F;84504_w1024h768c1cx2073cy2393cxt0cyt0cxb4480cyb6720.jpg" alt="alcool1" width="100%"/>
                    <img className="img-responsive"src="https&#x3A;&#x2F;&#x2F;assets.afcdn.com&#x2F;recipe&#x2F;20180705&#x2F;80346_w1024h768c1cx1727cy777cxt0cyt0cxb3883cyb2588.jpg" alt="alcool1" width="100%"/>
                    <img className="img-responsive"src="https&#x3A;&#x2F;&#x2F;assets.afcdn.com&#x2F;recipe&#x2F;20180801&#x2F;81651_w1024h768c1cx2061cy1395cxt0cyt0cxb4118cyb2787.jpg" alt="alcool1" width="100%"/>
                    </SlideShow>
                </div>
      <br></br>
      <br></br>
      <footer className="page-footer font-small special-color-dark pt-4">
        <div className="container">
            <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                <a className="btn-floating btn-fb mx-1">
                    <i className="fab fa-facebook-f"> </i>
                </a>
                </li>
                <li className="list-inline-item">
                <a className="btn-floating btn-tw mx-1">
                    <i className="fab fa-twitter"> </i>
                </a>
                </li>
                <li className="list-inline-item">
                <a className="btn-floating btn-gplus mx-1">
                    <i className="fab fa-google-plus-g"> </i>
                </a>
                </li>
                <li className="list-inline-item">
                <a className="btn-floating btn-li mx-1">
                    <i className="fab fa-linkedin-in"> </i>
                </a>
                </li>
                <li className="list-inline-item">
                <a className="btn-floating btn-dribbble mx-1">
                    <i className="fab fa-dribbble"> </i>
                </a>
                </li>
            </ul>
        </div>
    </footer>
    <br></br>
</div>
</div>
</div>

    )
  }
}

export default Landing