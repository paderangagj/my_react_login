import React from 'react';

const Contact =  () => {       
    return(

            <main> 

                <div className="notification-item">
                    <div className="noti-icon"><i className="fa-solid fa-earth-americas"></i></div>
                   
                <div className="noti-col">
                    <div className="noti-details">
                            <h3>Contact Us</h3>
                            
                            <div className="feedback-from">

                                <div className="feedback-from-div">
                                    <h3>HELP US TO IMPROVE</h3>
                                    <p>Do you have a Inquiries or suggestions?
                                        Let us know in the field below.
                                    </p>
                                </div>

                                    <form className="ui form" />
                                        <div className="field" />
                                            <label>Name</label>
                                            <input type="text" name="name" placeholder="name" /> 
                                        </div>
                                        <div className="field">
                                            <label>Email</label>
                                            <input type="text" name="email" placeholder="email" />
                                                </div>
                                                <button className="btn-blue">Submit</button>
                                    
                                </div>
                        </div>        
                    </div>
                
        
            </main>
    );

}

export default Contact;