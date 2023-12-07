"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDetailsComponent = void 0;
var core_1 = require("@angular/core");
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUserId.subscribe(function (userId) {
            _this.userId = userId;
            _this.loadUserDetails();
        });
    };
    UserDetailsComponent.prototype.showUserPosts = function () {
        console.log('Show user posts');
    };
    UserDetailsComponent.prototype.loadUserDetails = function () {
        var _this = this;
        this.userService.getUser(this.userId).subscribe(function (user) { return _this.user = user; });
        this.userService.getUserPosts(this.userId).subscribe(function (posts) { return _this.posts = posts; });
    };
    UserDetailsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.css']
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
