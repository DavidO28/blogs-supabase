<template>
  <h1>New blog</h1>
  <form @submit.prevent="submitForm">
    <label>
      Title
      <input type="text" v-model="title" />
    </label>

    <label>
      Content
      <textarea v-model="content"></textarea>
    </label>

    <label>
      Author
      <input type="text" v-model="author" />
    </label>
    <button type="submit">Save blog</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>

<script setup lang="ts">
import { supabase } from "@/supabaseClient";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const title = ref("");
const content = ref("");
const author = ref("");
const errorMessage = ref<string | null>(null);

const submitForm = async () => {
  if (!title.value || !content.value || !author.value) {
    errorMessage.value =
      "Please fill out all the required fields to publish the blog";
    return;
  }

  try {
    const { error } = await supabase.from("blogs").insert({
      title: title.value,
      content: content.value,
      author: author.value,
    });

    if (error) {
      errorMessage.value = "An error occurred while saving the blog.";
    } else {
      title.value = "";
      content.value = "";
      author.value = "";
      errorMessage.value = null;
    }
    router.push("/");
  } catch (error) {
    errorMessage.value = "An unexpected error occurred.";
  }
};
</script>

<style lang="css" scoped>
form {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  background: #007bff;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #0056b3;
}

p {
  color: #d9534f;
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
