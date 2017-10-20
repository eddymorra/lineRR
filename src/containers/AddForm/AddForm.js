import { connect } from 'react-redux';
import AddForm from '../../components/AddForm/AddForm';
import { addLine } from '../../actions/actions';

const mapStateToProps = (state) => {
    return {
        line: state.line
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddLine: (line) => {
          dispatch(addLine(line));
        }
    }
};

const LineAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);

export default LineAddContainer;
