import React, { useState } from 'react';
import axios from 'axios';
import pic9 from './Images/pic9.jpg';
import pic2 from './Images/pic2.jpg';
import pic3 from './Images/pic3.jpg';
import pic4 from './Images/pic4.jpg';
import pic5 from './Images/pic5.jpg';
import pic6 from './Images/pic6.jpg';
import pic7 from './Images/pic7.jpg';
import pic8 from './Images/pic8.jpg';
import pic10 from './Images/pic10.jpg';
import logo1 from './Images/logo1.jpg';
import MyVideoComponent from './video';
import Myvdo from './vdo.mp4';
import './App.css';


function Boutique() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function postdata(e) {
        e.preventDefault();
        if ((name) && (email) && (message)) {
            // console.log("entered");
            try {
                const url = "http://localhost:8080/api/v1/root/add";
                axios.post(url,
                    {
                        name: name,
                        email: email,
                        message: message

                    })
                    // .then((response) =>
                    //     console.log("Recieved"))
                    // .catch((error) =>
                    //     console.log("Not Recieved"));
                    
                alert("Successfully submitted");
                setName("");
                setEmail("");
                setMessage("");
            }
            catch (err) {
                alert("Failed")
            }
        }

        else {
            alert("Fill out all data in contact section.");
            // console.log(name+" "+email+" "+message);
            setName("");
            setEmail("");
            setMessage("");
        }
    }

    return (
        <div>
            <header id="header">
                <div className="logo-selection">
                    <img src={logo1} alt="logo" id="header-img" className="logo-sec" />
                </div>
                <nav id="nav-bar" className="navigation-bar">
                    <ul style={{ listStyleType: "none" }} className="navigation">
                        <li><a href="#zarro" className="nav-link">Zarro</a></li>
                        <li><a href="#story" className="nav-link">Our story</a></li>
                        <li><a href="#designs" className="nav-link">Work log</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>

                <div className="container">

                    <section id="zarro" className="cover-section">
                        <div className="title-text">
                            <h1>Zarro</h1>
                            <p style={{marginLeft:"50px"}}>Be your beautiful best</p>
                        </div>
                        <div className="box-feature" id="coverimgid">
                            <img src={pic10} alt="" className="cover-image" />
                        </div>
                    </section>

                    <section id="story" className="story-section">
                        <div className="section-text">
                            <h2>Our story</h2><br></br>
                            <p>We specialize in providing fashionable and trendy clothing for men and women. 
                            Our clothing pieces are carefully hand-picked to bring you the latest trends and styles. 
                            Our collections feature classic and modern designs, made with high-quality fabrics to ensure you look and 
                            feel your best. From casual to formal occasions, you'll find something perfect for any occasion. With our 
                            commitment to excellent customer service and affordable prices, you can trust that shopping with us will be 
                            a pleasant and enjoyable experience.</p>
                        </div>
                        <div className="box-feature">
                            <img src={pic9} alt="" />
                        </div>
                    </section>

                    <section id="designs" className="samples">
                        <div className="section-text">
                            <h2>Featured</h2>
                            <p>Take a look at some of our featured elegant picks</p>
                        </div>
                        <div className="featured">
                            <div className="work">
                                <figure>
                                    <img src={pic2} alt="" />
                                </figure>
                            </div>
                            <div className="work">
                                <figure>
                                    <img src={pic3} alt="" />
                                </figure>
                            </div>
                            <div className="work">
                                <figure>
                                    <img src={pic4} alt="" />
                                </figure>
                            </div>
                            <div className="work">
                                <figure>
                                    <img src={pic5} alt="" />
                                </figure>
                            </div>
                            <div className="work">
                                <figure>
                                    <img src={pic6} alt="" />
                                </figure>
                            </div>
                            <div className="work">
                                <figure>
                                    <img src={pic7} alt="" />
                                </figure>
                            </div>
                        </div>
                        <div className="video-section">
                            {/* <MyVideoComponent/> */}
                        </div>
                    </section>

                    <section id="contact" className="contact-section">
                        <div className="section-text">
                            <h2>Recieve our catalogue</h2>
                            <br></br>
                            <p>We would love to hear from you! <br />To get our monthly catalogue subscribe by filling the following form with your name and email address.</p>
                        </div>
                        <div className="contact-info">
                            <div className="form-box">
                                <form id="form" className="contact-form">
                                    <label htmlFor="name" className="form-entry">Name<br />
                                        <input name="name" id="name" type="text" className="text-box" value={name} onChange={(e) => { setName(e.target.value); }} placeholder="&nbsp; &nbsp; name" required />
                                    </label>
                                    <label htmlFor="email" className="form-entry">Email<br />
                                        <input name="email" id="email" type="text" className="text-box" value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder="&nbsp; &nbsp; example@gmail.com" required />
                                    </label>
                                    <label htmlFor="message" className="form-entry">Message<br />
                                        <textarea type="textarea" id="message" name="message" className="txt-box" value={message} onChange={(e) => { setMessage(e.target.value); }} placeholder="&nbsp;&nbsp; AdditionalMessage" required></textarea><br />
                                    </label><br />
                                    <input type="submit" value="submit" id="submit" onClick={postdata} className="btn" />
                                </form>
                            </div>
                        </div>
                    </section>


                </div>

            </main>
            <footer className="footer-section">
                <div className="footer-info">
                    <ul style={{ listStyleType: "none" }}>
                        <li><span>Privacy</span></li>
                        <li><span>Terms</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                </div>
                <span className="p-info">Created by Vaishnavi.S<br />Reach out on instagram @zarro</span>
                <span>Copyright &copy; 2023</span>
            </footer>
        </div>

    );
}

export default Boutique;