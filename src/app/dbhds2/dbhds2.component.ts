import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbhds2',
  templateUrl: './dbhds2.component.html',
  styleUrls: ['./dbhds2.component.css']
})
export class DBHDS2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public showHide1=false;
  public showHide2=false;
  public showHide4=false;
  public showHide3=false;
  public showHide5=false;
  public showHide6=false;
  public showmenu=false;
  public check=false;
  public check1=false;
  public images=['assets/newdbhds.png',"assets/newdbhds.png","assets/newdbhds.png"];

 

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

}
