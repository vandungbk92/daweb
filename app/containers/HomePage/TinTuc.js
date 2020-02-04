import React from 'react';

export function TinTuc() {
  return (
    <div className="home-page-tin-tuc">
      <div className="">
        <div style={{ textAlign: 'center', margin: '30px' }} className="w-100">
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
          <tbody>
          <tr className="tr-css bg-tr">
            <td className="font-time-1">
              <div className="font-time-left">Thursday, 14:09 Date 14/12/2017</div>
            </td>
            <td className="font-content-1">
              Gặp gỡ với Giám Đốc điều hành của THE GENERAL <br/>DEPT. OF INT'L COOPERATION
            </td>
            <td className="btn-continous">
              <span className="btn-read-more">ĐỌC TIẾP</span>
            </td>
          </tr>
          <tr className="tr-css">
            <td className="font-time-2">
              <div className="font-time-left">Thursday, 14:09 Date 14/12/2017</div>
            </td>
            <td className="font-content-2">
              Các công ty quản lý tòa nhà buộc phải cải thiện
            </td>
            <td className="btn-continous">
              <span className="btn-read-more">ĐỌC TIẾP</span>
            </td>
          </tr>
          <tr className="tr-css">
            <td className="font-time-2">
              <div className="font-time-left">Thursday, 14:09 Date 14/12/2017</div>
            </td>
            <td className="font-content-2">
              THAM QUAN VÀ LÀM VIỆC TẠI DOANH NGHIỆP NHẬT BẢN
            </td>
            <td className="btn-continous">
              <span className="btn-read-more">ĐỌC TIẾP</span>
            </td>
          </tr>
          <tr className="tr-css">
            <td className="font-time-2">
              <div className="font-time-left">Thursday, 14:09 Date 14/12/2017</div>
            </td>
            <td className="font-content-2">
              GẶP GỠ VỚI CÔNG TY AN NINH VIỆT NAM
            </td>
            <td className="btn-continous">
              <span className="btn-read-more">ĐỌC TIẾP</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TinTuc;
