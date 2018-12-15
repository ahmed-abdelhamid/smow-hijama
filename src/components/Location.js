import React from 'react';

const Location = () => (
  <div className="col-md-6">
    <div className="p-5">
      <iframe
        title="Google Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.753720309486!2d46.71160941484391!3d24.769631884096817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd9c8339ef49%3A0x28690c1025d3145c!2z2YXYsdmD2LIg2LPZhdmIINin2YTYrdmK2KfYqSDZhNmE2K3YrNin2YXYqQ!5e0!3m2!1sen!2seg!4v1544915798484"
        width="400"
        height="300"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen
      />
    </div>
  </div>
);

export default Location;
