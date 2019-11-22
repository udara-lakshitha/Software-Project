var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import * as $ from 'jquery';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var menuIconEl = $('.menu-icon');
        var sidenavEl = $('.sidenav');
        var sidenavCloseEl = $('.sidenav__close-icon');
        // Add and remove provided class names
        function toggleClassName(el, className) {
            if (el.hasClass(className)) {
                el.removeClass(className);
            }
            else {
                el.addClass(className);
            }
        }
        // Open the side nav on click
        menuIconEl.on('click', function () {
            toggleClassName(sidenavEl, 'active');
        });
        // Close the side nav on click
        sidenavCloseEl.on('click', function () {
            toggleClassName(sidenavEl, 'active');
        });
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map