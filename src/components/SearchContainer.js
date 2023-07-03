import { useDispatch, useSelector } from 'react-redux'
import { FormRow, FormRowSelect } from './';
import Wrapper from '../assets/wrappers/SearchContainer'
import { clearValuesSearch, handleChangeSearch } from '../store/jobs/allJobsSlice';
import { useMemo, useState } from 'react';

export const SearchContainer = () => {

  const [localSearch, setLocalSearch] = useState('');

  const { isLoading, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChangeSearch({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('')
    dispatch(clearValuesSearch());
  };

  const debounce = () => {
    let timeoutID;
    return(e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChangeSearch({name:e.target.name, value:e.target.value}))
      },850)

    }
  }

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <h4>Search Form</h4>
        <div className='form-center'>
        <FormRow
            type='text'
            labelText='search'
            name='search'
            value={localSearch}
            onInputChange={optimizedDebounce}
          />
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            status={searchStatus}
            onHandleChange={handleSearch}
            listOptions={['all', ...statusOptions]}
          />

         <FormRowSelect
            labelText='type'
            name='searchType'
            status={searchType}
            onHandleChange={handleSearch}
            listOptions={['all', ...jobTypeOptions]}
          />
          
          <FormRowSelect
            labelText='sort'
            name='sort'
            status={sort}
            onHandleChange={handleSearch}
            listOptions={['all', ...sortOptions]}
          />

            <button type='button' className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit} >
              clear filters
            </button>
        </div>
      </form>
    </Wrapper>
  )
}
