<template>
  <div>
    <input type="text" v-model="userName" placeholder="your name" /><br />
    <input type="email" v-model="email" placeholder="email" /><br />
    <button @click="postData">送信</button>
  </div>
  <ul>
    <li v-for="user in userData.users">
      <span>name: {{ user.name }}</span>
      <span> email: {{ user.email }}</span>
    </li>
  </ul>
</template>

<script setup>
const email = ref();
const userName = ref();
const userData = ref();
const { data, error } = await useFetch("/api/users");
userData.value = data.value;
const postData = async () => {
  const { data, error } = await useFetch("/api/users", {
    method: "POST",
    body: { email: email.value, name: userName.value },
  });
  email.value = "";
  userName.value = "";
  userData.value = data.value;
};
</script>
