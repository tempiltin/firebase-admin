import React, { useRef } from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import SectionProducts from '../Components/SectionProducts/SectionProducts'
import Helmet from "../Helmet/Helmet"
import emailjs from 'emailjs-com';
const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b7bm8zb', 'template_329l5lj', form.current, 'cXXCdmgCA4k5Gj-6Q')
    e.target.reset()
  };

  return <Helmet title=" - Home">
      <Navbar/>
      <Header />
      <SectionProducts />

      {/* <form ref={form} onSubmit={sendEmail} className='row '>
                                  <div className="col-lg-6">
                                      <div className="form-group">
                                          <label htmlFor="contact-name" className="contact-name">SIZNING ISMINGIZ</label>
                                          <input type="text" id='contact-name' name='contact-name'/>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-phone">TELEFON RAQAMINGIZ</label>
                                            <input  name="contact-phone" id="contact-phone" type="text" value="+998"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-email">ELEKTIRON POCHTA MANZILINGIZ</label>
                                            <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="subject">QAYSI MAVZUDA YOZMOQCHISIZ</label>
                                            <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-message">XENGA XABAR YOZING</label>
                                            <textarea name="contact-message" id="contact-message" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button  name="submit" type="submit" id="submit" className="btn button">
                                          XABARNI YUBORISH
                                        </button>
                                    </div>

                                </form> */}
  </Helmet>
}

export default Home