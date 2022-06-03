import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  rederListProduct = () => {
    return this.props.productList.map((item) => {
      return (
        <SanPham
          key={item.id}
          product={item}
          getDetail={this.props.getDetail}
        ></SanPham>
      );
    });
  };
  render() {
    return (
      <div className="container list__item">
        <div className="row">{this.rederListProduct()}</div>
      </div>
    );
  }
}
