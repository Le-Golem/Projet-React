import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const DetailsCard = () => {
   const {movieId} = useParams()     
   useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=65bb91b037f20d50a722883e4a68fe58`)
    .then((res) => console.log(res))
   },[movieId])

   return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
      <p />
      <div classname="pd-wrap">
        <div classname="container">
          <div classname="heading-section">
            <h2>Product Details</h2>
          </div>
          <div classname="row">
            <div classname="col-md-6">
              <div id="slider" classname="owl-carousel product-slider">
                <div classname="item">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                </div>
                <div classname="item">
                  <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
                </div>
                <div classname="item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
                </div>
                <div classname="item">
                  <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
                </div>
                <div classname="item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
                </div>
                <div classname="item">
                  <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
                </div>
                <div classname="item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
                </div>
              </div>
              <div id="thumb" classname="owl-carousel product-thumb">
                <div classname="item">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                </div>
                <div classname="item">
                  <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
                </div>
                <div classname="item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
                </div>
                <div classname="item">
                  <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
                </div>
                <div classname="item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
                </div>
                <div classname="item">
                  <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
                </div>
                <div classname="item">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
                </div>
              </div>
            </div>
            <div classname="col-md-6">
              <div classname="product-dtl">
                <div classname="product-info">
                  <div classname="product-name">Variable Product</div>
                  <div classname="reviews-counter">
                    <div classname="rate">
                      <input type="radio" id="star5" name="rate" defaultvalue="{5}" defaultchecked />
                      <label htmlfor="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" defaultvalue="{4}" defaultchecked />
                      <label htmlfor="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" defaultvalue="{3}" defaultchecked />
                      <label htmlfor="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" defaultvalue="{2}" />
                      <label htmlfor="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" defaultvalue="{1}" />
                      <label htmlfor="star1" title="text">
                        1 star
                      </label>
                    </div>
                    <span>3 Reviews</span>
                  </div>
                  <div classname="product-price-discount">
                    <span>$39.00</span>
                    <span classname="line-through">$29.00</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <div classname="row">
                  <div classname="col-md-6">
                    <label htmlfor="size">Size</label>
                    <select id="size" name="size" classname="form-control">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div classname="col-md-6">
                    <label htmlfor="color">Color</label>
                    <select id="color" name="color" classname="form-control">
                      <option>Blue</option>
                      <option>Green</option>
                      <option>Red</option>
                    </select>
                  </div>
                </div>
                <div classname="product-count">
                  <label htmlfor="size">Quantity</label>
                  <form action="#" classname="display-flex">
                    <div classname="qtyminus">-</div>
                    <input type="text" name="quantity" defaultvalue="{1}" classname="qty" />
                    <div classname="qtyplus">+</div>
                  </form>
                  <a href="#" classname="round-black-btn">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div classname="product-info-tabs">
            <ul classname="nav nav-tabs" id="myTab" role="tablist">
              <li classname="nav-item">
                <a classname="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">
                  Description
                </a>
              </li>
              <li classname="nav-item">
                <a classname="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">
                  Reviews (0)
                </a>
              </li>
            </ul>
            <div classname="tab-content" id="myTabContent">
              <div classname="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam.
              </div>
              <div classname="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                <div classname="review-heading">REVIEWS</div>
                <p classname="mb-20">There are no reviews yet.</p>
                <form classname="review-form">
                  <div classname="form-group">
                    <label>Your rating</label>
                    <div classname="reviews-counter">
                      <div classname="rate">
                        <input type="radio" id="star5" name="rate" defaultvalue="{5}" />
                        <label htmlfor="star5" title="text">
                          5 stars
                        </label>
                        <input type="radio" id="star4" name="rate" defaultvalue="{4}" />
                        <label htmlfor="star4" title="text">
                          4 stars
                        </label>
                        <input type="radio" id="star3" name="rate" defaultvalue="{3}" />
                        <label htmlfor="star3" title="text">
                          3 stars
                        </label>
                        <input type="radio" id="star2" name="rate" defaultvalue="{2}" />
                        <label htmlfor="star2" title="text">
                          2 stars
                        </label>
                        <input type="radio" id="star1" name="rate" defaultvalue="{1}" />
                        <label htmlfor="star1" title="text">
                          1 star
                        </label>
                      </div>
                    </div>
                  </div>
                  <div classname="form-group">
                    <label>Your message</label>
                    <textarea classname="form-control" rows="{10}" defaultvalue="{&quot;&quot;}" defaultValue={"              </div>\n              <div className=\"row\">\n                <div className=\"col-md-6\">\n                  <div className=\"form-group\">\n                    <input\n                      type=\"text\"\n                      name=\"\"\n                      className=\"form-control\"\n                      placeholder=\"Name*\"\n                    />\n                  </div>\n                </div>\n                <div className=\"col-md-6\">\n                  <div className=\"form-group\">\n                    <input\n                      type=\"text\"\n                      name=\"\"\n                      className=\"form-control\"\n                      placeholder=\"Email Id*\"\n                    />\n                  </div>\n                </div>\n              </div>\n              <button className=\"round-black-btn\">Submit Review</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div style={{ textAlign: \"center\", fontSize: 14, paddingBottom: 20 }}>\n        Get free icon packs for your next project at{\" \"}\n        <a\n          href=\"http://iiicons.in/\"\n          target=\"_blank\"\n          style={{ color: \"#ff5e63\", fontWeight: \"bold\" }}\n        >\n          www.iiicons.in\n        </a>\n      </div>\n    </div>\n  </div>\n"} /></div></form></div></div></div></div></div></div>
  );
};

export default DetailsCard;