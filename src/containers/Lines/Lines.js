import { connect } from 'react-redux';
import Lines from '../../components/Lines/Lines';
import { deleteLine, editLine } from '../../actions/actions';

const mapStateToProps = (state) => {
    return {
        lines: state.lines,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLineDelete: (id) => {
            dispatch(deleteLine(id));
        },
        onLineEdit: (id, name) => {
            dispatch(editLine(id, name));
        }
    }
};

const LinesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lines);

export default LinesContainer;
