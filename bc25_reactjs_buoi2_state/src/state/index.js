import React, { Component } from "react";
import data from "./data.json";
import DanhSachSanPham from "./danh-sach-san-pham";

export default class State extends Component {
  constructor(props) {
    super(props);

    // Tao ra state
    this.state = {
      productList: data,
      detailProduct: data[1],
    };
  }

  handleDetailProduct = (product) => {
    console.log(product);
    this.setState({
      detailProduct: product,
    });
  };

  render() {
    const { productList, detailProduct } = this.state;
    return (
      <div>
        <h3 className="app_title">TRY GLASSES APP ONLINE</h3>
        <div className="container content">
          <div className="row">
            <div className="col-sm-6 left">
              <div className="card">
                <img
                  className="card-img-top"
                  src={detailProduct.url}
                  alt="Card image"
                />
                <div className="card-img-overlay">
                  <h4 className="card-title">
                    Tên sản phẩm : {detailProduct.name}
                  </h4>
                  <p className="card-text">
                    Thông tin sản phẩm : {detailProduct.desc}
                  </p>
                  <p className="card-text">Giá : {detailProduct.price}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 right">
              <div className="card"></div>
            </div>
          </div>
        </div>

        <DanhSachSanPham
          productList={productList}
          getDetail={this.handleDetailProduct}
        />
      </div>
    );
  }
}
