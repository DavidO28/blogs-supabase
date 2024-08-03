<template>
  <div>
    <h1>Blogs List</h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <BlogCard :blog="blog" @blogDeleted="handleBlogDeleted" />
      </li>
    </ul>
    <p v-if="errorMessage">{{ errorMessage }}</p>

    <button v-if="showScrollToTop" class="scroll-to-top" @click="scrollToTop">
      ↑
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import BlogCard from "@/components/BlogCard.vue";
import { supabase } from "@/supabaseClient";

const errorMessage = ref<string | null>(null);
const blogs = ref<any[]>([]);
const orderBy = ref("created_at");
const showScrollToTop = ref(false);

const loadBlogs = async () => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order(orderBy.value, { ascending: false });
    if (error) {
      throw error;
    }

    if (data) {
      blogs.value = data;
    }
  } catch (error) {
    errorMessage.value = "Error fetching blogs";
  }
};

onMounted(async () => {
  await loadBlogs();
  window.addEventListener("scroll", handleScroll);
});

const handleBlogDeleted = () => {
  loadBlogs();
};

const handleScroll = () => {
  if (window.scrollY > 500) {
    showScrollToTop.value = true;
  } else {
    showScrollToTop.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
div {
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid gray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 1rem;
}

p {
  color: #d9534f;
  text-align: center;
  font-size: 1rem;
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.3s;
}

.scroll-to-top:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}
</style>
