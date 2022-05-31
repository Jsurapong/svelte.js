<script>
  import Product from "./Product.svelte";

  let products = [{ id: "p1", title: "A book", price: 99.99 }];

  function addToCart(event) {
    console.log(event);
  }

  function deleteProduct(event) {
    console.log(event.detail);
  }
</script>

{#each products as product}
  <Product
    title={product.title}
    price={product.price}
    on:add-to-cart={addToCart}
    on:delete={deleteProduct}
  />
{/each}
