<template>
<footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="https://www.commite.dev" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Commite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Commite</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://github.com/CommiteDev/Commite" class="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/" class="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="/privacy-policy" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://www.commite.dev" class="hover:underline">Commite</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a v-for="social in socials" :key="social.name" :href="social.href" target="_blank" rel="noopener noreferrer">
                    <Icon :name="social.icons" class="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
                </a>
            </div>
        </div>
    </div>
</footer>
</template>

<script setup>


const socials = [
    { name: 'Facebook', href: 'https://facebook.com/CommiteDev', icons: 'bxl:facebook-circle'},
    { name: 'Twitter', href: 'https://x.com/', icons: 'bxl:twitter'},
    { name: 'LinkedIn', href: 'https://linkedin.com/', icons: 'bxl:linkedin'},
    { name: 'Github', href: 'https://github.com/CommiteDev', icons: 'bxl:github'},
    { name: 'Discord', href: 'https://discord.com/', icons: 'bxl:discord'},
]

</script>

<style lang="scss" scoped>

</style>