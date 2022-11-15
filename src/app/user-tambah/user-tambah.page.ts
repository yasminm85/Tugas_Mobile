import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-user-tambah',
  templateUrl: './user-tambah.page.html',
  styleUrls: ['./user-tambah.page.scss'],
})
export class UserTambahPage implements OnInit {
  taskText: any;
  taskDate: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }
  addTask() {
    // eslint-disable-next-line no-underscore-dangle, prefer-const
    let url = this._apiService.apiURL() + '/tambah.php';
    Http.request({
      method: 'POST',
      // eslint-disable-next-line object-shorthand
      url: url,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json' },
      data: {
        taskText: this.taskText,
        taskDate: this.taskDate
      },
    }).then((data) => {
      this.taskText = '';
      this.taskDate = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input task',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/user');
    }, (error) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input task',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    });
  }

}
