// Constructor function for Student details
function Student(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks;
  
    // Function method to print top three subject names based on marks
    this.printTop3Subjects = function () {
      // Create an array of subject names
      var subjects = [" Science",
        "S.Sc",          
        "Maths",          
        "English",          
        "Hindi "
    ];
  
      // Sort subjects based on marks in descending order
      var sortedSubjects = subjects.sort(function (a, b) {
        return marks[b] - marks[a];
      });
  
      // Print the top three subjects
      console.log('Top Three Subjects:');
      for (var i = 0; i < 3; i++) {
        console.log(sortedSubjects[i]);
      }
    };
  
    // Function method to print the report card of a student
    this.printReportCard = function () {
      console.log('Report Card for ' + this.name);
      console.log('Roll Number: ' + this.roll_no);
      console.log('Class: ' + this.class);
      console.log('Section: ' + this.section);
      console.log('Marks:');
      for (var subject in this.marks_of_5_subjects) {
        console.log(subject + ': ' + this.marks_of_5_subjects[subject]);
      }
    };
  }
  
  // Example usage:
  var student1 = new Student('Huzaifa', '16', 'X', 'A', {
    Science  :73,
    'S.Sc'    : 79,     
    Maths    : 75,      
    English  :80,          
    Hindi    :67 
  });
  
  // Call the methods
  student1.printTop3Subjects();
  student1.printReportCard();
  