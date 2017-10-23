import { connect } from 'react-redux';
import Lines from '../../components/Lines/Lines';
import { deleteLine, editLine } from '../../actions/actions';

const getVisibleLines = (lines, search) => {
    return lines.filter(l => l.name.toLowerCase().includes(search.toLowerCase()));
};

const mapStateToProps = (state) => {
    return {
        lines: getVisibleLines(state.lines, state.search)
    };
};

const mapDispatchToProps = (dispatch) => {
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
