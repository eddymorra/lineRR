import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchLine } from '../../actions/actions';

const mapStateToProps = (state) => {
    return {
        lines: state.lines
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchLine: (search) => {
          dispatch(searchLine(search));
        }
    }
};

const LineSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default LineSearchContainer;