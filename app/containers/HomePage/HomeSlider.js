import React from 'react';
import CenteredSection from './CenteredSection';

export function HomeSlider() {
  return (
    <div style={{ width: '70%', margin: 'auto' }}>
      <div style={{ textAlign: 'center', margin: '30px' }}>
        <span
          style={{
            color: '#FFFFFF',
            background: '#221F64',
            fontSize: '32px',
            padding: '5px 10px',
          }}
        >
          TIN TỨC
        </span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tr className="tr-css bg-tr">
          <td className="font-time-1">Thursday, 14:09 Date 14/12/2017</td>
          <td className="font-content-1">
            Gặp gỡ với Giám ĐốcGặp gỡ với Giám ĐốcGặp gỡ với Giám Đốc điều hành
            của THE GENERAL DEPT. OF INT'L COOPERATION
          </td>
          <td style={{ width: '12%' }}>
            <span className="btn-read-more">ĐỌC TIẾP</span>
          </td>
        </tr>
        <tr className="tr-css">
          <td className="font-time-2">Thursday, 14:09 Date 14/12/2017</td>
          <td className="font-content-2">
            Các công ty quản lý tòa nhà buộc phải cải thiện
          </td>
          <td style={{ width: '12%' }}>
            <span className="btn-read-more">ĐỌC TIẾP</span>
          </td>
        </tr>
        <tr className="tr-css">
          <td className="font-time-2">Thursday, 14:09 Date 14/12/2017</td>
          <td className="font-content-2">
            THAM QUAN VÀ LÀM VIỆC TẠI DOANH NGHIỆP NHẬT BẢN
          </td>
          <td style={{ width: '12%' }}>
            <span className="btn-read-more">ĐỌC TIẾP</span>
          </td>
        </tr>
        <tr className="tr-css">
          <td className="font-time-2">Thursday, 14:09 Date 14/12/2017</td>
          <td className="font-content-2">
            GẶP GỠ VỚI CÔNG TY AN NINH VIỆT NAM
          </td>
          <td style={{ width: '12%' }}>
            <span className="btn-read-more">ĐỌC TIẾP</span>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default HomeSlider;
