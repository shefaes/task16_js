// function multiplyBy() {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
    
// }
    function multiplicate(){
       var total = 1;
       var a = document.getElementById('reply')
      for (let i = 11; i < 15; i++) {
           total=total*i;
         }
        a.innerHTML=total;
     
    }
    
    

// inheritance

// function Person(firstName, lastName) {
//     this.FirstName = firstName || "unknown";
//     this.LastName = lastName || "unknown";            
// }

// Person.prototype.getFullName = function () {
//     return this.FirstName + " " + this.LastName;
// }
// function Student(firstName, lastName, schoolName, grade)
// {
//     Person.call(this, firstName, lastName);

//     this.SchoolName = schoolName || "unknown";
//     this.Grade = grade || 0;
// }
// //Student.prototype = Person.prototype;
// Student.prototype = new Person();
// Student.prototype.constructor = Student;

// var std = new Student("Meryem","Mamedova", "MMT", 11);
            
// alert(std.getFullName()); // Meryem Mamedova
// alert(std instanceof Student); // true
// alert(std instanceof Person); // true


// Encapsulation Example

// class Student  
//   {  
//     constructor()  
//     {  
//        var name;  
//        var marks;  
//     }  
//         getName()  
//         {  
//           return this.name;  
//         }  
//       setName(name)  
//       {  
//         this.name=name;  
//       }  
        
//       getMarks()  
//       {  
//         return this.marks;  
//       }  
//     setMarks(marks)  
//     {  
//       this.marks=marks;  
//     }  
  
//     }  
//     var stud=new Student();  
//      stud.setName("John");  
//      stud.setMarks(80);  
//      document.writeln(stud.getName()+" "+stud.getMarks());  