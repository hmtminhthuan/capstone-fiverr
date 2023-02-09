import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { history } from '../..';
import JobType from '../../pages/JobType/JobType';
import { getArrJobByTypeApi, getArrJobByTypeDetailApi, getMenuApi } from '../../redux/reducers/jobReducer';

const MenuHome = () => {
    const { typeJob } = useSelector(state => state.jobReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        const action = getMenuApi();
        dispatch(action);
    }, []);
    // console.log(typeJob)
    const newArrJob=(arrTypeJob)=>{
        const rows = [];
        for (const i in arrTypeJob) {
            rows.push(arrTypeJob[i]);
        }
        return rows
    }
    // const renderMenuDetail=(arrTypeJob)=>{
       
    //     return newArrJob(arrTypeJob).map((dsjop,index)=>{
    //         console.log(dsjop);
    //        })
    // }
    
    const renderJob=(e)=>{
        const action = getArrJobByTypeDetailApi(e);
        dispatch(action);
        history.push(`/joblist/`);
        // console.log(e)
    }
    const renderTypeJob=(e)=>{
        const action = getArrJobByTypeApi(e);
        dispatch(action);
        history.push(`/jobtype/`);
    }
    const renderMenu = (arrTypeJob) => {
        // const rows = [];
        // for (const i in arrTypeJob) {
        //     rows.push(arrTypeJob[i]);
        // }
        // console.log(arrTypeJob)
        return newArrJob(typeJob).map((item, index) => {
            // console.log(item)
            return <div key={index}  className="dropdown">
                <NavLink to='/jobtype' onClick={()=>renderTypeJob(item?.id)}  className="nut_dropdown">{item?.tenLoaiCongViec}</NavLink>
                <div class="noidung_dropdown d-flex">
                {
                    newArrJob(item?.dsNhomChiTietLoai)?.map((dsjob,index)=>{
                        // console.log(dsjob);
                        return <>
                        <div key={index} className='loaiCV'>
                        <p className=''>{dsjob?.tenNhom}</p>
                        {
                            newArrJob(dsjob?.dsChiTietLoai)?.map((job,index)=>{
                                // console.log(job);
                                return  <a style={ {cursor: 'pointer'}} key={index} onClick={()=>renderJob(job.id)} >{job?.tenChiTiet}</a>
                            })
                        }
                      
                </div>
                        </>
                    })
                
                }
                </div>
            </div>
        })
    }
    return (
        <div>{renderMenu(typeJob)}</div>
    )
}

export default MenuHome