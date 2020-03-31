(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPanelAdminPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"mt-2\">Admin Panel</h2>\n<div class=\"row mt-3 mb-3\">\n    <div class=\"col-md-4\">\n        <h3 class=\"mx-auto\">Posts</h3>\n        <div class=\"col-md-12 mb-1\" *ngFor=\"let post of posts\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <img [src]=\"post.imgsrc\" alt=\"\" height=\"100px\" width=\"100px\">\n                    <h5 class=\"card-title\">{{post.name}}</h5>\n                    <div class=\"card-text\"><h6>Description : </h6>{{post.description}}</div><br>\n                    <a class=\"btn btn-danger\" (click)=\"deletePost(post.postId)\">Delete This Post</a>\n                </div>\n                <div class=\"card-footer text-muted\">\n                    <b>Category : </b>{{post.category}}<br>\n                    <b>Posted By : </b>{{post.postedBy}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <h3 class=\"mx-auto\">Reports</h3>\n        <div class=\"col-md-12 mb-1\" *ngFor=\"let report of reports\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <b>Report against :</b> {{report.reportedUserId}}<br>\n                    <b>Reported By :</b> {{report.reportedByUserId}}<br>\n                    <b>Report Message :</b> {{report.reportMessage}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <h3 class=\"mx-auto\">Users</h3>\n        <div class=\"col-md-12 mb-1\" *ngFor=\"let user of users\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <b>User Name :</b> {{user.userName}}<br>\n                    <b>Delete this user :</b> <button class=\"btn btn-danger\" (click)=\"deleteThisUser(user.userName)\">Delete</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\" width: 100%;\">\n  <a [routerLink]=\"homepage()\" class=\"navbar-brand\" style=\"color: #000; font-weight: 600; letter-spacing: -1px; font-size: xx-large;\">BOOKSOLX</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=#navbarSupportedContent>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/home\" class=\"nav-link\" routerLinkActive=\"active\">HOME</a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/posts\" class=\"nav-link\" routerLinkActive=\"active\">ADVERTISEMENTS</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <a [routerLink]=\"createAdRoute()\" class=\"nav-link\" routerLinkActive=\"active\">Post An Advertisement</a>\n      <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" class=\"nav-link\" routerLinkActive=\"active\">LOGIN</a>\n      <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" class=\"nav-link\" routerLinkActive=\"active\">REGISTER</a>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{returnUsername()}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\" routerLink=\"/profile\">Profile</a>\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\" routerLink=\"/my-posts\">My Ads</a>\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\" routerLink=\"/wishlist\">Wishlist</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"authService.logout()\">Logout</a>\n        </div>\n      </li>\n      <!-- <a *ngIf=\"authService.loggedIn()\" (click)=\"authService.logout()\" class=\"nav-link\" style=\"cursor: pointer;\">Logout</a> -->\n    </ul>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-post/create-post.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-post/create-post.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreatePostCreatePostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row mt-3 mb-3\">\n        <div class=\"col-md-1\">\n            <button class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"row pt-0 pb-5\">\n                <div class=\"col-md-10 mx-auto\">\n                    <div class=\"card rounded-0\">\n                        <div class=\"card-header\">\n                            <h1 class=\"mb-0\">Create An Advertisement</h1>\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"form\">\n                                <!-- ngifs for printing if post name is valid  -->\n                                <div class=\"warnings\">\n                                    <div *ngIf=\"!postDataValid\">\n                                        Similar post already exists\n                                    </div>\n                                    <div *ngIf=\"!imageValid\">\n                                        Please attach image file\n                                    </div>\n                                </div>\n                                <div class=\"row pt-2 pb-2\">\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"\">Name</label>\n                                            <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]=\"createPostData.name\" name=\"name\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"\">Description</label>\n                                            <textarea name=\"description\" class=\"form-control rounded-0\" [(ngModel)]=\"createPostData.description\" cols=\"30\" rows=\"5\" placeholder=\"Enter your post description here...\"></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"\">Pics of the book</label>\n                                            <input type=\"file\" class=\"form-control rounded-0\" required name=\"imgsrc\" (change)=\"onFileUpload($event)\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"\">Offer Price</label>\n                                            <input type=\"number\" class=\"form-control rounded-0\" required [(ngModel)]=\"createPostData.price\" name=\"price\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"\">Category of book</label>\n                                            <select name=\"category\" class=\"form-control rounded-0\" [(ngModel)]=\"createPostData.category\" required>\n                                                <option value=\"none\">---</option>\n                                                <option value=\"Action and adventure\">Action and adventure</option>\n                                                <option value=\"Alternate history\">Alternate history</option>\n                                                <option value=\"Art\">Art</option>\n                                                <option value=\"Biography\">Biography</option>\n                                                <option value=\"Book review\">Book review</option>\n                                                <option value=\"Children's\">Children's</option>\n                                                <option value=\"Comic book\">Comic book</option>\n                                                <option value=\"Cookbook\">Cookbook</option>\n                                                <option value=\"Crime\">Crime</option>\n                                                <option value=\"Diary\">Diary</option>\n                                                <option value=\"Dictionary\">Dictionary</option>\n                                                <option value=\"Encyclopedia\">Encyclopedia</option>\n                                                <option value=\"Fairytale\">Fairytale</option>\n                                                <option value=\"Graphic novel\">Graphic novel</option>\n                                                <option value=\"History\">History</option>\n                                                <option value=\"Horror\">Horror</option>\n                                                <option value=\"Journal\">Journal</option>\n                                                <option value=\"Math\">Math</option>\n                                                <option value=\"Mystery\">Mystery</option>\n                                                <option value=\"Poetry\">Poetry</option>\n                                                <option value=\"Prayer\">Prayer</option>\n                                                <option value=\"Review\">Review</option>\n                                                <option value=\"Satire\">Satire</option>\n                                                <option value=\"Science\">Science</option>\n                                                <option value=\"Science Fiction\">Science Fiction</option>\n                                                <option value=\"Self help\">Self help</option>\n                                                <option value=\"Textbook\">Textbook</option>\n                                                <option value=\"Travel\">Travel</option>\n                                                <option value=\"True Crime\">True Crime</option>\n                                                <option value=\"Young adult\">Young adult</option>\n                                                <option value=\"Other\"><b>Other</b></option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <button (click)=\"checkPostValid()\" type=\"button\" class=\"btn btn-primary float-right mb-0\">Create Ad</button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n    \n    \n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div style=\"font-size: large; margin-top: 300px;\">\n        <h1>oopsie...</h1>\n        <h2>some error occured</h2>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- //corousel -->\n\n<div id=\"carouselExampleControls\" class=\"carousel slide mb-3\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"./assets/images/book-quote-2.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"./assets/images/book-quote-3.jpg\" alt=\"Second slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"./assets/images/book-quote-4.png\" alt=\"Third slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n<div class=\"row mt-5\">\n    <div class=\"col-md-4 mb-3\" *ngFor=\"let post of posts\">\n        <div class=\"card\">\n            <img class=\"card-img-top\" [src]=\"post.imgsrc\" alt=\"Ad Image\" width=\"100%\" height=\"200px\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <h5 class=\"card-title\" style=\"margin-left: 12px;\">{{post.name}}</h5>\n                </div>\n                <div class=\"card-text\"><h6>Description : </h6>{{post.description.slice(0,20)+'...'}}</div><br>\n                <a [routerLink]=\"['/post']\" [queryParams]=\"{postId: post.postId}\" class=\"btn btn-secondary\">Login To Buy</a>\n            </div>\n            <div class=\"card-footer text-muted\">\n                <i>Login to know more</i>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row pt-5 pb-5\">\n        <div class=\"col-md-6 mx-auto\">\n            <div class=\"card rounded-0\">\n                <div class=\"card-header\">\n                    <h1 class=\"mb-0\">Login</h1>\n                </div>\n                <div class=\"card-body\">\n                    <form class=\"form\">\n                        <!-- if credentials are invalid -->\n                        <div *ngIf=\"invalidCredentials\" class=\"warning\">Email and/or password are invalid</div>\n    \n                            <div class=\"mx-auto\">\n                                <div class=\"form-group\">\n                                    <label for=\"\">Email</label>\n                                    <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]='loginUserData.email' name=\"email\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"\">Password</label>\n                                    <input type=\"password\" class=\"form-control rounded-0\" required [(ngModel)]='loginUserData.password' name=\"password\">\n                                </div>\n                                <button (click)=\"checkLogin()\" type=\"button\" class=\"btn btn-success float-right\">Login</button><br> \n                                Don't have an account? <a routerLink='/register'>Register Now</a>\n                            </div>\n                        \n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-posts/my-posts.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-posts/my-posts.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyPostsMyPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row pt-3 pb-2\">\n        <button class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>&nbsp;&nbsp;\n        <h2>My Advertisements</h2>\n    </div>\n    <div class=\"success\">\n        <div *ngIf=\"postDeleted\">Post Deleted</div>\n    </div>\n    <div *ngIf=\"noPosts\">\n        <div class=\"warnings\" style=\"padding: 10px;\">You have posted no ads</div>&nbsp;&nbsp;\n        <button routerLink=\"/create-post\" routerLinkActive=\"active\" class=\"btn btn-primary \">Create an Advertisement</button>\n    </div>\n    <div class=\"row mt-2\">\n        <div class=\"col-md-4 mb-3\" *ngFor=\"let post of posts\">\n            <div class=\"card\">\n                <img class=\"card-img-top\" [src]=\"post.imgsrc\" alt=\"Ad Image\" width=\"100%\" height=\"200px\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <h5 class=\"card-title\" style=\"margin-left: 12px;\">{{post.name}}</h5>\n                    </div>\n                    <div class=\"card-text\"><h6>Description : </h6>{{post.description.slice(0,20)+'...'}}</div><br>\n                    <a class=\"btn btn-primary\" (click)=\"editPost(post.postId)\" style=\"width: 100%; margin-bottom: 4px;\">Edit This Ad</a> \n                    <a class=\"btn btn-danger\" (click)=\"deletePost(post.postId)\" style=\"width: 100%;\">Delete This Post</a>\n                </div>\n                <div class=\"card-footer text-muted\">\n                    <b>Category : </b>{{post.category}}<br>\n                    <b>Posted By : </b>{{post.postedBy}}\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post-created/post-created.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-created/post-created.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostCreatedPostCreatedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div>\n        <h1>ad created</h1>\n        <button class=\"btn btn-secondary\" routerLink=\"/create-post\">Create another advertisement</button>&nbsp;\n        <button class=\"btn btn-secondary\" routerLink=\"/posts\">View advertisements</button>\n    </div>\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post-edit/post-edit.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-edit/post-edit.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostEditPostEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row pt-2 pb-2\">\n        <button class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"row pt-0 pb-5\">\n            <div class=\"col-md-10 mx-auto\">\n                <div class=\"card rounded-0\">\n                    <div class=\"card-header\">\n                        <h1 class=\"mb-0\">Edit Advertisement</h1>\n                    </div>\n                    <div class=\"card-body\">\n                        <form class=\"form\">\n                            <!-- ngifs for post name is valid or not -->\n                            <div class=\"warnings\">\n                                <div *ngIf=\"!postDataValid\">Similar Ad already exists</div>\n                            </div>\n                            <div class=\"row pt-2 pb-2\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"\">Name</label>\n                                        <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedPostData.name\" name=\"name\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"\">Description</label>\n                                        <textarea name=\"description\" class=\"form-control rounded-0\" required cols=\"30\" rows=\"5\" [(ngModel)]=\"fetchedPostData.description\"></textarea>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"\">Pics of the book</label>\n                                        <input type=\"file\" class=\"form-control rounded-0\" required name=\"imgsrc\" (change)=\"onFileUpload($event)\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"\">Offer Price</label>\n                                        <input type=\"number\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedPostData.price\" name=\"price\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"\">Category of book</label>\n                                        <select name=\"category\" class=\"form-control rounded-0\" [(ngModel)]=\"fetchedPostData.category\" required>\n                                            <option value=\"none\">---</option>\n                                            <option value=\"Action and adventure\">Action and adventure</option>\n                                            <option value=\"Alternate history\">Alternate history</option>\n                                            <option value=\"Art\">Art</option>\n                                            <option value=\"Biography\">Biography</option>\n                                            <option value=\"Book review\">Book review</option>\n                                            <option value=\"Children's\">Children's</option>\n                                            <option value=\"Comic book\">Comic book</option>\n                                            <option value=\"Cookbook\">Cookbook</option>\n                                            <option value=\"Crime\">Crime</option>\n                                            <option value=\"Diary\">Diary</option>\n                                            <option value=\"Dictionary\">Dictionary</option>\n                                            <option value=\"Encyclopedia\">Encyclopedia</option>\n                                            <option value=\"Fairytale\">Fairytale</option>\n                                            <option value=\"Graphic novel\">Graphic novel</option>\n                                            <option value=\"History\">History</option>\n                                            <option value=\"Horror\">Horror</option>\n                                            <option value=\"Journal\">Journal</option>\n                                            <option value=\"Math\">Math</option>\n                                            <option value=\"Mystery\">Mystery</option>\n                                            <option value=\"Poetry\">Poetry</option>\n                                            <option value=\"Prayer\">Prayer</option>\n                                            <option value=\"Review\">Review</option>\n                                            <option value=\"Satire\">Satire</option>\n                                            <option value=\"Science\">Science</option>\n                                            <option value=\"Science Fiction\">Science Fiction</option>\n                                            <option value=\"Self help\">Self help</option>\n                                            <option value=\"Textbook\">Textbook</option>\n                                            <option value=\"Travel\">Travel</option>\n                                            <option value=\"True Crime\">True Crime</option>\n                                            <option value=\"Young adult\">Young adult</option>\n                                            <option value=\"Other\"><b>Other</b></option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                            <button (click)=\"checkPostValid()\" class=\"btn btn-success float-right\">Update Post</button>\n                            <div *ngIf=\"postUpdated\" class=\"success\">Ad Updated</div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row pt-3\">\n    <button class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\n    <div style=\"margin-left: 12px;\"><h2>{{postData?.name}}</h2></div>\n</div>\n<div class=\"row pt-3 pb-3\">\n    <div class=\"col-md-6\">\n        <img src=\"{{ postData?.imgsrc }}\" alt=\"img\" width=\"100%\" height=\"100%\">\n    </div>\n    <div class=\"col-md-6\">\n        <div style=\"margin-left: 20px;\">\n            <h3>Description</h3>\n            <p>{{ postData?.description }}</p>\n            <h3>Category</h3>\n            <p>{{ postData?.category }}</p>\n            <h3>Price</h3>\n            <p>${{ postData?.price }}</p>\n            <h3>Posted By</h3>\n            <p>{{ postData?.postedBy }}</p>\n            <button class=\"float-right  btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Contact To Buy</button>\n        </div>\n        <button class=\"btn btn-danger\" (click)=\"reportUser(postData.postedBy)\">Report this user</button>\n\n        <!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Contact the Advertiser</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h5>You can contact the owner of this advertisement via the following contact details : </h5>\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n                <b>Name : </b>{{userDetails.firstName}} {{userDetails.lastName}}<br>\n                <b>Mobile Number : </b>{{userDetails.mobileNumber}}<br>\n                <b>Email address : </b>{{userDetails.email}}<br>\n                <b>State : </b>{{userDetails.locationState}}<br>\n                <b>Country : </b>{{userDetails.locationCountry}}<br><br>\n                <b>Do not forget to mention that you saw this ad on BooksOLX</b>\n            </div>\n            <div class=\"col-md-4\">\n                <img [src]=\"userDetails.userImgUrl\" alt=\"Avatar\" width=\"100%\" style=\"border-radius: 50%;\">\n            </div>\n          </div>\n          \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    </div>\n</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row mt-3\">\n    <!-- //corousel -->\n\n    <div id=\"carouselExampleControls\" class=\"carousel slide mb-3\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"./assets/images/book-quote-2.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"./assets/images/book-quote-3.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"./assets/images/book-quote-4.png\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n    <div class=\"col md-8 button-center\">\n        <button routerLink=\"/search-posts\" routerLinkActive=\"active\" class=\"btn btn-secondary \">Search Advertisements</button>\n    </div>\n</div>\n<div class=\"row pt-0\">\n    <div class=\"col-md-2\">\n        <br><br>\n        <h5>Categories</h5>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"none\">All Categories</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Action and adventure\">Action and adventure</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Alternate history\">Alternate history</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Art\">Art</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Biography\">Biography</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Book review\">Book review</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Children's\">Children's</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Comic book\">Comic book</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Cookbook\">Cookbook</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Crime\">Crime</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Diary\">Diary</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Dictionary\">Dictionary</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Encyclopedia\">Encyclopedia</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Fairytale\">Fairytale</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Graphic novel\">Graphic novel</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"History\">History</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Horror\">Horror</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Journal\">Journal</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Math\">Math</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Mystery\">Mystery</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Poetry\">Poetry</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Prayer\">Prayer</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Review\">Review</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Satire\">Satire</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Science\">Science</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Science Fiction\">Science Fiction</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Self help\">Self help</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Textbook\">Textbook</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Travel\">Travel</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"True Crime\">True Crime</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Young adult\">Young adult</button>\n        <button class=\"btn btn-success\" routerLinkActive=\"active\" (click)=\"showCategoryWise($event)\" value=\"Other\"><b>Other</b></button>\n    </div>\n    <div class=\"col-md-10\" style=\"padding-left: 30px; padding-top: 0px;\">\n        <div *ngIf=\"noResultsReturned\" style=\"padding: 10px;\">\n            No ads available in the selected category. Please choose some other category\n        </div>\n        <div class=\"row mt-5\">\n            <div class=\"col-md-4 mb-3\" *ngFor=\"let post of posts\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" [src]=\"post.imgsrc\" alt=\"Ad Image\" width=\"100%\" height=\"200px\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <h5 class=\"card-title\" style=\"margin-left: 12px;\">{{post.name}}</h5>\n                            <button type=\"button\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to wishlist\" class=\"btn btn-link float-right\" *ngIf=\"!inMyWishlist(post.postId)\" style=\"margin-left: auto; margin-right: 10px;\" (click)=\"addToWishlist(post.postId)\"><img src=\"https://img.icons8.com/plasticine/50/000000/like--v2.png\" style=\"width: 30px;\"></button>\n                            <button type=\"button\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Remove from wishlist\" class=\"btn btn-link float-right\" *ngIf=\"inMyWishlist(post.postId)\" style=\"margin-left: auto; margin-right: 10px;\" (click)=\"removeFromWishlist(post.postId)\"><img src=\"https://img.icons8.com/plasticine/100/000000/like--v1.png\" style=\"width: 30px;\"></button>\n                        </div>\n                        \n                        <div class=\"card-text\"><h6>Description : </h6>{{post.description.slice(0,20)+'...'}}</div><br>\n                        <a class=\"btn btn-primary\" (click)=\"openPost(post.postId)\">Buy This Now</a>\n                    </div>\n                    <div class=\"card-footer text-muted\">\n                        <b>Category : </b>{{post.category}}<br>\n                        <b>Posted By : </b>{{post.postedBy}}<br>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <button class=\"btn btn-secondary mt-2\" (click)=\"goBack()\">Back</button>\n<div class=\"row pt-2 pb-5\">\n    <div class=\"col-md-10 mx-auto\">\n        <div class=\"card rounded-0\">\n            <div class=\"card-header\">\n                <h1 class=\"mb-0\">Edit Profile</h1>\n            </div>\n            <div class=\"card-body\">\n                <form class=\"form\">\n                    <!-- ngIfs if data added is duplicate -->\n                    <div class=\"warnings\">\n                        <div *ngIf=\"!emailValid\">Account with same email already exists</div>\n                        <div *ngIf=\"!mobileNumberValid\">Account with same mobile number already exists</div>\n                    </div>\n\n                    <div class=\"row pt-2 pb-2\">\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Username</label>\n                                <input type=\"text\" class=\"form-control rounded-0\" disabled [(ngModel)]=\"fetchedUserDetails.userName\" name=\"userName\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\">First Name</label>\n                                <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedUserDetails.firstName\" name=\"firstName\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\">Last Name</label>\n                                <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedUserDetails.lastName\" name=\"lastName\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\">Email</label>\n                                <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedUserDetails.email\" name=\"email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\">Mobile Number</label>\n                                <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedUserDetails.mobileNumber\" name=\"mobileNumber\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                                <label for=\"\">Avatar</label>\n                                <input type=\"file\" class=\"form-control rounded-0\" required name=\"userImgUrl\" (change)=\"onFileUpload($event)\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\">State</label>\n                                <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedUserDetails.locationState\" name=\"locationState\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\">Country</label>\n                                <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedUserDetails.locationCountry\" name=\"locationCountry\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\">Password</label>\n                                <input type=\"password\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedUserDetails.password\" name=\"password\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\">Re-enter Password</label>\n                                <input type=\"password\" class=\"form-control rounded-0\" required [(ngModel)]=\"fetchedUserDetails.password\" name=\"password\">\n                            </div>\n                        </div>\n                        <button class=\"btn btn-success mx-auto\" (click)=\"updateUserDetails()\">Update Details</button>\n                        <div *ngIf=\"detailsUpdated\" class=\"success mx-auto\">\n                            Details Updated\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row pt-5 pb-5\">\n        <div class=\"col-md-10 mx-auto\">\n            <div class=\"card rounded-0\">\n                <div class=\"card-header\">\n                    <h1 class=\"mb-0\">Register</h1>\n                </div>\n                <div class=\"card-body\">\n                    <form class=\"form\">\n    \n                        <!-- ngifs for printing if username , email , and mobile numbers have been already used or not  -->\n                        <div class=\"warnings\">\n                            <div *ngIf=\"!userNameValid\">username already exists</div>\n                            <div *ngIf=\"!emailValid\">email already exists</div>\n                            <div *ngIf=\"!mobileNumberValid\">mobile number already exists</div>\n                        </div>\n    \n                        <div class=\"row pt-2 pb-2\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"\">First Name</label>\n                                    <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]='registerUserData.firstName' name=\"firstName\">\n                                    <p class=\"warnings\" *ngIf=\"firstNameNotValid()\">First Name not valid</p>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"\">Last Name</label>\n                                    <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]='registerUserData.lastName' name=\"lastName\">\n                                    <p class=\"warnings\" *ngIf=\"lastNameNotValid()\">Last Name not valid</p>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"\">Username</label>\n                                    <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]='registerUserData.userName' name=\"userName\">\n                                    <p class=\"warnings\" *ngIf=\"userNameNotValid()\">Username must be having atleast 6 characters</p>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"\">Email</label>\n                                    <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]='registerUserData.email' name=\"email\">\n                                    <p class=\"warnings\" *ngIf=\"emailNotValid()\">Please enter a valid email address</p>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"\">Phone Number</label>\n                                    <input type=\"number\" class=\"form-control rounded-0\" required [(ngModel)]='registerUserData.mobileNumber' name=\"mobileNumber\">\n                                    <p class=\"warnings\" *ngIf=\"numberNotValid()\">Please enter a valid 10-digit mobile number</p>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"\">Password</label>\n                                    <input type=\"password\" class=\"form-control rounded-0\" required [(ngModel)]='registerUserData.password' name=\"password\">\n                                    <p class=\"warnings\" *ngIf=\"passwordNotValid()\">Password must contain some special character like !@#$%^&*_ and must be atleast 8 character long</p>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"\">Re-enter Password</label>\n                                    <input type=\"password\" class=\"form-control rounded-0\" required [(ngModel)]='reenteredPassword' name=\"reenteredPassword\">\n                                    <p class=\"warnings\" *ngIf=\"reenteredPasswordNotValid()\">Password don't match</p>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"\">State</label>\n                                    <input type=\"text\" class=\"form-control rounded-0\" required [(ngModel)]='registerUserData.locationState' name=\"locationState\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"\">Country</label>\n                                    <input type=\"text\" class=\"form-control rounded-0\" value=\"India\" disabled required [(ngModel)]='registerUserData.locationCountry' name=\"locationCountry\">\n                                </div>\n                            </div>\n                        </div>\n                        <button (click)=\"checkDataValid()\" type=\"button\" class=\"btn btn-primary float-right\">Register</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div class=\"container\">\n        <h1 class=\"mt-3 mb-3\"><button class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button> Report User</h1>\n        <div>\n            <form class=\"form\" >\n                <p class=\"sucess\" *ngIf=\"reportSubmitted\">Report has been submitted to the admin. Action will be taken in case of any violations being performed by the advertiser</p>\n                <div class=\"form-group\">\n                    <label for=\"\">Report Message</label>\n                    <textarea class=\"form-control rounded-0\" name=\"reportMessage\"  cols=\"30\" rows=\"10\" [(ngModel)]=\"report.reportMessage\" placeholder=\"type your report here ... \"></textarea>\n                </div>\n                <button class=\"btn btn-danger float-right\" (click)=\"submitReport()\">Submit Report</button>\n            </form>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-posts/search-posts.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-posts/search-posts.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchPostsSearchPostsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row pt-3\">\n    <button class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\n    <div style=\"margin-left: 15px;\"><h2>Search Advertisements</h2></div>\n</div>\n<div class=\"row pt-3\" style=\"text-align: center;\">\n    <div class=\"col-md-8 mx-auto\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <input placeholder=\"Enter the name or category of book you are looking for...\" type=\"text\" class=\"form-control rounded-5\" [(ngModel)]=\"searchKeyword\" style=\"width: 100%;\">\n            </div>\n            <div class=\"col-md-4\">\n                <button class=\"btn btn-primary\" (click)=\"showResults()\" style=\"width: 100%;\">Search</button>\n            </div>\n        </div>\n        \n    </div>\n    \n</div>\n<div class=\"row pt-3\">\n    <div class=\"col-md-3\" style=\"overflow-y: scroll;\">\n        <h5>Search by Category</h5>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"none\">All Categories</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Action and adventure\">Action and adventure</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Alternate history\">Alternate history</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Art\">Art</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Biography\">Biography</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Book review\">Book review</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Children's\">Children's</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Comic book\">Comic book</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Cookbook\">Cookbook</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Crime\">Crime</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Diary\">Diary</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Dictionary\">Dictionary</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Encyclopedia\">Encyclopedia</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Fairytale\">Fairytale</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Graphic novel\">Graphic novel</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"History\">History</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Horror\">Horror</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Journal\">Journal</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Math\">Math</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Mystery\">Mystery</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Poetry\">Poetry</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Prayer\">Prayer</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Review\">Review</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Satire\">Satire</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Science\">Science</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Science Fiction\">Science Fiction</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Self help\">Self help</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Textbook\">Textbook</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Travel\">Travel</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"True Crime\">True Crime</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Young adult\">Young adult</button>\n        <button class=\"btn btn-success\" (click)=\"showCategoryWise($event)\" value=\"Other\"><b>Other</b></button>\n    </div>\n    <div class=\"col-md-9\" id=\"resultBox\">\n        <div *ngIf=\"!searchInitiated\" style=\"padding: 10px;\">\n            Search for a book name and then select category to shortlist the results.\n        </div>\n        <div *ngIf=\"noResultsReturned\" style=\"padding: 10px;\">\n            Your query did not match any posted ads. Please try some other keyword.\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4 mb-3\" *ngFor=\"let post of searchResultData\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" [src]=\"post.imgsrc\" alt=\"Ad Image\" width=\"100%\" height=\"200px\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <h5 class=\"card-title\" style=\"margin-left: 12px;\">{{post.name}}</h5>\n                            <button type=\"button\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add to wishlist\" class=\"btn btn-link float-right\" *ngIf=\"!inMyWishlist(post.postId)\" style=\"margin-left: auto; margin-right: 10px;\" (click)=\"addToWishlist(post.postId)\"><img src=\"https://img.icons8.com/plasticine/50/000000/like--v2.png\" style=\"width: 30px;\"></button>\n                            <button type=\"button\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Remove from wishlist\" class=\"btn btn-link float-right\" *ngIf=\"inMyWishlist(post.postId)\" style=\"margin-left: auto; margin-right: 10px;\" (click)=\"removeFromWishlist(post.postId)\"><img src=\"https://img.icons8.com/plasticine/100/000000/like--v1.png\" style=\"width: 30px;\"></button>\n                        </div>\n                        \n                        <div class=\"card-text\"><h6>Description : </h6>{{post.description}}</div><br>\n                        <a class=\"btn btn-primary\" (click)=\"openPost(post.postId)\">Buy This Now</a>\n                    </div>\n                    <div class=\"card-footer text-muted\">\n                        <b>Category : </b>{{post.category}}<br>\n                        <b>Posted By : </b>{{post.postedBy}}<br>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistWishlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div *ngIf=\"noPosts\">\n        <div class=\"warnings\">You have added no posts to your wishlist</div><br/>\n        <a routerLink=\"/posts\">Go Browse Some Ads</a>\n    </div>\n    <div class=\"row mt-4\">\n            <div class=\"col-md-4 mb-3\" *ngFor=\"let post of posts\">\n                <div class=\"card\">\n                    <img class=\"card-img-top\" [src]=\"post.imgsrc\" alt=\"Ad Image\" width=\"100%\" height=\"200px\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <h5 class=\"card-title\" style=\"margin-left: 12px;\">{{post.name}}</h5>\n                        </div>\n                        <div class=\"card-text\"><h6>Description : </h6>{{post.description.slice(0,20)+'...'}}</div><br>\n                            <a class=\"btn btn-primary\" (click)=\"openPost(post.postId)\" style=\"width: 100%; margin-bottom: 4px;\">Buy This Now</a>\n                            <a class=\"btn btn-danger\" (click)=\"removeFromWishlist(post.postId)\" style=\"width: 100%;\">Remove From wishlist</a>\n                    </div>\n                    <div class=\"card-footer text-muted\">\n                        <b>Category : </b>{{post.category}}<br>\n                        <b>Posted By : </b>{{post.postedBy}}\n                    </div>\n                </div>\n            </div>\n        \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin-panel/admin-panel.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin-panel/admin-panel.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPanelAdminPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin-panel/admin-panel.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin-panel/admin-panel.component.ts ***!
    \******************************************************/

  /*! exports provided: AdminPanelComponent */

  /***/
  function srcAppAdminPanelAdminPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () {
      return AdminPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    let AdminPanelComponent = class AdminPanelComponent {
      constructor(postService, authService) {
        this.postService = postService;
        this.authService = authService;
        this.posts = [];
        this.reports = [];
        this.users = [];
      }

      ngOnInit() {
        this.postService.fetchPosts().subscribe(data => {
          this.posts = data;
        });
        this.authService.fetchReports().subscribe(data => {
          this.reports = data;
        });
        this.authService.fetchUsers().subscribe(data => {
          this.users = data;
        });
      }

      deletePost(postId) {
        this.postService.deletePost(postId).subscribe(data => {
          console.log(data);
          this.postService.fetchPosts().subscribe(data => {
            this.posts = data;
          });
        });
      }

      deleteThisUser(userName) {
        this.authService.deleteUser(userName).subscribe(data => {
          this.authService.fetchUsers().subscribe(data => {
            this.users = data;
          });
        });
      }

    };

    AdminPanelComponent.ctorParameters = () => [{
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-panel.component.css */
      "./src/app/admin-panel/admin-panel.component.css")).default]
    })], AdminPanelComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authguard/auth.guard */
    "./src/app/authguard/auth.guard.ts");
    /* harmony import */


    var _search_posts_search_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search-posts/search-posts.component */
    "./src/app/search-posts/search-posts.component.ts");
    /* harmony import */


    var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./create-post/create-post.component */
    "./src/app/create-post/create-post.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _post_created_post_created_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./post-created/post-created.component */
    "./src/app/post-created/post-created.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./my-posts/my-posts.component */
    "./src/app/my-posts/my-posts.component.ts");
    /* harmony import */


    var _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./post-edit/post-edit.component */
    "./src/app/post-edit/post-edit.component.ts");
    /* harmony import */


    var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./wishlist/wishlist.component */
    "./src/app/wishlist/wishlist.component.ts");
    /* harmony import */


    var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin-panel/admin-panel.component */
    "./src/app/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _authguard_admin_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./authguard/admin-auth.guard */
    "./src/app/authguard/admin-auth.guard.ts");
    /* harmony import */


    var _report_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./report/report.component */
    "./src/app/report/report.component.ts");

    const routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'posts',
      component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'search-posts',
      component: _search_posts_search_posts_component__WEBPACK_IMPORTED_MODULE_8__["SearchPostsComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'create-post',
      component: _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_9__["CreatePostComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'error',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]
    }, {
      path: 'post-created',
      component: _post_created_post_created_component__WEBPACK_IMPORTED_MODULE_11__["PostCreatedComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'post',
      component: _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'my-posts',
      component: _my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_14__["MyPostsComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'post-edit',
      component: _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_15__["PostEditComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'wishlist',
      component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_16__["WishlistComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: 'admin',
      component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_17__["AdminPanelComponent"],
      canActivate: [_authguard_admin_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AdminAuthGuard"]]
    }, {
      path: 'report',
      component: _report_report_component__WEBPACK_IMPORTED_MODULE_19__["ReportComponent"],
      canActivate: [_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/error',
      pathMatch: 'full'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AppComponent = class AppComponent {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'BooksOLX';
      }

      ngOnInit() {}

      homepage() {
        if (this.authService.loggedIn()) {
          return "/posts";
        } else {
          return "/home";
        }
      }

      navigateToProfile() {}

      createAdRoute() {
        if (this.authService.loggedIn()) {
          return "/create-post";
        } else {
          return "/login";
        }
      }

      returnUsername() {
        if (sessionStorage.getItem('username') == null) {
          this.router.navigate(["/login"]);
        } else {
          return sessionStorage.getItem('username');
        }
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _authguard_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./authguard/auth.guard */
    "./src/app/authguard/auth.guard.ts");
    /* harmony import */


    var _search_posts_search_posts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./search-posts/search-posts.component */
    "./src/app/search-posts/search-posts.component.ts");
    /* harmony import */


    var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./create-post/create-post.component */
    "./src/app/create-post/create-post.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _post_created_post_created_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./post-created/post-created.component */
    "./src/app/post-created/post-created.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./my-posts/my-posts.component */
    "./src/app/my-posts/my-posts.component.ts");
    /* harmony import */


    var _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./post-edit/post-edit.component */
    "./src/app/post-edit/post-edit.component.ts");
    /* harmony import */


    var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./wishlist/wishlist.component */
    "./src/app/wishlist/wishlist.component.ts");
    /* harmony import */


    var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin-panel/admin-panel.component */
    "./src/app/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _report_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./report/report.component */
    "./src/app/report/report.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"], _search_posts_search_posts_component__WEBPACK_IMPORTED_MODULE_14__["SearchPostsComponent"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_15__["CreatePostComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"], _post_created_post_created_component__WEBPACK_IMPORTED_MODULE_17__["PostCreatedComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"], _my_posts_my_posts_component__WEBPACK_IMPORTED_MODULE_20__["MyPostsComponent"], _post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_21__["PostEditComponent"], _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_22__["WishlistComponent"], _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_23__["AdminPanelComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_24__["ReportComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _authguard_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _services_post_service__WEBPACK_IMPORTED_MODULE_12__["PostService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authguard/admin-auth.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/authguard/admin-auth.guard.ts ***!
    \***********************************************/

  /*! exports provided: AdminAuthGuard */

  /***/
  function srcAppAuthguardAdminAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () {
      return AdminAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    let AdminAuthGuard = class AdminAuthGuard {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }

      canActivate() {
        if (this.authService.adminLoggedIn()) {
          return true;
        } else {
          this.router.navigate(["/login"]);
        }
      }

    };

    AdminAuthGuard.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminAuthGuard);
    /***/
  },

  /***/
  "./src/app/authguard/auth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/authguard/auth.guard.ts ***!
    \*****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthguardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    let AuthGuard = class AuthGuard {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }

      canActivate() {
        if (this.authService.loggedIn()) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/create-post/create-post.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/create-post/create-post.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreatePostCreatePostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".warnings{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZ3N7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/create-post/create-post.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/create-post/create-post.component.ts ***!
    \******************************************************/

  /*! exports provided: CreatePostComponent */

  /***/
  function srcAppCreatePostCreatePostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function () {
      return CreatePostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _models_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/Post */
    "./src/app/models/Post.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let CreatePostComponent = class CreatePostComponent {
      constructor(authService, postService, router) {
        this.authService = authService;
        this.postService = postService;
        this.router = router;
        this.createPostData = new _models_Post__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        this.postDataValid = true;
        this.imageValid = true;
      }

      ngOnInit() {}

      goBack() {
        window.history.back();
      }

      onFileUpload(event) {
        this.selectedFile = event.target.files[0];
      }

      checkPostValid() {
        // console.log(this.authService.loggedInUserUsername)
        if (this.authService.loggedInUserUsername == '' || this.authService.loggedInUserUsername == null) {
          this.authService.loggedInUserUsername = sessionStorage.getItem('username');
        }

        if (this.selectedFile == null) {
          this.imageValid = false;
          return;
        }

        this.createPostData.setPostedBy(this.authService.loggedInUserUsername);
        this.postService.checkPostValid(this.createPostData).subscribe(data => {
          this.postDataValid = data; // console.log(this.postDataValid)

          if (this.postDataValid) {
            this.postService.getImageUrl(this.selectedFile).subscribe(data => {
              this.imgurData = data; // console.log(this.imgurData.data.link)

              this.createPostData.setImgsrc(this.imgurData.data.link);
              this.postService.createPost(this.createPostData).subscribe(data => {
                // console.log(data)
                this.router.navigate(["/post-created"]);
              }, error => this.router.navigate(["/error"]));
            }, error => this.router.navigate(["/error"]));
          }
        }, error => this.router.navigate(["/error"]));
      }

    };

    CreatePostComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    CreatePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-post/create-post.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-post.component.css */
      "./src/app/create-post/create-post.component.css")).default]
    })], CreatePostComponent);
    /***/
  },

  /***/
  "./src/app/error/error.component.css":
  /*!*******************************************!*\
    !*** ./src/app/error/error.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ErrorComponent = class ErrorComponent {
      constructor() {}

      ngOnInit() {}

    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/error/error.component.css")).default]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let HomeComponent = class HomeComponent {
      constructor(postService, router) {
        this.postService = postService;
        this.router = router;
        this.posts = [];
      }

      ngOnInit() {
        this.postService.fetchPosts().subscribe(data => {
          this.posts = data; // console.log(this.posts)
        }, error => this.router.navigate(["/error"]));
      }

    };

    HomeComponent.ctorParameters = () => [{
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".warning{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZ3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let LoginComponent = class LoginComponent {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginUserData = {
          email: null,
          password: null
        };
        this.invalidCredentials = false;
      }

      ngOnInit() {}

      checkLogin() {
        if (this.loginUserData.email === 'admin' && this.loginUserData.password === 'admin') {
          this.router.navigate(["/admin"]);
          sessionStorage.setItem('admin', 'admin');
          return;
        }

        this.authService.checkLogin(this.loginUserData).subscribe(data => {
          this.loggedInUser = data;

          if (this.loggedInUser == null) {
            this.invalidCredentials = true;
          } else {
            sessionStorage.setItem('user', btoa(this.loggedInUser.email + ":" + this.loggedInUser.password));
            sessionStorage.setItem('username', this.loggedInUser.userName + "");
            this.router.navigate(['/posts']);
          }
        }, error => this.router.navigate(["/error"]));
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/models/Post.ts":
  /*!********************************!*\
    !*** ./src/app/models/Post.ts ***!
    \********************************/

  /*! exports provided: Post */

  /***/
  function srcAppModelsPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Post {
      // constructor(data){
      //     this.name = data.name,
      //     this.description = data.description,
      //     this.imgsrc = data.imgsrc,
      //     this.price = data.price,
      //     this.category = data.category,
      //     this.postedBy = data.postedBy,
      //     this.postId = data.postId
      // }
      setPostId(postId) {
        this.postId = postId;
      }

      setCategory(category) {
        this.category = category;
      }

      setPrice(price) {
        this.price = price;
      }

      setDescription(description) {
        this.description = description;
      }

      setPostedBy(postedBy) {
        this.postedBy = postedBy;
      }

      setImgsrc(imgsrc) {
        this.imgsrc = imgsrc;
      }

      setName(name) {
        this.name = name;
      }

    }
    /***/

  },

  /***/
  "./src/app/my-posts/my-posts.component.css":
  /*!*************************************************!*\
    !*** ./src/app/my-posts/my-posts.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyPostsMyPostsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".success{\r\n    color: green;\r\n}\r\n.warnings{\r\n    color: red;\r\n}\r\n.btncolor{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcG9zdHMvbXktcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL215LXBvc3RzL215LXBvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VjY2Vzc3tcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4ud2FybmluZ3N7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5idG5jb2xvcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/my-posts/my-posts.component.ts":
  /*!************************************************!*\
    !*** ./src/app/my-posts/my-posts.component.ts ***!
    \************************************************/

  /*! exports provided: MyPostsComponent */

  /***/
  function srcAppMyPostsMyPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPostsComponent", function () {
      return MyPostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");

    let MyPostsComponent = class MyPostsComponent {
      constructor(router, postService) {
        this.router = router;
        this.postService = postService;
        this.posts = [];
        this.noPosts = false;
        this.postDeleted = false;
      }

      ngOnInit() {
        if (sessionStorage.getItem('username') != null) {
          this.postService.getPostsByUserName(sessionStorage.getItem('username')).subscribe(data => {
            this.posts = data;

            if (this.posts.length == 0) {
              this.noPosts = true;
            }
          }, error => this.router.navigate(["/error"]));
        } else {
          this.router.navigate(["/error"]);
        }
      }

      goBack() {
        window.history.back();
      }

      editPost(postId) {
        this.router.navigate(["/post-edit"], {
          queryParams: {
            postId: postId
          }
        });
      }

      deletePost(postId) {
        this.postService.deletePost(postId).subscribe(data => {
          console.log(data);
          this.postService.getPostsByUserName(sessionStorage.getItem('username')).subscribe(data => {
            this.posts = data;
            this.postDeleted = true;
          }, error => this.router.navigate(["/error"]));
        }, error => {
          this.router.navigate(["/error"]);
        });
      }

    };

    MyPostsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
    }];

    MyPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-posts/my-posts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-posts.component.css */
      "./src/app/my-posts/my-posts.component.css")).default]
    })], MyPostsComponent);
    /***/
  },

  /***/
  "./src/app/post-created/post-created.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/post-created/post-created.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostCreatedPostCreatedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtY3JlYXRlZC9wb3N0LWNyZWF0ZWQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/post-created/post-created.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/post-created/post-created.component.ts ***!
    \********************************************************/

  /*! exports provided: PostCreatedComponent */

  /***/
  function srcAppPostCreatedPostCreatedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCreatedComponent", function () {
      return PostCreatedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PostCreatedComponent = class PostCreatedComponent {
      constructor() {}

      ngOnInit() {}

    };
    PostCreatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-created',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-created.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post-created/post-created.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-created.component.css */
      "./src/app/post-created/post-created.component.css")).default]
    })], PostCreatedComponent);
    /***/
  },

  /***/
  "./src/app/post-edit/post-edit.component.css":
  /*!***************************************************!*\
    !*** ./src/app/post-edit/post-edit.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostEditPostEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".warnings{\r\n    color: red;\r\n}\r\n.success{\r\n    color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhcm5pbmdze1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uc3VjY2Vzc3tcclxuICAgIGNvbG9yOiBncmVlbjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/post-edit/post-edit.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/post-edit/post-edit.component.ts ***!
    \**************************************************/

  /*! exports provided: PostEditComponent */

  /***/
  function srcAppPostEditPostEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostEditComponent", function () {
      return PostEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    let PostEditComponent = class PostEditComponent {
      constructor(postService, router, route, authService) {
        this.postService = postService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.fetchedPostData = {
          name: null,
          description: null,
          imgsrc: null,
          price: 0,
          category: null,
          postId: null,
          postedBy: null
        };
        this.postUpdated = false;
        this.newUploadedPic = null;
        this.postDataValid = true;
      }

      onFileUpload(event) {
        this.newUploadedPic = event.target.files[0];
      }

      ngOnInit() {
        this.route.queryParams.subscribe(params => {
          this.postId = params['postId'];
          this.postService.getPostData(this.postId).subscribe(data => {
            this.fetchedPostData = data;
          }, error => this.router.navigate(["/error"]));
        });
      }

      checkPostValid() {
        if (this.authService.loggedInUserUsername == '' || this.authService.loggedInUserUsername == null) {
          this.authService.loggedInUserUsername = sessionStorage.getItem('username');
        }

        this.fetchedPostData.postedBy = this.authService.loggedInUserUsername;

        if (this.newUploadedPic != null) {
          this.postService.getImageUrl(this.newUploadedPic).subscribe(data => {
            this.imgurData = data;
            this.fetchedPostData.imgsrc = this.imgurData.data.link;
            this.postService.updatePost(this.fetchedPostData).subscribe(data => {
              // console.log("post updated")
              this.postUpdated = true;
            }, error => this.router.navigate(["/error"]));
          }, error => this.router.navigate(["/error"]));
        } else {
          this.postService.updatePost(this.fetchedPostData).subscribe(data => {
            // console.log("post updated")
            this.postUpdated = true;
          }, error => this.router.navigate(["/error"]));
        }
      }

      goBack() {
        window.history.back();
      }

    };

    PostEditComponent.ctorParameters = () => [{
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }];

    PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post-edit/post-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-edit.component.css */
      "./src/app/post-edit/post-edit.component.css")).default]
    })], PostEditComponent);
    /***/
  },

  /***/
  "./src/app/post/post.component.css":
  /*!*****************************************!*\
    !*** ./src/app/post/post.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/Post */
    "./src/app/models/Post.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    let PostComponent = class PostComponent {
      constructor(router, route, postService, authService) {
        this.router = router;
        this.route = route;
        this.postService = postService;
        this.authService = authService;
        this.userDetails = {
          userName: null,
          firstName: null,
          lastName: null,
          email: null,
          mobileNumber: null,
          locationState: null,
          locationCountry: null,
          userImgUrl: null,
          password: null
        };
        this.postData = new _models_Post__WEBPACK_IMPORTED_MODULE_3__["Post"]();
      }

      ngOnInit() {
        this.route.queryParams.subscribe(params => {
          this.postId = params['postId'];
          this.postService.getPostData(this.postId).subscribe(data => {
            if (data == null) {
              this.router.navigate(["/error"]);
              return;
            } // console.log(data)


            this.postData.setName(data.name);
            this.postData.setDescription(data.description);
            this.postData.setImgsrc(data.imgsrc);
            this.postData.setPrice(data.price);
            this.postData.setCategory(data.category);
            this.postData.setPostedBy(data.postedBy);
            this.postData.setPostId(data.postId); //fetch postedBy details

            this.authService.getUserDetails(data.postedBy + "").subscribe(data => {
              this.userDetails = data;
            }, error => this.router.navigate(["/error"]));
          }, error => this.router.navigate(["/error"]));
        });
      }

      goBack() {
        history.back();
      }

      reportUser(postedBy) {
        this.router.navigate(["/report"], {
          queryParams: {
            reportUser: postedBy
          }
        });
      }

      showUserDetails() {}

    };

    PostComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }];

    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.component.css */
      "./src/app/post/post.component.css")).default]
    })], PostComponent);
    /***/
  },

  /***/
  "./src/app/posts/posts.component.css":
  /*!*******************************************!*\
    !*** ./src/app/posts/posts.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsPostsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-center{\r\n    text-align: center;\r\n}\r\n.active{\r\n    color: black;\r\n}\r\nbutton{\r\n    margin: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/posts/posts.component.ts":
  /*!******************************************!*\
    !*** ./src/app/posts/posts.component.ts ***!
    \******************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let PostsComponent = class PostsComponent {
      constructor(route, postService, router) {
        this.route = route;
        this.postService = postService;
        this.router = router;
        this.wishlistPostIds = [];
        this.noResultsReturned = false;
      }

      ngOnInit() {
        this.route.queryParams.subscribe(params => {
          this.queryCategory = params['category'];

          if (this.queryCategory == null || this.queryCategory === 'none') {
            this.postService.fetchPosts().subscribe(data => {
              this.posts = data;

              if (sessionStorage.getItem('username') == null) {
                this.router.navigate(["/login"]);
              }

              this.postService.getWishlistPosts(sessionStorage.getItem('username')).subscribe(data => {
                this.wishlistPostIds = data; // console.log(this.wishlistPostIds)
              }, error => this.router.navigate(["/error"]));
            }, error => this.router.navigate(["/error"]));
          } else {
            this.shownCategory = this.queryCategory;
            this.postService.getPostsByCategory(this.shownCategory).subscribe(data => {
              this.posts = data;

              if (sessionStorage.getItem('username') == null) {
                this.router.navigate(["/login"]);
              }

              this.postService.getWishlistPosts(sessionStorage.getItem('username')).subscribe(data => {
                this.wishlistPostIds = data; // console.log(this.wishlistPostIds)
              }, error => this.router.navigate(["/error"]));

              if (data.length < 1) {
                this.noResultsReturned = true;
              } else {
                this.noResultsReturned = false;
              }
            }, error => this.router.navigate(["/error"]));
          }
        });
      }

      showCategoryWise(event) {
        this.shownCategory = event.target.value; //append in url

        this.router.navigate(["/posts"], {
          queryParams: {
            category: this.shownCategory
          }
        }); //fetch posts according to category
      }

      openPost(postId) {
        this.router.navigate(['/post'], {
          queryParams: {
            postId: postId
          }
        });
      }

      addToWishlist(postId) {
        if (sessionStorage.getItem('username') == null) {
          this.router.navigate(["/login"]);
        }

        this.postService.addToWishlist(postId, sessionStorage.getItem('username')).subscribe(data => {
          this.ngOnInit();
        });
      }

      removeFromWishlist(postId) {
        if (sessionStorage.getItem('username') == null) {
          this.router.navigate(["/login"]);
        }

        this.postService.removeFromWishlist(postId, sessionStorage.getItem('username')).subscribe(data => {
          this.ngOnInit();
        });
      }

      inMyWishlist(postId) {
        if (this.wishlistPostIds.includes(postId)) {
          return true;
        } else {
          return false;
        }
      }

    };

    PostsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./posts.component.css */
      "./src/app/posts/posts.component.css")).default]
    })], PostsComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".warnings{\r\n    color: red;\r\n}\r\n.success{\r\n    color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuaW5nc3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ProfileComponent = class ProfileComponent {
      constructor(authService, postService, router) {
        this.authService = authService;
        this.postService = postService;
        this.router = router;
        this.fetchedUserDetails = {
          firstName: null,
          lastName: null,
          userName: null,
          email: null,
          password: null,
          mobileNumber: null,
          locationState: null,
          locationCountry: null,
          userImgUrl: null
        };
        this.newUserImg = null;
        this.detailsUpdated = false;
        this.emailValid = true;
        this.mobileNumberValid = true;
        this.updateDataCheck = {
          userNameValid: true,
          emailValid: true,
          mobileNumberValid: true
        };
      }

      ngOnInit() {
        if (sessionStorage.getItem('username') != null) {
          this.authService.getUserDetails(sessionStorage.getItem('username')).subscribe(data => {
            this.fetchedUserDetails = data;
          });
        } else {
          this.router.navigate(["/login"]);
        }
      }

      goBack() {
        window.history.back();
      }

      updateUserDetails() {
        this.authService.checkUpdateDataValid(this.fetchedUserDetails).subscribe(data => {
          this.updateDataCheck = data;
          this.emailValid = this.updateDataCheck.emailValid;
          this.mobileNumberValid = this.updateDataCheck.mobileNumberValid; //if all data is valid , move forward

          if (this.emailValid && this.mobileNumberValid) {
            if (this.newUserImg != null) {
              this.postService.getImageUrl(this.newUserImg).subscribe(data => {
                this.returnedImageData = data;
                this.fetchedUserDetails.userImgUrl = this.returnedImageData.data.link;
                this.authService.updateUserDetails(this.fetchedUserDetails).subscribe(data => {
                  // console.log(data)
                  // console.log("updated user details")
                  this.detailsUpdated = true;
                  sessionStorage.setItem('user', btoa(data.email + ":" + data.password));
                  sessionStorage.setItem('username', data.userName);
                }, error => this.router.navigate(["/error"]));
              }, error => this.router.navigate(["/error"]));
            } else {
              this.authService.updateUserDetails(this.fetchedUserDetails).subscribe(data => {
                // console.log(data)
                // console.log("user details updated")
                this.detailsUpdated = true;
                sessionStorage.setItem('user', btoa(data.email + ":" + data.password));
                sessionStorage.setItem('username', data.userName);
              }, error => this.router.navigate(["/error"]));
            }
          }
        }, error => this.router.navigate(["/error"]));
      }

      onFileUpload(event) {
        this.newUserImg = event.target.files[0];
        console.log("file uploaded");
      }

    };

    ProfileComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".warnings{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZ3N7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let RegisterComponent = class RegisterComponent {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registerUserData = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          mobileNumber: "",
          locationState: "",
          locationCountry: "India",
          userName: ""
        };
        this.userNameValid = true;
        this.emailValid = true;
        this.mobileNumberValid = true;
        this.userCheck = {
          userNameValid: true,
          emailValid: true,
          mobileNumberValid: true
        };
        this.reenteredPassword = '';
      }

      ngOnInit() {}

      checkDataValid() {
        //client side validation 
        if (this.firstNameNotValid() || this.lastNameNotValid() || this.userNameNotValid() || this.emailNotValid() || this.passwordNotValid() || this.reenteredPasswordNotValid() || this.numberNotValid()) {
          return;
        } //check if all three unique data is valid 
        else {
            this.authService.checkDataValid(this.registerUserData).subscribe(data => {
              this.userCheck = data;
              this.userNameValid = this.userCheck.userNameValid;
              this.emailValid = this.userCheck.emailValid;
              this.mobileNumberValid = this.userCheck.mobileNumberValid; //if all data is valid, lets register the user real quick

              if (this.userNameValid && this.emailValid && this.mobileNumberValid) {
                this.authService.registerUser(this.registerUserData).subscribe(data => {
                  // console.log("user registered");
                  sessionStorage.setItem('user', btoa(data.email + ":" + data.password));
                  sessionStorage.setItem('username', data.userName);
                  this.router.navigate(['/posts']);
                }, error => this.router.navigate(["/error"]));
              }
            }, error => this.router.navigate(["/error"]));
          }
      }

      firstNameNotValid() {
        if (this.registerUserData.firstName.length > 0 && this.registerUserData.firstName.length < 2) {
          return true;
        } else {
          return false;
        }
      }

      lastNameNotValid() {
        if (this.registerUserData.lastName.length > 0 && this.registerUserData.lastName.length < 2) {
          return true;
        } else {
          return false;
        }
      }

      userNameNotValid() {
        if (this.registerUserData.userName.length > 0 && this.registerUserData.userName.length < 6) {
          return true;
        } else {
          return false;
        }
      }

      emailNotValid() {
        if (this.registerUserData.email.length == 0) {
          return false;
        }

        if (this.registerUserData.email.includes('@') && this.registerUserData.email.charAt(this.registerUserData.email.length - 1) !== '@') {
          return false;
        } else {
          return true;
        }
      }

      passwordNotValid() {
        if (this.registerUserData.password.length == 0) {
          return false;
        }

        if (this.registerUserData.password.length >= 8 && (this.registerUserData.password.includes('@') || this.registerUserData.password.includes('.') || this.registerUserData.password.includes('^') || this.registerUserData.password.includes('*') || this.registerUserData.password.includes('$') || this.registerUserData.password.includes('#') || this.registerUserData.password.includes('!') || this.registerUserData.password.includes('&') || this.registerUserData.password.includes('_') || this.registerUserData.password.includes('-'))) {
          return false;
        } else {
          return true;
        }
      }

      reenteredPasswordNotValid() {
        if (this.reenteredPassword !== this.registerUserData.password) {
          return true;
        } else {
          return false;
        }
      }

      numberNotValid() {
        if ((this.registerUserData.mobileNumber + "").length != 10 && (this.registerUserData.mobileNumber + "").length > 0) {
          return true;
        } else {
          return false;
        }
      }

    };

    RegisterComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/report/report.component.css":
  /*!*********************************************!*\
    !*** ./src/app/report/report.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sucess{\r\n    color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWNlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/report/report.component.ts":
  /*!********************************************!*\
    !*** ./src/app/report/report.component.ts ***!
    \********************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    let ReportComponent = class ReportComponent {
      constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.report = {
          reportedByUserId: null,
          reportMessage: null,
          reportedUserId: null
        };
        this.reportSubmitted = false;
      }

      ngOnInit() {
        this.route.queryParams.subscribe(params => {
          this.report.reportedUserId = params['reportUser'];
        });
      }

      submitReport() {
        if (sessionStorage.getItem('username') == null) {
          this.router.navigate(["/login"]);
        }

        this.report.reportedByUserId = sessionStorage.getItem('username');
        this.authService.reportUser(this.report).subscribe(data => {
          this.reportSubmitted = true;
        }, error => this.router.navigate(["/error"]));
      }

      goBack() {
        window.history.back();
      }

    };

    ReportComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report.component.css */
      "./src/app/report/report.component.css")).default]
    })], ReportComponent);
    /***/
  },

  /***/
  "./src/app/search-posts/search-posts.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/search-posts/search-posts.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchPostsSearchPostsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button{\r\n    margin: 1px;\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXBvc3RzL3NlYXJjaC1wb3N0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtcG9zdHMvc2VhcmNoLXBvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBtYXJnaW46IDFweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/search-posts/search-posts.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/search-posts/search-posts.component.ts ***!
    \********************************************************/

  /*! exports provided: SearchPostsComponent */

  /***/
  function srcAppSearchPostsSearchPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPostsComponent", function () {
      return SearchPostsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let SearchPostsComponent = class SearchPostsComponent {
      constructor(route, postService, router) {
        this.route = route;
        this.postService = postService;
        this.router = router;
        this.noResultsReturned = false;
        this.wishlistPostIds = [];
        this.searchInitiated = false;
      }

      ngOnInit() {
        this.route.queryParams.subscribe(params => {
          this.queryKeyword = params['keyword'];
          this.queryCategory = params['category']; //check if no search was performed

          if (this.queryKeyword == null && this.queryCategory == null) {
            this.searchInitiated = false;
            this.noResultsReturned = false;
          } else {
            //
            if (this.queryCategory === 'none' || this.queryCategory == null || this.queryCategory == '') {
              if (!(this.queryKeyword === null || this.queryKeyword === '')) {
                this.searchKeyword = this.queryKeyword;
                this.postService.getSearchedPosts(this.searchKeyword).subscribe(data => {
                  this.searchResultData = data;

                  if (data.length < 1) {
                    this.noResultsReturned = true;
                  } else {
                    this.noResultsReturned = false;
                  }

                  if (sessionStorage.getItem('username') == null) {
                    this.router.navigate(["/login"]);
                  }

                  this.postService.getWishlistPosts(sessionStorage.getItem('username')).subscribe(data => {
                    this.wishlistPostIds = data; // console.log(this.wishlistPostIds)
                  }, error => this.router.navigate(["/error"]));
                }, error => this.router.navigate(["/error"]));
              }
            } else {
              if (!(this.queryKeyword === null || this.queryKeyword === '')) {
                this.searchKeyword = this.queryKeyword;
                this.postService.getPostsByKeywordAndCategory(this.searchKeyword, this.queryCategory).subscribe(data => {
                  this.searchResultData = data;

                  if (data.length < 1) {
                    this.noResultsReturned = true;
                  } else {
                    this.noResultsReturned = false;
                  }

                  if (sessionStorage.getItem('username') == null) {
                    this.router.navigate(["/login"]);
                  }

                  this.postService.getWishlistPosts(sessionStorage.getItem('username')).subscribe(data => {
                    this.wishlistPostIds = data; // console.log(this.wishlistPostIds)
                  }, error => this.router.navigate(["/error"]));
                }, error => this.router.navigate(["/error"]));
              }
            }
          }
        });
      }

      openPost(postId) {
        this.router.navigate(['/post'], {
          queryParams: {
            postId: postId
          }
        });
      }

      goBack() {
        history.back();
      }

      showCategoryWise(event) {
        //tell the search has initiated
        this.searchInitiated = true; //

        this.categorySearch = event.target.value;

        if (this.searchKeyword == '' || this.searchKeyword == null) {
          //append in url
          this.router.navigate(['/search-posts'], {
            queryParams: {
              category: this.categorySearch
            }
          }); //show all posts of that category
        } else {
          //append query params
          this.router.navigate(['/search-posts'], {
            queryParams: {
              keyword: this.searchKeyword,
              category: this.categorySearch
            }
          }); //show results accordign to query keyword as well as selected category
        }
      }

      showResults() {
        //set search has initiated
        this.searchInitiated = true; //append query params

        this.router.navigate(["/search-posts"], {
          queryParams: {
            keyword: this.searchKeyword
          }
        }); //fetch all categories search results 
      }

      addToWishlist(postId) {
        if (sessionStorage.getItem('username') == null) {
          this.router.navigate(["/login"]);
        }

        this.postService.addToWishlist(postId, sessionStorage.getItem('username')).subscribe(data => {
          this.ngOnInit();
        });
      }

      removeFromWishlist(postId) {
        if (sessionStorage.getItem('username') == null) {
          this.router.navigate(["/login"]);
        }

        this.postService.removeFromWishlist(postId, sessionStorage.getItem('username')).subscribe(data => {
          this.ngOnInit();
        });
      }

      inMyWishlist(postId) {
        if (this.wishlistPostIds.includes(postId)) {
          return true;
        } else {
          return false;
        }
      }

    };

    SearchPostsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    SearchPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-posts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-posts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-posts/search-posts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-posts.component.css */
      "./src/app/search-posts/search-posts.component.css")).default]
    })], SearchPostsComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AuthService = class AuthService {
      constructor(http, router) {
        this.http = http;
        this.router = router;
        this._registerUrl = "http://localhost:8081/user/create";
        this._checkDataUrl = "http://localhost:8081/user/dataValid";
        this._checkUpateDataUrl = "http://localhost:8081/user/updateDataValid";
        this._loginUrl = "http://localhost:8081/user/checkLogin";
        this._userDetails = "http://localhost:8081/user/username";
        this._updateUserDetails = "http://localhost:8081/user/update";
        this._reports = 'http://localhost:8081/user/reports';
        this._users = 'http://localhost:8081/users';
        this._deleteUser = 'http://localhost:8081/user/delete/';
        this._reportSubmit = 'http://localhost:8081/user/reportUser';
      }

      checkUpdateDataValid(fetchedUserDetails) {
        return this.http.post(this._checkUpateDataUrl, fetchedUserDetails);
      }

      updateUserDetails(fetchedUserDetails) {
        return this.http.post(this._updateUserDetails, fetchedUserDetails);
      }

      checkDataValid(user) {
        return this.http.post(this._checkDataUrl, user);
      }

      getUserDetails(userName) {
        return this.http.get(this._userDetails + "/" + userName);
      }

      registerUser(user) {
        return this.http.post(this._registerUrl, user);
      }

      checkLogin(credentials) {
        return this.http.post(this._loginUrl, credentials);
      }

      getLoggedInUser() {
        let storedToken = atob(sessionStorage.getItem('user'));
        let index = storedToken.indexOf(':');
        let email = storedToken.slice(0, index);
        let password = storedToken.slice(index + 1, storedToken.length);
        console.log(email, password); // let returnedUser = this.checkLogin({'email' : email,'password' : password})
        // console.log(returnedUser)
      }

      loggedIn() {
        let storedString = sessionStorage.getItem('user');

        if (storedString == null) {
          return false;
        } else {
          let storedToken = atob(storedString);
          let index = storedToken.indexOf(':');
          let email = storedToken.substring(0, index);
          let password = storedToken.substring(index + 1);
          let returnedUser = this.checkLogin({
            email: email,
            password: password
          });

          if (returnedUser == null) {
            return false;
          } else {
            return true;
          }
        }
      }

      logout() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('username');
        this.loggedInUserUsername = "";
        sessionStorage.clear();
        this.router.navigate(['/home']);
      }

      adminLoggedIn() {
        let token = sessionStorage.getItem('admin');

        if (token == null) {
          return false;
        } else {
          if (token === 'admin') {
            return true;
          } else {
            return false;
          }
        }
      }

      fetchReports() {
        return this.http.get(this._reports);
      }

      fetchUsers() {
        return this.http.get(this._users);
      }

      deleteUser(userName) {
        return this.http.get(this._deleteUser + '/' + userName);
      }

      reportUser(report) {
        return this.http.post(this._reportSubmit, report);
      }

    };

    AuthService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/post.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/post.service.ts ***!
    \******************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppServicesPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let PostService = class PostService {
      constructor(http) {
        this.http = http;
        this._getPostUrl = 'http://localhost:8081/post';
        this._allPostsUrl = 'http://localhost:8081/posts';
        this._createPostUrl = "http://localhost:8081/post/create";
        this._checkPostUrl = "http://localhost:8081/post/dataValid";
        this._postUpdateUrl = "http://localhost:8081/post/update";
        this._deletePost = "http://localhost:8081/post/delete";
        this._imgurUploadUrl = "https://api.imgur.com/3/image";
        this._searchPostsUrl = 'http://localhost:8081/posts/search';
        this._searchByCatAndKeyUrl = 'http://localhost:8081/posts/search';
        this._searchByCategoryUrl = 'http://localhost:8081/posts/search';
        this._getPostsByUserNameUrl = 'http://localhost:8081/posts/postedBy';
        this._getWishlistUrl = 'http://localhost:8081/wishlist';
        this._removeFromWishlistUrl = 'http://localhost:8081/remove-from-wishlist';
        this._addToWishlistUrl = 'http://localhost:8081/add-to-wishlist';
        this._inMyWishlistUrl = 'http://localhost:8081/in-my-wishlist';
      }

      inMyWishlist(postId, userName) {
        return this.http.get(this._inMyWishlistUrl + '/' + userName + '/' + postId);
      }

      addToWishlist(postId, userName) {
        return this.http.get(this._addToWishlistUrl + '/' + userName + '/' + postId);
      }

      removeFromWishlist(postId, userName) {
        return this.http.get(this._removeFromWishlistUrl + "/" + userName + "/" + postId);
      }

      getWishlistPosts(userName) {
        return this.http.get(this._getWishlistUrl + '/' + userName);
      }

      deletePost(postId) {
        return this.http.get(this._deletePost + "/" + postId);
      }

      getPostsByUserName(userName) {
        return this.http.get(this._getPostsByUserNameUrl + '/' + userName);
      }

      getPostsByCategory(categorySearch) {
        return this.http.get(this._searchByCategoryUrl + '/category/' + categorySearch);
      }

      getSearchedPosts(searchKeyword) {
        return this.http.get(this._searchPostsUrl + '/keyword/' + searchKeyword);
      }

      getPostsByKeywordAndCategory(searchKeyword, categorySearch) {
        return this.http.get(this._searchByCatAndKeyUrl + '/' + categorySearch + '/' + searchKeyword);
      }

      getPostData(postId) {
        return this.http.post(this._getPostUrl, postId);
      }

      fetchPosts() {
        return this.http.get(this._allPostsUrl);
      }

      checkPostValid(post) {
        return this.http.post(this._checkPostUrl, post);
      }

      updatePost(post) {
        return this.http.post(this._postUpdateUrl, post);
      }

      getImageUrl(file) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          Authorization: "Client-ID 8f4c5d652e63019"
        });
        return this.http.post(this._imgurUploadUrl, file, {
          headers
        });
      }

      createPost(post) {
        return this.http.post(this._createPostUrl, post);
      }

    };

    PostService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostService);
    /***/
  },

  /***/
  "./src/app/wishlist/wishlist.component.css":
  /*!*************************************************!*\
    !*** ./src/app/wishlist/wishlist.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistWishlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".warnings{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZ3N7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/wishlist/wishlist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/wishlist/wishlist.component.ts ***!
    \************************************************/

  /*! exports provided: WishlistComponent */

  /***/
  function srcAppWishlistWishlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistComponent", function () {
      return WishlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let WishlistComponent = class WishlistComponent {
      constructor(postService, router) {
        this.postService = postService;
        this.router = router;
        this.post = {
          name: null,
          description: null,
          imgsrc: null,
          price: 0,
          category: null,
          postId: null,
          postedBy: null
        };
        this.postIds = [];
        this.posts = [];
        this.noPosts = false;
      }

      ngOnInit() {
        if (sessionStorage.getItem('username') == null) {
          this.router.navigate(["/login"]);
          return;
        }

        this.postService.getWishlistPosts(sessionStorage.getItem('username')).subscribe(data => {
          this.postIds = data;

          if (this.postIds.length == 0) {
            this.noPosts = true;
          } else {
            for (let i = 0; i < this.postIds.length; i++) {
              this.postService.getPostData(this.postIds[i]).subscribe(data => {
                this.post = data;

                if (this.post != null) {
                  this.posts.push(this.post);
                }
              }, error => this.router.navigate(["/error"]));
            }
          }
        }, error => this.router.navigate(["/error"]));
      }

      removeFromWishlist(postId) {
        if (sessionStorage.getItem('username') == null) {
          this.router.navigate(["/login"]);
        }

        this.postService.removeFromWishlist(postId, sessionStorage.getItem('username')).subscribe(data => {
          // console.log(data)
          this.posts = this.posts.slice(0, 0);
          this.postService.getWishlistPosts(sessionStorage.getItem('username')).subscribe(data => {
            this.postIds = data;

            if (this.postIds.length == 0) {
              this.noPosts = true;
            } else {
              for (let i = 0; i < this.postIds.length; i++) {
                this.postService.getPostData(this.postIds[i]).subscribe(data => {
                  this.post = data;

                  if (this.post != null) {
                    this.posts.push(this.post);
                  }
                }, error => this.router.navigate(["/error"]));
              }
            }
          }, error => this.router.navigate(["/error"]));
        }, error => {
          this.router.navigate(["/error"]);
        });
      }

      openPost(postId) {
        this.router.navigate(['/post'], {
          queryParams: {
            postId: postId
          }
        });
      }

    };

    WishlistComponent.ctorParameters = () => [{
      type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wishlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wishlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wishlist.component.css */
      "./src/app/wishlist/wishlist.component.css")).default]
    })], WishlistComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\hp\Desktop\frontend\BooksOLX\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map