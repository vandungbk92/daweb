import React, { Fragment } from 'react';
import HINH_VUONG from '../../asset/Image/hinh_vuong.jpg';
import TIANSHU_LIU from '../../asset/Image/tianshu-liu.png';
import MASK_GROUP_16 from '../../asset/Image/MaskGroup16.png';
import MASK_GROUP_8 from '../../asset/Image/MaskGroup8.png';
import GROUP_84 from '../../asset/Image/Group84.svg';
import GROUP_85 from '../../asset/Image/Group85.svg';
import GROUP_86 from '../../asset/Image/Group86.svg';
import VACUUM_CLEANER from '../../asset/Image/vacuum-cleaner.svg';

export function NoiDungChinh() {
  return (
    <div className='product-container'>
      <div className='product__background--red'/>
      <img className='product__background--dot' src={HINH_VUONG} alt={''}/>
      <div className='product__info'>
        <img src={TIANSHU_LIU} alt={''}/>
        <div className='product__info__content'>
          <div className='title--jp clearfix'>
            <div className='title__text'>{'快適な環境を提供する'}</div>
            <div className='title__background'/>
          </div>
          <div className='title--vi'>
            <span>{'CÔNG NGHỆ NHẬT BẢN'}</span><br/>
            <span>{'CHO MỘT MÔI TRƯỜNG HOÀN HẢO'}</span>
          </div>
          <div className='content'>
            {'Tiền thân là công ty cổ phần dịch vụ Maxxclean Việt Nam thành lập năm 2013 và đã có những thành tựu nhất định trong lĩnh vực. Vào năm 2019 sau khi thỏa thuận thống nhất giữa 2 bên thì công ty Birumen Kagoshima đã đầu tư và mua lại 70% cổ phần với mục đích bằng kinh nghiệm năng lực và tư duy của người Nhật sẽ sớm thúc đẩy sự phát triển của công ty trong lĩnh vực. (Cuối năm 2019 công ty chính thức đổi tên thành Công ty cổ phần quản lý tòa nhà Việt Nam)'}
          </div>

          <button className='btn-more'>{'XEM THÊM'}</button>
        </div>
      </div>

      <div className='product__content'>
        <img className='image__right' src={MASK_GROUP_16} alt={''}/>
        <img className='image__bottom' src={MASK_GROUP_8} alt={''}/>
        <div className='product__legend'><span>{'DỊCH VỤ CỦA CHÚNG TÔI'}</span></div>

        <div className='product__detail'>
          <div className='clearfix'>
            <div className='product__item'>
              <div className='title'>
                <img className='title__image' src={GROUP_84} alt={''}/>
                <span className='title__text'>{'Diệt côn trùng'}</span>
              </div>
              <div
                className='content'>{'Kiểm soát phòng ngừa côn trùng là một thành phần thiết yếu của quá trình đang bảo trì tài sản, và một đều không may là thường xuyên bị bỏ qua.'}</div>
            </div>
            <div className='product__item'>
              <div className='title'>
                <img className='title__image' src={GROUP_85} alt={''}/>
                <span className='title__text'>{'Quản lý vận hành'}</span>
              </div>
              <div
                className='content'>{'Chúng tôi luôn nỗ lực phát huy công năng tối đa thông qua việc quản lý vận hành chính xác, ổn định các thiết bị phòng cháy, chữa cháy, thiết bị điều hòa.'}</div>
            </div>
          </div>
          <div className='clearfix'>
            <div className='product__item'>
              <div className='title'>
                <img className='title__image' src={GROUP_86} alt={''}/>
                <span className='title__text'>{'Bảo vệ, camera an ninh'}</span>
              </div>
              <div
                className='content'>{'Chúng tôi luôn luôn thực hiện nghiêm khắc để bảo toàn tài sản thông qua việc giám sát bên trong, bên ngoài tòa nhà bằng hệ thống camera an ninh.'}</div>
            </div>
            <div className='product__item'>
              <div className='title'>
                <img className='title__image' src={VACUUM_CLEANER} alt={''}/>
                <span className='title__text'>{'Vệ sinh công nghiệp'}</span>
              </div>
              <div
                className='content'>{'Để duy trì vệ sinh, chăm sóc sàn nhà, duy trì mỹ quan bên trong tòa nhà thì có công việc tiến hành hàng ngày và có công việc tiến hành định kỳ.'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='product__bottom'>
        <div className='product__bottom__content'>
        <div className='content__item'>
          <div className='content__item__number'>{'50'}</div>
          <div className='content__item__text'>{'Trên 50 năm kinh nghiệm'}</div>
        </div>
        <div className='content__item'>
          <div className='content__item__number'>{'500'}</div>
          <div className='content__item__text'>{'Hơn 500 cán bộ công nhân viên'}</div>
          <div className='content__item__text'>{'với tay nghề nhiệt huyết'}</div>
        </div>
        <div className='content__item'>
          <div className='content__item__number'>{'7'}</div>
          <div className='content__item__text'>{'7 lĩnh vực chủ chốt'}</div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default NoiDungChinh;
