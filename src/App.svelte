<script>
  let name = "Surapong";
  let age = 30;

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Surapong Kawkangploo";
  }

  $: uppercaseName = name.toUpperCase();
  $: console.log("$:", name);

  console.log("with out $:", name);
</script>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<button on:click={changeName}>ChangeName</button>

<style>
  h1 {
    color: purple;
  }
</style>
