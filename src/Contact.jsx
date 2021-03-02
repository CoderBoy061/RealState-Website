import React from 'react';
import "./Contact.css";


function Contact() {
    return (
        <div className="contact">

            <div className="main">
                <h2 align="center" id="contact">Contact Us</h2>
            </div>
            <div className="container1">
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name">
                        </input>
                        <label for="fname">Last Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your last name">
                        </input>
                        <label for="fname">Country</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your country">
                        </input>
                        <label for="fname">Mobile Number</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your mobile number">
                        </input>
                        <label for="fname">Email Address</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your email address">
                        </input>
                        <label for="subject">Anything you want to know</label>
                         <textarea id="subject" name="subject" placeholder="Write something..">
                         </textarea>
                         <input type="submit"value="Submit"></input>

            </form>
        </div>

            </div>
    );
}
export default Contact;