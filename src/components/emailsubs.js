import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const EmailSubs = () => {
    return (
      <section className="footer">
          <div id="mc_embed_signup">
              <form action="https://vijayverma.us14.list-manage.com/subscribe/post?u=ed1f62133209766c02f08fd47&amp;id=c4285438c3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll" className="newsletter">
                  <div className="mc-field-group">
                    <label for="mce-EMAIL" style={{display:`none`}}>Email Address </label>
                      <div className="inputbox">
                       <input type="email" value="" placeholder="Your email address please" name="EMAIL" className="required email" id="mce-EMAIL" />
                      </div>
                  </div>
                  <div className="sub-action">
                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{display:`none`}}></div>
                        <div clasNames="response" id="mce-success-response" style={{display:`none`}}></div>
                    </div>
                    <div style={{position: `absolute`, left:`-5000px`}}aria-hidden="true">
                      <input type="text" name="b_ed1f62133209766c02f08fd47_c4285438c3" tabindex="-1" value="" />
                    </div>
                    <div className="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button sub-button" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
      </section>
    )
}

export default EmailSubs
