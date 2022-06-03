import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-sm-2">
        <div className="card">
          <a
            onClick={() => {
              this.props.getDetail(product);
            }}
          >
            <img className="card-img-top" src={product.url} alt="" />
          </a>
        </div>
      </div>
    );
  }
}
