import { Component } from '@angular/core';
import { PlaceOrderPage } from '../place-order/place-order.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  trackingId!: string;
  courierDetails: any; 
  capturedImage: string = '';
  complaintDetails: string = '';

  constructor(
    private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    private navCtrl: NavController,
    private geolocation: Geolocation,
    private callNumber: CallNumber,
    private alertController: AlertController,
    private modalController: ModalController,
  ) {}

  async showTrackingInstructions() {
    const alert = await this.alertController.create({
      header: 'How to track a courier?',
      message: 'Enter your 6 digit tracking number (Ex: 123456) or use the barcode scanner to scan the code which is received by you by email at the time of the order confirmation.',
      buttons: ['OK']
    });
    await alert.present();
  }

  trackCourier() {
    if (this.trackingId === '123456') {
      this.courierDetails = {
        trackingId: '123456',
        status: 'Delivered',
        recipient: {
          name: 'Yashwanth Varma ',
          address: 'Central Park, Dublin',
          phone: '+353 888888888',
          email: 'yash@test.com'
        },
      };
    } else {
      this.courierDetails = {
        error: 'Tracking ID does not exist.'
      };
      this.showErrorMessage('Tracking ID does not exist.');
    }
  }

  async showErrorMessage(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  placeOrder() {
    this.navCtrl.navigateForward('/place-order');
  }

  async scanBarcode() {
    try {
      const barcodeData = await this.barcodeScanner.scan();
      console.log('Barcode data', barcodeData);
      const alert = await this.alertController.create({
        header: 'Scan Successful',
        message: `Scanned data: ${barcodeData.text}`,
        buttons: ['OK']
      });
      await alert.present();
    } catch (error) {
      console.error('Error while scanning barcode', error);
  
      const alert = await this.alertController.create({
        header: 'Scan Error',
        message: 'An error occurred while scanning the barcode. Please try again.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async getCurrentPosition() {
    try {
      const position = await this.geolocation.getCurrentPosition();
      console.log('Current position:', position);
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }

async viewMap() {
  try {
    const position = await this.geolocation.getCurrentPosition();
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;
    const destinationLatitude = 53.312006;
    const destinationLongitude = -6.261426;
    const url = `https://www.google.com/maps/dir/${userLatitude},${userLongitude}/${destinationLatitude},${destinationLongitude}`;
    window.open(url, '_system');
  } catch (error) {
    console.error('Error getting current position:', error);
  }
}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.capturedImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log('Error taking picture:', err);
    });
  }

  submitComplaint() {
    console.log('Complaint Details:', this.complaintDetails);
    console.log('Captured Image:', this.capturedImage);
    this.complaintDetails = '';
    this.capturedImage = '';
  }

  contactSupport() {
    this.courierDetails = null;
    this.callNumber.callNumber("18001010101", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  async raiseComplaint() {
    const alert = await this.alertController.create({
      header: 'Raise Complaint',
      inputs: [
        {
          name: 'complaint',
          type: 'text',
          placeholder: 'Enter your complaint',
          value: this.complaintDetails
        }
      ],
      buttons: [
        {
          text: 'Take Picture',
          handler: () => {
            this.takePicture();
          }
        },

        {
          text: 'Submit',
          handler: () => {
            this.submitComplaint();
          }
        },

        {
          text: 'Cancel',
          role: 'cancel'
        },
      ]
    });
    await alert.present();
  }
}
