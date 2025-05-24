import { useState } from "react";
import "./App.css";
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>RO`YXATDAN O`TISH</h2>
        <p>Pastdagi formani to`ldirishingiz bilan yopiq kanalga qo`shilasiz!</p>

        <form>
          <div className="form-group">
            <input type="text" placeholder="Ismingizni kiriting" required />
          </div>

          <div className="form-group phone-input-container">
            <div className="phone-input">
              <span className="prefix">+998</span>
  <input 
    type="tel"
    placeholder="90 123 45 67"
    maxLength="9"
    pattern="[0-9]*"
    onKeyPress={(e) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    }}
    onChange={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }}
    required 
  />
            </div>
          </div>

          <button type="submit" className="submit-btn register-btn">
            RO`YXATDAN O`TISH
          </button>
        </form>
      </div>
    </div>
  );
};

function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container">
      <div className="date-time">
        <div className="date">
          <svg
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={""}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.86181 2C6.37031 2 6.78255 2.40834 6.78255 2.91203V4.93994C10.254 4.63371 13.7461 4.63371 17.2175 4.93994V2.91203C17.2175 2.40834 17.6298 2 18.1383 2C18.6468 2 19.059 2.40834 19.059 2.91203V5.1209C20.8919 5.37761 22.34 6.81367 22.5851 8.64548L22.6914 9.4395C23.1382 12.7791 23.0997 16.165 22.5767 19.4939C22.3177 21.1428 20.9653 22.4095 19.2886 22.5731L17.824 22.7163C13.9508 23.0946 10.0493 23.0946 6.176 22.7163L4.71141 22.5731C3.03476 22.4095 1.68231 21.1428 1.42327 19.4939C0.900337 16.165 0.86174 12.7791 1.30865 9.4395L1.41491 8.64548C1.66004 6.81365 3.10811 5.37757 4.94108 5.12089V2.91203C4.94108 2.40834 5.35331 2 5.86181 2ZM6.40831 6.80677C10.1271 6.44352 13.8729 6.44352 17.5917 6.80677L18.7032 6.91537C19.7674 7.0193 20.6191 7.83523 20.7595 8.88516L20.8659 9.67918C20.9029 9.95657 20.9366 10.2343 20.9667 10.5123H3.03339C3.06345 10.2343 3.09703 9.95658 3.13415 9.67919L3.2404 8.88516C3.38091 7.83523 4.23267 7.0193 5.29674 6.91537L6.40831 6.80677ZM2.88701 12.3364C2.76648 14.6324 2.88523 16.9369 3.24283 19.2133C3.37277 20.0405 4.05114 20.6757 4.89213 20.7579L6.35672 20.901C10.1098 21.2676 13.8903 21.2676 17.6433 20.901L19.1079 20.7579C19.9488 20.6757 20.6272 20.0405 20.7572 19.2133C21.1148 16.9369 21.2335 14.6324 21.113 12.3364H2.88701Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.86181 2C6.37031 2 6.78255 2.40834 6.78255 2.91203V4.93994C10.254 4.63371 13.7461 4.63371 17.2175 4.93994V2.91203C17.2175 2.40834 17.6298 2 18.1383 2C18.6468 2 19.059 2.40834 19.059 2.91203V5.1209C20.8919 5.37761 22.34 6.81367 22.5851 8.64548L22.6914 9.4395C23.1382 12.7791 23.0997 16.165 22.5767 19.4939C22.3177 21.1428 20.9653 22.4095 19.2886 22.5731L17.824 22.7163C13.9508 23.0946 10.0493 23.0946 6.176 22.7163L4.71141 22.5731C3.03476 22.4095 1.68231 21.1428 1.42327 19.4939C0.900337 16.165 0.86174 12.7791 1.30865 9.4395L1.41491 8.64548C1.66004 6.81365 3.10811 5.37757 4.94108 5.12089V2.91203C4.94108 2.40834 5.35331 2 5.86181 2ZM6.40831 6.80677C10.1271 6.44352 13.8729 6.44352 17.5917 6.80677L18.7032 6.91537C19.7674 7.0193 20.6191 7.83523 20.7595 8.88516L20.8659 9.67918C20.9029 9.95657 20.9366 10.2343 20.9667 10.5123H3.03339C3.06345 10.2343 3.09703 9.95658 3.13415 9.67919L3.2404 8.88516C3.38091 7.83523 4.23267 7.0193 5.29674 6.91537L6.40831 6.80677ZM2.88701 12.3364C2.76648 14.6324 2.88523 16.9369 3.24283 19.2133C3.37277 20.0405 4.05114 20.6757 4.89213 20.7579L6.35672 20.901C10.1098 21.2676 13.8903 21.2676 17.6433 20.901L19.1079 20.7579C19.9488 20.6757 20.6272 20.0405 20.7572 19.2133C21.1148 16.9369 21.2335 14.6324 21.113 12.3364H2.88701Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1"
                y1="12.5"
                x2="23"
                y2="12.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B554CD" />
                <stop offset="1" stopColor="#9036A6" />
              </linearGradient>
            </defs>
          </svg>
          6-7-8-iyun
        </div>
        <div>20:00</div>
      </div>

      <div className="main-content">
        <h1 className="title">
          Barno Askarovadan 2 kunlik <span className="highlight">BEPUL</span>{" "}
          dars
        </h1>

        <h2 className="course-title">
         8 hafta ichida
          <br />
          <span className="purple-text">Reading va Listeningni</span><br /> 2 ballga oshirishning samarali usullari
        </h2>

        <img src="/teacher-image.jpg" alt="Teacher" className="profile-image" />

        <button className="register-btn" onClick={()=> setIsModalOpen(true)}>DARSDA QATNASHISH</button>

        <div className="gift-box">
          <div className="gift-icon">
            <img
              src="https://vebinar.linguabarno.uz/img/gift.webp"
              width={55}
              alt="gift icon"
            />
          </div>
          <div className="gift-text">
            <b>Ro`yxatdan o`tganlar uchun maxsus sovg`a:</b>
            <p>Eng qiyin grammatika bo`yicha to`liq dars</p>
          </div>
        </div>

        <div className="bonus-section">
          <h3>BEPUL darsda:</h3>
          <div className="bonus-item">
            <img className="bullet" width={28} src="/check.svg" alt="" />

            <p>
              15 daqiqalik kunlik rejaga asoslangan speaking odatini
              shakllantirasz
            </p>
          </div>
          <div className="bonus-item">
            <img className="bullet" width={28} src="/check.svg" alt="" />
            <p>
              Eshitgan inglizcha so`zlarni tez tushunib, javob qaytara
              boshlaysiz
            </p>
          </div>
          <div className="bonus-item">
            <img className="bullet" width={28} src="/check.svg" alt="" />
            <p>
              <b>Ertaga boshlayman</b> degan ichki ovozdan xalos bo`lasiz
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
