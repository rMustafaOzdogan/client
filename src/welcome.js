import { useState, useEffect } from 'react';
  import { useHistory } from 'react-router-dom';
  import './App.css';
  import 'bootstrap/dist/js/bootstrap.min.js';

 function Welcome() {
    const { push } = useHistory();

    function goToApp() {
        push('/App');
    }
     
    return (
        <div className="Welcome" style={{ height: '90vh' }} >
            <nav class="navbar navbar-light bg-primary">
                <div class="container-fluid d-flex justify-content-center">
                    <h5 class="navbar-brand text-white">Selçuk Üniversitesi Hatırası Programı</h5>
                </div>
            </nav>
            <div className="container h-100">
            <div className="row justify-content-center align-content-center h-100">
                <div className="col-12 mt-4">
                <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="display-8">Selçuk Üniversitesi Hatıra Posteri Programı</h1>
                    <p class="lead">Hatıra posterinizi oluşturmak için lütfen aşağıdaki "Git" butanuna tıklayınız</p>
                </div>
                </div>
                </div>
                   <div className="col-12 d-flex justify-content-center">
                   <div id="carouselExampleControls" class="carousel slide" style={{width:"70%"}} data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./sliderPhoto/slider1.jpg" class="img-fluid" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="./sliderPhoto/slider2.jpg" class="img-fluid" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="./sliderPhoto/slider3.jpg" class="img-fluid" alt="..."/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                   </div>
                   <div className="col-12 d-flex justify-content-center">
                            <button className="mt-5 btn btn-primary p-0" onClick={goToApp}>GİT</button>
                    </div>
               </div>
            </div>     
            
        </div>
    )
 }

 export default Welcome;