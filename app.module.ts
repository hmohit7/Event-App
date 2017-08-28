import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser' 
import {RouterModule,ActivatedRouteSnapshot} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {
            EventsListComponent,
            EventsThumbnailComponent,
            EventService,
            EventDetailsComponent,
            CreateEventComponent,
            EventRouteActivator,
            EventListResolver
} from './events/index'
import {EventsAppComponent} from './events-app.components'
import {NavBarComponent} from './nav/navbar.component'
import {ToastrService} from './common/toastr.service'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {AuthService} from './user/auth.service'

@NgModule({
      imports: [BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,ReactiveFormsModule],
      declarations: [EventsAppComponent,EventsListComponent,EventsThumbnailComponent,NavBarComponent,EventDetailsComponent,CreateEventComponent,Error404Component],
      providers:[
                  EventService,
                  ToastrService,
                  EventRouteActivator,
                  AuthService,
                  EventListResolver,
                  {
                        provide:'canDeactivateCreateEvent',
                        useValue: checkDirtyState
                  }

                  ],
      bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
      if(component.isDirty)
            return window.confirm('are you sure, you will be redirected to the main page')

            return true
      
       
}