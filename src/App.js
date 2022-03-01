import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img
            width={60}
            height={60}
            alt="logo"
            src="https://thumbs.dreamstime.com/b/%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%BE%D0%B1%D1%83%D0%B2%D0%B8-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-192913029.jpg"
          />
          <div className="headerInfo">
            <h3>Sneakers</h3>
            <p>Магазин кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li className="liMargin">
            <img
              width={18}
              height={18}
              alt="avatar"
              src="/img/shopping-cart.png"
            />{" "}
            <span>1205p</span>
          </li>
          <li>
            <img width={18} height={18} alt="cart" src="/img/avatar.png" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="card">
          
        </div>
      </div>
    </div>
  );
}

export default App;
