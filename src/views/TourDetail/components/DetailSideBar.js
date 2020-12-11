import React from "react";
import "../../../assets/css/DetailSideBar.css";

function DetailSideBar() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-lg-push-8 col-md-push-8 sideBarContent">
      <div className="col-xs-12 no-padding tourSideBar" id="tourSideBar">
        <span className="tourItemFull hide-className" id="ItemUnavailable">
          <img
            className="lazy"
            data-src="/du-lich/content/img/icon-hetcho.svg"
            alt="Hết chỗ"
          />
        </span>
        <div className="tourFormPrice">
          <div id="tourSideBarUL">
            <ul className="nav nav-tabs nav-stacked v-margin-bottom-5">
              <li style={{ borderBottom: "none" }}>
                <div className="row">
                  <div
                    className="col-xs-12 desktop-booking-form"
                    id="desktop-booking-form"
                  >
                    <div className="col-xs-12 floatBox highlight">
                      <div className="col-xs-12 no-padding v-margin-bottom-5 call-now">
                        Đặt ngay, chỉ 2 phút. Hoặc gọi{" "}
                        <a href="tel:02839338002">(028) 3933 8002</a>
                      </div>
                      <div className="col-xs-12 no-padding v-margin-bottom-15">
                        <div className="form-group">
                          <label
                            for="DateCheckinField"
                            className="col-xs-8 control-label no-padding"
                          >
                            Chọn ngày khởi hành:
                          </label>
                          <div className="col-xs-4 no-padding">
                            <div className="date-input-group">
                              <label
                                readonly=""
                                type="text"
                                className="form-control date-input dates-date btn-general DateCheckinField"
                                value="11-11-2017"
                              >
                                <span className="DateCheckinText">
                                  16-12-2020
                                </span>
                              </label>
                              <input
                                type="hidden"
                                className="get_date"
                                value="2020-12-16"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 no-padding v-margin-bottom-15 relative">
                        <span className="number-detail number-adult">2</span>
                        <span className="text-detail">
                          <span className="width-70">Người lớn</span>
                        </span>
                        <span className="SpecialRateAdultAvg price-color hide-className"></span>
                        <span className="RateAdultAvg price-color">
                          {" "}
                          x 6.290.000
                        </span>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn number-button minus-adult btn-general"
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                          <button
                            type="button"
                            className="btn number-button plus-adult btn-general"
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-xs-12 no-padding v-margin-bottom-15">
                        <span className="number-detail number-child">0</span>
                        <span className="text-detail">
                          <span className="width-70">Trẻ em</span>
                        </span>
                        <span className="SpecialRateChildAvg price-color hide-className"></span>
                        <span className="RateChildAvg price-color"></span>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn number-button minus-child btn-general"
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                          <button
                            type="button"
                            className="btn number-button plus-child btn-general"
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-xs-12 no-padding v-margin-bottom-15 hide-className Age_Childs">
                        <p className="v-margin-bottom-5">Độ tuổi trẻ em</p>
                        <ul
                          className="child-ages no-padding"
                          style={{ listStyle: "none" }}
                        ></ul>
                      </div>
                      <div className="col-xs-12 no-padding v-margin-bottom-15 showMsgAllotment hide-className">
                        <span style={{ color: "#ffbd00" }}>
                          Chỗ cuối cùng đã được đặt vui lòng chọn ngày khác
                        </span>
                      </div>
                      <div className="col-xs-12  no-padding v-margin-bottom-15 RateSurchargeAdult hide-className"></div>
                      <div className="col-xs-12  no-padding v-margin-bottom-15 SpecialRateSurchargeAdult hide-className">
                        <div className="col-xs-7 no-padding">
                          <span>Phụ thu phòng đơn</span>
                        </div>
                        <div className="col-xs-5 no-padding text-right">
                          <span className="price-color">0 VND</span>
                        </div>
                      </div>
                      <div className="col-xs-12  no-padding v-margin-bottom-15 priceDiv v-margin-top-15">
                        <span className="price-line price-line-detail">
                          12.980.000 VND
                        </span>
                        <span className="labelPrice">Tổng cộng</span>
                        <span className="price totalPrice">
                          12.580.000{" "}
                          <span className="tourItemCurrency">VND</span>
                        </span>
                      </div>
                      <div className="col-xs-12 no-padding v-margin-bottom-15 commistionRate hide-className">
                        <div className="col-xs-7 no-padding">
                          <span>Commission</span>
                        </div>
                        <div className="col-xs-5 no-padding text-right">
                          <span className="price-commisson">0 VND</span>
                        </div>
                      </div>
                      <div className="col-xs-12 no-padding specialrate-wrap-inner hide-className">
                        <label className="ivivuPoint-checkbox">
                          <span className="specialName"></span>
                          <span className="specialPrice"></span>
                          <input
                            type="checkbox"
                            className="select-special-rate"
                          />
                          <span className="checkmark"></span>
                          <input type="hidden" className="SpecialTotalRate" />
                        </label>
                      </div>
                      <div className="col-xs-12 no-padding wrap-supplement">
                        <div className="ls-supplement"></div>
                        <input
                          type="hidden"
                          className="note_supplement"
                          value=""
                        />
                        <input
                          type="hidden"
                          className="JsonSurchargeFee"
                          value="[]"
                        />
                      </div>
                      <div className="col-xs-12 no-padding">
                        <div className="form-group no-margin">
                          <label className="visible-sm">&nbsp;</label>
                          <div className="col-xs-12 no-padding scroll-mobile">
                            <div className="col-xs-12 no-padding request-Button">
                              <button className="btn btn-flat btn-action btn-md btn-block requestButton">
                                Yêu cầu đặt
                              </button>
                            </div>
                            <div className="col-xs-12 no-padding check-Button hide-className">
                              <button className="btn btn-flat btn-action btn-md btn-block checkButton requestPrice">
                                Xem giá
                              </button>
                            </div>

                            <div className="col-xs-12 no-padding book-Button hide-className">
                              <button className="btn btn-flat btn-action btn-md btn-block bookButton">
                                Đặt ngay
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="member-point check-point member-point__sidebar">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              className="nav nav-tabs nav-stacked v-margin-bottom-15"
              id="event-scroll-content"
            >
              <li data-activecontent="tour-schedule">
                <div className="scroll-content">CHƯƠNG TRÌNH TOUR</div>
              </li>
              <li data-activecontent="tour-departure">
                <div className="scroll-content">LỊCH KHỞI HÀNH </div>
              </li>
              <li data-activecontent="tour-term-regulations">
                <div className="scroll-content">ĐIỀU KHOẢN &amp; QUY ĐỊNH</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSideBar;