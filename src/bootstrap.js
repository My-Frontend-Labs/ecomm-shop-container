import { mount as cartMount } from 'cart/modules';
import { mount as productsMount } from 'products/modules';

const cartContainer = document.querySelector('[data-remote-id="cart"]');
const productsContainer = document.querySelector('[data-remote-id="products"]');

cartMount(cartContainer);
productsMount(productsContainer);

console.log('Container!');