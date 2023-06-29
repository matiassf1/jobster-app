import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { changePage } from '../store/jobs';

export const PageBtnContainer = () => {

  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <button
        onClick={() => prevPage()}
        className='prev-btn'>
        <FaChevronLeft />
        prev
      </button>
      <div className='btn-container'>
        {
          pages.map((pageNumber) => (
            <button
              type='button'
              key={pageNumber}
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          ))
        }
      </div>
      <button
        onClick={() => nextPage()}
        className='next-btn'>
        <FaChevronRight />
        next
      </button>
    </Wrapper>
  )
}
