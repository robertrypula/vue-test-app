<script setup>
const slug = useRoute().params.slug

const { data: blogPost } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<template>
    <main v-if="blogPost">  
        <div>
            {{ blogPost.author }}
        </div>

        <div class="container">
            <section class="articles">
                <div class="column is-8 is-offset-2">
                    <section class="blog-post-card card article">
                        <div class="card-content">
                            <div class="content article-body is-size-5">
                                <ContentRenderer :value="blogPost" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </main>
</template>

<style>
.blog-post-card {
    padding-top: 2.5rem;
    padding-bottom: 3rem;
}

.blog-post-card .card-content {
    padding: 1rem;
}

.blog-post-card .title {
    margin-bottom: 1rem;
}
</style>
