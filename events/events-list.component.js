"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var event_service_1 = require("./shared/event.service");
var toastr_service_1 = require("../common/toastr.service");
var router_1 = require("@angular/router");
var EventsListComponent = (function () {
    function EventsListComponent(eventService, toastr, route) {
        this.eventService = eventService;
        this.toastr = toastr;
        this.route = route;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        this.events = this.route.snapshot.data['events'];
    };
    EventsListComponent.prototype.handleThumbnailClick = function (eventName) {
        this.toastr.success(eventName);
    };
    return EventsListComponent;
}());
EventsListComponent = __decorate([
    core_1.Component({
        template: "<div>\n        <h1>Upcoming Angular 2 Events </h1>\n        <hr/>\n        <div class=\"row\">\n        <div *ngFor=\"let i of events\" class=\"col-md-5\">\n        <events-thumbnail (click)=\"handleThumbnailClick(i.name)\"  [event]=\"i\"></events-thumbnail>\n        </div>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [event_service_1.EventService, toastr_service_1.ToastrService, router_1.ActivatedRoute])
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map