<template>
    <div>
        
        <div class="pt-5">
            <div class="flex items-center justify-between mb-5">
                <h5 class="font-semibold text-lg dark:text-white-light">Profile</h5>
            </div>
            
                        <div>
                            <form class="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-[#0e1726]">
                                <h6 class="text-lg font-bold mb-5"></h6>
                                <div class="flex flex-col sm:flex-row">
                                    <div class="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5 items-center">
                                        <img src="/assets/images/user-profile.jpeg" alt="" class="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                                    </div>
                                    <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label for="name">Nom & Prénom</label>
                                            <input id="name" type="text" placeholder="Jonh Doe" class="form-input" />
                                        </div>

                                        <div>
                                            <label for="name">Nom d'utilisateur</label>
                                            <input id="name" type="text" placeholder="JDoe" class="form-input" />
                                        </div>
                                        <div>
                                            <label for="profession">Rôle</label>
                                            <input id="profession" type="text" placeholder="Super admin" class="form-input" />
                                        </div>
                                      
                                        <div>
                                            <label for="phone">Téléphone</label>
                                            <input id="phone" type="text" placeholder="+229 97676542" class="form-input" />
                                        </div>
                                        <div>
                                            <label for="email">Email</label>
                                            <input id="email" type="email" placeholder="johndoe@gmail.com" class="form-input" />
                                        </div>
                                        
                                       
                                        <div class="sm:col-span-2 mt-3">
                                            <button type="button" class="btn btn-warning text-black">Enregister</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                          
                        </div>
              
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { useAppStore } from '@/stores/index';
    import { useMeta } from '@/composables/use-meta';

    import IconHome from '@/components/icon/icon-home.vue';
    import IconDollarSignCircle from '@/components/icon/icon-dollar-sign-circle.vue';
    import IconUser from '@/components/icon/icon-user.vue';
    import IconPhone from '@/components/icon/icon-phone.vue';
    import IconLinkedin from '@/components/icon/icon-linkedin.vue';
    import IconTwitter from '@/components/icon/icon-twitter.vue';
    import IconFacebook from '@/components/icon/icon-facebook.vue';
    import IconGithub from '@/components/icon/icon-github.vue';

    useMeta({ title: 'Account Setting' });
    const store = useAppStore();
</script>
