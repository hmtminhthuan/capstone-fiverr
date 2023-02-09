import React from 'react'
import { NavLink } from 'react-router-dom'

const JobItem = (arrJobByName,index) => {
  return (
    <NavLink to={`/jobdetail/${arrJobByName.id}`} key={index} className='mt-4 col-lg-3 col-md-4 col-sm-6'>
          <div className='img '><img className='' src={arrJobByName.congViec?.hinhAnh} /></div>
          <div className='info'>
            <div className="infoPeople p-2 d-flex justify-content-left">
              <div className='avatar '><img className='w-100' src={arrJobByName.avatar} /></div>
              <div className='name'>{arrJobByName.tenNguoiTao}</div>
            </div>
            <div className='nameJob p-2'>{arrJobByName.congViec?.tenCongViec}</div>
            <div className='star p-2'><i class="fa fa-star">{arrJobByName.congViec?.saoCongViec}</i> <span>({arrJobByName?.congViec?.danhGia})</span> </div>
            <div className='heart_price d-flex align-item-center p-2 justify-content-between'>
            <span className='heart'><i class="fa fa-heart"></i></span>
            <div className='price'>STARTING AT <span>${arrJobByName.congViec?.giaTien}</span> </div>
            </div>
          </div>  
        </NavLink>
  )
}

export default JobItem