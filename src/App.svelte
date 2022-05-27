<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Surapong";
  let age = 30;

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Surapong Kawkangploo";
  }

  function nameInput(event) {
    name = event.target.value;
  }

  $: uppercaseName = name.toUpperCase();
  $: console.log("$:", name);
  console.log("with out $:", name); // run on load first;

  $: if (name === "Surapong Kawkangploo") {
    // dependency {name}
    age = 29;
  }
</script>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<button on:click={changeName}>ChangeName</button>
<!-- <input on:input={nameInput} value={name} /> -->
<input bind:value={name} />

<ContactCard />

<style>
  h1 {
    color: purple;
  }
</style>
