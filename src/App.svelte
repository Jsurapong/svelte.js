<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Surapong";
  let title = "";
  let description = "";
  let image = "";
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

<div>
  <label>
    Name
    <input bind:value={name} />
  </label>
  <label>
    Job Title
    <input bind:value={title} />
  </label>
  <label
    >Description
    <textarea rows="3" bind:value={description} />
  </label>
  <label>
    Image
    <input bind:value={image} />
  </label>
</div>
<ContactCard userName={name} jobTitle={title} {description} userImage={image} />

<style>
  h1 {
    color: purple;
  }
</style>
