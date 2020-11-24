import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
courses = [
{
	id:1,
	title:"test",
	description:"test obj",
	course_image:"https://img-a.udemycdn.com/course/480x270/567828_67d0.jpg?0WPbPEZ1lvrMPhYAey7gsK-3WBtHwXNfseLfhis0EJ15niGGGkx1U3s1-fn6oirH_o2tO9kEy_g8vW-NuVnz21byBPTq4CWTWO3cSHxjE4TA1L2BZb9eFF2WpHUL"
},
{
	id:2,
	title:"test 2",
	description:"test obj",
	course_image:"https://img-a.udemycdn.com/course/480x270/567828_67d0.jpg?0WPbPEZ1lvrMPhYAey7gsK-3WBtHwXNfseLfhis0EJ15niGGGkx1U3s1-fn6oirH_o2tO9kEy_g8vW-NuVnz21byBPTq4CWTWO3cSHxjE4TA1L2BZb9eFF2WpHUL"
},
{
	id:3,
	title:"test 3",
	description:"test obj",
	course_image:"https://img-a.udemycdn.com/course/480x270/567828_67d0.jpg?0WPbPEZ1lvrMPhYAey7gsK-3WBtHwXNfseLfhis0EJ15niGGGkx1U3s1-fn6oirH_o2tO9kEy_g8vW-NuVnz21byBPTq4CWTWO3cSHxjE4TA1L2BZb9eFF2WpHUL"
}]
  constructor(public router:Router) {}

  cardPressed(course){
  	console.log(course)
  	this.router.navigate(['/detail/'+course.id])
  }

}
