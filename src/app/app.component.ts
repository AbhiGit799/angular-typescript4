import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Color } from './color';
import { Direction } from './direction';

import { Employee } from './employee';
import { MessageService } from './message.service';
import { Num } from './num';
import { PersonService } from './person.service';
import { StudentClass } from './studentclass';

interface emp {
  Id: number;
  Name: string;
}

class Abc {
  constructor() {
    console.log('abc constructor called ..');
  }
  display(name: string) {
    console.log('Hello : ' + name + 'from Abc Class');
  }
}

class EmployeeSameAppComp {
  private empCode: String;
  empName:String;

  private fun() {
    let name = 'Ajeet';
    console.log(name);
  }
}

class MyClass {
  name1: String; //Here, name1 is public by default

  private name2: string;

  protected name3: string;

  fun3() {
    console.log(this.name2);
  }
}

class MySubClass extends MyClass {
  fun() {
    console.log(this.name1);
    //console.log(this.name2); //Give error because name2 is private
    console.log(this.name3);
  }
}

class MySubChildClass extends MySubClass {
  fun2() {
    console.log(this.name3);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  viewProviders: [Abc,EmployeeSameAppComp],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myapp';

  // constructor() {}

  constructor(private emp:EmployeeSameAppComp)
  {
      //emp.empCode="102"; //Give error because empCode is private
      emp.empName ="Aman Singh";

      console.log("From EmployeeSameAppComp="+emp.empName);

    //  emp.fun(); //give error because fun() is private.

  }

  ngOnInit() {


    this.foLoop();
    this.forOfLoop();
    this.forInLoop();

    this.display();
    this.fun1();
    this.fun2();

    this.funArrow();


  }

  //forLoop is a function
  foLoop() {
    console.log('\n');

    for(var i=0;i<10;i++)
    {
      console.log("Simple For Loop = "+i);
    }


    for (var ii = 0; ii < 10; ii++) {
      console.log(ii);
    }
    console.log("Simple For Loop Value of ii = "+ii);

    let arr = [10,20,30,40,50];
    for(let i=0;i<arr.length;i++)
    {
      console.log("Simple For Loop = "+i,arr[i]);
    }

  } //forLoop function ends here.

  //forOfLoop
  forOfLoop()
  {
    console.log("\n");

    let arr = [10,20,30,40,50];
    for(let data of arr)
    {
      console.log("forOfLoop = "+data);
    }

    let str="Hello Ajay";
    for(let charstr of str)
    {
      console.log(charstr);
    }

  }//forOfLoop ends here.

  forInLoop()
  {
    //forIn loop is for index

   console.log("\n");

    let arr = [10,20,30,40,50];

    for(let index in arr)
    {
      //console.log("\n");
      //console.log(index);
      console.log(index,arr[index]);
    }

    let emp={
      id:101,
      name:"Arjun"
    }

    for(let e of Object.values(emp))  //<------------------------Object.values() to get values from Object
    {
      console.log(e);
    }

     
    for(let e of Object.keys(emp))  //<-------------------------Object.keys() to get keys from object
    {
      // console.log(e);
      console.log(e,emp[e]);
    }


    for(let e of Object.keys(emp))
    {
      if(e=='name')
      {
        console.log(e,emp[e]);
      }
    }

    for(let e in emp)
    {
      console.log(e,emp[e]);
    }


  }


  //Functions

  display()
  {
    console.log("\n");
    // console.log(this);
    
    console.log("Ajeet from display()");

    let aa=()=>{
      console.log("Amit from aa");
    }

    aa();
  
  }

  fun1 = function() //<--------------Storing function in variable
  {
    console.log("\n");
     //console.log(this);
     console.log("Storing function in a variable");
  }

  fun2 = function display2()
  {
    console.log("\n");
    
    console.log("RJ from fun2");
  }

  funArrow = () =>{
    console.log("\n");
    console.log("Arrow function.");
  }

}
