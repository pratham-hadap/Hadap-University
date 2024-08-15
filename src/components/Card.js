import React from 'react'
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";

export const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) => prev.filter( (currentId) => currentId !== course.id))
            toast.warning("Like Removed")
        }
        else{
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likedCourses.lenght === 0){
                setLikedCourses(course.id)
            }
            else{
                //non-empty pehle se
                setLikedCourses( (prev)=> [...prev, course.id])
                toast.success("Liked Successfully")
            }
        }
    }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden '>
        <div className='relative' >
            <img src={course.image.url} alt='CoursesPhoto' ></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
              <button onClick={clickHandler}>
                {
                    likedCourses.includes(course.id) ? <FcLike /> : <FcLikePlaceholder />
                }
              </button>
            </div>
        </div>
        <div className='p-4'>
           <div className="text-white font-semibold text-lg leading-6">{course.title}</div>
           <div className='mt-2 text-white'>{course.description}</div>
        </div>
    </div>
  )
}
