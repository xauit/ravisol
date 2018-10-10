import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  result = '';
  todoArray;
  textVal;
  finalResult='';
  constructor(private http: HttpClient){
  }

  private sendtoDB(value): void {
  	var input = value.todo;
  	console.log(input);
  	this.http.post(`/api/saveToDos`,input).subscribe(response => {console.log('database result saved',response);this.getTodos();});
  	this.getTodos();
  }
  
  deleteItem(todo){
   console.log(todo);
   this.http.post(`/api/deleteToDos`,todo).subscribe(response => {console.log('item removed from database',response);this.getTodos();});
   
   /*for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.todoArray[i]){
     this.todoArray.splice(i,1)
    }
   }*/
  }
  
  @ViewChild("todo") nameField: ElementRef;
  updateItem(todo){
  	this.deleteItem(todo.Id);
  	this.textVal = todo.listValue;
  	this.nameField.nativeElement.focus();
  }
  
  todoSubmit(value:any){
     if(value!==""){
    /*this.todoArray.push(value.todo)*/
     this.sendtoDB(value);
    }else{
      alert('Field required **')
    }
    
  }
	getTodos(){
		this.http.get(`/api/getAll`).subscribe(response => this.todoArray = response);
		console.log('gettodos called');
	}
	ngOnInit(){
		console.log("on page init");
		this.getTodos();
	}
	
	loginbtn(){
		this.http.get(`/api/login`).subscribe(response => this.todoArray = response);
	}
}