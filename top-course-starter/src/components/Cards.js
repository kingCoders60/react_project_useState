import React from 'react'
import Card from './Card';
const Cards = ({courses}) =>{
    let allCourses = [];

    //it returns you a list of all courses received from api resource
    const getCourses = () =>{
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(courses);
            })
        })
        return allCourses;
    }

    return (
        <div>
        {
            getCourses.map((course)=>{
                    return <Card key = {course.id} course={course}/>
                })
    
        }
        </div>
    )
}
export default Cards