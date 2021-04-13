import './App.css';

function App() {
  return (
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onclick="openMenu()">
                &#9776;
            </button>
            <a href="index.html">Afrima...</a>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
    </header>
    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onclick="closeMenu()">x</button>
        <ul>
            <li>
                <a href="index.html"><h3>Pants</h3></a>
            </li>
            <li>
                <a href="index.html"> Shirts </a>
            </li>
            <li>
                <a href="index.html"> Hats </a>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
            <ul className="products">
                <li>
                    <div className="product"> 
                        <img className="product-image" src="/images/img1.jpg" alt="product"/>
                        <div className="product-name">
                            <a href="product.html">AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</a>
                        </div>
                        <div className="product-brand">AMD</div>
                        <div className="product-price">$500</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product"> 
                        <img className="product-image" src="/images/img1.jpg" alt="product"/>
                        <div className="product-name">
                            <a href="product.html">AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</a>
                        </div>
                        <div className="product-brand">AMD</div>
                        <div className="product-price">$500</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product"> 
                        <img className="product-image" src="/images/img1.jpg" alt="product"/>
                        <div className="product-name">
                            <a href="product.html">AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</a>
                        </div>
                        <div className="product-brand">AMD</div>
                        <div className="product-price">$500</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product"> 
                        <img className="product-image" src="/images/img1.jpg" alt="product"/>
                        <div className="product-name">
                            <a href="product.html">AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</a>
                        </div>
                        <div className="product-brand">AMD</div>
                        <div className="product-price">$500</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product"> 
                        <img className="product-image" src="/images/img1.jpg" alt="product"/>
                        <div className="product-name">
                            <a href="product.html">AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</a>
                        </div>
                        <div className="product-brand">AMD</div>
                        <div className="product-price">$500</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product"> 
                        <img className="product-image" src="/images/img1.jpg" alt="product"/>
                        <div className="product-name">
                            <a href="product.html">AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</a>
                        </div>
                        <div className="product-brand">AMD</div>
                        <div className="product-price">$500</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product"> 
                        <img className="product-image" src="/images/img1.jpg" alt="product"/>
                        <div className="product-name">
                            <a href="product.html">AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</a>
                        </div>
                        <div className="product-brand">AMD</div>
                        <div className="product-price">$500</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div className="product"> 
                        <img className="product-image" src="/images/img1.jpg" alt="product"/>
                        <div className="product-name">
                            <a href="product.html">AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler</a>
                        </div>
                        <div className="product-brand">AMD</div>
                        <div className="product-price">$500</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>
            </ul>   
        </div>
    </main>
    <footer className="footer">
        All Rights Reserved.
    </footer>
</div> 
  );
}

export default App;
