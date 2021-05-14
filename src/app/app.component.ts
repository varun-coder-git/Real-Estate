import { Component } from '@angular/core';
import { FlatDetailsComponent } from './flat-details/flat-details.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'realestate';

  FLAT_STATUS = ['Booked', 'Available', 'N/A'];

  // FLAT_COLOR:Object<st>= {
  //   'Booked':'red',
  //   'Available':'green',
  //   'N/A':'gray'

  // };
  flatList = [
    {
      "flatId": 101,
      "flatStatus": "Booked"
    },
    {
      "flatId": 102,
      "flatStatus": "Available"
    },
    {
      "flatId": 103,
      "flatStatus": "N/A"
    },
    {
      "flatId": 104,
      "flatStatus": "Booked"
    },
    {
      "flatId": 105,
      "flatStatus": "N/A"
    },
    {
      "flatId": 201,
      "flatStatus": "Available"
    },
    {
      "flatId": 202,
      "flatStatus": "N/A"
    },
    {
      "flatId": 203,
      "flatStatus": "Booked"
    },
    {
      "flatId": 204,
      "flatStatus": "Booked"
    },
    {
      "flatId": 205,
      "flatStatus": "Available"
    },
    {
      "flatId": 301,
      "flatStatus": "N/A"
    },
    {
      "flatId": 302,
      "flatStatus": "Booked"
    },
    {
      "flatId": 303,
      "flatStatus": "Booked"
    },
    {
      "flatId": 304,
      "flatStatus": "Available"
    },
    {
      "flatId": 305,
      "flatStatus": "N/A"
    },
    {
      "flatId": 401,
      "flatStatus": "Booked"
    },
    {
      "flatId": 402,
      "flatStatus": "Booked"
    },
    {
      "flatId": 403,
      "flatStatus": "Available"
    },
    {
      "flatId": 404,
      "flatStatus": "N/A"
    },
    {
      "flatId": 405,
      "flatStatus": "Booked"
    },
    {
      "flatId": 501,
      "flatStatus": "N/A"
    },
    {
      "flatId": 502,
      "flatStatus": "Booked"
    },
    {
      "flatId": 503,
      "flatStatus": "Booked"
    },
    {
      "flatId": 504,
      "flatStatus": "Available"
    },
    {
      "flatId": 505,
      "flatStatus": "N/A"
    }
  ];
  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {

  }

  checkStatus(flatDetails: any) {
    let dialogRef = this.dialog.open(FlatDetailsComponent, {
      width: '50%',
      data: { flatDetails: flatDetails, flatStatus: [...this.FLAT_STATUS.filter((d) => d != flatDetails.flatStatus)] }

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        flatDetails.flatStatus = result;
      }

    });
  }

}
