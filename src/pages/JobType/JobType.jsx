import { Carousel } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../..';
import { getArrJobByTypeDetailApi } from '../../redux/reducers/jobReducer';


const JobType = () => {
  const { arrJobByType } = useSelector((state) => state.jobReducer);
  const dispatch = useDispatch();
  // console.log(arrJobByType[0].tenLoaiCongViec);
  const newArrJob = (arrTypeJob) => {
    const rows = [];
    for (const i in arrTypeJob) {
      rows.push(arrTypeJob[i]);
    }
    return rows
  }
  const renderJob = (e) => {
    const action = getArrJobByTypeDetailApi(e);
    dispatch(action);
    history.push(`/joblist/`);
    // console.log(e)
  }
  return (
    <>
      <div className='banner' style={{ paddingTop: '150px' }}>
        <div className='container'>
          <div className='content text-center text-light'>
            <h3>Digital Marketing</h3>
            <p>Build your brand. Grow your business.</p>
            <a href='#' className='p-3 rounded-1 text-light border border-white'><i class="fa fa-play-circle"></i> How Fiverr Works</a>
          </div>
        </div>
      </div>
      <div className='caruosel'>
        <div className='container'>
          <h3>Most popular in Video & Animation</h3>
          <div className='content d-flex'>
            <div className='item d-flex '>
              <div className='img'><img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/9d0390ca87e4f946f4b4126d5cd15332-1653292063612/Social%20Media%20Videos%20icon%29.png' /></div>
              <p>Social Media Video <i class="fa fa-arrow-right"></i> </p>
            </div>
            <div className='item d-flex '>
              <div className='img'><img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670387/E-Commerce%20Product%20Videos.png' /></div>
              <p>E-Commerce Product Video <i class="fa fa-arrow-right"></i> </p>
            </div>
            <div className='item d-flex '>
              <div className='img'><img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670372/Logo%20Animation.png' /></div>
              <p>Logo Animation <i class="fa fa-arrow-right"></i> </p>
            </div>
            <div className='item d-flex '>
              <div className='img'><img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670391/Visual%20Effects.png' /></div>
              <p>Visual Effects <i class="fa fa-arrow-right"></i> </p>
            </div>

          </div>
        </div>
      </div>
      <div className='buckets-section mb-4'>
        <div className='container'>
          <div className='row'>
            <h2>{arrJobByType[0]?.tenLoaiCongViec}</h2>
            {newArrJob(arrJobByType[0]?.dsNhomChiTietLoai)?.map((item, index) => {
              return (

                <div key={index} className='col-lg-3 col-md-4 col-sm-6' >
                  <div className='img'> <img className='img1' src={item?.hinhAnh} />
                  </div>
                  <h3>{item?.tenNhom}</h3>
                  {newArrJob(item?.dsChiTietLoai).map((item1, index1) => {
                    return <>
                      <p style={{ cursor: 'pointer', color: '#404145' }} onClick={() => renderJob(item1?.id)} key={index1}>{item1?.tenChiTiet}</p>
                    </>
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='related_links mb-5'>
        <div className='container text-center'>
          <h3 className='mb-4'>Services Related To Video & Animation</h3>
          <div className='links'>
            <div>Stinger Transition</div>
            <div>Animated Alerts For Streamers</div>
            <div>Youtube Intro Maker</div>
            <div>Spokespersons Videos</div>
            <div> AMV</div>
            <div> Music Video Editing</div>
            <div>Jewelry Product Photography</div>
            <div>Medical 3d Animation</div>
            <div>Color Grading</div>
            <div>360 Product Photography</div>
            <div>Kids Photography Advertising</div>
            <div> Architecture 3D Animation</div>
            <div>Spanish Subtitles</div>
            <div>Gaming video editing</div>
            <div>Video Compositing</div>
            <div>Youtube Editor</div>
            <div>Cartoon Animation</div>
            <div>Video Production</div>
            <div>Lyric video</div>
            <div>Whiteboard Animation</div>
            <div>Hire Video Editors</div>
            <div>Music Video Editing</div>
            <div>Animated Video Ads</div>
            <div>Music Video Editing</div>
          </div>
        </div>
      </div>
    </>

  )
}

export default JobType