<script>
  import Header from "./UI/Header.svelte";

  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meetup, we will have some experts that teach you how to code!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG/800px-Caffe_Nero_coffee_bar%2C_High_St%2C_Sutton%2C_Surrey%2C_Greater_London.JPG",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "code@test.com",
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swimming",
      description: "We will simply swim some rounds!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Olympic_swimming_pool_%28Tbilisi%29.jpg/800px-Olympic_swimming_pool_%28Tbilisi%29.jpg",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "swim@test.com",
    },
  ];

  let title = "";
  let subtitle = "";
  let description = "";
  let imageUrl = "";
  let address = "";
  let contactEmail = "";

  function addMeetup() {
    const newMeetup = {
      id: Math.random(),
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail,
    };

    meetups = [...meetups, newMeetup];
  }
</script>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <div class="form-control">
      <label for="title">Title</label>
      <input id="title" type="text" bind:value={title} />
    </div>
    <div class="form-control">
      <label for="subtitle">SubTitle</label>
      <input id="subtitle" type="text" bind:value={subtitle} />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows={3} bind:value={description} />
    </div>
    <div class="form-control">
      <label for="imageUrl">imageUrl</label>
      <input id="imageUrl" type="text" bind:value={imageUrl} />
    </div>
    <div class="form-control">
      <label for="address">Address</label>
      <input id="address" type="text" bind:value={address} />
    </div>
    <div class="form-control">
      <label for="contactEmail">Email</label>
      <input id="contactEmail" type="text" bind:value={contactEmail} />
    </div>
    <div class="form-control">
      <button type="submit">Save</button>
    </div>
  </form>
  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
