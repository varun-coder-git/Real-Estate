import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.scss']
})
export class FlatDetailsComponent implements OnInit {

  availableStatus: any;
  flatDetail: any;
  flatStatus:any;
  selectedFlatStatus:any;
  constructor(
    public dialogRef: MatDialogRef<FlatDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
  ) {


  }
  onStatusChange(event:any){
    console.log(event);
    this.selectedFlatStatus=event;
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {

    console.log(this.data);
    this.availableStatus = this.data['flatStatus'];
    this.flatDetail = this.data['flatDetails'];
  }

}

