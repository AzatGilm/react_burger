import React, { useState } from "react";
import './App.css';
import Menu from "./Menu/Menu";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value: 'Главная', href: '/main', icon: 'anchor'},
                {value: 'Услуги', href: '/service', icon: "api"},
                {value: 'Магазин', href: '/shop', icon: 'android'},
                {value: 'О нас', href: '/about', icon: 'android'}
  ]
  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)} >
           <span>

           </span>
        </div>        
      </nav>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis deleniti ab saepe? Deserunt, quaerat. Tempora doloribus necessitatibus totam quia minima soluta velit, deserunt enim aliquam ex! Inventore harum et tempore itaque quos velit, alias, earum incidunt magni, laborum cumque minus tenetur iusto at veniam consectetur eveniet vitae minima ipsam asperiores labore! Error doloribus explicabo quae consequatur nesciunt cupiditate et, non provident placeat tenetur repudiandae pariatur hic, maxime in officiis, illum nobis tempora laudantium! Magni adipisci praesentium exercitationem voluptate, assumenda numquam distinctio nulla enim architecto maiores at ipsum sunt ipsam amet. Possimus ab voluptatibus natus repudiandae! Quod provident illum accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis deleniti ab saepe? Deserunt, quaerat. Tempora doloribus necessitatibus totam quia minima soluta velit, deserunt enim aliquam ex! Inventore harum et tempore itaque quos velit, alias, earum incidunt magni, laborum cumque minus tenetur iusto at veniam consectetur eveniet vitae minima ipsam asperiores labore! Error doloribus explicabo quae consequatur nesciunt cupiditate et, non provident placeat tenetur repudiandae pariatur hic, maxime in officiis, illum nobis tempora laudantium! Magni adipisci praesentium exercitationem voluptate, assumenda numquam distinctio nulla enim architecto maiores at ipsum sunt ipsam amet. Possimus ab voluptatibus natus repudiandae! Quod provident illum accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis deleniti ab saepe? Deserunt, quaerat. Tempora doloribus necessitatibus totam quia minima soluta velit, deserunt enim aliquam ex! Inventore harum et tempore itaque quos velit, alias, earum incidunt magni, laborum cumque minus tenetur iusto at veniam consectetur eveniet vitae minima ipsam asperiores labore! Error doloribus explicabo quae consequatur nesciunt cupiditate et, non provident placeat tenetur repudiandae pariatur hic, maxime in officiis, illum nobis tempora laudantium! Magni adipisci praesentium exercitationem voluptate, assumenda numquam distinctio nulla enim architecto maiores at ipsum sunt ipsam amet. Possimus ab voluptatibus natus repudiandae! Quod provident illum accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis deleniti ab saepe? Deserunt, quaerat. Tempora doloribus necessitatibus totam quia minima soluta velit, deserunt enim aliquam ex! Inventore harum et tempore itaque quos velit, alias, earum incidunt magni, laborum cumque minus tenetur iusto at veniam consectetur eveniet vitae minima ipsam asperiores labore! Error doloribus explicabo quae consequatur nesciunt cupiditate et, non provident placeat tenetur repudiandae pariatur hic, maxime in officiis, illum nobis tempora laudantium! Magni adipisci praesentium exercitationem voluptate, assumenda numquam distinctio nulla enim architecto maiores at ipsum sunt ipsam amet. Possimus ab voluptatibus natus repudiandae! Quod provident illum accusantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis deleniti ab saepe? Deserunt, quaerat. Tempora doloribus necessitatibus totam quia minima soluta velit, deserunt enim aliquam ex! Inventore harum et tempore itaque quos velit, alias, earum incidunt magni, laborum cumque minus tenetur iusto at veniam consectetur eveniet vitae minima ipsam asperiores labore! Error doloribus explicabo quae consequatur nesciunt cupiditate et, non provident placeat tenetur repudiandae pariatur hic, maxime in officiis, illum nobis tempora laudantium! Magni adipisci praesentium exercitationem voluptate, assumenda numquam distinctio nulla enim architecto maiores at ipsum sunt ipsam amet. Possimus ab voluptatibus natus repudiandae! Quod provident illum accusantium.</p>
        
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={'Бургер меню'} items={items} />
    </div>
  );
};

export default App;