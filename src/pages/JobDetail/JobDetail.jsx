import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCommentByIdJobApi, getJobDetailApi } from '../../redux/reducers/jobReducer';

const JobDetail = () => {
  const { JobDetail, comment } = useSelector((state) => state.jobReducer);
  console.log(JobDetail[0]?.tenChiTietLoai);
  console.log(comment[0]);
  const param = useParams();
  console.log(param.id);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getJobDetailApi(param.id);
    dispatch(action);
  }, [param.id])
  useEffect(() => {
    const action = getCommentByIdJobApi(param.id);
    dispatch(action);
  }, [param.id])
  const renderStar = (numberStar) => {
    let x = ""
    for (let i = 0; i < numberStar; i++) {
      x += "★"
    }

    return <span className='star'>{x}</span>
  }
  return (
    <div className='jobDetail' style={{ paddingTop: '150px', paddingBottom: '50px' }}>
      <div className='container'>
        <div className='content d-flex'>
          <div className='left'>
            <div className='text-primary'>{JobDetail[0]?.tenLoaiCongViec}<span> <i class="fa fa-angle-right"> </i></span> {JobDetail[0]?.tenNhomChiTietLoai}<span> <i class="fa fa-angle-right"></i> </span>{JobDetail[0]?.tenChiTietLoai}</div>
            <h3 className='nameJob mt-4 mb-3'>{JobDetail[0]?.congViec?.tenCongViec}</h3>
            <div className='info'>
              <div className='avatar'><img src={JobDetail[0]?.avatar} /></div>
              <span className='name_nguoiTao'>{JobDetail[0]?.tenNguoiTao}</span>
              <span className='level'>Top Rated Seller |</span>
              {renderStar(JobDetail[0]?.congViec?.saoCongViec)}
              <span className='star'>{JobDetail[0]?.congViec?.saoCongViec}</span>
              <span>(<span>{JobDetail[0]?.congViec?.danhGia}</span>)</span>
            </div>
            <div className='img'>
              <img src={JobDetail[0]?.congViec?.hinhAnh} />
            </div>
            <div className='introduceJob'>
              <h3 className='fw-bold mt-4 mb-2 '>About This Gig</h3>
              <p className=' moTa'>{JobDetail[0]?.congViec?.moTa}</p>
              <p className='moTa'>{JobDetail[0]?.congViec?.moTaNgan}</p>
            </div>
            <div className='seller'>
              <h3 className='fw-bold mt-4 mb-2 '>About The Seller</h3>
              <div className='row'>
                <div className='img p-0'><img className='w-100' src={JobDetail[0]?.avatar} /></div>
                <div className='introSeller col-4'>
                  <div className='name_nguoiTao'>{JobDetail[0]?.tenNguoiTao}</div>
                  <div className='mb-4'>
                    {renderStar(JobDetail[0]?.congViec?.saoCongViec)}
                    <span className='star'>{JobDetail[0]?.congViec?.saoCongViec}</span>
                    <span >(<span>{JobDetail[0]?.congViec?.danhGia}</span>)</span></div>
                  <a className='btnContact ' href='#'> Contact Me</a>
                </div>
              </div>
            </div>
            <div className='FAQ'>
              <h3 className='fw-bold mt-4 mb-2'>FQA</h3>
              <div className='d-flex justify-content-between mt-3'>
                <p className='m-0'>Do you use Google Translate (or any other type of translation software)?</p>
                <i class="fa fa-angle-down"></i>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between mt-3'>
                <p className='m-0'>Do you provide revisions?</p>
                <i class="fa fa-angle-down"></i>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between mt-3'>
                <p className='m-0'>Can I get a sample of your work?</p>
                <i class="fa fa-angle-down"></i>
              </div>
              <hr></hr>
              <div className='d-flex justify-content-between mt-3'>
                <p className='m-0'>Are you a native Vietnamese speaker?</p>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
            <div className='reviews'>
              <h3 className='fw-bold mt-4 mb-2 '>Reviews</h3>
              <p><span className='fw-bold'>82 reviews for this Gig</span><span className='fw-bold text-warning'>★★★★★5.0</span></p>
              <div className='d-flex'>
                <div className=' w-50'>
                  <div className='d-flex'><span className='fw-bold'>5 stars </span><div className='mt-2' style={{ width: '300px', background: 'yellow', height: '10px', borderRadius: '50px' }}></div> (80)</div>
                  <div className='d-flex'><span className='fw-bold'>4 stars </span><div className='mt-2' style={{ width: '300px', background: '#404145', height: '10px', borderRadius: '50px' }}></div> (0)</div>
                  <div className='d-flex'><span className='fw-bold'>3 stars </span><div className='mt-2' style={{ width: '300px', background: '#404145', height: '10px', borderRadius: '50px' }}></div> (0)</div>
                  <div className='d-flex'><span className='fw-bold'>2 stars </span><div className='mt-2' style={{ width: '300px', background: '#404145', height: '10px', borderRadius: '50px' }}></div> (0)</div>
                  <div className='d-flex'><span className='fw-bold'>1 stars </span><div className='mt-2' style={{ width: '300px', background: '#404145', height: '10px', borderRadius: '50px' }}></div> (0)</div>
                </div>
                <div className='w-50'>
                  <h3 className='fw-bold fs-5'>Rating Breakdown</h3>
                  <div className='d-flex'>
                    <div className='w-75'>Seller communication level</div>
                    <div className='w-25'><span className='fw-bold text-warning'>★5.0</span></div>
                  </div>
                  <div className='d-flex'>
                    <div className='w-75'>Recommend to a friend</div>
                    <div className='w-25'><span className='fw-bold text-warning'>★5.0</span></div>
                  </div>
                  <div className='d-flex'>
                    <div className='w-75'>Service as described</div>
                    <div className='w-25'><span className='fw-bold text-warning'>★5.0</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='comments '>
              <h3 className='fw-bold mt-4 mb-5'>Comments</h3>
              {comment?.map((item, index) => {
                return <>
                  <div key={index} className='row'>
                    <div className='img p-0'><img className='w-100' src={`https://i.pravatar.cc/150?img=${index}`} /></div>
                    <div className='introComment col-4'>
                      <div className='name_nguoiComment fw-bold'>{item.tenNguoiBinhLuan}</div>
                      <div className='mb-2 text-warning'>
                        {renderStar(item.saoBinhLuan)}
                        <span className='star'>{item.saoBinhLuan} </span><span className='text-dark'>| {item.ngayBinhLuan}</span>
                      </div>
                      <div className='mb-2'>{item.noiDung}</div>
                      <div > <span>HelpFull?   <i class="fa fa-thumbs-up"></i> Yes <i class="fa fa-thumbs-down"></i> No</span></div>
                    </div>
                    <hr className='m-4'></hr>
                  </div>
                </>
              })

              }

            </div>
          </div>
          <div className='right'>
            <div className='tableRight'>
              <div className='header-table d-flex'>
                <div className=''>Basic</div>
                <div className=''>Standard</div>
                <div>Premlum</div>
              </div>
              <div className='body-table'>
                <div className='row'>
                  <div className='col text-start'>Standard</div><div className='col text-end'>${JobDetail[0]?.congViec?.giaTien}</div>
                </div>
                <p className='mb-4 text'>Create a simle web application for your bussiness</p>
                <p className='mota'> {JobDetail[0]?.congViec?.moTaNgan}</p>
                <div className='btnContinue'>
                  Continue(<span>${JobDetail[0]?.congViec?.giaTien}</span>)
                </div>
                <div className='linkfooter'>Compare Packages</div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default JobDetail