(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/KJJ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config/config.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngFor=\"let p of person\">\r\n  <br>\r\n  <div class=\"card mb-3\">\r\n    <div class=\"row g-0\">\r\n      <div class=\"col-md-4 \" style=\"align-items: center;\">\r\n        <div class=\"d-flex flex-column bd-highlight mb-3 text-center\">\r\n          <div class=\"p-2 bd-highlight\">\r\n            <img [src]=p.foto alt=\"...\"\r\n              style=\"max-width: 250px; max-height: 250px;min-width: 250px; min-height: 250px;\">\r\n          </div>\r\n          <div class=\"p-2 bd-highlight \">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" data-bs-toggle=\"modal\"\r\n              data-bs-target=\"#exampleModal\"><i class=\"bi bi-camera-fill\"></i> Cambiar</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{this.dades.username}}</h5>\r\n          <h6 class=\"card-text\">@ {{p.Email}}</h6>\r\n          <h6 class=\"card-text\"><i class=\"bi bi-telephone-fill\"></i> {{p.Telefon_empresa}}</h6>\r\n          <h6 class=\"card-text\" *ngIf=\"!tech && p.Grup != null\"><i class=\"bi bi-people-fill\"></i> {{p.Grup}}</h6>\r\n          <p class=\"card-text\">\r\n            <button class=\"btn btn-outline-primary\" type=\"button\" data-bs-toggle=\"collapse\"\r\n              data-bs-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n              Editar Perfil\r\n            </button>\r\n          </p>\r\n          <p class=\"card-text\" *ngIf=\"admin\">\r\n            <button class=\"btn btn-outline-primary\" type=\"button\" data-bs-toggle=\"collapse\"\r\n              data-bs-target=\"#collapsepasswd\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n              Cambiar Administrador\r\n            </button>\r\n          </p>\r\n          <div class=\"collapse\" id=\"collapsepasswd\">\r\n            <div class=\"card card-body\">\r\n              <div class=\"input-group mb-3\" >\r\n                <label class=\"input-group-text\" for=\"inputGroupSelect02\">Técnicos</label>\r\n                <select class=\"form-select\" id=\"inputGroupSelect02\" (change)=\"usersel($event)\">\r\n                  <option selected disabled>Seleccionar tecnico</option>\r\n                  <ng-container *ngFor=\"let t of tecnics\">\r\n                    <option [value]=t.id *ngIf=\"t.admin != true\">\r\n                      {{ t.Nom }} {{ t.Cognoms }}\r\n                    </option>\r\n                  </ng-container>\r\n                </select>\r\n                <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"reassignaradmin()\">Guardar</button>\r\n        \r\n              </div>\r\n            </div>\r\n          </div>\r\n        \r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--Password-->\r\n  \r\n  <!--Profile-->\r\n  <div class=\"collapse\" id=\"collapseExample\">\r\n    <div class=\"card card-body\">\r\n      <form class=\"row g-3\">\r\n        <div class=\"col-md-4\">\r\n          <label for=\"validationDefault03\" class=\"form-label\">Nombre y Apellidos</label>\r\n          <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\"><i class=\"bi bi-person-fill\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputname\" [placeholder]=p.Nom [(ngModel)]=\"nom\"\r\n              [ngModelOptions]=\"{standalone: true}\" required />\r\n            <div class=\"invalid-feedback\">\r\n              Porfavor escoja un nombre.\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputcognom\" [placeholder]=p.Cognoms [(ngModel)]=\"cognoms\"\r\n              [ngModelOptions]=\"{standalone: true}\" required />\r\n            <div class=\"invalid-feedback\">\r\n              Porfavor escoja un apellido.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <label for=\"validationDefault03\" class=\"form-label\">Telefono</label>\r\n          <input type=\"tel\" class=\"form-control\" id=\"inputphone\" required [placeholder]=p.Telefon_empresa\r\n            [(ngModel)]=\"telefon\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <div class=\"col-md-4\" *ngIf=\"!tech\">\r\n          <label for=\"validationDefaultUsername\" class=\"form-label\">Email</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-text\" id=\"inputGroupPrepend2\">@</span>\r\n            <input type=\"email\" class=\"form-control\" type=\"email\" readonly aria-describedby=\"inputGroupPrepend2\"\r\n              required [placeholder]=p.Email [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\" *ngIf=\"tech\">\r\n          <label for=\"validationDefaultUsername\" class=\"form-label\">Email</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-text\" id=\"inputGroupPrepend2\">@</span>\r\n            <input type=\"email\" class=\"form-control\" type=\"email\" id=\"validationDefaultUsername\"\r\n              aria-describedby=\"inputGroupPrepend2\" required [placeholder]=p.Email [(ngModel)]=\"email\"\r\n              [ngModelOptions]=\"{standalone: true}\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <button type=\"button\" class=\"btn btn-outline-success\" style=\"max-width: 200px;\" (click)=\"updateuser()\">Guardar\r\n        cambios</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Imagen de perfil</h5>\r\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <label for=\"validationDefaultfoto\" class=\"form-label\">Imagen</label>\r\n        <div class=\"input-group mb-3\">\r\n          <label class=\"input-group-text\" for=\"inputGroupFile01\">\r\n            <i class=\"bi bi-image-alt\"></i>\r\n          </label>\r\n          <input type=\"file\" class=\"form-control\" id=\"inputGroupFile04\" aria-describedby=\"inputGroupFileAddon04\"\r\n            aria-label=\"Upload\" (change)=\"fileChangeEvent($event)\" accept=\"image/png\" />\r\n        </div>\r\n        <image-cropper style=\"max-height: 36rem\" [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\"\r\n          [aspectRatio]=\"1 / 1\" format=\"png\" (imageCropped)=\"imageCropped($event)\" (cropperReady)=\"cropperReady()\"\r\n          (loadImageFailed)=\"loadImageFailed()\">\r\n        </image-cropper>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" data-bs-dismiss=\"modal\" (click)=\"guardarfoto()\">Guardar\r\n          cambios</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "/cVJ":
/*!********************************************!*\
  !*** ./src/app/detall/detall.component.ts ***!
  \********************************************/
/*! exports provided: DetallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallComponent", function() { return DetallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detall_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detall.component.html */ "Z53o");
/* harmony import */ var _detall_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detall.component.css */ "8DPE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dades.service */ "MMqf");







let DetallComponent = class DetallComponent {
    constructor(router, route, dades, config) {
        this.router = router;
        this.route = route;
        this.dades = dades;
        this.incidencia = [];
        this.incilin = [];
        this.fotos = [];
        this.imatges = [];
        //funcions image-cropper
        this.imageChangedEvent = '';
        this.croppedImage = '';
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
    }
    ngOnInit() {
        this.resposta = '';
        var token = localStorage.getItem('token');
        this.dades.obtenirtipus(token)
            .subscribe((resp) => {
            if (resp) {
                this.incidencia = [];
                console.log("usuari: ", resp);
                this.dades.idU = resp.id;
                this.dades.tech = resp.tech;
                this.dades.admin = resp.admin;
                this.dades.empresa = resp.empresa;
                this.dades.login = true;
                this.dades.username = resp.nom + ' ' + resp.cognoms;
                this.idinci = this.router.snapshot.paramMap.get("id");
                this.dades.MostrarDetall(token, this.idinci).subscribe((resultat) => {
                    if (resultat[0].idEU == this.dades.empresa && this.dades.tech || this.dades.idU == resultat[0].id_usuari) {
                        this.incidencia = resultat;
                        console.log('inci: ', resultat);
                        this.idIT = this.incidencia[0].id_IT;
                        console.log('id_IT: ', this.idIT);
                    }
                    else {
                        localStorage.clear();
                        alert('no està autorizado');
                        this.route.navigate(["/login"]);
                    }
                }, (error) => {
                    alert('No autorizado  ' + error.status);
                    localStorage.clear();
                    this.route.navigate(["/login"]);
                });
                this.dades.MostrarDetallLin(token, this.idinci).subscribe((resultat) => {
                    this.incilin = resultat;
                    console.log('incilin: ', resultat);
                    this.netxlin = resultat.length + 1;
                    console.log('nextlin?: ', this.netxlin);
                });
                this.dades.MostrarFotos(token, this.idinci).subscribe((resultat) => {
                    console.log('ey', resultat.length);
                    this.fotos = resultat;
                    console.log('fotos', this.fotos);
                });
            }
        }, (error) => {
            this.dades.idU = undefined;
            this.dades.tech = undefined;
            this.dades.admin = undefined;
            this.dades.empresa = undefined;
            this.dades.login = false;
            alert('Error ' + error.status);
            localStorage.clear();
            this.route.navigate(["/login"]);
        });
    }
    enviar() {
        if (this.resposta == undefined || this.resposta == '') {
            return;
        }
        else {
            this.dades.inciresposta(localStorage.getItem('token'), this.resposta, this.idinci, this.dades.idU).subscribe((resultat) => {
                console.log('resp: ', resultat);
                if (this.dades.tech) {
                    if (this.idIT == null) {
                        this.dades.actualitzar(localStorage.getItem('token'), this.idinci, this.dades.idU, this.incidencia[0].idP, this.incidencia[0].idE).subscribe((resultat) => {
                            console.log('res assignar: ', resultat);
                        });
                    }
                    this.dades.resoldre(localStorage.getItem('token'), this.idinci, 3).subscribe((resultat) => {
                        console.log('esta incidència: ', resultat);
                    });
                }
                else {
                    if (this.incidencia[0].idE == 3) {
                        this.dades.resoldre(localStorage.getItem('token'), this.idinci, 2).subscribe((resultat) => {
                            console.log('esta incidència: ', resultat);
                        });
                    }
                }
                if (this.imatges.length != 0) {
                    console.log('funcio enviar fotos usuari: ', this.idinci, this.netxlin, this.imatges);
                    this.dades.inserir_fotosLin(localStorage.getItem('token'), this.idinci, this.netxlin, this.imatges).subscribe((resultat) => {
                        console.log('fotos?:', resultat);
                        //  this. idI = resultat;
                    });
                }
                this.respondreinci.nativeElement.value = null;
                this.ngOnInit();
            });
        }
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded(image) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    //guarda imatges dins array
    img() {
        if (this.croppedImage != "") {
            this.imatges[this.imatges.length] = { id: this.imatges.length, imatge: this.croppedImage };
            this.croppedImage = "";
            this.imageChangedEvent = null;
            this.fileUploader.nativeElement.value = null;
            console.log('imatges: ', this.imatges);
        }
    }
    //delete d'imatges dins l'array & reindexa 
    delete(id) {
        this.imatges.splice(id, 1);
        console.log('imatges: ', this.imatges);
    }
};
DetallComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_6__["DadesService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselConfig"] }
];
DetallComponent.propDecorators = {
    respondreinci: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['respondreinci',] }],
    fileUploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileUploader',] }]
};
DetallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detall',
        template: _raw_loader_detall_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detall_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marcs\mmfixhub\Code\src\main.ts */"zUnb");


/***/ }),

/***/ "0++1":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/canvicontrasenya/canvicontrasenya.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container position-static\">\r\n  <br />\r\n  <br />\r\n\r\n  <div class=\"d-flex justify-content-center\">\r\n    <img src=\"/assets/logo/logo_small_icon_only.png\" [routerLink]=\"['/login']\" alt=\"\"\r\n      style=\"height: 256px;width: 256px;cursor: pointer;\">\r\n  </div>\r\n  <div class=\"card card-body mx-auto\" style=\"width: 30rem\">\r\n    <form>\r\n      <div class=\"input-group mb-3\">\r\n        <span class=\"input-group-text\"><i class=\"bi bi-at\"></i></span>\r\n        <input type=\"email\" class=\"form-control\" id=\"inputemail\" placeholder=\"Email\" [(ngModel)]=\"email\"\r\n          [ngModelOptions]=\"{standalone: true}\" required/>\r\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"test()\">\r\n          Enviar\r\n        </button>\r\n      </div>\r\n      <small class=\"text-muted\"><i>Introduzca un email asociado a una cuenta</i></small>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "03Hv":
/*!*******************************************************!*\
  !*** ./src/app/incidencies/incidencies.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNpZGVuY2llcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "3Gwh":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"d-flex bd-highlight\" style=\"margin-top: 7px;\">\r\n        <div class=\"p-2 flex-fill bd-highlight\">\r\n            <div class=\"card border-dark\" style=\"max-height: 75px;\">\r\n                <div class=\"card-body\" style=\"margin-top: -10px;margin-bottom: -10px;\">\r\n                    <h2>{{IO}}</h2>\r\n                    <h6 class=\"card-subtitle mb-2 text-muted\">Abiertos</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 flex-fill bd-highlight\">\r\n            <div class=\"card border-dark\" style=\"max-height: 75px;\">\r\n                <div class=\"card-body\" style=\"margin-top: -10px;margin-bottom: -10px;\">\r\n                    <h2>{{IP}}</h2>\r\n                    <h6 class=\"card-subtitle mb-2 text-muted\">En progreso</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 flex-fill bd-highlight\">\r\n            <div class=\"card border-dark\" style=\"max-height: 75px;\">\r\n                <div class=\"card-body\" style=\"margin-top: -10px;margin-bottom: -10px;\">\r\n                    <h2>{{IH}}</h2>\r\n                    <h6 class=\"card-subtitle mb-2 text-muted\">En espera</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex bd-highlight \">\r\n        <div class=\"p-2 flex-fill bd-highlight \" style=\"max-width: 50vw;\">\r\n            <div class=\"card border-dark\">\r\n                <h5 *ngIf=\"tech\" style=\"margin: 5px;\">Abiertos</h5>\r\n                <h5 *ngIf=\"!tech\" style=\"margin: 5px;\">En espera</h5>\r\n                <div class=\"card-body overflow-auto\" style=\"max-height: calc(100vh - 221px);\">\r\n                    <ng-container *ngFor=\"let i of incidencies\">\r\n                        <div *ngIf=\"i.eid == 3 && tech == false || tech == true && i.eid == 1\" class=\"card w-100 \"\r\n                            style=\"width: 18rem;margin-top: 5px;\">\r\n                            <div class=\"card-body\"\r\n                                style=\"padding: 0px;padding-top: 10px;padding-left: 10px;padding-right: 10px;\">\r\n                                <div class=\"row\" style=\"margin-bottom: -5px;\">\r\n                                    <div class=\"col-8\" style=\"max-width: 75%;margin: 0px;\">\r\n                                        <h5 class=\"card-title text-truncate\">{{i.titol}}\r\n                                        </h5>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <h6 class=\"text-muted float-end\"><small>{{i.Fecha | date:' dd/MM/yy HH:mm'\r\n                                                }}</small></h6>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"tech\" style=\"margin-bottom: 0px;\">\r\n                                    <div class=\"col-8\">\r\n                                        <h6 class=\"card-title\"><i class=\"bi bi-person-fill\"></i>{{i.Nom}}&nbsp;&nbsp;<i\r\n                                                class=\"bi bi-people-fill\"></i> {{i.Grup }}</h6>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <h6 class=\"text-muted float-end\"><small>Prioridad: </small><span\r\n                                                *ngIf=\"i.prioritat == 'Baja'\" class=\"badge bg-success\">{{ i.prioritat\r\n                                                }}</span>\r\n                                            <span *ngIf=\"i.prioritat == 'Media'\" class=\"badge bg-primary\">{{\r\n                                                i.prioritat }}</span>\r\n                                            <span *ngIf=\"i.prioritat == 'Alta'\" class=\"badge bg-danger\">{{\r\n                                                i.prioritat }}</span>\r\n                                        </h6>\r\n                                    </div>\r\n                                </div>\r\n                                <h6 *ngIf=\"!tech\" class=\"card-title\"><i class=\"bi bi-headset\"></i> {{i.Nom}}\r\n                                </h6>\r\n                                <div class=\"row\" style=\"margin-bottom: 0px;\">\r\n                                    <div class=\"col-8\" style=\"max-width: 80%;margin: 0px;\">\r\n                                        <span class=\"d-inline-block text-truncate\" style=\"max-width: 100%;\">\r\n                                            {{i.descripcio}}\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col\">\r\n                                        <div class=\"\" style=\"float: right;cursor: pointer;margin-right: 10px;\">\r\n                                            <h5 (click)=\"detall(i.id,i.pid)\"><i class=\"bi bi-arrow-right\"\r\n                                                    title=\"Más detalles\" style=\"color: rgb(99, 204, 181);\"></i></h5>\r\n                                        </div>\r\n                                        <div class=\"\" style=\"float: right;cursor: pointer;margin-right: 10px;\">\r\n                                            <h5 [routerLink]=\"['/detall/' + i.id]\"><i\r\n                                                    class=\"bi bi-arrow-up-right-square\" title=\"Responder\"\r\n                                                    style=\"color: lightcoral;\"></i></h5>\r\n                                        </div>\r\n                                        <div *ngIf=\"tech\" class=\"\"\r\n                                            style=\"float: right;cursor: pointer;margin-right: 10px;\">\r\n                                            <h5 (click)=\"Agafar(i.id)\"><i class=\"bi bi-plus-circle\" title=\"Autoasignar\"\r\n                                                    style=\"color: rgb(0, 89, 255);\"></i>\r\n                                            </h5>\r\n                                        </div>\r\n                                        <div *ngIf=\"!tech\" class=\"\"\r\n                                            style=\"float: right;cursor: pointer;margin-right: 10px;\">\r\n                                            <h5 (click)=\"resoldre(i.id,4)\"><i class=\"bi bi-check2-square\"\r\n                                                    title=\"Resolver\" style=\"color: darkorange; cursor: pointer\"></i>\r\n                                            </h5>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--Replica-->\r\n        <div class=\"p-2 flex-fill bd-highlight \" style=\"max-width: 50vw;\">\r\n            <div class=\"card border-dark\" style=\"min-height: 50%;\">\r\n                <h6 class=\"card-subtitle mb-2 text-muted text-center\" style=\"margin: 10px\" *ngIf=\"display == null\">Pulsa\r\n                    <i class=\"bi bi-arrow-right\"></i> para detalles\r\n                </h6>\r\n                <h5 *ngIf=\"display != null\" style=\"margin: 5px;\">Detalles</h5>\r\n                <div class=\"card-body \" style=\"max-height: 70vh;\" *ngIf=\"display != null\">\r\n                    <ng-container *ngFor=\"let i of incidencies\">\r\n                        <div *ngIf=\"i.id == display\" class=\"card w-100 \" style=\"width: 18rem;margin-top: 5px;\">\r\n                            <div class=\"card-body\" style=\"max-height: 50vh;\">\r\n                                <ul class=\"list-inline\" style=\"margin-bottom: -5px;\">\r\n                                    <li class=\"list-inline-item\" style=\"max-width: 70%;margin: 0px;\">\r\n                                        <h5 class=\"card-title\">{{i.titol}}\r\n                                        </h5>\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\" style=\"float: right;\">\r\n                                        <h6 class=\"text-muted \"><i>{{i.Fecha | date:' dd/MM/yy hh:mm a' }}</i> </h6>\r\n                                    </li>\r\n                                </ul>\r\n                                <ul class=\"list-inline\" *ngIf=\"tech\" style=\"margin-bottom: 0px;\">\r\n                                    <li class=\"list-inline-item\">\r\n                                        <h6 class=\"card-title\"><i class=\"bi bi-person-fill\"></i> {{i.Nom}}\r\n                                        </h6>\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\" style=\"margin-left: 20px;\">\r\n                                        <h6><i class=\"bi bi-people-fill\"></i>{{i.Grup }}</h6>\r\n                                    </li>\r\n                                    <li class=\"list-inline-item\" style=\"float: right;\">\r\n                                        <h6 class=\"text-muted\">Prioridad: <span *ngIf=\"i.prioritat == 'Baja'\"\r\n                                                class=\"badge bg-success\">{{ i.prioritat }}</span>\r\n                                            <span *ngIf=\"i.prioritat == 'Media'\" class=\"badge bg-primary\">{{\r\n                                                i.prioritat }}</span>\r\n                                            <span *ngIf=\"i.prioritat == 'Alta'\" class=\"badge bg-danger\">{{\r\n                                                i.prioritat }}</span>\r\n                                        </h6>\r\n                                    </li>\r\n                                </ul>\r\n                                <h6 *ngIf=\"!tech\" class=\"card-title\"><i class=\"bi bi-headset\"></i> {{i.Nom}}</h6>\r\n                                <div class=\"overflow-auto\" style=\"max-height: 30vh;\" *ngIf=\"tech\">\r\n                                    <p>{{i.descripcio}}</p>\r\n                                </div>\r\n                                <div class=\"overflow-auto\" style=\"max-height: 35vh;\" *ngIf=\"!tech\">\r\n                                    <p>{{i.descripcio}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                    <div class=\"card\" *ngIf=\"display != null\" style=\"margin-top: 10px;\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"input-group mb-3\" *ngIf=\"tech\">\r\n                                <label class=\"input-group-text\" for=\"inputGroupSelect02\">Assignar</label>\r\n                                <select class=\"form-select\" id=\"inputGroupSelect02\" (change)=\"usersel($event)\">\r\n                                    <option selected disabled>Seleccionar tecnico</option>\r\n                                    <ng-container *ngFor=\"let t of tecnics\">\r\n                                        <option [value]=t.id>\r\n                                            {{ t.Nom }} {{ t.Cognoms }}\r\n                                        </option>\r\n                                    </ng-container>\r\n                                </select>\r\n                                <label class=\"input-group-text\" for=\"inputGroupSelect03\">Prioridad</label>\r\n                                <select class=\"form-select\" id=\"inputGroupSelect03\" (change)=\"priori($event)\">\r\n                                    <option selected disabled>Seleccionar prioridad</option>\r\n                                    <ng-container *ngFor=\"let p of prio\">\r\n                                        <option [value]=p.id>\r\n                                            {{ p.prioritat }}\r\n                                        </option>\r\n                                    </ng-container>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"d-grid\">\r\n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic outlined example\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"Actualitzar(display)\"\r\n                                        *ngIf=\"tech\">Guardar</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary\"\r\n                                        [routerLink]=\"['/detall/' + display]\">Responder</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-warning\"\r\n                                        (click)=\"resoldre(display,4)\">Resolver</button>\r\n                                    <button type=\"button\" class=\"btn btn-outline-danger\"\r\n                                        (click)=\"resoldre(display,5)\">Cerrar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "8DPE":
/*!*********************************************!*\
  !*** ./src/app/detall/detall.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhbGwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "8Vo0":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passwordreset/passwordreset.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container position-static\">\r\n  <br />\r\n  <br />\r\n  <div class=\"d-flex justify-content-center\">\r\n    <img src=\"/assets/logo/logo_small_icon_only.png\" alt=\"\" [routerLink]=\"['/login']\"\r\n      style=\"height: 256px;width: 256px;cursor: pointer;\">\r\n  </div>\r\n  <div class=\"card mx-auto\" style=\"width: 40rem\">\r\n    <div class=\"card-body\">\r\n      <form>\r\n        <div class=\"input-group mb-3\">\r\n          <span class=\"input-group-text\"><i class=\"bi bi-lock-fill\"></i></span>\r\n          <input type=\"password\" class=\"form-control\" min-length='8' id=\"pass1\" placeholder=\"nueva contraseña\" [(ngModel)]=\"pass1\"\r\n            [ngModelOptions]=\"{standalone: true}\">\r\n            <input type=\"password\" class=\"form-control\" min-length='8' id=\"pass2\" placeholder=\"repetir contraseña\" [(ngModel)]=\"pass2\"\r\n            [ngModelOptions]=\"{standalone: true}\">\r\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"password()\">\r\n            Enviar\r\n          </button>\r\n        </div>\r\n        <small class=\"text-muted\"><i>Introduzca una contraseña segura </i></small>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AvWO":
/*!****************************************************************!*\
  !*** ./src/app/canvicontrasenya/canvicontrasenya.component.ts ***!
  \****************************************************************/
/*! exports provided: CanvicontrasenyaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvicontrasenyaComponent", function() { return CanvicontrasenyaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_canvicontrasenya_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./canvicontrasenya.component.html */ "0++1");
/* harmony import */ var _canvicontrasenya_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvicontrasenya.component.css */ "MFVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dades.service */ "MMqf");





let CanvicontrasenyaComponent = class CanvicontrasenyaComponent {
    constructor(dades) {
        this.dades = dades;
    }
    ngOnInit() {
    }
    test() {
        if (this.email == undefined || this.email == '' || !this.email.includes('@')) {
            alert('introduzca un email');
        }
        else {
            this.dades.needemail(this.email.toLocaleLowerCase()).subscribe((resultat) => {
                alert(resultat.missatge);
            });
        }
    }
};
CanvicontrasenyaComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_4__["DadesService"] }
];
CanvicontrasenyaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-canvicontrasenya',
        template: _raw_loader_canvicontrasenya_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_canvicontrasenya_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CanvicontrasenyaComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "DF8N":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "EM14":
/*!*********************************************!*\
  !*** ./src/app/config/config.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Jbwx":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/incidencies/incidencies.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <br />\r\n  <div class=\"d-flex justify-content-between\">\r\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n      <li class=\"nav-item\" role=\"presentation\">\r\n        <button class=\"nav-link active\" id=\"home-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#my\" type=\"button\" role=\"tab\"\r\n          aria-controls=\"home\" aria-selected=\"true\">\r\n          Mis Tickets\r\n        </button>\r\n      </li>\r\n      <li class=\"nav-item\" role=\"presentation\" *ngIf=\"tech\">\r\n        <button class=\"nav-link\" id=\"profile-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#open\" type=\"button\" role=\"tab\"\r\n          aria-controls=\"profile\" aria-selected=\"false\">\r\n          <span class=\"badge bg-primary\">{{ inciO }}</span>\r\n          Abiertos\r\n        </button>\r\n      </li>\r\n      <li class=\"nav-item\" role=\"presentation\" *ngIf=\"tech\">\r\n        <button class=\"nav-link\" id=\"contact-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#inp\" type=\"button\" role=\"tab\"\r\n          aria-controls=\"contact\" aria-selected=\"false\">\r\n          En progreso/espera\r\n        </button>\r\n      </li>\r\n      <li class=\"nav-item\" role=\"presentation\">\r\n        <button class=\"nav-link\" id=\"contact-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#closed\" type=\"button\" role=\"tab\"\r\n          aria-controls=\"contact\" aria-selected=\"false\">\r\n          Cerrados\r\n        </button>\r\n      </li>\r\n    </ul>\r\n    <!-- Modal Trigger -->\r\n    <ul class=\"nav nav-pills\">\r\n      <li class=\"nav-item\" role=\"presentation\">\r\n        <button class=\"nav-item btn btn-outline-primary\" id=\"contact-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#contact\"\r\n          type=\"button\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\" data-bs-toggle=\"modal\"\r\n          data-bs-target=\"#Modal\" style=\"cursor: pointer\">\r\n          <i class=\"bi bi-plus-square\"> </i>\r\n          Nuevo Ticket\r\n        </button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <br />\r\n\r\n  <div class=\"tab-content\" id=\"myTabContent\">\r\n    <!-- Incidencies Propies -->\r\n    <div class=\"tab-pane fade show active \" id=\"my\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n      <div class=\"overflow-auto\" style=\"max-height: 70vh;\">\r\n        <table class=\"table table-hover table-sm\">\r\n          <thead class=\"table-light sticky-top\">\r\n            <tr>\r\n              <th scope=\"col\" *ngIf=\"tech\">Id</th>\r\n              <th scope=\"col\" *ngIf=\"tech\">Usuario\r\n                <i *ngIf=\"this.toggleU == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('usuario',1)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleU == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('usuario',1)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Título\r\n                <i *ngIf=\"this.toggleT == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('titulo',1)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleT == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('titulo',1)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Fecha/Hora\r\n                <i *ngIf=\"this.toggleF == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('fecha',1)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleF == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('fecha',1)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Prioridad\r\n                <i *ngIf=\"this.toggleP == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('prioridad',1)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleP == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('prioridad',1)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Estado\r\n                <i *ngIf=\"this.toggleE == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('estado',1)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleE == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('estado',1)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"!tech\">Técnico\r\n                <i *ngIf=\"this.toggleI == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('tecnico',1)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleI == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('tecnico',1)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"!tech\"></th>\r\n              <th scope=\"col\" *ngIf=\"tech\"></th>\r\n              <th scope=\"col\" *ngIf=\"tech\"></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let i of incidencies | slice: (page1-1) * pageSize : page1 * pageSize\">\r\n              <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" *ngIf=\"tech\">{{ i.id }}</td>\r\n              <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" *ngIf=\"tech\">{{ i.Nom }}</td>\r\n              <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;max-width: 150px;margin: 0px\"\r\n                class=\"text-truncate\">{{ i.titol }}</td>\r\n              <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">{{ i.Fecha | date:'dd/MM/yy HH:mm'}}</td>\r\n              <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">\r\n                <span *ngIf=\"i.prioritat == 'Baja'\" class=\"badge bg-success\">{{ i.prioritat }}</span>\r\n                <span *ngIf=\"i.prioritat == 'Media'\" class=\"badge bg-primary\">{{ i.prioritat }}</span>\r\n                <span *ngIf=\"i.prioritat == 'Alta'\" class=\"badge bg-danger\">{{ i.prioritat }}</span>\r\n              </td>\r\n              <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">\r\n                <span *ngIf=\"i.estat == 'En progreso'\" class=\"badge bg-warning text-dark\">{{ i.estat }}</span>\r\n                <span *ngIf=\"i.estat == 'En espera' && !tech\" class=\"badge bg-info\">{{ i.estat }}</span>\r\n                <span *ngIf=\"i.estat == 'En espera' && tech\" class=\"badge bg-secondary\">{{ i.estat }}</span>\r\n                <span *ngIf=\"i.estat == 'Abierto' \" class=\"badge bg-secondary\">{{ i.estat }}</span>\r\n              </td>\r\n              <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" *ngIf=\"!tech && i.Nom != 'zNo asignado'\">{{ i.Nom }}</td>\r\n              <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" *ngIf=\"!tech && i.Nom == 'zNo asignado'\">No asignado</td>\r\n              <td *ngIf=\"!tech\">\r\n                <i class=\"bi bi-x-square\" title=\"cerrar incidencia\" style=\"color: firebrick; cursor: pointer\" (click)=\"resoldre(i.id, 5)\"></i>\r\n              </td>\r\n              <td *ngIf=\"tech\">\r\n                <span class=\"d-inline-block\" tabindex=\"0\" data-toggle=\"tooltip\" title=\"Resolver\">\r\n\r\n                  <i class=\"bi bi-check2-square\" style=\"color: darkorange; cursor: pointer\"\r\n                    (click)=\"resoldre(i.id, 4)\"></i>\r\n                </span>\r\n              </td>\r\n              <td *ngIf=\"tech\">\r\n                <span class=\"d-inline-block\" tabindex=\"0\" data-toggle=\"tooltip\" title=\"Más opciones\">\r\n                  <i class=\"bi bi-three-dots-vertical\" type=\"button\" data-bs-toggle=\"offcanvas\"\r\n                    data-bs-target=\"#offcanvasRight\" aria-controls=\"offcanvasRight\" style=\"cursor: pointer\"\r\n                    (click)=\"editarinci(i.id)\">\r\n                  </i>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <ngb-pagination *ngIf=\"ilenght > 15\" [(page)]=\"page1\" [pageSize]=\"pageSize\" [collectionSize]=\"incidencies.length\">\r\n      </ngb-pagination>\r\n\r\n    </div>\r\n\r\n    <!-- Incidencies Obertes -->\r\n    <div class=\"tab-pane fade \" id=\"open\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n      <div class=\"overflow-auto\" style=\"max-height: 70vh;\">\r\n        <table class=\"table table-hover table-sm \">\r\n          <thead class=\"table-light sticky-top\">\r\n            <tr>\r\n              <th scope=\"col\">Id</th>\r\n              <th scope=\"col\">Usuario\r\n                <i *ngIf=\"this.toggleU == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('usuario',2)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleU == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('usuario',2)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Título\r\n                <i *ngIf=\"this.toggleT == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('titulo',2)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleT == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('titulo',2)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Fecha/Hora\r\n                <i *ngIf=\"this.toggleF == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('fecha',2)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleF == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('fecha',2)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Prioridad\r\n                <i *ngIf=\"this.toggleP == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('prioridad',2)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleP == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('prioridad',2)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\"></th>\r\n              <th scope=\"col\"></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let i of incidenciesO | slice: (page2-1) * pageSize : page2 * pageSize\">\r\n              <ng-container *ngIf=\"i.eid == 1\">\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">{{ i.id }}</td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">{{ i.Nom }}</td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\"\r\n                  style=\"cursor:pointer;max-width: 150px;margin: 0px\" class=\" text-truncate\">{{ i.titol }}</td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">\r\n                  {{ i.Fecha | date:' dd/MM/yy HH:mm'}}\r\n                </td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">\r\n                  <span *ngIf=\"i.prioritat == 'Baja'\" class=\"badge bg-success\">{{ i.prioritat }}</span>\r\n                  <span *ngIf=\"i.prioritat == 'Media'\" class=\"badge bg-primary\">{{ i.prioritat }}</span>\r\n                  <span *ngIf=\"i.prioritat == 'Alta'\" class=\"badge bg-danger\">{{ i.prioritat }}</span>\r\n                </td>\r\n                <td>\r\n                  <span class=\"d-inline-block\" tabindex=\"0\" data-toggle=\"tooltip\" title=\"Autoasignar\">\r\n                    <i class=\"bi bi-plus-circle\" style=\"color: rgb(0, 89, 255); cursor: pointer\"\r\n                      (click)=\"assignar(i.id, i.prioritat)\"></i>\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <span class=\"d-inline-block\" tabindex=\"0\" data-toggle=\"tooltip\" title=\"Más opciones\">\r\n                    <i class=\"bi bi-three-dots-vertical\" type=\"button\" data-bs-toggle=\"offcanvas\"\r\n                      data-bs-target=\"#offcanvasRight\" aria-controls=\"offcanvasRight\" style=\"cursor: pointer\"\r\n                      (click)=\"editarinci(i.id)\">\r\n                    </i>\r\n                  </span>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <ngb-pagination *ngIf=\"ilenghto > 15\" [(page)]=\"page2\" [pageSize]=\"pageSize\"\r\n        [collectionSize]=\"incidenciesO.length\"></ngb-pagination>\r\n\r\n    </div>\r\n\r\n\r\n    <!--Incidencies in progress-->\r\n    <div class=\"tab-pane fade \" id=\"inp\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n      <div class=\"overflow-auto\" style=\"max-height: 70vh;\">\r\n        <table class=\"table table-hover table-sm overflow-auto\">\r\n          <thead class=\"table-light sticky-top\">\r\n            <tr>\r\n              <th scope=\"col\">Id</th>\r\n              <th scope=\"col\">Usuario\r\n                <i *ngIf=\"this.toggleU == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('usuario',3)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleU == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('usuario',3)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Título\r\n                <i *ngIf=\"this.toggleT == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('titulo',3)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleT == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('titulo',3)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Fecha/Hora\r\n                <i *ngIf=\"this.toggleF == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('fecha',3)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleF == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('fecha',3)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Técnico\r\n                <i *ngIf=\"this.toggleI == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('tecnico',3)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleI == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('tecnico',3)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Prioridad\r\n                <i *ngIf=\"this.toggleP == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('prioridad',3)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleP == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('prioridad',3)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Estado\r\n                <i *ngIf=\"this.toggleE == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('estado',3)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleE == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('estado',3)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\"></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let i of incidenciesP | slice: (page3-1) * pageSize : page3 * pageSize\">\r\n              <ng-container *ngIf=\"i.eid == 2 || i.eid == 3\">\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">{{ i.id }}</td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">{{ i.Nom }}</td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\"\r\n                  style=\"cursor:pointer;max-width: 150px;margin: 0px\" class=\" text-truncate\">{{ i.titol }}</td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">\r\n                  {{ i.Fecha | date:' dd/MM/yy HH:mm'}}\r\n                </td>\r\n                <td>{{i.Ntecnic}} {{i.Stecnic}}</td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\">\r\n                  <span *ngIf=\"i.prioritat == 'Baja'\" class=\"badge bg-success\">{{ i.prioritat }}</span>\r\n                  <span *ngIf=\"i.prioritat == 'Media'\" class=\"badge bg-primary\">{{ i.prioritat }}</span>\r\n                  <span *ngIf=\"i.prioritat == 'Alta'\" class=\"badge bg-danger\">{{ i.prioritat }}</span>\r\n                </td>\r\n                <td [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\"><span *ngIf=\"i.estat == 'En progreso'\"\r\n                    class=\"badge bg-warning text-dark\">{{ i.estat }}</span>\r\n                    <span *ngIf=\"i.estat == 'En espera' && !tech\" class=\"badge bg-info\">{{ i.estat }}</span>\r\n                    <span *ngIf=\"i.estat == 'En espera' && tech\" class=\"badge bg-secondary\">{{ i.estat }}</span>\r\n                </td>\r\n                <td>\r\n                  <i class=\"bi bi-three-dots-vertical\" type=\"button\" data-bs-toggle=\"offcanvas\"\r\n                    data-bs-target=\"#offcanvasRight\" aria-controls=\"offcanvasRight\" style=\"cursor: pointer\"\r\n                    title=\"Más opciones\" (click)=\"editarinci(i.id)\">\r\n                  </i>\r\n                </td>\r\n              </ng-container>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <ngb-pagination *ngIf=\"ilenghtp > 15\" [(page)]=\"page3\" [pageSize]=\"pageSize\"\r\n        [collectionSize]=\"incidenciesP.length\"></ngb-pagination>\r\n    </div>\r\n\r\n    <!-- Incidencies Tancades -->\r\n    <div class=\"tab-pane fade \" id=\"closed\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n      <div class=\"overflow-auto\" style=\"max-height: 70vh;\">\r\n        <table class=\"table table-hover table-sm\">\r\n          <thead class=\"table-light sticky-top\">\r\n            <tr>\r\n              <th scope=\"col\" *ngIf=\"tech\">Id</th>\r\n              <th scope=\"col\" *ngIf=\"tech\">Usuario\r\n                <i *ngIf=\"this.toggleU == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('usuario',4)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleU == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('usuario',4)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Título\r\n                <i *ngIf=\"this.toggleT == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('titulo',4)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleT == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('titulo',4)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Fecha/Hora\r\n                <i *ngIf=\"this.toggleF == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('fecha',4)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleF == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('fecha',4)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Técnico\r\n                <i *ngIf=\"this.toggleI == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('tecnico',4)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleI == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('tecnico',4)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Prioridad\r\n                <i *ngIf=\"this.toggleP == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('prioridad',4)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleP == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('prioridad',4)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\">Estado\r\n                <i *ngIf=\"this.toggleE == false\" class=\"bi bi-caret-up-fill\" (click)=\"sort('estado',4)\" style=\"cursor: pointer;\"></i>\r\n                <i *ngIf=\"this.toggleE == true\" class=\"bi bi-caret-down-fill\" (click)=\"sort('estado',4)\" style=\"cursor: pointer;\" ></i>\r\n              </th>\r\n              <th scope=\"col\" *ngIf=\"!tech\"></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let i of incidenciesT | slice: (page4-1) * pageSize : page4 * pageSize\">\r\n              <td   [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" *ngIf=\"tech\">{{ i.id }}</td>\r\n              <td   [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" *ngIf=\"tech\">{{ i.Nom }}</td>\r\n              <td   [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;max-width: 150px;margin: 0px\" class=\" text-truncate\">{{ i.titol }}</td>\r\n              <td  [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" >{{ i.Fecha | date:' dd/MM/yy HH:mm ' }}</td>\r\n              <td  [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" >{{ i.Ntecnic }} {{ i.Stecnic }}</td>\r\n              <td  [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" ><span *ngIf=\"i.prioritat == 'Baja'\" class=\"badge bg-success\">{{ i.prioritat }}</span>\r\n                <span *ngIf=\"i.prioritat == 'Media'\" class=\"badge bg-primary\">{{ i.prioritat }}</span>\r\n                <span *ngIf=\"i.prioritat == 'Alta'\" class=\"badge bg-danger\">{{ i.prioritat }}</span>\r\n              </td>\r\n              <td  [routerLink]=\"['/detall/' + i.id]\" style=\"cursor:pointer;\" >\r\n                <span *ngIf=\"i.estat == 'Resuelto'\" class=\"badge bg-info\">{{ i.estat }}</span>\r\n                <span *ngIf=\"i.estat == 'Cerrada'\" class=\"badge bg-secondary\">{{ i.estat }}</span>\r\n              </td>\r\n              <td *ngIf=\"!tech && i.eid == 4\">\r\n                <i class=\"bi bi-box-arrow-down-left\" style=\"color: deepskyblue; cursor: pointer\" title=\"reabrir\"\r\n                  (click)=\"resoldre(i.id, 2)\"></i> &nbsp;\r\n                  <i class=\"bi bi-x-square\" title=\"cerrar incidencia\" style=\"color: firebrick; cursor: pointer\" (click)=\"resoldre(i.id, 5)\"></i>\r\n              </td>\r\n              <td *ngIf=\"!tech && i.eid == 5\">\r\n                \r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <ngb-pagination *ngIf=\"ilenghtt > 15\" [(page)]=\"page4\" [pageSize]=\"pageSize\"\r\n        [collectionSize]=\"incidenciesT.length\"></ngb-pagination>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"Modal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nuevo Ticket</h5>\r\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"input-group mb-3\">\r\n            <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\" placeholder=\"Título\"\r\n              [(ngModel)]=\"titol\" [ngModelOptions]=\"{ standalone: true }\" />\r\n          </div>\r\n          <div class=\"input-group mb-3\" *ngIf=\"tech\">\r\n            <label class=\"input-group-text\" for=\"inputGroupSelect02\">Usuarios</label>\r\n            <select class=\"form-select\" id=\"inputGroupSelect02\" (change)=\"usersel($event)\" #resetusuari>\r\n              <option selected disabled>Seleccionar usuario</option>\r\n              <ng-container *ngFor=\"let u of users\">\r\n                <option [value]=u.id *ngIf=\"!u.tech\">\r\n                  {{ u.Nom }} {{ u.Cognoms }}\r\n                </option>\r\n              </ng-container>\r\n            </select>\r\n            <label class=\"input-group-text\" for=\"inputGroupSelect03\">Prioridad</label>\r\n            <select class=\"form-select\" id=\"inputGroupSelect03\" (change)=\"priori($event)\" #resetprio>\r\n              <option selected disabled>Seleccionar prioridad</option>\r\n              <ng-container *ngFor=\"let p of prio\">\r\n                <option [value]=p.id>\r\n                  {{ p.prioritat }}\r\n                </option>\r\n              </ng-container>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\" placeholder=\"Descripción\"\r\n              [(ngModel)]=\"desc\" [ngModelOptions]=\"{ standalone: true }\">\r\n            </textarea>\r\n          </div>\r\n          <br />\r\n          <div class=\"input-group mb-3\">\r\n            <label class=\"input-group-text\" for=\"inputGroupFile01\">\r\n              <i class=\"bi bi-image-alt\"></i>\r\n            </label>\r\n            <input type=\"file\" class=\"form-control\" id=\"inputGroupFile04\" aria-describedby=\"inputGroupFileAddon04\"\r\n              aria-label=\"Upload\" (change)=\"fileChangeEvent($event)\" accept=\"image/png\" #fileUploader />\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary\" type=\"submit\" (click)=\"img()\">\r\n                Agregar\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"bg-light\">\r\n            <image-cropper style=\"max-height: 36rem\" [imageChangedEvent]=\"imageChangedEvent\"\r\n              [maintainAspectRatio]=\"false\" [aspectRatio]=\"4 / 3\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n              (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\">\r\n            </image-cropper>\r\n          </div>\r\n          <br>\r\n          <div class=\"container\">\r\n            <div class=\"row row-cols-2 row-cols-lg-5 g-3 g-lg-3 d-flex justify-content-center\">\r\n              <div class=\"col bg-light position-relative\"\r\n                style=\"margin: 10px 7px 10px 7px;border: 2px solid lightslategray\" *ngFor=\"let i of imatges\">\r\n                <span\r\n                  class=\"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-secondary p-1\"\r\n                  style=\"cursor: pointer;\" (click)='delete(i.id)'>\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x\"\r\n                    viewBox=\"0 0 16 16\">\r\n                    <path\r\n                      d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\" />\r\n                  </svg>\r\n                </span>\r\n                <img [src]=i.imatge style=\"object-fit: cover;height: 80px; width: 100%;\" alt=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"d-inline p-2\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" style=\"float: right\" data-bs-dismiss=\"modal\"\r\n              (click)=\"inseririnci_fotos()\">\r\n              Guardar\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- OFF CANVAS -->\r\n<div class=\"offcanvas offcanvas-end\" tabindex=\"-1\" id=\"offcanvasRight\" aria-labelledby=\"offcanvasRightLabel\">\r\n  <div class=\"offcanvas-header\">\r\n    <button type=\"button\" class=\"btn-close text-reset\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\r\n  </div>\r\n  <div class=\"offcanvas-body\" *ngFor=\"let i of incidencia\">\r\n    <h4 class=\"card-title\">{{i.titol}}</h4>\r\n    <div class=\"d-flex bd-highlight mb-1 align-items-center \">\r\n      <img class=\"p-2 bd-highlight\" [src]=\"i.foto\" alt=\"\" style=\"height: 58px; width: 58px;\">\r\n      <div class=\"p-2 bd-highlight\">\r\n        <small><b>{{ i.Nom }} {{i.Cognoms}}</b></small><br>\r\n        <small>{{ i.Fecha | date:' dd/MM/yy HH:mm'}}</small>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"input-group mb-3\">\r\n      <label class=\"input-group-text\" for=\"inputGroupSelect02\">Técnicos</label>\r\n      <select class=\"form-select\" id=\"inputGroupSelect02\" (change)=\"techsel($event)\" #selectoffcanvas>\r\n        <option selected disabled>Seleccionar tecnico</option>\r\n        <ng-container *ngFor=\"let t of tecnics\">\r\n          <option [value]=t.id>\r\n            {{ t.Nom }}\r\n          </option>\r\n        </ng-container>\r\n      </select>\r\n\r\n    </div>\r\n    <div class=\"input-group mb-3\">\r\n      <label class=\"input-group-text\" for=\"inputGroupSelect03\">Prioridad</label>\r\n      <select class=\"form-select\" id=\"inputGroupSelect03\" (change)=\"priori($event)\">\r\n        <option selected disabled>Seleccionar prioridad</option>\r\n        <ng-container *ngFor=\"let p of prio\">\r\n          <option [value]=p.id>\r\n            {{ p.prioritat }}\r\n          </option>\r\n        </ng-container>\r\n      </select>\r\n    </div>\r\n    <hr>\r\n    <div class=\"d-grid\" style=\"margin-bottom: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"Actualitzar(i.id)\"\r\n        data-bs-dismiss=\"offcanvas\">Guardar</button>\r\n    </div>\r\n    <div class=\"d-grid\">\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic mixed styles example\">\r\n        <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"resoldre(i.id,4)\">Resolver</button>\r\n\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"resoldre(i.id,5)\">Cerrar ticket</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "MFVz":
/*!*****************************************************************!*\
  !*** ./src/app/canvicontrasenya/canvicontrasenya.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW52aWNvbnRyYXNlbnlhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "MMqf":
/*!**********************************!*\
  !*** ./src/app/dades.service.ts ***!
  \**********************************/
/*! exports provided: DadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadesService", function() { return DadesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




let DadesService = class DadesService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.urlServidor = 'http://localhost:3000';
        this.token = '';
    }
    validarUsuari(email, contrassenya) {
        return this.http.post(this.urlServidor + '/login', {
            email: email,
            password: contrassenya
        });
    }
    obtenirtipus(token) {
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http
            .get(this.urlServidor + '/obtenirtipus', { headers });
    }
    inserirUsuari(nom, cognoms, empresa, telefon, email, contrassenya, nif, admin, tech) {
        return this.http.post(this.urlServidor + '/signup', {
            nom: nom,
            cognoms: cognoms,
            empresa: empresa,
            telefon: telefon,
            email: email,
            passwd: contrassenya,
            nif: nif,
            admin: admin,
            tech: tech
        });
    }
    newuser(token, nom, cognoms, empresa, telefon, email, tipus) {
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http.post(this.urlServidor + '/newuser', {
            nom: nom,
            cognoms: cognoms,
            empresa: empresa,
            ide: this.empresa,
            tipus: tipus,
            telefon: telefon,
            email: email,
        }, { headers });
    }
    newgroup(token, nom) {
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http.post(this.urlServidor + '/newgroup', {
            nom: nom,
            ide: this.empresa
        }, { headers });
    }
    //Mostrar
    //Tech
    MostrarInci(token) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrarinci', {
            id: this.idU
        }, { headers });
    }
    MostrarDetall(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log(id);
        return this.http.get(this.urlServidor + '/mostrardetall/' + id, { headers });
    }
    MostrarDetallLin(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log(id);
        return this.http.get(this.urlServidor + '/mostrarlin/' + id, { headers });
    }
    MostrarFotos(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log(id);
        return this.http.get(this.urlServidor + '/mostrarfotos/' + id, { headers });
    }
    editinci(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log(id);
        return this.http.post(this.urlServidor + '/editinci', {
            id: id
        }, { headers });
    }
    resoldre(token, id, ide) {
        console.log(id);
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http.post(this.urlServidor + '/resoldre', {
            id: id,
            ide: ide
        }, { headers });
    }
    MostrarInciO(token, id1, id2) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrarincio', {
            id1: id1,
            id2: id2,
            id: this.empresa
        }, { headers });
    }
    MostrarInciT(token) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrarincit', {
            id: this.empresa
        }, { headers });
    }
    Mostrartecnic(token) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrartecnic', {
            id: this.empresa
        }, { headers });
    }
    //user
    MostrarInciu(token) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrarinciu', {
            id: this.idU
        }, { headers });
    }
    MostrarInciut(token) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrarinciut', {
            id: this.idU
        }, { headers });
    }
    Reassignaradmin(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/reassignaradmin', {
            idt: id,
            ida: this.idU
        }, { headers });
    }
    //count
    //tech
    Countincio(token, num) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/countincio', {
            num: num,
            idE: this.empresa
        }, { headers });
    }
    //user
    Countinciou(token, num) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/countinciou', {
            num: num,
            idU: this.idU,
        }, { headers });
    }
    inseririnci(token, titol, descripcio, usuari, prioritat, estat) {
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http.post(this.urlServidor + '/inseririnci', {
            titol: titol,
            descripcio: descripcio,
            prioritat: prioritat,
            estat: estat,
            usuari: usuari
        }, { headers });
    }
    actualitzar(token, id, idt, idp, ide) {
        console.log(id);
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http.post(this.urlServidor + '/actualitzar', {
            id: id,
            idt: idt,
            idp: idp,
            ide: ide,
        }, { headers });
    }
    Mostrarusers(token) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrarusers', {
            ide: this.empresa
        }, { headers });
    }
    Mostraruserd(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostraruserd', {
            idU: id
        }, { headers });
    }
    Mostrargrups(token) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrargrups', {
            ide: this.empresa
        }, { headers });
    }
    Mostrargrupsd(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.post(this.urlServidor + '/mostrargrupsd', {
            id: id
        }, { headers });
    }
    Updategrup(token, id, nom) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.put(this.urlServidor + '/updategrup', {
            id: id,
            nom: nom
        }, { headers });
    }
    Deletegrup(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.put(this.urlServidor + '/deletegrup', {
            id: id,
        }, { headers });
    }
    inserir_fotosInci(token, idU, foto) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log('fotosdades:', foto);
        return this.http.post(this.urlServidor + '/fotosinci', {
            idU: idU,
            foto: foto
        }, { headers });
    }
    inserir_fotosLin(token, idI, linea, foto) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log('fotos', foto.length);
        return this.http.post(this.urlServidor + '/fotosdetall', {
            idI: idI,
            linea: linea,
            foto: foto
        }, { headers });
    }
    inciresposta(token, resposta, idI, idU) {
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http.post(this.urlServidor + '/incilin', {
            resposta: resposta,
            idI: idI,
            idU: idU,
        }, { headers });
    }
    updateuser(token, id, nom, cognoms, telefon, email, idg) {
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http.put(this.urlServidor + '/updateuser', {
            idU: id,
            email: email,
            nom: nom,
            cognoms: cognoms,
            telefon: telefon,
            idG: idg
        }, { headers });
    }
    updatefoto(token, id, foto) {
        const headers = { 'Authorization': `Bearer ${token}` };
        return this.http.put(this.urlServidor + '/updatefoto', {
            idU: id,
            foto: foto
        }, { headers });
    }
    deleteuser(token, id) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log();
        return this.http.put(this.urlServidor + '/deleteuser', {
            id: id
        }, { headers });
    }
    needemail(email) {
        console.log('dades: ', email);
        return this.http.post(this.urlServidor + '/needemail', { email: email });
    }
    passwordreset(token, password) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log('pass: ', password);
        return this.http.put(this.urlServidor + '/passwordreset/' + token, {
            password: password
        }, { headers });
    }
    passwordset(token, password, password1) {
        const headers = { 'Authorization': `Bearer ${token}` };
        console.log('pass: ', password);
        return this.http.put(this.urlServidor + '/passwordset', {
            id: this.idU,
            password: password,
            password1: password1
        }, { headers });
    }
};
DadesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DadesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DadesService);



/***/ }),

/***/ "QBwv":
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_config_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./config.component.html */ "/KJJ");
/* harmony import */ var _config_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.component.css */ "EM14");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dades.service */ "MMqf");






let ConfigComponent = class ConfigComponent {
    constructor(dades, route) {
        this.dades = dades;
        this.route = route;
        this.person = [];
        this.tecnics = [];
        //imatge
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            var token = localStorage.getItem('token');
            this.dades.obtenirtipus(token)
                .subscribe((resp) => {
                if (resp) {
                    console.log(resp);
                    this.dades.idU = resp.id;
                    this.dades.tech = resp.tech;
                    this.dades.admin = resp.admin;
                    this.dades.empresa = resp.empresa;
                    this.dades.username = resp.nom + ' ' + resp.cognoms;
                    this.dades.login = true;
                    this.tech = this.dades.tech;
                }
                this.dades.Mostraruserd(this.token, this.dades.idU).subscribe((resultat) => {
                    console.log('info user: ', resultat);
                    this.person = resultat;
                    this.idg = resultat[0].id_grup;
                    this.admin = resultat[0].admin;
                });
                this.dades.Mostrartecnic(this.token).subscribe((resultat) => {
                    console.log(resultat);
                    this.tecnics = resultat;
                });
            }, (error) => {
                this.dades.idU = undefined;
                this.dades.tech = undefined;
                this.dades.admin = undefined;
                this.dades.empresa = undefined;
                alert('No autoritzat  ' + error.status);
                localStorage.clear();
                this.dades.route.navigate(["/login"]);
            });
        }
        else {
            this.route.navigate(["/login"]);
        }
    }
    updateuser() {
        if (this.nom == null) {
            this.nom = this.person[0].Nom;
        }
        if (this.cognoms == null) {
            this.cognoms = this.person[0].Cognoms;
        }
        if (this.telefon == null) {
            this.telefon = this.person[0].Telefon_empresa;
        }
        if (this.email == null) {
            this.email = this.person[0].Email;
        }
        console.log(this.nom);
        console.log(this.cognoms);
        console.log(this.email);
        console.log(this.dades.idU);
        this.dades.updateuser(this.token, this.dades.idU, this.nom, this.cognoms, this.telefon, this.email, this.idg).subscribe((resultat) => {
            console.log(resultat);
            this.ngOnInit();
        });
        this.nom = null;
        this.cognoms = null;
        this.telefon = null;
        this.email = null;
    }
    guardarfoto() {
        console.log('test', this.croppedImage);
        this.dades.updatefoto(this.token, this.dades.idU, this.croppedImage).subscribe((resultat => {
            console.log("img", resultat);
            this.ngOnInit();
        }));
    }
    canviarcontrasenya() {
        if (this.password1 == this.password2) {
            this.dades.passwordset(this.token, this.password, this.password1).subscribe((resultat) => {
                console.log(resultat);
            });
        }
    }
    reassignaradmin() {
        if (this.id != null) {
            this.dades.Reassignaradmin(this.token, this.id).subscribe((resultat) => {
                console.log(resultat);
            });
        }
        this.ngOnInit();
    }
    usersel(event) {
        this.id = event.target.value;
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded(image) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
};
ConfigComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_5__["DadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-config',
        template: _raw_loader_config_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_config_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConfigComponent);



/***/ }),

/***/ "RIGE":
/*!**********************************************************!*\
  !*** ./src/app/passwordreset/passwordreset.component.ts ***!
  \**********************************************************/
/*! exports provided: PasswordresetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordresetComponent", function() { return PasswordresetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_passwordreset_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./passwordreset.component.html */ "8Vo0");
/* harmony import */ var _passwordreset_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwordreset.component.css */ "dyC1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dades.service */ "MMqf");






let PasswordresetComponent = class PasswordresetComponent {
    constructor(dades, route, router) {
        this.dades = dades;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.token = this.route.snapshot.paramMap.get("token");
        localStorage.setItem('token', this.token);
    }
    password() {
        if (this.pass1 == '' || this.pass2 == '' || this.pass1 == undefined || this.pass2 == undefined) {
            alert('introduza una contraseña');
        }
        else {
            if (this.pass1 == this.pass2) {
                this.dades.passwordreset(this.token, this.pass1).subscribe(resp => {
                    if (resp.missatge) {
                        alert(resp.missatge);
                    }
                    else {
                        alert(resp);
                        localStorage.clear();
                        this.router.navigate(["/login"]);
                    }
                    console.log(resp);
                });
            }
            else {
                alert('les contraseñas no coinciden');
                this.ngOnInit();
            }
        }
    }
};
PasswordresetComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_5__["DadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PasswordresetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-passwordreset',
        template: _raw_loader_passwordreset_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_passwordreset_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PasswordresetComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'fixhub';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.component.html */ "sxhZ");
/* harmony import */ var _menu_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component.css */ "DF8N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dades.service */ "MMqf");





let MenuComponent = class MenuComponent {
    constructor(dades) {
        this.dades = dades;
    }
    ngOnInit() {
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            this.dades.obtenirtipus(token)
                .subscribe((resp) => {
                if (resp) {
                    console.log("aaaa: ", resp);
                    this.dades.username = resp.nom + " " + resp.cognoms;
                    this.dades.email = resp.email;
                }
            }, (error) => {
                this.dades.username = "";
                alert('No autoritzat  ' + error.status);
                localStorage.clear();
            });
        }
        else {
        }
    }
    logout() {
        localStorage.clear();
        this.dades.login = false;
        this.ngOnInit();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_4__["DadesService"] }
];
MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-menu></app-menu>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "Z53o":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detall/detall.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <br>\r\n  <div class *ngFor=\"let i of incidencia\">\r\n    <div class=\"d-flex bd-highlight mb-1 align-items-center\">\r\n      <img class=\"p-2 bd-highlight\" [src]=\"i.Fuser\" alt=\"\" style=\"height: 58px; width: 58px;\">\r\n      <div class=\"p-2 bd-highlight\">\r\n        <small><b>{{ i.Nuser }} {{i.Suser}}</b></small><br>\r\n        <small>{{ i.Fecha | date:' dd/MM/yy HH:mm' }}</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title bd-highlight\">{{i.titol}}</h5>\r\n        <p class=\"card-text\">{{ i.descripcio }}</p>\r\n        <small class=\"card-text\">Prioridad: </small>\r\n        <span *ngIf=\"i.prioritat == 'Baja'\" class=\"badge bg-success\">{{ i.prioritat }}</span>\r\n        <span *ngIf=\"i.prioritat == 'Media'\" class=\"badge bg-primary\">{{ i.prioritat }}</span>\r\n        <span *ngIf=\"i.prioritat == 'Alta'\" class=\"badge bg-danger\">{{ i.prioritat }}</span>\r\n        <br>\r\n        <small class=\"card-text\">Estado: </small>\r\n        <span *ngIf=\"i.estat == 'Resuelto'\" class=\"badge bg-info\">{{ i.estat }}</span>&nbsp;<i *ngIf=\"i.estat == 'Resuelto'\" class=\"bi bi-box-arrow-down-left\" style=\"color: deepskyblue; cursor: pointer\" title=\"reabrir\"\r\n        (click)=\"this.dades.resoldre(localstorage.get('token'),i.id, 2)\"></i>\r\n        <span *ngIf=\"i.estat == 'En progreso'\" class=\"badge bg-warning text-dark\">{{ i.estat }}</span>\r\n        <span *ngIf=\"i.estat == 'En espera' && !this.dades.tech\" class=\"badge bg-info\">{{ i.estat }}</span>\r\n        <span *ngIf=\"i.estat == 'En espera' && this.dades.tech\" class=\"badge bg-secondary\">{{ i.estat }}</span>\r\n        <span *ngIf=\"i.estat == 'Abierto' \" class=\"badge bg-secondary\">{{ i.estat }}</span>\r\n        <span *ngIf=\"i.estat == 'Cerrada' \" class=\"badge bg-secondary\">{{ i.estat }}</span>\r\n        <br>\r\n        <p *ngIf=\"i.id_IT !== null\" class=\"card-text\"><i class=\"bi bi-headset\" title=\"tecnico\"></i><small> {{ i.Ntecnic }} {{i.Stecnic}}</small></p>\r\n        <div *ngIf=\"this.fotos.length != 0\" data-bs-toggle=\"modal\" data-bs-target=\"#modalfotos\">\r\n          <small class=\"btn-link\"\r\n            style=\"cursor: pointer;\">Fotos: </small><span\r\n            class=\"badge bg-warning text-dark\" style=\"cursor:pointer\">{{this.fotos.length}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <ng-container *ngFor=\"let il of incilin\">\r\n      <div *ngIf=\"this.dades.idU == il.usuario\">\r\n        <div class=\"d-flex bd-highlight mb-1 justify-content-end\">\r\n          <div class=\"p-2 bd-highlight text-end\">\r\n            <small><b>{{ il.Nom }} {{il.Cognoms}}</b></small><br>\r\n            <small>{{ il.Fecha | date:' dd/MM/yy HH:mm' }}</small>\r\n          </div>\r\n          <img class=\"p-2 bd-highlight\" [src]=\"il.foto\" alt=\"\" style=\"height: 58px; width: 58px;\">\r\n        </div>\r\n        <div class=\"card text-end\">\r\n          <div class=\"card-body\">\r\n            <p>{{ il.descripcion }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"this.dades.idU != il.usuario\">\r\n        <div class=\"d-flex bd-highlight mb-1 align-items-center\">\r\n          <img class=\"p-2 bd-highlight\" [src]=\"il.foto\" alt=\"\" style=\"height: 58px; width: 58px;\">\r\n          <div class=\"p-2 bd-highlight\">\r\n            <small><b>{{ il.Nom }} {{il.Cognoms}}</b></small><br>\r\n            <small>{{ il.Fecha | date:' dd/MM/yy HH:mm' }}</small>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <p>{{ il.descripcion }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n    </ng-container>\r\n    <br />\r\n    <br>\r\n    <div style=\"height: 150px;\"></div>\r\n    <div class=\"container-fluid bg-light fixed-bottom\" style=\"height: 150px;\">\r\n      <br>\r\n      <ul class=\"navbar-nav me-auto container\">\r\n        <li>\r\n          <div class=\"form\">\r\n            <div class=\"d-flex bd-highlight\">\r\n              <textarea class=\"form-control p-1 flex-grow-1 bd-highlight\" style=\"height:100px; max-height: 100px;\"\r\n                placeholder=\"Responder\" id=\"floatingTextarea\" #respondreinci [(ngModel)]=\"resposta\"></textarea>\r\n              <button class=\"btn p-2 bd-highlight\" data-bs-toggle=\"modal\" data-bs-target=\"#Modal\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" fill=\"currentColor\"\r\n                  class=\"bi bi-file-earmark-image\" viewBox=\"0 0 16 16\">\r\n                  <path d=\"M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\" />\r\n                  <path\r\n                    d=\"M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z\" />\r\n                </svg>\r\n              </button>\r\n              <button *ngIf=\"this.incidencia[0].idE == 4 || this.incidencia[0].idE == 5\" class=\"btn btn-outline-secondary p-2 bd-highlight d-flex align-self-center\"\r\n                (click)=\"enviar()\" disabled>&nbsp;&nbsp;&nbsp;Enviar&nbsp;&nbsp;&nbsp;</button>\r\n              <button *ngIf=\"this.incidencia[0].idE != 4 && this.incidencia[0].idE != 5\" class=\"btn btn-outline-secondary p-2 bd-highlight d-flex align-self-center\"\r\n              (click)=\"enviar()\">&nbsp;&nbsp;&nbsp;Enviar&nbsp;&nbsp;&nbsp;</button>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <br />\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modalfotos\" tabindex=\"-1\" aria-labelledby=\"modalfotos1label\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\" style=\"background-color: transparent;\">\r\n      <div class=\"modal-content\" style=\"background-color: transparent;\">\r\n        <ngb-carousel class=\"modal-body\" style=\"background-color: transparent;\">\r\n          <ng-template ngbSlide *ngFor=\"let f of fotos; let id_lin of incilin\">\r\n            <ng-container>\r\n              <div class=\"picsum-img-wrapper d-flex justify-content-center\">\r\n                <img [src]=\"f.img\" alt=\"f.id_lin\" style=\"height: 100%; width:50%;\">\r\n              </div>\r\n            </ng-container>\r\n          </ng-template>\r\n        </ngb-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"Modal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog  modal-dialog-centered modal-lg\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Adjuntar fotos</h5>\r\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"input-group mb-3\">\r\n              <label class=\"input-group-text\" for=\"inputGroupFile01\">\r\n                <i class=\"bi bi-image-alt\"></i>\r\n              </label>\r\n              <input type=\"file\" class=\"form-control\" id=\"inputGroupFile04\" aria-describedby=\"inputGroupFileAddon04\"\r\n                aria-label=\"Upload\" (change)=\"fileChangeEvent($event)\" accept=\"image/png\" #fileUploader />\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" type=\"submit\" (click)=\"img()\">Añadir</button>\r\n              </div>\r\n            </div>\r\n            <image-cropper style=\"max-height: 36rem\" [imageChangedEvent]=\"imageChangedEvent\"\r\n              [maintainAspectRatio]=\"false\" [aspectRatio]=\"4 / 3\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n              (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\">\r\n            </image-cropper>\r\n            <br>\r\n            <div class=\"container\">\r\n              <div class=\"row row-cols-2 row-cols-lg-5 g-3 g-lg-3  d-flex justify-content-center\">\r\n                <div class=\"col bg-light position-relative\" style=\"margin: 10px 7px 10px 7px;border: 2px solid lightslategray\"\r\n                  *ngFor=\"let i of imatges\">\r\n                  <span\r\n                    class=\"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-secondary p-1\"\r\n                    style=\"cursor: pointer;\" (click)='delete(i.id)'>\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x\"\r\n                      viewBox=\"0 0 16 16\">\r\n                      <path\r\n                        d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\" />\r\n                    </svg>\r\n                  </span>\r\n                  <img [src]=i.imatge style=\"object-fit: cover;height: 80px; width: 100%;\" alt=\"\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br />\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ "rIor");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _incidencies_incidencies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./incidencies/incidencies.component */ "jloH");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/config.component */ "QBwv");
/* harmony import */ var _registre_registre_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registre/registre.component */ "uUR9");
/* harmony import */ var _detall_detall_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detall/detall.component */ "/cVJ");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dash/dash.component */ "ZS0V");
/* harmony import */ var _grups_grups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grups/grups.component */ "zCxL");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./passwordreset/passwordreset.component */ "RIGE");
/* harmony import */ var _canvicontrasenya_canvicontrasenya_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./canvicontrasenya/canvicontrasenya.component */ "AvWO");



















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _incidencies_incidencies_component__WEBPACK_IMPORTED_MODULE_9__["IncidenciesComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
            _config_config_component__WEBPACK_IMPORTED_MODULE_11__["ConfigComponent"],
            _dash_dash_component__WEBPACK_IMPORTED_MODULE_14__["DashComponent"],
            _grups_grups_component__WEBPACK_IMPORTED_MODULE_15__["GrupsComponent"],
            _detall_detall_component__WEBPACK_IMPORTED_MODULE_13__["DetallComponent"],
            _registre_registre_component__WEBPACK_IMPORTED_MODULE_12__["RegistreComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_17__["PasswordresetComponent"],
            _canvicontrasenya_canvicontrasenya_component__WEBPACK_IMPORTED_MODULE_18__["CanvicontrasenyaComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZS0V":
/*!****************************************!*\
  !*** ./src/app/dash/dash.component.ts ***!
  \****************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dash_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dash.component.html */ "3Gwh");
/* harmony import */ var _dash_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dash.component.css */ "saMh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dades.service */ "MMqf");






let DashComponent = class DashComponent {
    constructor(dades, router) {
        this.dades = dades;
        this.router = router;
        this.incidencies = [];
        this.tecnics = [];
        this.incidencia = [];
        this.ide = 1;
        this.prio = [
            { id: 1, prioritat: 'Baja' },
            { id: 2, prioritat: 'Media' },
            { id: 3, prioritat: 'Alta' }
        ];
    }
    ngOnInit() {
        //this.dades.inci();
        console.log(token);
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            this.token = token;
            this.dades.obtenirtipus(token)
                .subscribe((resp) => {
                if (resp) {
                    console.log("aaaa: ", resp);
                    this.dades.idU = resp.id;
                    this.dades.tech = resp.tech;
                    this.dades.admin = resp.admin;
                    this.dades.empresa = resp.empresa;
                    this.dades.login = true;
                    this.tech = this.dades.tech;
                    console.log('tecnic?: ', this.dades.tech);
                    if (this.tech) {
                        this.dades.Countincio(token, 1).subscribe((resultat) => {
                            console.log('ae', resultat[0].num);
                            this.IO = resultat[0].num;
                        });
                        this.dades.Countincio(token, 2).subscribe((resultat) => {
                            console.log(resultat[0].num);
                            this.IP = resultat[0].num;
                        });
                        this.dades.Countincio(token, 3).subscribe((resultat) => {
                            console.log(resultat[0].num);
                            this.IH = resultat[0].num;
                        });
                        this.dades.MostrarInciO(token, 1, 1).subscribe((resultat) => {
                            console.log("ee", resultat);
                            this.incidencies = resultat;
                        });
                        this.dades.Mostrartecnic(token).subscribe((resultat => {
                            this.tecnics = resultat;
                            console.log('tècnics: ', resultat);
                        }));
                    }
                    else {
                        this.dades.Countinciou(token, 1).subscribe((resultat) => {
                            console.log(resultat[0].num);
                            this.IO = resultat[0].num;
                        });
                        this.dades.Countinciou(token, 2).subscribe((resultat) => {
                            console.log(resultat[0].num);
                            this.IP = resultat[0].num;
                        });
                        this.dades.Countinciou(token, 3).subscribe((resultat) => {
                            console.log(resultat[0].num);
                            this.IH = resultat[0].num;
                        });
                        this.dades.MostrarInciu(token).subscribe((resultat) => {
                            console.log(resultat);
                            this.incidencies = resultat;
                        });
                    }
                }
            }, (error) => {
                this.dades.idU = undefined;
                this.dades.tech = undefined;
                this.dades.admin = undefined;
                this.dades.empresa = undefined;
                this.dades.login = false;
                alert('No autoritzat  ' + error.status);
                localStorage.clear();
                this.router.navigate(["/login"]);
            });
        }
        else {
            this.router.navigate(["/login"]);
        }
    }
    Agafar(id) {
        console.log("Assignant...");
        this.dades.actualitzar(this.token, id, this.dades.idU, 1, 2).subscribe((resultat) => {
            console.log(resultat);
        });
        this.ngOnInit();
        this.display = null;
    }
    resoldre(id, ide) {
        console.log("yallah", id, ide);
        this.dades.resoldre(this.token, id, ide).subscribe((resultat) => {
            console.log(resultat);
        });
        this.ngOnInit();
        this.display = null;
    }
    detall(id, idp) {
        this.display = id;
        this.idp = idp;
        this.ngOnInit();
    }
    Actualitzar(id) {
        if (this.canvi) {
            this.ide = 2;
        }
        this.dades.actualitzar(this.token, id, this.idt, this.idp, this.ide).subscribe((resultat) => {
            console.log(resultat);
        });
        if (this.canvi == true) {
            this.display = null;
            this.canvi = false;
        }
        this.ngOnInit();
        this.idp == null;
    }
    usersel(event) {
        this.idt = event.target.value;
        this.canvi = true;
    }
    priori(event) {
        this.idp = event.target.value;
    }
};
DashComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_5__["DadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dash',
        template: _raw_loader_dash_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dash_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashComponent);



/***/ }),

/***/ "bgOG":
/*!*************************************************!*\
  !*** ./src/app/registre/registre.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "d/Fz":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registre/registre.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container position-static\">\r\n  <br />\r\n  <br />\r\n  \r\n  <div class=\"d-flex justify-content-center\">\r\n  <img src=\"/assets/logo/logo_small_icon_only.png\" [routerLink]=\"['/login']\" alt=\"\" style=\"height: 256px;width: 256px;cursor: pointer;\" >\r\n  </div>\r\n  <div class=\"card mx-auto\" style=\"width: 40rem\">\r\n    <div class=\"card-body\">\r\n      <form class=\"row needs-validation\" novalidate>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\"><i class=\"bi bi-person-fill\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"Nombre\" [(ngModel)]=\"nom\"\r\n              [ngModelOptions]=\"{standalone: true}\" required />\r\n            <div class=\"invalid-feedback\">\r\n              Introduzca un nombre\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputcognom\" placeholder=\"Apellidos\" [(ngModel)]=\"cognoms\"\r\n              [ngModelOptions]=\"{standalone: true}\" required />\r\n            <div class=\"invalid-feedback\">\r\n              Introduzca los apellidos\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\"><i class=\"bi bi-telephone-fill\"></i></span>\r\n            <input type=\"tel\" maxlength=\"9\" class=\"form-control\" id=\"inputphone\" placeholder=\"Teléfono\"\r\n              [(ngModel)]=\"telefon\" [ngModelOptions]=\"{standalone: true}\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\"><i class=\"bi bi-building\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputempresa\" placeholder=\"Empresa\" [(ngModel)]=\"empresa\"\r\n              [ngModelOptions]=\"{standalone: true}\" />\r\n            <input type=\"text\" class=\"form-control\" id=\"inputcognif\" placeholder=\"NIF\" [(ngModel)]=\"nif\"\r\n              [ngModelOptions]=\"{standalone: true}\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\"><i class=\"bi bi-at\"></i></span>\r\n            <input type=\"email\" class=\"form-control\" id=\"inputemail\" placeholder=\"Email\" [(ngModel)]=\"email\"\r\n              [ngModelOptions]=\"{standalone: true}\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"d-grid gap-2\">\r\n            <button class=\"btn btn-warning\" type=\"submit\" (click)=\"apiregister()\">Registrar</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\"><i class=\"bi bi-lock-fill\"></i></span>\r\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Contraseña\" [(ngModel)]=\"password\"\r\n              [ngModelOptions]=\"{standalone: true}\" />\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "dyC1":
/*!***********************************************************!*\
  !*** ./src/app/passwordreset/passwordreset.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZHJlc2V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "hrIr":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grups/grups.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n    <div class=\"d-flex bd-highlight\" style=\"margin:10px\">\r\n        <div class=\"p-2 flex-fill bd-highlight\">\r\n            <div class=\"d-flex justify-content-between\">\r\n                <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                    <button class=\"nav-link active\" id=\"nav-home-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#nav-home\"\r\n                        type=\"button\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\"><i\r\n                            class=\"bi bi-people-fill\"></i> Grupos</button>\r\n                    <button class=\"nav-link\" id=\"nav-profile-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#nav-profile\"\r\n                        type=\"button\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\"><i\r\n                            class=\"bi bi-person-fill\"></i> Usuarios</button>\r\n                    <button class=\"nav-link\" id=\"nav-profile-tab\" data-bs-toggle=\"tab\" data-bs-target=\"#tech\"\r\n                        type=\"button\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\" *ngIf=\"admin\"><i\r\n                            class=\"bi bi-headset\"></i> Técnicos</button>\r\n                </div>\r\n                <form class=\"d-flex\" style=\"align-items: center;\">\r\n                    <div class=\"input-group me-2\">\r\n                        <select class=\"form-select\" id=\"inputGroupSelect02\" (change)=\"usersel($event)\">\r\n                            <option selected disabled>Seleccionar grupo</option>\r\n                            <ng-container *ngFor=\"let g of grups\">\r\n                                <option [value]=g.id>\r\n                                    {{ g.Grup }}\r\n                                </option>\r\n                            </ng-container>\r\n                        </select>\r\n                    </div>\r\n                    <h5 *ngIf=\"filter\" style=\"cursor: pointer;\"><i class=\"bi bi-x-square-fill\"\r\n                            (click)=\"filteroff()\"></i></h5>\r\n                </form>\r\n                <div class=\"dropdown\" style=\"float: right;\">\r\n                    <button class=\"btn btn-outline-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\"\r\n                        data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                        <i class=\"bi bi-plus-square\">\r\n                        </i>\r\n                        Nuevo\r\n                    </button>\r\n                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                        <li><a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#grup\"\r\n                                style=\"cursor: pointer;\">\r\n                                <i class=\"bi bi-people-fill\"></i> Grupo</a></li>\r\n                        <li><a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#user\"\r\n                                style=\"cursor: pointer;\"><i class=\"bi bi-person-fill\"></i> Usuario</a></li>\r\n                        <li><a class=\"dropdown-item\" data-bs-toggle=\"modal\" data-bs-target=\"#techu\"\r\n                                style=\"cursor: pointer;\"><i class=\"bi bi-headset\"></i> Técnico</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n            <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                <!--Grups-->\r\n                <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"table-light\">\r\n                            <tr>\r\n                                <th scope=\"col\">Grupo</th>\r\n                                <th scope=\"col\">Contactos</th>\r\n                                <th scope=\"col\"></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let g of grups\">\r\n                                <td>{{g.Grup}}</td>\r\n                                <td>{{g.num}}</td>\r\n                                <td>\r\n                                    <div class=\"dropend\">\r\n                                        <i class=\"bi bi-three-dots-vertical \" type=\"button\" id=\"dropdownMenuButton1\"\r\n                                            data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"cursor: pointer;\">\r\n                                        </i>\r\n                                        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                            <li><a class=\"dropdown-item\" type=\"button\" data-bs-toggle=\"offcanvas\"\r\n                                                    data-bs-target=\"#offcanvasGroup\" aria-controls=\"offcanvasRight\"><i\r\n                                                        class=\"bi bi-pencil-square\" (click)=\"mostrargrupsd(g.id)\"></i>\r\n                                                    Editar</a>\r\n                                            </li>\r\n                                            <li><a class=\"dropdown-item\" style=\"cursor: pointer;\"\r\n                                                    (click)=\"deletegrup(g.id)\"><i class=\"bi bi-trash-fill\"></i>\r\n                                                    Eliminar</a></li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!--Users-->\r\n                <div class=\"tab-pane fade\" id=\"nav-profile\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"table-light\">\r\n                            <tr>\r\n                                <th scope=\"col\">Nombre</th>\r\n                                <th scope=\"col\">Apellidos</th>\r\n                                <th scope=\"col\">Telefono</th>\r\n                                <th scope=\"col\">Email</th>\r\n                                <th scope=\"col\">Grupo</th>\r\n                                <th scope=\"col\"></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let u of users\">\r\n                                <ng-container *ngIf=\"u.tech == false && filter == false\">\r\n                                    <td>{{u.Nom}}</td>\r\n                                    <td>{{u.Cognoms}}</td>\r\n                                    <td>{{u.Telefon_empresa}}</td>\r\n                                    <td>{{u.Email}}</td>\r\n                                    <td>{{u.Grup}}</td>\r\n                                    <td>\r\n                                        <div class=\"dropend\">\r\n                                            <i class=\"bi bi-three-dots-vertical \" type=\"button\" id=\"dropdownMenuButton1\"\r\n                                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"cursor: pointer;\"\r\n                                                (click)=\"mostraruserd(u.id)\">\r\n                                            </i>\r\n                                            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                                <li><a class=\"dropdown-item\" type=\"button\" data-bs-toggle=\"offcanvas\"\r\n                                                        data-bs-target=\"#offcanvasUser\" aria-controls=\"offcanvasUser\">\r\n                                                        <i class=\"bi bi-pencil-square\"></i>\r\n                                                        Editar</a>\r\n                                                </li>\r\n                                                <li><a class=\" dropdown-item\" type=\"button\" style=\"cursor: pointer;\"\r\n                                                        (click)=\"deleteuser(u.id)\"><i class=\"bi bi-trash-fill\"></i>\r\n                                                        Eliminar</a></li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"u.tech == false && filter == true && u.id_grup == id\">\r\n                                    <td>{{u.Nom}}</td>\r\n                                    <td>{{u.Cognoms}}</td>\r\n                                    <td>{{u.Telefon_empresa}}</td>\r\n                                    <td>{{u.Email}}</td>\r\n                                    <td>{{u.Grup}}</td>\r\n                                    <td>\r\n                                        <div class=\"dropend\">\r\n                                            <i class=\"bi bi-three-dots-vertical \" type=\"button\" id=\"dropdownMenuButton1\"\r\n                                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"cursor: pointer;\"\r\n                                                (click)=\"mostraruserd(u.id)\">\r\n                                            </i>\r\n                                            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                                <li><a class=\"dropdown-item\" type=\"button\" data-bs-toggle=\"offcanvas\"\r\n                                                        data-bs-target=\"#offcanvasUser\" aria-controls=\"offcanvasUser\">\r\n                                                        <i class=\"bi bi-pencil-square\"></i>\r\n                                                        Editar</a>\r\n                                                </li>\r\n                                                <li><a class=\" dropdown-item\" type=\"button\" style=\"cursor: pointer;\"\r\n                                                        (click)=\"deleteuser(u.id)\"><i class=\"bi bi-trash-fill\"></i>\r\n                                                        Eliminar</a></li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </ng-container>\r\n\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!--Techs-->\r\n                <div class=\"tab-pane fade\" id=\"tech\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"table-light\">\r\n                            <tr>\r\n                                <th scope=\"col\">Nombre</th>\r\n                                <th scope=\"col\">Apellidos</th>\r\n                                <th scope=\"col\">Telefono</th>\r\n                                <th scope=\"col\">Email</th>\r\n                                <th scope=\"col\"></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let u of users\">\r\n                                <ng-container *ngIf=\"u.tech == true && u.admin == false\">\r\n                                    <td>{{u.Nom}}</td>\r\n                                    <td>{{u.Cognoms}}</td>\r\n                                    <td>{{u.Telefon_empresa}}</td>\r\n                                    <td>{{u.Email}}</td>\r\n                                    <td>\r\n                                        <div class=\"dropend\">\r\n                                            <i class=\"bi bi-three-dots-vertical \" type=\"button\" id=\"dropdownMenuButton1\"\r\n                                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"cursor: pointer;\"\r\n                                                (click)=\"mostraruserd(u.id)\">\r\n                                            </i>\r\n                                            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\r\n                                                <li><a class=\"dropdown-item\" href=\"#\" type=\"button\"\r\n                                                        data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasUser\"\r\n                                                        aria-controls=\"offcanvasUser\"><i\r\n                                                            class=\"bi bi-pencil-square\"></i>\r\n                                                        Editar</a>\r\n                                                </li>\r\n                                                <li><a class=\"dropdown-item\" href=\"#\" (click)=\"deleteuser(u.id)\"><i\r\n                                                            class=\"bi bi-trash-fill\"></i>\r\n                                                        Eliminar</a></li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </td>\r\n                                </ng-container>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- OFF CANVAS User -->\r\n<div class=\"offcanvas offcanvas-end\" tabindex=\"-1\" id=\"offcanvasUser\" aria-labelledby=\"offcanvasRightLabel\">\r\n\r\n    <div class=\"offcanvas-header\">\r\n        <h5 id=\"offcanvasRightLabel\">Editar usuario</h5>\r\n        <button type=\"button\" class=\"btn-close text-reset\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\r\n    </div>\r\n    <div class=\"offcanvas-body\" *ngFor=\"let p of person\">\r\n        <h5>{{p.Nom}} {{p.Cognoms}}</h5>\r\n        <h6 class=\"card-subtitle mb-2 text-muted\"><i class=\"bi bi-telephone-fill\"></i> {{p.Telefon_empresa}}</h6>\r\n        <hr>\r\n        <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\r\n            <input type=\"text\" class=\"form-control\" [placeholder]=p.Email aria-label=\"Username\"\r\n                aria-describedby=\"basic-addon1\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <ng-container *ngIf=\"p.tech == false\">\r\n            <div class=\"input-group mb-3\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"bi bi-people-fill\"></i></span>\r\n                <select class=\"form-select\" id=\"validationDefault04\" (change)=\"selectChangeHandler($event)\">\r\n                    <option selected Disabled>{{p.Grup}}</option>\r\n                    <option [value]=g.id *ngFor=\"let g of grups\">\r\n                        {{g.id}} - {{g.Grup}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <hr>\r\n        <div class=\"d-grid\">\r\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"updateuser(p.id)\"\r\n                data-bs-dismiss=\"offcanvas\">Guardar</button>\r\n        </div>\r\n        <br>\r\n        <div class=\"d-grid\">\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deleteuser(p.id)\">Eliminar</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<!-- OFF CANVAS Group -->\r\n<div class=\"offcanvas offcanvas-end\" tabindex=\"-1\" id=\"offcanvasGroup\" aria-labelledby=\"offcanvasRightLabel\">\r\n    <div class=\"offcanvas-header\">\r\n        <h5 id=\"offcanvasRightLabel\">Editar Grupo</h5>\r\n        <button type=\"button\" class=\"btn-close text-reset\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\r\n    </div>\r\n    <div class=\"offcanvas-body\" *ngFor=\"let g of grup\">\r\n        <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"bi bi-people-fill\"></i></span>\r\n            <input type=\"text\" class=\"form-control\" [placeholder]=g.Grup aria-label=\"Username\"\r\n                aria-describedby=\"basic-addon1\" [(ngModel)]=\"nom\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <hr>\r\n        <div class=\"d-grid\">\r\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"updategrup(g.id)\"\r\n                data-bs-dismiss=\"offcanvas\">Guardar</button>\r\n        </div>\r\n        <br>\r\n        <div class=\"d-grid\">\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deletegrup(g.id)\">Eliminar</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal User -->\r\n<div class=\"modal fade\" id=\"user\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nuevo usuario</h5>\r\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <form class=\"row g-3\">\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"validationDefault01\" class=\"form-label\">Nombre</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"validationDefault01\" required [(ngModel)]=\"nom\"\r\n                            [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"validationDefault02\" class=\"form-label\">Apellidos</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"validationDefault02\" required [(ngModel)]=\"cognoms\"\r\n                            [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"validationDefaultUsername\" class=\"form-label\">Telefono</label>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-text\" id=\"inputGroupPrepend2\"><i\r\n                                    class=\"bi bi-telephone-fill\"></i></span>\r\n                            <input type=\"email\" class=\"form-control\" type=\"tel\" aria-describedby=\"inputGroupPrepend2\"\r\n                                required [(ngModel)]=\"telefon\" [ngModelOptions]=\"{standalone: true}\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <label for=\"validationDefaultUsername\" class=\"form-label\">Email</label>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-text\" id=\"inputGroupPrepend2\">@</span>\r\n                            <input type=\"email\" class=\"form-control\" id=\"validationDefaultUsername\"\r\n                                aria-describedby=\"inputGroupPrepend2\" required [(ngModel)]=\"email\"\r\n                                [ngModelOptions]=\"{standalone: true}\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <label for=\"validationDefault04\" class=\"form-label\">Grupo</label>\r\n                        <select class=\"form-select\" id=\"validationDefault04\" (change)=\"selectChangeHandler($event)\">\r\n                            <option selected disabled value=\"\">Elegir</option>\r\n                            <option [value]=g.id *ngFor=\"let g of grups\">{{g.Grup}}</option>\r\n                        </select>\r\n                    </div>\r\n                </form>\r\n\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cerrar</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\" type=\"submit\"\r\n                    (click)=\"newuser(0)\">Guardar cambios</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal Tech -->\r\n<div class=\"modal fade\" id=\"techu\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nuevo tecnico</h5>\r\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"row g-3\">\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"validationDefault06\" class=\"form-label\">Nombre</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"validationDefault06\" required [(ngModel)]=\"nom\"\r\n                            [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"validationDefault07\" class=\"form-label\">Apellidos</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"validationDefault07\" required [(ngModel)]=\"cognoms\"\r\n                            [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"validationDefaultUsername\" class=\"form-label\">Telefono</label>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-text\" id=\"inputGroupPrepend2\"><i\r\n                                    class=\"bi bi-telephone-fill\"></i></span>\r\n                            <input type=\"email\" class=\"form-control\" type=\"tel\" aria-describedby=\"inputGroupPrepend2\"\r\n                                required [(ngModel)]=\"telefon\" [ngModelOptions]=\"{standalone: true}\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label for=\"validationDefaulttech\" class=\"form-label\">Email</label>\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-text\" id=\"inputGroupPrepend2\">@</span>\r\n                            <input type=\"email\" class=\"form-control\" id=\"validationDefaulttech\"\r\n                                aria-describedby=\"inputGroupPrepend2\" required [(ngModel)]=\"email\"\r\n                                [ngModelOptions]=\"{standalone: true}\">\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cerrar</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\" type=\"submit\"\r\n                    (click)=\"newuser(1)\">Guardar cambios</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Modal Grup -->\r\n<div class=\"modal fade\" id=\"grup\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nuevo grupo</h5>\r\n                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"input-group flex-nowrap\">\r\n                    <span class=\"input-group-text\" id=\"addon-wrapping\"><i class=\"bi bi-people-fill\"></i></span>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Nombre del Grupo\" aria-label=\"GroupName\"\r\n                        aria-describedby=\"addon-wrapping\" [(ngModel)]=\"nom\" [ngModelOptions]=\"{standalone: true}\">\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cerrar</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"newgroup()\">Guardar cambios</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container position-static\">\r\n  <br />\r\n  <br />\r\n  <div class=\"d-flex justify-content-center\">\r\n    <img src=\"/assets/logo/logo_small_icon_only.png\" alt=\"\" [routerLink]=\"['/login']\"\r\n      style=\"height: 256px;width: 256px;cursor: pointer;\">\r\n  </div>\r\n  <div class=\"card mx-auto\" style=\"width: 40rem\">\r\n    <div class=\"card-body\">\r\n      <form class=\"row needs-validation\" novalidate>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\"><i class=\"bi bi-at\"></i></span>\r\n            <input type=\"email\" class=\"form-control\" id=\"inputemail\" placeholder=\"Email\" [(ngModel)]=\"email\"\r\n              [ngModelOptions]=\"{standalone: true}\" required/>\r\n          </div>\r\n          <div class=\"invalid-feedback\">\r\n            Intruduzca un email\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"input-group mb-3\">\r\n            <span class=\"input-group-text\"><i class=\"bi bi-lock-fill\"></i></span>\r\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Contraseña\" [(ngModel)]=\"password\"\r\n              [ngModelOptions]=\"{standalone: true}\" required/>\r\n          </div>\r\n          <div class=\"invalid-feedback\">\r\n            Introduzca una contraseña\r\n          </div>\r\n        </div>\r\n        <div class=\"d-grid gap-2 col-6 mx-auto\">\r\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"apilogin()\">\r\n            Inicio de sesión\r\n          </button>\r\n        </div>\r\n        <div class=\"d-grid gap-2 col-6 mx-auto\">\r\n          <button class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/registre']\">\r\n            Registrar\r\n          </button>\r\n        </div>\r\n      </form>\r\n      <a [routerLink]=\"['/change']\">¿Olvidaste la contraseña?</a>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "jloH":
/*!******************************************************!*\
  !*** ./src/app/incidencies/incidencies.component.ts ***!
  \******************************************************/
/*! exports provided: IncidenciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidenciesComponent", function() { return IncidenciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_incidencies_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./incidencies.component.html */ "Jbwx");
/* harmony import */ var _incidencies_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incidencies.component.css */ "03Hv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dades.service */ "MMqf");






let IncidenciesComponent = class IncidenciesComponent {
    constructor(dades, router) {
        this.dades = dades;
        this.router = router;
        this.page1 = 1;
        this.page2 = 1;
        this.page3 = 1;
        this.page4 = 1;
        this.pageSize = 15;
        this.p = 1;
        this.incidencies = [];
        this.incidenciesO = [];
        this.incidenciesP = [];
        this.incidenciesT = [];
        this.tecnics = [];
        this.test = [];
        this.imatges = [];
        this.users = [];
        this.incidencia = [];
        this.todaysDataTime = '';
        this.prio = [
            { id: 1, prioritat: 'Baja' },
            { id: 2, prioritat: 'Media' },
            { id: 3, prioritat: 'Alta' }
        ];
        //funcions image-cropper
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    ngOnInit() {
        this.titol = '';
        this.desc = '';
        this.imatges = [];
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            this.token = localStorage.getItem('token');
            this.dades.obtenirtipus(token)
                .subscribe((resp) => {
                if (resp) {
                    console.log("aaaa: ", resp);
                    this.dades.idU = resp.id;
                    this.dades.tech = resp.tech;
                    this.tech = this.dades.tech;
                    this.dades.admin = resp.admin;
                    this.dades.empresa = resp.empresa;
                    this.dades.login = true;
                }
                console.log(this.dades.idU);
                this.toggleU = false;
                this.toggleT = false;
                this.toggleF = false;
                this.toggleP = false;
                this.toggleE = false;
                this.toggleI = false;
                if (this.dades.tech == true) {
                    this.dades.Mostrarusers(token).subscribe((resultat) => {
                        this.users = resultat;
                        console.log('usuaris: ', resultat);
                    });
                    this.dades.MostrarInci(token).subscribe((resultat) => {
                        this.incidencies = resultat;
                        console.log('incidències: ', resultat);
                        this.ilenght = resultat.length;
                        console.log("ilenght: ", this.ilenght);
                    });
                    this.dades.MostrarInciO(token, 1, 1).subscribe((resultat => {
                        this.incidenciesO = resultat;
                        this.ilenghto = resultat.length;
                        console.log('incidències obertes:', resultat);
                    }));
                    this.dades.MostrarInciO(token, 2, 3).subscribe((resultat => {
                        this.incidenciesP = resultat;
                        this.ilenghtp = resultat.length;
                        console.log('incidències progres:', resultat);
                    }));
                    this.dades.MostrarInciT(token).subscribe((resultat => {
                        this.incidenciesT = resultat;
                        this.ilenghtt = resultat.length;
                        console.log('incidències tancades: ', resultat);
                    }));
                    this.dades.Mostrartecnic(token).subscribe((resultat => {
                        this.tecnics = resultat;
                        console.log('tècnics: ', resultat);
                    }));
                }
                else {
                    this.dades.MostrarInciu(token).subscribe((resultat) => {
                        this.incidencies = resultat;
                        this.ilenght = resultat.length;
                        console.log(resultat);
                    });
                    this.dades.MostrarInciut(token).subscribe((resultat) => {
                        this.incidenciesT = resultat;
                        this.ilenghtt = resultat.length;
                        console.log(resultat);
                    });
                }
            }, (error) => {
                this.dades.idU = undefined;
                this.dades.tech = undefined;
                this.dades.admin = undefined;
                this.dades.empresa = undefined;
                this.dades.login = false;
                alert('No autoritzat  ' + error.status);
                localStorage.clear();
                this.router.navigate(["/login"]);
            });
            console.log('userinci', this.userinci);
        }
        else {
            this.router.navigate(["/login"]);
        }
    }
    resoldre(id, ide) {
        console.log("yallah", id, ide);
        this.dades.resoldre(this.token, id, ide).subscribe((resultat) => {
            console.log(resultat);
        });
        this.ngOnInit();
    }
    techsel(event) {
        this.canvi = true;
        this.idt = event.target.value;
    }
    assignar(id, idp) {
        this.ide = 2;
        if (idp == "Baja") {
            this.idp = 1;
        }
        else if (idp == "Media") {
            this.idp = 2;
        }
        else {
            this.idp = 3;
        }
        this.dades.actualitzar(this.token, id, this.dades.idU, this.idp, this.ide).subscribe((resultat) => {
            console.log(resultat);
        });
        this.ngOnInit();
    }
    Actualitzar(id) {
        if (this.canvi && this.ide != 3) {
            this.ide = 2;
        }
        this.dades.actualitzar(this.token, id, this.idt, this.idp, this.ide).subscribe((resultat) => {
            console.log(resultat);
        });
        this.ngOnInit();
        this.canvi = false;
        this.selectoffcanvas.nativeElement.value = this.tecnic;
    }
    editarinci(id) {
        this.dades.editinci(this.token, id).subscribe((resultat) => {
            console.log(resultat);
            this.incidencia = resultat;
            this.idt = resultat[0].id_IT;
            console.log("idt", this.idt);
            this.prioritat = resultat[0].prioritat;
            console.log("prioritat", this.prioritat);
            this.idp = resultat[0].idp;
            console.log("idp", this.idp);
            this.ide = resultat[0].estat;
            console.log("ide", this.ide);
            console.log("tecnic", resultat[0].tecnic);
            this.tecnic = resultat[0].tecnic;
        });
    }
    fileChangeEvent(event) {
        this.imageChangedEvent = event;
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded(image) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    //guarda imatges dins array
    img() {
        if (this.croppedImage != "") {
            this.imatges[this.imatges.length] = { id: this.imatges.length, imatge: this.croppedImage };
            this.croppedImage = "";
            this.imageChangedEvent = null;
            this.fileUploader.nativeElement.value = null;
            console.log('imatges: ', this.imatges);
        }
    }
    //delete d'imatges dins l'array & reindexa 
    delete(id) {
        this.imatges.splice(id, 1);
        console.log('imatges: ', this.imatges);
    }
    //insert de incidencies & fotos 
    inseririnci_fotos() {
        if (this.titol != '' && this.desc != '') {
            if (!this.tech) {
                this.userinci = this.dades.idU;
            }
            if (this.tech && this.userinci == undefined || this.tech && this.userinci == null) {
                alert('Seleccione un usuario');
                return;
            }
            if (this.idp == null) {
                this.idp = 1;
            }
            console.log('titol:', this.titol, 'iduser: ', this.userinci, 'priority: ', this.idp, 'desc: ', this.desc, 'img:', this.imatges);
            this.dades.inseririnci(this.token, this.titol, this.desc, this.userinci, this.idp, 1).subscribe((resultat) => {
                console.log('id_inci?:', resultat);
                //   this. idI = resultat;
                this.resetprio.nativeElement.value = 'Seleccionar prioridad';
                this.resetusuari.nativeElement.value = 'Seleccionar usuario';
            }),
                console.log('img ts: ', this.imatges);
            this.dades.inserir_fotosInci(this.token, this.userinci, this.imatges).subscribe((resultat) => {
                console.log('fotos?:', resultat);
                //  this. idI = resultat;
            });
            //  alert('oju');
            //  window.location.reload();
            this.ngOnInit();
        }
        else {
            alert('Complete la incidència');
        }
    }
    //selecció usuari
    usersel(event) {
        this.userinci = event.target.value;
    }
    //selecció prioritat
    priori(event) {
        this.idp = event.target.value;
    }
    sort(propietat, tab) {
        if (propietat == 'usuario') {
            if (this.toggleU == false) {
                this.toggleT = false;
                this.toggleF = false;
                this.toggleE = false;
                this.toggleP = false;
                this.toggleI = false;
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.Nom < b.Nom) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.Nom < b.Nom) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.Nom < b.Nom) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.Nom < b.Nom) ? -1 : 1);
                }
                this.toggleU = true;
            }
            else {
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.Nom > b.Nom) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.Nom > b.Nom) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.Nom > b.Nom) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.Nom > b.Nom) ? -1 : 1);
                }
                this.toggleU = false;
                this.toggleT = false;
                this.toggleF = false;
                this.toggleE = false;
                this.toggleP = false;
                this.toggleI = false;
            }
        }
        if (propietat == 'titulo') {
            if (this.toggleT == false) {
                this.toggleU = false;
                this.toggleF = false;
                this.toggleE = false;
                this.toggleP = false;
                this.toggleI = false;
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.titol < b.titol) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.titol < b.titol) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.titol < b.titol) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.titol < b.titol) ? -1 : 1);
                }
                this.toggleT = true;
            }
            else {
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.titol > b.titol) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.titol > b.titol) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.titol > b.titol) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.titol > b.titol) ? -1 : 1);
                }
                this.toggleT = false;
                this.toggleU = false;
                this.toggleF = false;
                this.toggleE = false;
                this.toggleP = false;
                this.toggleI = false;
            }
        }
        if (propietat == 'fecha') {
            if (this.toggleF == false) {
                this.toggleT = false;
                this.toggleU = false;
                this.toggleE = false;
                this.toggleP = false;
                this.toggleI = false;
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.Fecha < b.Fecha) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.Fecha < b.Fecha) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.Fecha < b.Fecha) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.Fecha < b.Fecha) ? -1 : 1);
                }
                this.toggleF = true;
            }
            else {
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.Fecha > b.Fecha) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.Fecha > b.Fecha) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.Fecha > b.Fecha) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.Fecha > b.Fecha) ? -1 : 1);
                }
                this.toggleF = false;
                this.toggleT = false;
                this.toggleU = false;
                this.toggleE = false;
                this.toggleP = false;
                this.toggleI = false;
            }
        }
        if (propietat == 'prioridad') {
            if (this.toggleP == false) {
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.pid < b.pid) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.pid < b.pid) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.pid < b.pid) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.pid < b.pid) ? -1 : 1);
                }
                this.toggleP = true;
                this.toggleT = false;
                this.toggleF = false;
                this.toggleE = false;
                this.toggleU = false;
                this.toggleI = false;
            }
            else {
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.pid > b.pid) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.pid > b.pid) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.pid > b.pid) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.pid > b.pid) ? -1 : 1);
                }
                this.toggleP = false;
                this.toggleT = false;
                this.toggleF = false;
                this.toggleE = false;
                this.toggleU = false;
                this.toggleI = false;
            }
        }
        if (propietat == 'estado') {
            if (this.toggleE == false) {
                this.toggleT = false;
                this.toggleF = false;
                this.toggleU = false;
                this.toggleP = false;
                this.toggleI = false;
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.eid < b.eid) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.eid < b.eid) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.eid < b.eid) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.eid < b.eid) ? -1 : 1);
                }
                this.toggleE = true;
            }
            else {
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.eid > b.eid) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.eid > b.eid) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.eid > b.eid) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.eid > b.eid) ? -1 : 1);
                }
                this.toggleE = false;
                this.toggleT = false;
                this.toggleF = false;
                this.toggleU = false;
                this.toggleP = false;
                this.toggleI = false;
            }
        }
        if (propietat == 'tecnico') {
            if (this.toggleI == false) {
                this.toggleT = false;
                this.toggleF = false;
                this.toggleE = false;
                this.toggleP = false;
                this.toggleU = false;
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.Nom < b.Nom) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.Nom < b.Nom) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.Ntecnic < b.Ntecnic) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.Nom < b.Nom) ? -1 : 1);
                }
                this.toggleI = true;
            }
            else {
                if (tab == 1) {
                    this.incidencies.sort((a, b) => (a.Nom > b.Nom) ? -1 : 1);
                }
                if (tab == 2) {
                    this.incidenciesO.sort((a, b) => (a.Nom > b.Nom) ? -1 : 1);
                }
                if (tab == 3) {
                    this.incidenciesP.sort((a, b) => (a.Ntecnic > b.Ntecnic) ? -1 : 1);
                }
                if (tab == 4) {
                    this.incidenciesT.sort((a, b) => (a.Nom > b.Nom) ? -1 : 1);
                }
                this.toggleI = false;
                this.toggleT = false;
                this.toggleF = false;
                this.toggleE = false;
                this.toggleP = false;
                this.toggleU = false;
            }
        }
        console.log('estat toggle U: ', this.toggleU, 'T', this.toggleT, 'F', this.toggleF, 'P', this.toggleP, 'E', this.toggleE, 'I', this.toggleI);
        console.log('ordenar?', this.incidencies);
    }
};
IncidenciesComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_5__["DadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
IncidenciesComponent.propDecorators = {
    fileUploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileUploader',] }],
    selectoffcanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectoffcanvas',] }],
    resetusuari: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['resetusuari',] }],
    resetprio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['resetprio',] }]
};
IncidenciesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-incidencies',
        template: _raw_loader_incidencies_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_incidencies_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IncidenciesComponent);



/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "oVuz":
/*!*******************************************!*\
  !*** ./src/app/grups/grups.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncnVwcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "saMh":
/*!*****************************************!*\
  !*** ./src/app/dash/dash.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "sxhZ":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container-fluid\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['dash']\">\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 93.048 36\" width=\"93.048\" height=\"36\"><g fill=\"#000000\" color=\"#000000\" transform=\"translate(0 4) scale(0.5833334)\"><svg width=\"48.0\" height=\"48.0\" x=\"0.0\" y=\"0.0\" viewBox=\"0 0 48 48\"><path fill=\"currentColor\" fill-rule=\"nonzero\" d=\"M24 .21L.21 24 24 47.79 47.79 24 24 .21zM5.82 24L24 5.82l7.69 7.69-2.8 2.8L24 11.43 11.43 24l4.88 4.89-2.8 2.8L5.82 24zm25.15 0L24 30.97 17.03 24 24 17.03 30.97 24zM16.31 34.49l2.8-2.8L24 36.57 36.57 24l-4.89-4.89 2.8-2.8 7.7 7.69L24 42.18l-7.69-7.69z\"></path></svg></g><path fill=\"#000000\" fill-rule=\"nonzero\" d=\"M2.81 16.70L0.12 16.70Q0 16.70 0 16.58L0 16.58L0.05 0.10Q0.05 0 0.14 0L0.14 0L7.82 0Q7.94 0 7.94 0.10L7.94 0.10L7.94 2.81Q7.94 2.90 7.85 2.90L7.85 2.90L2.93 2.90L2.93 6.62L7.85 6.62Q7.94 6.62 7.94 6.74L7.94 6.74L7.97 9.46Q7.97 9.55 7.85 9.55L7.85 9.55L2.93 9.55L2.93 16.58Q2.93 16.70 2.81 16.70L2.81 16.70ZM13.18 16.70L10.46 16.70Q10.34 16.70 10.34 16.58L10.34 16.58L10.37 0.10Q10.37 0 10.46 0L10.46 0L13.15 0Q13.25 0 13.25 0.10L13.25 0.10L13.27 16.58Q13.27 16.70 13.18 16.70L13.18 16.70ZM17.33 16.70L14.64 16.70Q14.54 16.70 14.57 16.58L14.57 16.58L17.30 8.02L14.62 0.10Q14.59 0 14.69 0L14.69 0L17.38 0Q17.50 0 17.52 0.10L17.52 0.10L19.13 5.81L20.76 0.10Q20.78 0 20.90 0L20.90 0L23.57 0Q23.66 0 23.64 0.10L23.64 0.10L20.95 7.99L23.66 16.58Q23.71 16.70 23.59 16.70L23.59 16.70L20.90 16.70Q20.81 16.70 20.76 16.58L20.76 16.58L19.13 10.39L17.47 16.58Q17.45 16.70 17.33 16.70L17.33 16.70ZM27.89 16.70L25.18 16.70Q25.08 16.70 25.08 16.58L25.08 16.58L25.10 0.10Q25.10 0 25.22 0L25.22 0L27.89 0Q28.01 0 28.01 0.10L28.01 0.10L27.98 6.62L31.58 6.62L31.58 0.10Q31.58 0 31.68 0L31.68 0L34.34 0Q34.46 0 34.46 0.10L34.46 0.10L34.51 16.58Q34.51 16.70 34.39 16.70L34.39 16.70L31.70 16.70Q31.58 16.70 31.58 16.58L31.58 16.58L31.58 9.53L27.98 9.53L27.98 16.58Q27.98 16.70 27.89 16.70L27.89 16.70ZM40.90 16.94L40.90 16.94Q39.62 16.94 38.54 16.28Q37.46 15.62 36.83 14.52Q36.19 13.42 36.19 12.10L36.19 12.10L36.24 0.10Q36.24 0 36.34 0L36.34 0L39.02 0Q39.12 0 39.12 0.10L39.12 0.10L39.12 12.10Q39.12 12.91 39.64 13.48Q40.15 14.04 40.90 14.04L40.90 14.04Q41.66 14.04 42.18 13.48Q42.70 12.91 42.70 12.10L42.70 12.10L42.70 0.10Q42.70 0 42.79 0L42.79 0L45.48 0Q45.58 0 45.58 0.10L45.58 0.10L45.62 12.10Q45.62 13.44 44.99 14.54Q44.35 15.65 43.28 16.30Q42.22 16.94 40.90 16.94ZM51.91 16.70L47.62 16.70Q47.52 16.70 47.52 16.58L47.52 16.58L47.57 0.10Q47.57 0 47.66 0L47.66 0L52.27 0Q53.64 0 54.72 0.66Q55.80 1.32 56.42 2.40Q57.05 3.48 57.05 4.75L57.05 4.75Q57.05 5.78 56.58 6.67Q56.11 7.56 55.46 8.11L55.46 8.11Q56.16 8.81 56.54 9.72Q56.93 10.63 56.93 11.64L56.93 11.64Q56.93 13.03 56.26 14.18Q55.58 15.34 54.44 16.02Q53.30 16.70 51.91 16.70L51.91 16.70ZM50.45 2.86L50.45 6.62L52.27 6.62Q53.11 6.62 53.63 6.04Q54.14 5.45 54.14 4.75L54.14 4.75Q54.14 3.98 53.59 3.42Q53.04 2.86 52.27 2.86L52.27 2.86L50.45 2.86ZM50.45 9.53L50.42 13.78L51.91 13.78Q52.78 13.78 53.40 13.14Q54.02 12.50 54.02 11.64L54.02 11.64Q54.02 10.78 53.40 10.15Q52.78 9.53 51.91 9.53L51.91 9.53L50.45 9.53Z\" transform=\"translate(36, 9.648)\"></path></svg>\r\n    </a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-bs-toggle=\"collapse\"\r\n      data-bs-target=\"#navbarNavDropdown\"\r\n      aria-controls=\"navbarNavDropdown\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div\r\n      class=\"collapse navbar-collapse justify-content-between\"\r\n      id=\"navbarNavDropdown\"\r\n    >\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" *ngIf=\"this.dades.login\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/dash']\"><i class=\"bi bi-grid-1x2-fill\"></i> Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"this.dades.login\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/incidencies']\"><i class=\"bi bi-collection-fill\"></i> Tickets</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"this.dades.tech && this.dades.login\" >\r\n          <a class=\"nav-link\" [routerLink]=\"['/grups']\"><i class=\"bi bi-people-fill\"></i> Contactos</a>\r\n        </li>\r\n\r\n\r\n      </ul>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" *ngIf=\"!dades.login\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\" >Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"dades.login\" >\r\n          <div class=\"dropdown\" >\r\n            <a class=\"nav-link\" type=\"button\" id=\"dropdownMenuButton1\"\r\n            data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"cursor: pointer;\"\r\n             >{{this.dades.username}}</a>\r\n             <ul class=\"dropdown-menu dropdown-menu-end \" aria-labelledby=\"dropdownMenuButton1\" >\r\n              <li [routerLink]=\"['/config']\" style=\"cursor: pointer;\">\r\n                <a class=\"dropdown-item\">\r\n                  <div class=\"d-flex\">\r\n                    <div class=\"flex-shrink-0\">\r\n                      <i class=\"bi bi-person-circle\"></i>\r\n                    </div>\r\n                    <div class=\"flex-grow-1 ms-3\">\r\n                      {{this.dades.email}}\r\n                    </div>\r\n                  </div>\r\n                </a>\r\n                  \r\n              </li>\r\n              <li><a class=\"dropdown-item\" style=\"cursor: pointer;\" [routerLink]=\"['/login']\" (click)='logout()'>\r\n                <i class=\"bi bi-box-arrow-left\"></i>  Cerrar session</a></li>\r\n          </ul>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "uUR9":
/*!************************************************!*\
  !*** ./src/app/registre/registre.component.ts ***!
  \************************************************/
/*! exports provided: RegistreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistreComponent", function() { return RegistreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registre_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registre.component.html */ "d/Fz");
/* harmony import */ var _registre_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registre.component.css */ "bgOG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dades.service */ "MMqf");






let RegistreComponent = class RegistreComponent {
    constructor(dades, router) {
        this.dades = dades;
        this.router = router;
    }
    validate() {
        var form = document.getElementsByClassName('needs-validation')[0];
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }
    ngOnInit() {
    }
    apiregister() {
        if (this.nom == undefined || this.cognoms == undefined || this.empresa == undefined || this.telefon == undefined ||
            this.empresa == undefined || this.password == undefined || this.nif == undefined ||
            this.nom == '' || this.cognoms == '' || this.empresa == '' || this.telefon == '' ||
            this.empresa == '' || this.password == '' || this.nif == '') {
            alert('complete el formulario');
        }
        else {
            this.dades.inserirUsuari(this.nom, this.cognoms, this.empresa, this.telefon, this.email.toLocaleLowerCase(), this.password, this.nif.toLocaleLowerCase(), 1, 1).subscribe(resp => {
                console.log(resp);
                if (resp != undefined) {
                    this.router.navigate(["/login"]);
                }
            });
        }
    }
};
RegistreComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_5__["DadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registre',
        template: _raw_loader_registre_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registre_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistreComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/config.component */ "QBwv");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash/dash.component */ "ZS0V");
/* harmony import */ var _grups_grups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grups/grups.component */ "zCxL");
/* harmony import */ var _detall_detall_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detall/detall.component */ "/cVJ");
/* harmony import */ var _incidencies_incidencies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./incidencies/incidencies.component */ "jloH");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _registre_registre_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registre/registre.component */ "uUR9");
/* harmony import */ var _canvicontrasenya_canvicontrasenya_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvicontrasenya/canvicontrasenya.component */ "AvWO");
/* harmony import */ var _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./passwordreset/passwordreset.component */ "RIGE");












const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], },
    { path: 'dash', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_4__["DashComponent"] },
    { path: 'incidencies', component: _incidencies_incidencies_component__WEBPACK_IMPORTED_MODULE_7__["IncidenciesComponent"] },
    { path: 'grups', component: _grups_grups_component__WEBPACK_IMPORTED_MODULE_5__["GrupsComponent"] },
    { path: 'config', component: _config_config_component__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"] },
    { path: 'detall/:id', component: _detall_detall_component__WEBPACK_IMPORTED_MODULE_6__["DetallComponent"] },
    { path: 'reset/:token', component: _passwordreset_passwordreset_component__WEBPACK_IMPORTED_MODULE_11__["PasswordresetComponent"] },
    { path: 'change', component: _canvicontrasenya_canvicontrasenya_component__WEBPACK_IMPORTED_MODULE_10__["CanvicontrasenyaComponent"] },
    { path: 'config', component: _config_config_component__WEBPACK_IMPORTED_MODULE_3__["ConfigComponent"] },
    { path: 'registre', component: _registre_registre_component__WEBPACK_IMPORTED_MODULE_9__["RegistreComponent"] },
    { path: '**', redirectTo: '/login' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dades.service */ "MMqf");






let LoginComponent = class LoginComponent {
    constructor(dades, router) {
        this.dades = dades;
        this.router = router;
    }
    ngOnInit() {
        this.dades.login = false;
        localStorage.clear();
    }
    apilogin() {
        this.dades.validarUsuari(this.email.toLocaleLowerCase(), this.password).subscribe(resp => {
            console.log(resp);
            localStorage.setItem('token', resp.token);
            this.dades.login = true;
            this.dades.idU = resp.id;
            this.dades.tech = resp.tech;
            this.dades.admin = resp.admin;
            this.dades.empresa = resp.empresa;
            this.dades.username = resp.nom + ' ' + resp.cognoms;
            this.dades.email = resp.email;
            if (resp.token != undefined) {
                this.router.navigate(["/dash"]);
            }
            else {
                this.dades.login = false;
                localStorage.clear();
                alert(resp.missatge);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_5__["DadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "zCxL":
/*!******************************************!*\
  !*** ./src/app/grups/grups.component.ts ***!
  \******************************************/
/*! exports provided: GrupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupsComponent", function() { return GrupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grups_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grups.component.html */ "hrIr");
/* harmony import */ var _grups_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grups.component.css */ "oVuz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dades.service */ "MMqf");






let GrupsComponent = class GrupsComponent {
    constructor(dades, router) {
        this.dades = dades;
        this.router = router;
        this.users = [];
        this.person = [];
        this.grups = [];
        this.grup = [];
        this.filter = false;
    }
    ngOnInit() {
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            this.token = localStorage.getItem('token');
            this.dades.obtenirtipus(token)
                .subscribe((resp) => {
                if (resp) {
                    console.log("aaaa: ", resp);
                    this.dades.idU = resp.id;
                    this.dades.tech = resp.tech;
                    this.dades.admin = resp.admin;
                    this.admin = this.dades.admin;
                    this.dades.empresa = resp.empresa;
                    this.dades.login = true;
                }
                console.log(this.dades.idU);
                this.dades.Mostrarusers(token).subscribe((resultat) => {
                    this.users = resultat;
                    console.log(resultat);
                });
                this.dades.Mostrargrups(token).subscribe((resultat) => {
                    this.grups = resultat;
                    console.log(resultat);
                });
            }, (error) => {
                this.dades.idU = undefined;
                this.dades.tech = undefined;
                this.dades.admin = undefined;
                this.dades.empresa = undefined;
                this.dades.login = false;
                alert('No autoritzat  ' + error.status);
                localStorage.clear();
                this.router.navigate(["/login"]);
            });
        }
        else {
            this.router.navigate(["/login"]);
        }
    }
    newuser(tipus) {
        if (tipus == 1) {
            this.empresa = 0;
        }
        console.log("awiaitng confirmació", this.email);
        this.email2 = this.email;
        if (this.email != "") {
            this.dades.newuser(this.token, this.nom, this.cognoms, this.empresa, this.telefon, this.email, tipus).subscribe((resultat) => {
                console.log(resultat);
                console.log("enviant confirmació", this.email2);
                this.dades.needemail(this.email2).subscribe((resultat) => {
                    console.log(resultat);
                    this.ngOnInit();
                });
            });
        }
        this.nom = null;
        this.cognoms = null;
        this.telefon = null;
        this.password = null;
        this.empresa = 0;
        this.email = null;
    }
    newgroup() {
        if (this.nom != "") {
            this.dades.newgroup(this.token, this.nom).subscribe((resultat) => {
                console.log(resultat);
            });
            this.nom = "";
            this.ngOnInit();
        }
    }
    mostraruserd(id) {
        this.dades.Mostraruserd(this.token, id).subscribe((resultat) => {
            console.log(resultat);
            this.person = resultat;
        });
    }
    mostrargrupsd(id) {
        this.dades.Mostrargrupsd(this.token, id).subscribe((resultat) => {
            console.log(resultat);
            this.grup = resultat;
        });
    }
    updategrup(id) {
        if (this.nom == null) {
            this.nom = this.grup[0].Grup;
        }
        console.log(id, this.nom);
        this.dades.Updategrup(this.token, id, this.nom).subscribe((resultat) => {
            console.log(resultat);
            this.ngOnInit();
        });
        this.nom = null;
    }
    deletegrup(id) {
        this.dades.Deletegrup(this.token, id).subscribe((resultat) => {
            console.log(resultat);
            this.ngOnInit();
        });
    }
    updateuser(id) {
        console.log("Updating: ", id, this.empresa, this.email);
        this.nom = this.person[0].Nom;
        this.cognoms = this.person[0].Cognoms;
        this.telefon = this.person[0].Telefon_empresa;
        if (this.email == null) {
            this.email = this.person[0].Email;
        }
        this.dades.updateuser(this.token, id, this.nom, this.cognoms, this.telefon, this.email, this.empresa).subscribe((resultat) => {
            console.log(resultat);
            this.ngOnInit();
            console.log("Updated");
        });
        this.nom = null;
        this.cognoms = null;
        this.telefon = null;
        this.email = null;
    }
    deleteuser(id) {
        console.log("Deleting", id);
        this.dades.deleteuser(this.token, id).subscribe((resultat) => {
            console.log(resultat);
            console.log("Deleted");
            this.ngOnInit();
        });
    }
    selectChangeHandler(event) {
        this.empresa = event.target.value;
        console.log(this.empresa, this.email);
    }
    usersel(event) {
        this.id = event.target.value;
        this.filter = true;
    }
    filteroff() {
        this.filter = false;
        this.ngOnInit();
    }
};
GrupsComponent.ctorParameters = () => [
    { type: _dades_service__WEBPACK_IMPORTED_MODULE_5__["DadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GrupsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-grups',
        template: _raw_loader_grups_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grups_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GrupsComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map