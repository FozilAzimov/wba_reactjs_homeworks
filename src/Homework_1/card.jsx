import React from "react";


class Card extends React.Component {
  render() {
    const cardImg = this.props.data.img;
    const imgBottom = this.props.data.imgB;
    const icon1 = this.props.data.icon1;
    const icon2 = this.props.data.icon1;
    const icon3 = this.props.data.icon3;
    const icon4 = this.props.data.icon4;
    const icon5 = this.props.data.cardIcon1;
    const icon6 = this.props.data.cardIcon2;
    return (
      <div className="card">
        <button className="btn-l"><a href="#">featured</a></button>
        <button className="btn-r"><a href="#">for sale</a></button>
        <img className="img" src={ cardImg } alt="cardImg" />
        <img className="img-bottom" src={ imgBottom } alt="imgBottom" />
        <div className="border-div">
          <div className="card-container1">
            <h3 className="card-title">New Apartment Nice Wiew</h3>
            <p className="card-text">Quincy St, Brooklyn, NY, USA</p>
            <div className="card-icon">
              <div className="card-icon-text">
                <img src={ icon1 } alt="icon" />
                <p>4 Neds</p>
              </div>
              <div className="card-icon-text">
                <img src={ icon2 } alt="icon" />
                <p>4 Neds</p>
              </div>
              <div className="card-icon-text">
                <img src={ icon3 } alt="icon" />
                <p>4 Neds</p>
              </div>
              <div className="card-icon-text">
                <img src={ icon4 } alt="icon" />
                <p>4 Neds</p>
              </div>
            </div>
          </div>
          <div className="card-container2">
            <div className="card-footer">
              <div className="footer-icon-l">
                <p><s>$2800/mo</s></p>
                <p>$7500/mo</p>
              </div>
              <div className="footer-icon-r">
                <span><img src={ icon5 } alt="rasm" /></span>
                <span><img src={ icon6 } alt="rasm" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;