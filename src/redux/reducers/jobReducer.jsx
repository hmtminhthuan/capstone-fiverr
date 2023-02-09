//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { history } from '../../index';
import { TOKEN_CYBERSOFT, ACCESS_TOKEN, getStore, getStoreJson, http, saveStore, saveStoreJson, USER_LOGIN } from '../../util/config';

const initialState = {
  typeJob: {},
  arrJobByName: {},
  keySearch: "",
  arrJobByType: {},
  JobDetail: [],
  comment: []
}
const jobReducer = createSlice({
  name: 'jobReducer',
  initialState,
  reducers: {
    getTypeJobAction: (state, action) => {
      state.typeJob = action.payload;
    },
    getArrJobByNameAction: (state, action) => {
      state.arrJobByName = action.payload;
    },
    getArrJobByTypeDetailAction: (state, action) => {
      state.arrJobByName = action.payload;
    },
    getArrJobByTypeAction: (state, action) => {
      state.arrJobByType = action.payload;
    },
    getJobDetailAction: (state, action) => {
      state.JobDetail = action.payload;
    },
    getCommentByIdJobAction: (state, action) => {
      state.comment = action.payload;
    }
  }
});
export const { getCommentByIdJobAction,getJobDetailAction, getArrJobByTypeAction, getTypeJobAction, getArrJobByNameAction, getArrJobByTypeDetailAction } = jobReducer.actions
export default jobReducer.reducer
//lấy menu loai cv
export const getMenuApi = (typeJob) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-menu-loai-cong-viec",
        method: "GET",
        headers: {
          tokenCybersoft: TOKEN_CYBERSOFT,
        }
      });
      //   Lấy dữ liệu về đưa lên redux
      const action = getTypeJobAction(result.data.content);
      //console.log(result.data.content)
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
}
// lay-cong-viec-theo-chi-tiet-loai
export const getArrJobByTypeDetailApi = (key) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${key}`,
        method: "GET",
        headers: {
          tokenCybersoft: TOKEN_CYBERSOFT,
        }
      });
      //   Lấy dữ liệu về đưa lên redux
      const action = getArrJobByTypeDetailAction(result.data.content);
      // console.log(result.data.content)
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
}
export const getArrJobByNameApi = (keySearch) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keySearch}`,
        method: "GET",
        headers: {
          tokenCybersoft: TOKEN_CYBERSOFT,
        }
      });
      //   Lấy dữ liệu về đưa lên redux
      const action = getArrJobByNameAction(result.data.content);
      //console.log(result.data.content)
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
}
//lay chi tiet loai cong viec
export const getArrJobByTypeApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`,
        method: "GET",
        headers: {
          tokenCybersoft: TOKEN_CYBERSOFT,
        }
      });
      //   Lấy dữ liệu về đưa lên redux
      const action = getArrJobByTypeAction(result.data.content);
      //console.log(result.data.content)
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
}
//lay chi tiet cong viec
export const getJobDetailApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-chi-tiet/${id}`,
        method: "GET",
        headers: {
          tokenCybersoft: TOKEN_CYBERSOFT,
        }
      });
      //   Lấy dữ liệu về đưa lên redux
      const action = getJobDetailAction(result.data.content);
      console.log(result.data.content)
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
}
//Lay comment
export const getCommentByIdJobApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`,
        method: "GET",
        headers: {
          tokenCybersoft: TOKEN_CYBERSOFT,
        }
      });
      //   Lấy dữ liệu về đưa lên redux
      const action = getCommentByIdJobAction(result.data.content);
      console.log(result.data.content)
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
}