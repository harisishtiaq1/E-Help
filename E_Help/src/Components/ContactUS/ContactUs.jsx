import React from 'react'

function ContactUs() {
  return (
    <div className="container-fluid">
    <div className="sigin-wrap">
        <div className="pad-content">
            <h2 className="text-center mb-3">Contact US</h2>
            <form>
            <span className='mb-3'>
            <p>Do you have any questions? Please do not hesitate to contact us directly.</p>
          </span>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                    />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Message"cols="30" rows="10"></textarea>
                </div>

                <button type="submit" className="btn mb-3" id="signup-btn">
                    Send
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default ContactUs
