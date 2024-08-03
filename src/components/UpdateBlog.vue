<template>
  <div>
    <h2>Update Blog</h2>

    <form @submit.prevent="updateForm">
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
      <button type="submit">Update blog</button>
      <p v-if="showSuccessMessage">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/supabaseClient";

const props = defineProps({
  blogId: {
    type: String,
    required: true,
  },
});

const title = ref("");
const content = ref("");
const author = ref("");
const showSuccessMessage = ref(false);
const successMessage = ref("");

const router = useRouter();

const updateForm = async () => {
  try {
    const { error } = await supabase
      .from("blogs")
      .update({
        title: title.value,
        content: content.value,
        author: author.value,
      })
      .eq("id", props.blogId);

    if (error) {
      throw error;
    }

    showSuccessMessage.value = true;
    successMessage.value = "Blog updated successfully!";

    router.push("/");
  } catch (error) {
    console.error("Error updating blog:", error.message);
  }
};

const loadBlogData = async () => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", props.blogId)
      .single();

    if (error) {
      throw error;
    }

    if (data) {
      title.value = data.title;
      content.value = data.content;
      author.value = data.author;
    }
  } catch (error) {
    console.error("Error fetching blog:", error.message);
  }
};

onMounted(async () => {
  await loadBlogData();
});
</script>

<style scoped>
div {
  max-width: 600px;
  margin: 0 auto;
  padding: .5rem;
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 4px;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

input[type="text"],
textarea {
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

button {
  padding: 0.75rem 1.5rem;
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
  background-color: #f0f0f0;
}

p {
  color: green;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
