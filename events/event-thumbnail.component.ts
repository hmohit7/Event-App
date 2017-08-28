import { Component,Input,EventEmitter } from '@angular/core'
import {IEvent} from './shared/index'

@Component({
     selector: 'events-thumbnail',
     template: `
         <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time:{{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            
            <div>Price: \${{event?.price}}</div>
            <div>
                <span>{{event?.location.address}}</span>
                <span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
                <div>
                <div *ngIf="event?.OnlineUrl">
                    Online URL: {{event.OnlineUrl}}
                </div>
                </div>
            </div>
     `,
     styles:[`
                .green{color:yellow !important;}
                .bold{font-weight:bold;}
                .thumbnail{min-height:210px;}
                .pad-left{margin-left:5px;}
                .well div{color:#bbb;}
     `]

})
export class EventsThumbnailComponent{
    @Input() event:IEvent
    getStartTimeClass(){
        if(this.event && this.event.time==='8:00 am')
        return'green bold'
        else
            return ''
    }
    
}