import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  taskText: any;
  taskDate: any;
  user: any[];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { this.getTask();
  }
  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getTask();
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
