import React, { Component } from 'react';
import resume from "../Images/Shenae-Simmons-Portfolio-Resume.pdf";

class Resume extends Component {
  render() {
    return (

  <div>
    <embed src={resume} type="application/pdf" width="400px" height="800px" align="center" />
  </div>
        );
  }
}

export default Resume;