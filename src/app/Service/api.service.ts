import { Conges } from './../Conges';
import { Pointage } from '../Pointage';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  redirectUrl: string = '';
  baseUrl: string = 'http://localhost/NaviTrends/src/php';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {}
  public userlogin(username: string, password: string, role: string) {
    alert(username);
    return this.httpClient
      .post<any>(this.baseUrl + '/login.php', { username, password, role })
      .pipe(
        map((Admin) => {
          this.setToken(Admin[0].name);
          localStorage.setItem('role', role);
          this.getLoggedInName.emit(true);
          return Admin;
        })
      );
  }

  public userregistration(
    name: string,
    email: string,
    pwd: string,
    role: string
  ) {
    return this.httpClient
      .post<any>(this.baseUrl + '/register.php', { name, email, pwd, role })
      .pipe(
        map((Admin) => {
          return Admin;
        })
      );
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }

  PHP_API_SERVER = 'http://localhost/NaviTrends/src/php';

  // Api  Pointage Resources Humaines
  readPointages(): Observable<Pointage[]> {
    return this.httpClient.get<Pointage[]>(`${this.PHP_API_SERVER}/index.php`);
  }
  createPointage(Pointage: Pointage): Observable<Pointage> {
    return this.httpClient.post<Pointage>(
      `${this.PHP_API_SERVER}/Pointee.php`,
      Pointage
    );
  }
  updatePointage(Pointage: Pointage) {
    return this.httpClient.put<Pointage>(
      `${this.PHP_API_SERVER}/UpdatePointage.php`,
      Pointage
    );
  }
  deletePointage(id: number) {
    return this.httpClient.delete<Pointage>(
      `${this.PHP_API_SERVER}/DeletePointage.php/?id=${id}`
    );
  }

  // Api  Pointage Administratif

  readPointagesAD(): Observable<Pointage[]> {
    return this.httpClient.get<Pointage[]>(
      `${this.PHP_API_SERVER}/ADpointage.php`
    );
  }
  createPointageAD(Pointage: Pointage): Observable<Pointage> {
    return this.httpClient.post<Pointage>(
      `${this.PHP_API_SERVER}/Pointee.php`,
      Pointage
    );
  }
  updatePointageAD(Pointage: Pointage) {
    return this.httpClient.put<Pointage>(
      `${this.PHP_API_SERVER}/UpdatePointage.php`,
      Pointage
    );
  }
  deletePointageAD(id: number) {
    return this.httpClient.delete<Pointage>(
      `${this.PHP_API_SERVER}/DeletePointage.php/?id=${id}`
    );
  }

  // Api  Pointage Logistique

  readPointagesLOG(): Observable<Pointage[]> {
    return this.httpClient.get<Pointage[]>(
      `${this.PHP_API_SERVER}/LOGPointage.php`
    );
  }
  createPointageLOG(Pointage: Pointage): Observable<Pointage> {
    return this.httpClient.post<Pointage>(
      `${this.PHP_API_SERVER}/Pointee.php`,
      Pointage
    );
  }
  updatePointageLOG(Pointage: Pointage) {
    return this.httpClient.put<Pointage>(
      `${this.PHP_API_SERVER}/UpdatePointage.php`,
      Pointage
    );
  }
  deletePointageLOG(id: number) {
    return this.httpClient.delete<Pointage>(
      `${this.PHP_API_SERVER}/DeletePointage.php/?id=${id}`
    );
  }

  // Api  Pointage Technique

  readPointagesTEC(): Observable<Pointage[]> {
    return this.httpClient.get<Pointage[]>(
      `${this.PHP_API_SERVER}/TECPointage.php`
    );
  }
  createPointageTEC(Pointage: Pointage): Observable<Pointage> {
    return this.httpClient.post<Pointage>(
      `${this.PHP_API_SERVER}/Pointee.php`,
      Pointage
    );
  }
  updatePointageTEC(Pointage: Pointage) {
    return this.httpClient.put<Pointage>(
      `${this.PHP_API_SERVER}/UpdatePointage.php`,
      Pointage
    );
  }
  deletePointageTEC(id: number) {
    return this.httpClient.delete<Pointage>(
      `${this.PHP_API_SERVER}/DeletePointage.php/?id=${id}`
    );
  }

  // Api  Pointage Comptabilite
  readPointagesCOM(): Observable<Pointage[]> {
    return this.httpClient.get<Pointage[]>(
      `${this.PHP_API_SERVER}/COMPointage.php`
    );
  }
  createPointageCOM(Pointage: Pointage): Observable<Pointage> {
    return this.httpClient.post<Pointage>(
      `${this.PHP_API_SERVER}/Pointee.php`,
      Pointage
    );
  }
  updatePointageCOM(Pointage: Pointage) {
    return this.httpClient.put<Pointage>(
      `${this.PHP_API_SERVER}/UpdatePointage.php`,
      Pointage
    );
  }
  deletePointageCOM(id: number) {
    return this.httpClient.delete<Pointage>(
      `${this.PHP_API_SERVER}/DeletePointage.php/?id=${id}`
    );
  }

  // Api  Employee
  readEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      `${this.PHP_API_SERVER}/Employee/ReadEmployee.php`
    );
  }
  createEmployee(Employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(
      `${this.PHP_API_SERVER}/Employee/AddEmployee.php`,
      Employee
    );
  }
  updateEmployee(Employee: Employee) {
    return this.httpClient.put<Employee>(
      `${this.PHP_API_SERVER}/Employee/UpdEmployee.php`,
      Employee
    );
  }
  deleteEmployee(Cin: number) {
    return this.httpClient.delete<Employee>(
      `${this.PHP_API_SERVER}/Employee/DeleteEmployee.php/?id=${Cin}`
    );
  }

  //cherche Pointages D'un Employee
  cherchePointage(formdata: FormData): Observable<any> {
    return this.httpClient.post<any>(
      `${this.PHP_API_SERVER}/Employee/FindPointageEmployee.php`,
      formdata
    );
  }

  // Api  Conges

  readConges(): Observable<Conges[]> {
    return this.httpClient.get<Conges[]>(
      `${this.PHP_API_SERVER}/Conges/ReadConges.php`
    );
  }
  readCongesAcceptee(): Observable<Conges[]> {
    return this.httpClient.get<Conges[]>(
      `${this.PHP_API_SERVER}/Conges/ReadCongesAccepte.php`
    );
  }
  readCongesRefusee(): Observable<Conges[]> {
    return this.httpClient.get<Conges[]>(
      `${this.PHP_API_SERVER}/Conges/ReadCongesRefusee.php`
    );
  }
  createConges(Conges: Conges): Observable<Conges> {
    return this.httpClient.post<Conges>(
      `${this.PHP_API_SERVER}/Conges/AddConges.php`,
      Conges
    );
  }
  deleteConges(Id: number) {
    return this.httpClient.delete<Conges>(
      `${this.PHP_API_SERVER}/Conges/DeleteConges.php/?id=${Id}`
    );
  }
  AccepterConges(Conges: Conges) {
    return this.httpClient.put<Conges>(
      `${this.PHP_API_SERVER}/Conges/AccepterConges.php`,
      Conges
    );
  }
  RefuserConges(Conges: Conges) {
    return this.httpClient.put<Conges>(
      `${this.PHP_API_SERVER}/Conges/RefuseeConges.php`,
      Conges
    );
  }
}
