import { Component, OnInit } from '@angular/core';
import { emp , empInterface } from 'src/app/Employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empComp = emp.map(
    function(element: empInterface){
      return(element);
    }
  )


  deleteRow(employee: number){
    // const empIndex = this.empComp.indexOf(employee)
    console.log(employee);
    // findIndex methos is used to find the index of array of objet using one of its property
    // here employee == empComp.srno
    // we traverse over empComp using eleement and compare every empComp.srno with element if it matches it returns the index of that particular object
    const index = this.empComp.findIndex(element =>{
      return element.srno === employee;
    })
    console.log(index);
    this.empComp.splice(index,1);
  }
  // addRow(){
  //     let newEmp: empInterface = {
  //       srno: newSrno,
  //       name: newName,
  //       position: newPosition,
  //       salary: newSalary
  //     }

  // }
  constructor(){
    console.log(this.empComp);
  }

}
