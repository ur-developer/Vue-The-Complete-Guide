const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '010 1234 5678',
                    email: 'manuel@localhost.com',
                    detailsAreVisible: false
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '010 1234 5678',
                    email: 'julie@localhost.com',
                    detailsAreVisible: false
                },
            ],
        };
    },

    methods: {
        toggleDetails(friend) {
            friend.detailsAreVisible = !friend.detailsAreVisible;
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails(friend)">
                {{ friend.detailsAreVisible ? 'Hide' : 'Show' }} Details
            </button>
        <ul v-if="friend.detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }} </li>
            <li><strong>Email:</strong> {{ friend.email }} </li>
        </ul>
    </li>
    `,

    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '010 1234 5678',
                email: 'manuel@localhost.com',
            },
        };   
    },

    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
});

app.mount('#app');