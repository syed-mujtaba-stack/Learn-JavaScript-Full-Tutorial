// Day 16: Object Methods & this Example
let student = {
  name: 'Sara',
  marks: 88,
  showInfo: function() {
    console.log('Name:', this.name + ',', 'Marks:', this.marks);
  }
};
student.showInfo();
