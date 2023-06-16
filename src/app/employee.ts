console.log('Employee Class loaded..');
// for viewprovider property in app.component.ts
// we are using this for testing purpose. That class name that mentioned inside viewprovider will load first.

export class Employee {
  constructor() {
    console.log('Employee class constructor called');
  }

  age = 25;

  show() {
    console.log('Hello World !!');
  }
}
