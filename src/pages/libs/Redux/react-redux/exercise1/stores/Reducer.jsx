import { v4 as uuidv4 } from 'uuid';
import * as TYPES from './ActionType';

const initialState = {
    todo: [
      {
        id: uuidv4,
        task: 'Nguyễn Tiến Tài',
        completed: false,
      },
      {
        id: uuidv4,
        task: 'Nguyễn Bảo khang',
        completed: false,
      },
      {
        id: uuidv4,
        task: 'Trần Phi Hoàng',
        completed: false,
      },
      {
        id: uuidv4,
        task: ' Nguyễn Hữu Quyền ',
        completed: false,
      },
      {
        id: uuidv4,
        task: 'Bùi Huỳnh Quốc Trung',
        completed: false,
      },
    ],
  };

const TodoReducer = (state = initialState, action) => {
    const {type} = action
    switch (type) {
        case TYPES.ADD_TODO:
            //* lOGIC ADD TODO
            return {
                ...state
            }
        case TYPES.REMOVE_TODOC:
              //* lOGIC Remover TODO
              return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}
export default TodoReducer;