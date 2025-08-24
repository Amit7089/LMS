import React, {  useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import Loading from '../../components/students/Loading'
import { assets } from '../../assets/assets'

const CourseDetails = () => {
    const { id } = useParams()

  const [courseData ,setCourseData] = useState(null)

 const { allcourses,calculateAverageRating } = useContext(AppContext)


  const fetchCourseData = async() => {
    const findCourse = allcourses.find(course => course._id === id)
    setCourseData(findCourse);
  }

  useEffect(() => {
    fetchCourseData();
  },[])

  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start
      justify-between md:px-36 px-8  md:pt-30 pt-20 text-left'>

        <div className='absolute  left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyban-100/70'>
          
          {/* Course Details left column */}
          <div className='max-w-xl z-10 text-gray-500 mt-15 ml-10 '> 
            <h1 className='md:text-course-details-heading-large text-4xl
            text-course-details-heading-small font-semibold text-gray-800'>{courseData.courseTitle}</h1>
            <p className='pt-5 md:text-base text-sm' dangerouslySetInnerHTML={{__html : courseData.courseDescription.slice(0,200)}}></p>

            {/* Review Ratings */}
            <div className='flex items-center space-x-2'>
                      <div className='flex'>
                        <p>{calculateAverageRating(courseData)}</p>
                        <div className='flex mt-1 space-x-1 ml-2 mr-2'>
                          {[...Array(5)].map((_, i) => (<img key={i} src={i <Math.floor(calculateAverageRating(courseData)) ? assets.star : assets.star_blank} alt="star" className='w-3.5 h-3.5' />))}
                        </div>
                        <p className='text-gray-500'>{courseData.courseRatings.length}</p>
                      </div>
            </div>
          </div>


          {/* Course Details right column */}
          <div></div>
        </div>
        
      </div>

    </> 
  ) : <Loading/>
}

export default CourseDetails