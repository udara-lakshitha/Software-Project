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
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../user';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, userService, router) {
        this.http = http;
        this.userService = userService;
        this.router = router;
        this.user = new User();
        //HttpClient: "localhost:8080/user";
        this.error = false;
        this.message = 'invalid user';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this.userService.login(this.user).subscribe(function (res) {
            console.log(res);
            if (res['status'] === 'success') {
                _this.router.navigateByUrl('profile');
            }
            else {
                alert(_this.message);
                window.location.reload();
                _this.error = true;
            }
        });
        //this.HttpClient.post(window.location.protocol + '//' + window.location.hostname + ':8080/' + 'users/login', User)
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, UserService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map