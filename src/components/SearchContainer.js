import { useDispatch, useSelector } from 'react-redux'
import { FormRow, FormRowSelect } from './';
import Wrapper from '../assets/wrappers/SearchContainer'
import { clearValuesSearch, handleChangeSearch } from '../store/jobs/allJobsSlice';

export const SearchContainer = () => {

  const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChangeSearch({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearValuesSearch());
  };


  return (
    <Wrapper>
      <form className='form'>
        <h4>Search Form</h4>
        <div className='form-center'>
        <FormRow
            type='text'
            labelText='search'
            name='search'
            value={search}
            onInputChange={handleSearch}
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
