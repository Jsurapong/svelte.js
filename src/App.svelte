<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Max";
  let title = "";
  let image = "";
  let description = "";
  let formState = "empty";

  let createdContacts = [];

  function addContact() {
    if (
      name.trim().length === 0 ||
      title.trim().length === 0 ||
      image.trim().length === 0 ||
      description.trim().length === 0
    ) {
      formState = "invalid";
      return;
    }

    createdContacts = [
      ...createdContacts,
      {
        id: Math.random(),
        name,
        jobTitle: title,
        imageUrl: image,
        desc: description,
      },
    ];

    formState = "done";
  }

  function delFirst() {
    createdContacts = createdContacts.slice(1);
  }
  function delLast() {
    createdContacts = createdContacts.slice(0, -1);
  }
</script>

<form id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
  <button on:click|preventDefault={addContact}>Add contact Card</button>
  <br />
  <br />
</form>

<button on:click={() => delFirst()}>Del first</button>
<button on:click={() => delLast()}>Del last</button>

{#if formState === "invalid"}
  <p>invalid input</p>
{:else}
  <p>Please enter some data</p>
{/if}

{#each createdContacts as contact, index (contact.id)}
  <h2># {index + 1}</h2>
  <ContactCard
    userName={contact.name}
    jobTitle={contact.jobTitle}
    description={contact.desc}
    userImage={contact.imageUrl}
  />
{:else}
  <p>Please start adding some contacts, we found none!</p>
{/each}

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>
