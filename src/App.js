import "./App.css";
import { SignupForm } from "./getIP";
import { useState } from "react";
import React from "react";

function App() {
  const directTelegram = () => {
    window.open("https://t.me/+qtoHVgMk2tE4ZjFl", "_blank");
  };
  const [ip, setIp] = useState("");
  const childToParent = (childdata) => {
    setIp(childdata);
    console.log(childdata + "childdata");
    console.log(ip.ipv4 + "ipv4 from parent");
  };

  return (
    <div className="main container text-center">
      <strong>Lưu ý:</strong> Mỗi thiết bị sẽ chỉ vượt được 1 link/ lần/ ngày
      <p />
      <SignupForm childToParent={childToParent} />
      <hr />
      <div className="row text-center ">
        <div className="col-md-3 col-sm-6 col-6 py-1">
          <a
            href="https://dilink.net/r60l"
            target="_blank"
            rel="noreferrer"
            className="btn btn-mod btn-border btn-medium animation-one"
          >
            <span>Dilink - 300đ</span>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 col-6 py-1">
          <a
            href="https://traffic123.net/thBsx"
            target="_blank"
            rel="noreferrer"
            className="btn btn-mod btn-border btn-medium animation-one"
          >
            <span>Traffic123 - 300đ</span>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 col-6 py-1">
          <a
            href="https://beelink.life/a1t1rw"
            target="_blank"
            rel="noreferrer"
            className="btn btn-mod btn-border btn-medium animation-one"
          >
            <span>Beelink - 300đ</span>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 col-6 py-1">
          <a
            href="https://my.trafficuser.com/sDii"
            target="_blank"
            rel="noreferrer"
            className="btn btn-mod btn-border btn-medium animation-one"
          >
            <span>Traffic User - 200đ</span>
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="thongbao">
        <div className="container">
          <h3>Thông báo :</h3>
          <p>
            Làm xong nhiệm vụ hãy chụp màn hình gửi page để Admin check. Khi
            nhận Nhiệm vụ mà chuyển hướng ngay tức là hết Nhiệm vụ.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="container text-center">
        <button className="btn-send btn-primary" onClick={directTelegram}>
          Send to Telegram
        </button>
      </div>
      
    </div>
  );
}

export default App;
