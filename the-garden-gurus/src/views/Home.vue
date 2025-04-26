<template>
    <section class="home">
        <div class="container home-container">
            <div class="home-content">
                <div class="home-form">
                    <div class="form-group">
                        <form-inp 
                            type="text" 
                            placeholder="Name" 
                            v-model:value="form.name"
                            :className="!formError.name ? 'error' : ''"
                        />
                        <form-inp 
                            type="phone" 
                            placeholder="Phone" 
                            v-model:value="form.phone"
                            :className="!formError.phone ? 'error' : ''"
                        />
                        <form-inp 
                            type="email" 
                            placeholder="Email address"
                            v-model:value="form.email"
                            :className="!formError.email ? 'error' : ''"
                            />
                        <form-inp 
                            type="textarea" 
                            placeholder="Message" 
                            v-model:value="form.msg"
                            :className="!formError.msg ? 'error' : ''"
                        />
                    </div>
                    <main-btn @click="Submit()">Send Message</main-btn>
                </div>
                <div class="home-text">
                    <h1>
                        Garden <br>
                        Design and <br>
                        Maintenance
                    </h1>
                    <div class="line"></div>
                    <p>CONTACT US TODAY AND GET AN OFFER</p>
                </div>
            </div>
        </div>
    </section>
    <thanks-modal v-if="modalOpen" @modalClose="() => {modalOpen = false}">Спасибо за опрос</thanks-modal>
</template>

<script>
import ThanksModal from '@/components/ThanksModal.vue';

export default {
    name: "Home",
    components: {
        ThanksModal,
    },
    data () {
        return {
            modalOpen: false,
            form: {
                name: '',
                phone: '',
                email: '',
                msg: '',
            },
            formError: {
                name: true,
                phone: true,
                email: true,
                msg: true,
            }
        }
    },
    methods: {
        checkField(field) {
            if (this.form[field] != "") {
                this.formError[field] = true;
            } else {
                this.formError[field] = false;
            }
        },
        Submit() {
            this.checkField('name');
            this.checkField('phone');
            this.checkField('email');
            this.checkField('msg');
            if (this.formError.name && this.formError.phone && this.formError.email && this.formError.msg) {
                this.modalOpen = true;
                this.form.name = '';
                this.form.phone = '';
                this.form.email = '';
                this.form.msg = '';
            }
        }
    }
}
</script>

<style>

</style>