import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { JwtHelperService} from '@auth0/angular-jwt';
import { env } from 'process';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // jwt:string;
  // username:string ;
  // roles:Array<String>;

  constructor(private http:HttpClient) { }


addEvent(event) {
  return this.http.post(environment.url + '/Event/Save/{idgerant}',event)
}
modifEvent( idevent , event) {
  return this.http.put(environment.url + '/Event/modif', idevent , event)
}
listEvent(){
  return this.http.get(environment.url +'/Event/All')
}

deleteEvent(id){
  return this.http.delete(environment.url + '/Event/delete', id)
}
getbyid(id) {
  return this.http.get(environment.url + '' , id)
}
/* parseJWT() {
  const jwtHelper = new JwtHelperService();
  const objJWT = jwtHelper.decodeToken(this.jwt);
  this.username = objJWT.obj ;
  this.roles = objJWT.roles ;
}
saveToken(jwt:string) {
  sessionStorage.setItem('token',jwt);
  this.jwt = jwt ;
  this.parseJWT();
}
loadToken(){
  this.jwt = sessionStorage.getItem('token');
  this.parseJWT();
}
initParams() {
  this.jwt = undefined ;
  this.username = undefined ;
  this.roles = undefined ;
} */
}
