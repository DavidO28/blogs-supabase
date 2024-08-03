<template>
  <div>
    <h2>Title: {{ blog.title }}</h2>
    <p>Content: {{ blog.content }}</p>
    <p>Author: {{ blog.author }}</p>
    <div class="actions">
      <router-link :to="'/update/' + blog.id" class="action-link">
        Update
      </router-link>
      <button @click="deleteBlog" class="action-button">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { supabase } from "@/supabaseClient";

const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["blogDeleted"]);

const deleteBlog = async () => {
  try {
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", props.blog.id);

    if (error) {
      throw error;
    }

    emit("blogDeleted");
  } catch (error) {
    console.error("Error deleting blog:", error.message);
  }
};
</script>

<style scoped>
div {
  max-width: 600px;
  margin: 0.5rem auto;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 6px;
  background: #fff;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

p {
  font-size: 1.25rem;
  margin: 0.75rem 0;
  color: #555;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.action-link,
.action-button {
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.action-link {
  background: linear-gradient(45deg, #007bff, #0056b3);
  color: white;
  border: 1px solid transparent;
}

.action-link:hover {
  background: linear-gradient(45deg, #0056b3, #007bff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.action-button {
  background: #ffffff;
  color: #333;
  border: 1px solid #333;
}

.action-button:hover {
  background: #f0f0f0;
  color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
</style>
