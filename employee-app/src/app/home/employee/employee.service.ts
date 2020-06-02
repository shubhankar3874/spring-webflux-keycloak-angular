import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  add(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>('/api/employee', emp);
  }

  remove(emp: Employee) {
    return this.http.delete(`/api/employee/${emp.id}`);
  }

  list() {
    return this.http.get<Employee[]>('/api/employee');
  }
}
