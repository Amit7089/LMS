import React from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext';
import  { useContext } from 'react';
import { Link } from 'react-router-dom';


const CourseCard = ({course}) => {
  const { currency,calculateAverageRating} = useContext(AppContext);
  return (
    <Link to={`/course-detail/${course._id}`} onClick={() => scrollTo(0, 0)} className="border border-gray-500/300 pb-6 overflow-hidden rounded-lg">

      <img className='w-full' src={course.courseThumbnail} alt="" />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
        <p className='flex items-center space-x-2'>{course.educator.name}</p>
        <div className='flex'>
          <p>{calculateAverageRating(course)}</p>
          <div className='flex mt-1 space-x-1 ml-2 mr-2'>
            {[...Array(5)].map((_, i) => (<img key={i} src={i <Math.floor(calculateAverageRating(course)) ? assets.star : assets.star_blank} alt="star" className='w-3.5 h-3.5' />))}
          </div>
          <p className='text-gray-500'>{course.courseRatings.length}</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCard