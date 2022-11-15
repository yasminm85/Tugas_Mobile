import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return 'http://localhost:8080/apiTodo';
  }

  getTask() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deleteTask(id) {
    return this.http.delete(this.apiURL() + '/hapus.php?id=' + id);
  }

  ambilTask(id) {
    return this.http.get(this.apiURL() + '/lihat.php?id=' + id);
  }


}
