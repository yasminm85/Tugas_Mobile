import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  taskText: any;
  taskDate: any;
  nama: any;
  token: any;
  user: any[];
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { this.getTask();
  }
  ngOnInit() {
    this.loadToken();
    console.log('cek fungsi halaman event init jalan');
  }

  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getTask();
  }

  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }

  getTask() {
    // eslint-disable-next-line no-underscore-dangle
    this._apiService.getTask().subscribe((res: any) => {
      console.log('sukses', res);
      this.user = res;
    }, (error: any) => {
      console.log('gagal', error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data mahasiswa',
        buttons: ['OK']
      }).then(res => {
        res.present();
      });
    });
  }



  deleteTask(id) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            // eslint-disable-next-line no-underscore-dangle
            this._apiService.deleteTask(id).subscribe((res: any) => {
              console.log('sukses', res);
              this.getTask();
            }, (error: any) => {
              console.log('error', error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data task',
                buttons: ['OK']
              }).then(res => {
                res.present();
              });
            });
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}
