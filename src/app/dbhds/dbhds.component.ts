import { Component, OnInit,ViewEncapsulation, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dbhds',
  templateUrl: './dbhds.component.html',
  styleUrls: ['./dbhds.component.css'],
  
})
export class DbhdsComponent implements OnInit {

   
    public showHide1=false;
    public showHide2=false;
    public showHide4=false;
    public showHide3=false;
    public showHide5=false;
    public showHide6=false;
    public showmenu=false;
    public check=false;
    public check1=false;
    public images=['assets/fordbhds12.jpg',"assets/fordbhds13.png","assets/fordbhds1.jpg"];
  ngOnInit() 
  {}
  constructor() {
    
   }
   
  
  showList1()
  {
    this.showHide1=!this.showHide1;
    if(this.check1==true)
    {
      this.check1=false;
    }
    if(this.check==true)
    {
      this.check=false;
    }
    if( this.showHide2==true || this.showHide3==true||this.showHide4==true||this.showHide5==true||this.showHide6==true)
    {
      
      this.showHide2=false;
      this.showHide3=false;
      this.showHide4=false;
      this.showHide5=false;
      this.showHide6=false;
    }
  }
  showList2()
  {
    this.showHide2=!this.showHide2;
    if(this.check1==true)
    {
      this.check1=false;
    }
    if(this.check==true)
    {
      this.check=false;
    }
    if(this.showHide1==true|| this.showHide6==true || this.showHide3==true||this.showHide4==true||this.showHide5==true)
    {
      this.showHide1=false;
      this.showHide6=false;
      this.showHide3=false;
      this.showHide4=false;
      this.showHide5=false;
    }
  }
  showList3()
  {
    this.showHide3=!this.showHide3;
    if(this.check1==true)
    {
      this.check1=false;
    }
    if(this.check==true)
    {
      this.check=false;
    }
    if(this.showHide1==true|| this.showHide2==true || this.showHide6==true||this.showHide4==true||this.showHide5==true)
    {
      this.showHide1=false;
      this.showHide2=false;
      this.showHide6=false;
      this.showHide4=false;
      this.showHide5=false;
    }
  }
  showList4()
  {
    this.showHide4=!this.showHide4;
    if(this.check1==true)
    {
      this.check1=false;
    }
    if(this.check==true)
    {
      this.check=false;
    }
    if(this.showHide1==true|| this.showHide2==true || this.showHide3==true||this.showHide6==true||this.showHide5==true)
    {
      this.showHide1=false;
      this.showHide2=false;
      this.showHide3=false;
      this.showHide6=false;
      this.showHide5=false;
    }
  }
  showList5()
  {
    this.showHide5=!this.showHide5;
    if(this.check1==true)
    {
      this.check1=false;
    }
    if(this.check==true)
    {
      this.check=false;
    }
    if(this.showHide1==true|| this.showHide2==true || this.showHide3==true||this.showHide4==true||this.showHide6==true)
    {
      this.showHide1=false;
      this.showHide2=false;
      this.showHide3=false;
      this.showHide4=false;
      this.showHide6=false;
    }
  }
  showList6()
  {
    this.showHide6=!this.showHide6;
    if(this.check1==true)
    {
      this.check1=false;
    }
    if(this.check==true)
    {
      this.check=false;
    }
    if(this.showHide1==true|| this.showHide2==true || this.showHide3==true||this.showHide4==true||this.showHide5==true)
    {
      this.showHide1=false;
      this.showHide2=false;
      this.showHide3=false;
      this.showHide4=false;
      this.showHide5=false;
    }
  }
  isCheck()
  {
    this.check=!this.check;
    if(this.check1==true)
    {
      this.check1=false;
    }
  }
  isCheck1()
  {
    if(this.check==true)
    {
      this.check=false;
    }
    this.check1=!this.check1;
  }
 
}
