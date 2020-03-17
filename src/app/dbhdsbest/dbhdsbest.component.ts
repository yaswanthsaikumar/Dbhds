import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbhdsbest',
  templateUrl: './dbhdsbest.component.html',
  styleUrls: ['./dbhdsbest.component.css']
})
export class DbhdsbestComponent implements OnInit {
  public showHide1=false;
    public showHide2=false;
    public showHide3=false;
    public showHide4=false;
    public showHide5=false;
    public showHide6=false;
    public showmenu=false;
    public check=false;
    public check1=false;
    public check2=true;
  public images=["assets/dbhdsimage2.jpg",'assets/dbhdsimage3.jpg',"assets/dbhdsimage1.jpg"];
  constructor() { }

  ngOnInit() {
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
      this.check2=false;
    }
    if(this.check==false && this.check1==false)
    {
      this.check2=true;
    }
    else{
      this.check2=false;
    }
  }
  isCheck1()
  {
    if(this.check==true)
    {
      this.check=false;
      this.check2=false;
    }
    this.check1=!this.check1;
    if(this.check==false && this.check1==false)
    {
      this.check2=true;
    }
    else{
      this.check2=false;
    }
  }
  topFunction() {
    
  }
}
