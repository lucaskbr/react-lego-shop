import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          height="300"
          src="https://images-americanas.b2w.io/produtos/01/00/sku/36569/7/36569761_2SZ.jpg"
          alt="coringa"
        />
        <strong>Coringuinha mto legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          height="300"
          src="https://i2.wp.com/brickshow.com/wp-content/uploads/2019/01/71023-Vest-Friend-Rex.jpg?ssl=1"
          alt="coringa"
        />
        <strong>Coringuinha mto legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          height="300"
          src="https://cdn.shopify.com/s/files/1/1123/3426/products/LEGO-Minfigures-Series-19-Bathtub-Guy_753x.jpg?v=1565696840"
          alt="coringa"
        />
        <strong>Coringuinha mto legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          height="300"
          src="https://s3-ap-southeast-2.amazonaws.com/blockworld/71012_14_alt.jpg"
          alt="coringa"
        />
        <strong>Coringuinha mto legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          height="300"
          src="https://cdn.shopify.com/s/files/1/1123/3426/products/Hercules-Disney-Pixar-Series-2-LEGO-Minifigures-71024_753x.jpg?v=1554379135"
          alt="coringa"
        />
        <strong>Coringuinha mto legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          height="300"
          src="https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/307133/438003/legoseries19monkeyking__91711.1568142875.jpg?c=2&imbypass=on"
          alt="coringa"
        />
        <strong>Coringuinha mto legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          height="300"
          src="https://images.tcdn.com.br/img/img_prod/391201/lego_minifigures_the_lego_movie_2_apocalypse_benny_71023_3_1845_1_20190226145935.jpg"
          alt="coringa"
        />
        <strong>Coringuinha mto legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
