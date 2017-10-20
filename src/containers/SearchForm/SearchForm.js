import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchLine } from '../../actions/actions';

const mapStateToProps = (state) => {
    return {
        lines: state.lines
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearchLine: (display) => {
          dispatch(searchLine(display));
        }
    }
};

const LineSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default LineSearchContainer;