import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // jwt:string;
  // username:string ;
  // roles:Array<String>;

  constructor(private http:HttpClient) { }

login(data) {
  return this.http.post(environment.url+ '/Auth/login'
  , data , {observe:'response'});
}
Updateuser(data) {
  return this.http.put(environment.url + ''
  , data, {observe:'response'});
}
deleteuser(id) {
  return this.http.delete(environment.url + ''
  , id , );
}
registerClient(user) {
  return this.http.post(environment.url + '/Client/Save' ,
  user , {observe:'response'} )
}
registerGerantSpace(id,user) {
  return this.http.post(environment.url + '/Gerant/Save1/'+id ,
  user , {observe:'response'} )
}
registerGerantArtiste(id,user) {
  return this.http.post(environment.url + '/Gerant/Save'+id,
  user , {observe:'response'} )
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
