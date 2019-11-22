import { HttpHeaders } from '@angular/common/http';
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.BASE_URL = 'http://localhost:8080';
    Constants.TEST_URL = Constants.BASE_URL + '/test';
    Constants.USER_URL = Constants.BASE_URL + '/user';
    Constants.LOGIN_URL = Constants.BASE_URL + '/user/login';
    Constants.HTTP_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    return Constants;
}());
export { Constants };
//# sourceMappingURL=constants.js.map