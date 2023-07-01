import React from 'react'

const App = () => {
  return (
    <div>
      <div id="f1">
        Pan India Free Shipping
       </div>


    <div id="f2">
        <ul>      
            <li><img src='/logo.png' alt="" height="60px" /></li>
            <li><u>Shop All</u>
                <table>
                    <tr>
                        <th>Shop By Category</th>
                        <th>Shop By Color</th>
                        <th>Shop By Stone</th>
                        <th>Shop By Style</th>
                        <th>Shop By Featured</th>
                        <th>Shop Trending</th>
                    </tr>
                    <tr>
                        <td>Earring</td>
                        <td>Gold</td>
                        <td>Zircon</td>
                        <td>Everyday Staples</td>
                        <td id="nw">New</td>
                        <td>Love is Blind</td>
                    </tr>
                    <tr>
                        <td>Rings</td>
                        <td>Rose Gold</td>
                        <td>Natural Diamonds</td>
                        <td>Office Minimals</td>
                        <td><b>Bestsellers</b></td>
                        <td>Love All Around</td>
                    </tr>
                    <tr>
                        <td>Necklaces & Pendants</td>
                        <td>Silver</td>
                        <td>Ethical Diamonds</td>
                        <td>Part Pieces</td>
                        <td>Kids Collection</td>
                        <td>Royals of GIVA</td>
                    </tr>
                    <tr>
                        <td>Bracelets</td>
                        <td>Oxidised Silver</td>
                        <td>Colored Stones</td>
                        <td>Wedding Wear</td>
                        <td>Festive Bling</td>
                        <td>Love in Paris</td>
                    </tr>
                    <tr>
                        <td>Jewellery Sets</td>
                        <td></td>
                        <td>Pearl</td>
                        <td>Mens</td>
                        <td>Anushka's Favourites</td>
                        <td>Get Wedding Ready</td>
                    </tr>
                    <tr>
                        <td>Ankets</td>
                        <td></td>
                        <td>None</td>
                        <td></td>
                        <td>The Shruti Hassan Collection</td>
                        <td></td>
                    </tr>
                </table>
            
            </li>
            <li id="vnst">Valentine Store</li>
            <li>Best of GIVA</li>
            <li>Pendants</li>
            <li>Earrings</li>
            <li>Lab-Grown Diamonds</li>
            <li>Just Arrived</li>
            <li>
                <select>
                    <option>More</option>
                    <option>Track Order</option>
                    <option>GIVA Gift Store</option>
                    <option>Store Locator</option>
                    <option>Media Mentions</option>
                    <option>Corporate Martnership</option>
                    <option>Jewellery care</option>
                    <option>GIVA Cares</option>
                    <option>Join us</option>
                    <option>GIVA Blog</option>
                    <option>Support & FAQ</option>
                </select>
            
            <img src="/icon.jpg" alt="" width="200px"/>
            </li>
        </ul>

    </div>


    <div id="f3">
        <ul>
            <li><img src="/buk.jpg" alt="" width="30px"/> Lifetime Planting Service</li>
            <li><img src="/6m.jpg" alt="" width="30px"/> 6 Month Warranty</li>
            <li><img src="/easyret.jpg" alt="" width="30px"/> 30 Days Easy Return</li>
            <li><img src="/freedel1.jpg" alt="" width="25px"/> Free Delivery</li>
        </ul>
    </div>

    <div id="f4">
        <img src="/best.jpg" alt=""/>
    </div>

    <div id="f5">
        <select name="prtype" >
            <option value="Swf">Product Type</option>
            <option value="Swf">Anklet</option>
            <option value="Swf">Bracelet</option>
            <option value="Swf">Chain</option>
            <option value="Swf">Mangalsutra</option>
            <option value="Swf">Nose Pin</option>
            <option value="Swf">Necklace</option>
            <option value="Swf">Pendant</option>
            <option value="Swf">Ring</option>
        </select>
        <select name="prc" >
            <option value="Swf">Price</option>
            <option value="Swf">899 - 2999</option>
            <option value="Swf">2999 - 9999</option>
            <option value="Swf">Above 9999</option>
        </select>
        <select name="stn" >
            <option value="Swf">Stone</option>
            <option value="Swf">Colored Stone</option>
            <option value="Swf">Diamond</option>
            <option value="Swf">None</option>
            <option value="Swf">Pearl</option>
            <option value="Swf">Zircon</option>
        </select>
        <select name="clr" >
            <option value="Swf">Color</option>
            <option value="Swf">Gold</option>
            <option value="Swf">Oxidised Silver</option>
            <option value="Swf">Rose Gold</option>
            <option value="Swf">Silver</option>
        </select>
        <select name="sty">
            <option value="Swf">Style</option>
            <option value="Swf">Everyday</option>
            <option value="Swf">Office</option>
            <option value="Swf">Party</option>
            <option value="Swf">Wedding</option>
        </select>
        <select name="subc" >
            <option value="Swf">Sub Category</option>
            <option value="Swf">Bands</option>
            <option value="Swf">Bridal</option>
            <option value="Swf">Chains</option>
            <option value="Swf">Cuffs</option>
            <option value="Swf">Couple</option>
            <option value="Swf">Solitaire</option>
            <option value="Swf">Thread</option>
            <option value="Swf">Hoops</option>
            <option value="Swf">Fashion</option>
            <option value="Swf">Open Rings</option>
        </select>
        <select name="srtby" id="srtby">
            <option value="Swf">SORT BY : FEATURED</option>
            <option value="Swf">Best Selling</option>
            <option value="Swf">Alphabetically, A-Z</option>
            <option value="Swf">Alphabetically, Z-A</option>
            <option value="Swf">Price, low to high</option>
            <option value="Swf">Price, high to low</option>
            <option value="Swf">Date, new to old</option>
            <option value="Swf">Date, old to new</option>
            <option value="Swf">% Sale off</option>
            <option value="Swf">Featured</option>
        </select>
    </div>
    <div id="ln"></div>
    <div id="f6">
        <img src="/j1.jpg" alt="" width="20%"/>
        <img src="/j3.jpg" alt="" width="20%"/>
        <img src="/j5.jpg" alt="" width="20%"/>
        <img src="/j7.jpg" alt="" width="20%"/>
        <ul>
            <li>Pendant</li>
            <li>Couple Rings</li>
            <li>Ankets</li>
            <li>Earrings</li>
        </ul>
        <img src="/j4.jpg" alt="" width="20%"/>
        <img src="/j8.jpg" alt="" width="20%"/>
        <img src="/j2.jpg" alt="" width="20%"/>
        <img src="/j6.jpg" alt="" width="20%"/>
        <ul>
            <li>Rings</li>
            <li>Rose Gold Earrings</li>
            <li>Necklace</li>
            <li>Nose Pin</li>
        </ul>
    </div>
    <div id="f7">
        <div id="lm">LOAD MORE</div>
    </div>

    <div id="f8" >
        <img src="/last.jpg" alt="" width="100%" />
    </div>
    </div>
  )
}

export default App
