<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[200px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
            <div class="bg-[#84149A] text-white dark:bg-[#0e1726] h-full">
                <div class="flex justify-between items-center px-4 py-8">
                    <router-link to="/" class="main-logo flex items-center shrink-0">
                        <!-- <img class="w-8 ml-[5px] flex-none" src="../../../../public/assets/images/mtnLogo.png" alt="" /> -->
                        <span class="text-xl ltr:ml-1.5 rtl:mr-1.5 font-bold align-middle lg:inline dark:text-white-light">Doublage</span>
                    </router-link>
                    <a
                        href="javascript:;"
                        class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-white"
                        @click="store.toggleSidebar()"
                    >
                    <icon-menu class="m-auto " />
                    </a>
                </div>
                <perfect-scrollbar
                    :options="{
                        swipeEasing: true,
                        wheelPropagation: false,
                    }"
                    class="h-[calc(100vh-80px)] relative"
                >
                    <ul class="relative font-semibold space-y-0.5 p-4 py-0 text-white">
                    
                        <li class="nav-item text-white" >
                            <router-link to="/video" class="group" @click="toggleMobileMenu">
                                <div class="flex items-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>

                                    <span class="ltr:pl-3 rtl:pr-3 text-white dark:text-[#506690] dark:group-hover:text-white-dark">
                                        Accueil
                                    </span>
                                </div>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/" class="group" @click="toggleMobileMenu">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>

                                    <span class="ltr:pl-3 rtl:pr-3 text-white dark:text-[#506690] dark:group-hover:text-white-dark">
                                        Projets
                                    </span>
                                </div>
                            </router-link>
                        </li>

                        <li class="nav-item" >
                            <router-link to="/video/settings" class="group" @click="toggleMobileMenu">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>

                                    <span class="ltr:pl-3 rtl:pr-3 text-white dark:text-[#506690] dark:group-hover:text-white-dark">
                                        Paramètres
                                    </span>
                                </div>
                            </router-link>
                        </li>

                    </ul>
                </perfect-scrollbar>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';

    import { useAppStore } from '@/stores/index';
    import VueCollapsible from 'vue-height-collapsible/vue3';

    import IconMenu from '@/components/icon/icon-menu.vue';
    import IconCaretDown from '@/components/icon/icon-caret-down.vue';

    const store = useAppStore();
    const activeDropdown: any = ref('');
    const subActive: any = ref('');

    onMounted(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 1024) {
            store.toggleSidebar();
        }
    };
</script>
