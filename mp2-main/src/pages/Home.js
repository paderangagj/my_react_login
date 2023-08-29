import sabic_slogan from '../img/SABIC-CTM_tcm1010-14324.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

    return(
        <main>

        
        {/* <div className="Home"> */}

                <div className="ctm" >
                                {/* <img src="/public/img/SABIC-CTM_tcm1010-14324.svg" alt=""> */}
                                <img src={sabic_slogan}/>
                            </div>
                            
                            <div className="goals">
                                <div>
                                    <h2 className="goals1">WHAT WE HAD IN MIND</h2>
                                    <ul>
                                        <li>TO ENGAGE</li>
                                        <li>TO INSPIRE</li>
                                        <li>TO INFORM</li>
                                        <li>IN SHORT TO TRANSFORM THE WAY WE COMMUNICATE</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="goals2">WHAT WE ACHIEVED</h2>
                                    <ul>
                                        <li>BRING LEADERS AND EMPLOYEES</li>
                                        <li>INSTILL PRIDE IN THE BRAND</li>
                                        <li>CONNECT COLLEAGUES</li>
                                        <li>PROMOTE INTERACTION & ENGAGEMENT</li>
                                        <li>INSPIRE COLLEAGUES TO DREAM BIG</li>
                                        <li>CREATE A PLATFORM TO PROMOTE TALENT</li>
                                
                                    </ul>
                                </div>
                                
                            </div>



                            <div className="services">
                                <a href="#">
                                    <div class="services-card">
                                        <div><FontAwesomeIcon icon="fa-solid fa-computer"/>
                                        
                                        </div>
                                        
                                        <div>
                                            <h4>Computing Services</h4>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="services-card">
                                        <div><i class="fa-solid fa-business-time"></i></div>
                                        <div>
                                            <h4>Business Application</h4>
                                        </div>
                                    </div>
                                </a>

                                <a href="#">
                                    <div className="services-card">
                                        <div><i class="fa-solid fa-headset"></i></div>
                                        <div>
                                            <h4>Conferencing Services</h4>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="services-card">
                                        <div><i class="fa-solid fa-list"></i></div>
                                        <div>
                                            <h4>ERP Services</h4><br/>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="services-card">
                                        <div><i class="fa-solid fa-house"></i></div>
                                        <div>
                                            <h4>Work From Home</h4>
                                        </div>
                                    </div>
                                </a>

                            </div>

        
        </main>
    )

}

export default Home;