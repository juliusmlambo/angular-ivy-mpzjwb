import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  

 Employees = [{EmployeeName:"John", EmployeeSurname:"Bale",Position:"Clerk", Age:"25"  },
            {EmployeeName:"candy", EmployeeSurname:"carls",Position:"HR", Age:"20"  },
            {EmployeeName:"Johannes", EmployeeSurname:"Bingo",Position:"Developer", Age:"30" },
            {EmployeeName:"Peter", EmployeeSurname:"Selolo",Position:"Data analyst", Age:"39" },
            {EmployeeName:"Lebo", EmployeeSurname:"Sekgobela",Position:"Data capture", Age:"27" },
            {EmployeeName:"Courtney", EmployeeSurname:"Mohommed",Position:"Software engineer", Age:"23" },
            {EmployeeName:"Lawrence", EmployeeSurname:"maambira",Position:"Lawyer", Age:"26" },
            {EmployeeName:"Elius", EmployeeSurname:"Daud",Position:"PR", Age:"30" },
            {EmployeeName:"Jam", EmployeeSurname:"Tom",Position:"Cleaner", Age:"24" },
            {EmployeeName:"Elisa", EmployeeSurname:"Serongwa",Position:"Technician", Age:"40" }
                ];
}