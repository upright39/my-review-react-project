import React, { useState } from 'react'
import mydata from './mydata'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = mydata[index]

  const myRightIcon = () => {
    setIndex((item) => {
      let righticon = item + 1
      return myFunction(righticon)
    })
  }

  const myLeftIcon = () => {
    setIndex((nextitem) => {
      let lefticon = nextitem - 1
      return myFunction(lefticon)
    })
  }

  const myFunction = (myitem) => {
    if (myitem > mydata.length - 1) {
      return 0
    }

    if (myitem < 0) {
      return mydata.length - 1
    }
    return myitem
  }

  const functionRandom = () => {
    let myinfo = Math.floor(Math.random() * mydata.length)

    if (myinfo === index) {
      myinfo = index + 1
    }
    setIndex(myFunction(myinfo))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={myLeftIcon}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={myRightIcon}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={functionRandom}>
        ramdom btn
      </button>
    </article>
  )
}

export default Review
